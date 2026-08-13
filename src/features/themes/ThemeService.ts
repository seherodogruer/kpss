import { LocalStorageAdapter } from '@core/storage/LocalStorageAdapter';
import { EventBus } from '@core/events/EventBus';

export type ThemeName = 'sari' | 'beyaz' | 'krem' | 'gece' | 'mavi' | 'yesil';

export interface ThemeInfo {
  readonly id: ThemeName;
  readonly label: string;
  readonly swatch: string; // hex color for the swatch preview circle
}

const THEME_KEY = 'kpss-defterim-theme';

const THEMES: readonly ThemeInfo[] = [
  { id: 'sari', label: 'Sarı Defter', swatch: '#fdf6d3' },
  { id: 'beyaz', label: 'Beyaz Defter', swatch: '#ffffff' },
  { id: 'krem', label: 'Krem Defter', swatch: '#f7ecd8' },
  { id: 'gece', label: 'Gece Modu', swatch: '#1b2130' },
  { id: 'mavi', label: 'Mavi Defter', swatch: '#eaf3fb' },
  { id: 'yesil', label: 'Yeşil Defter', swatch: '#eef6e9' },
] as const;

export class ThemeService {
  private currentTheme: ThemeName = 'sari';

  constructor(
    private readonly storage: LocalStorageAdapter,
    private readonly eventBus: EventBus,
  ) {}

  /** Load saved theme from storage and apply it */
  init(): void {
    const saved = this.storage.getString(THEME_KEY) as ThemeName | null;
    this.currentTheme = saved && THEMES.some(t => t.id === saved) ? saved : 'sari';
    this.applyTheme(this.currentTheme);
  }

  getCurrentTheme(): ThemeName {
    return this.currentTheme;
  }

  getAvailableThemes(): readonly ThemeInfo[] {
    return THEMES;
  }

  setTheme(name: ThemeName): void {
    if (this.currentTheme === name) return;
    this.currentTheme = name;
    this.applyTheme(name);
    this.storage.setString(THEME_KEY, name);
    this.eventBus.emit('theme:changed', { theme: name });
  }

  private applyTheme(name: ThemeName): void {
    if (name === 'sari') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', name);
    }
  }
}
