/**
 * DOM utility helpers.
 * 
 * Provides type-safe wrappers for common DOM operations.
 */

/** Type-safe getElementById with null check */
export function getElement<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

/** Type-safe getElementById that throws if element not found */
export function getRequiredElement<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id) as T | null;
  if (!el) {
    throw new Error(`Required element #${id} not found in DOM`);
  }
  return el;
}

/** Creates an element with optional class name and attributes */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options?: {
    className?: string;
    id?: string;
    textContent?: string;
    attributes?: Record<string, string>;
    children?: Node[];
  },
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  if (options?.className) el.className = options.className;
  if (options?.id) el.id = options.id;
  if (options?.textContent) el.textContent = options.textContent;
  if (options?.attributes) {
    for (const [key, value] of Object.entries(options.attributes)) {
      el.setAttribute(key, value);
    }
  }
  if (options?.children) {
    for (const child of options.children) {
      el.appendChild(child);
    }
  }
  return el;
}

/** Escapes special regex characters in a string */
export function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Checks if viewport is mobile width */
export function isMobileLayout(): boolean {
  return window.matchMedia('(max-width: 800px)').matches;
}
