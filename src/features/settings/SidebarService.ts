import { LocalStorageAdapter } from '@core/storage/LocalStorageAdapter';

const SIDEBAR_STATE_KEY = 'kpss-defterim-sidebar-collapsed';

export class SidebarService {
  private collapsed = false;

  constructor(private readonly storage: LocalStorageAdapter) {}

  init(): void {
    this.collapsed = this.storage.getString(SIDEBAR_STATE_KEY) === '1';
  }

  isCollapsed(): boolean {
    return this.collapsed;
  }

  setCollapsed(collapsed: boolean): void {
    this.collapsed = collapsed;
    this.storage.setString(SIDEBAR_STATE_KEY, collapsed ? '1' : '0');
  }

  toggle(): boolean {
    this.setCollapsed(!this.collapsed);
    return this.collapsed;
  }
}
