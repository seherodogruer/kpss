import { describe, it, expect, beforeEach } from 'vitest';
import {
  getElement,
  getRequiredElement,
  createElement,
  escapeRegex,
} from '@core/utils/dom';

describe('dom utilities', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="test-el">Hello</div>';
  });

  it('getElement should return element by id', () => {
    const el = getElement('test-el');
    expect(el).toBeTruthy();
    expect(el?.textContent).toBe('Hello');
  });

  it('getElement should return null for missing id', () => {
    expect(getElement('nonexistent')).toBeNull();
  });

  it('getRequiredElement should return element', () => {
    const el = getRequiredElement('test-el');
    expect(el.textContent).toBe('Hello');
  });

  it('getRequiredElement should throw for missing id', () => {
    expect(() => getRequiredElement('missing')).toThrow('Required element #missing not found');
  });

  it('createElement should create element with options', () => {
    const el = createElement('div', {
      className: 'my-class',
      id: 'my-id',
      textContent: 'content',
      attributes: { 'data-value': '42' },
    });
    expect(el.tagName).toBe('DIV');
    expect(el.className).toBe('my-class');
    expect(el.id).toBe('my-id');
    expect(el.textContent).toBe('content');
    expect(el.getAttribute('data-value')).toBe('42');
  });

  it('createElement should support children', () => {
    const child = document.createElement('span');
    child.textContent = 'child';
    const parent = createElement('div', { children: [child] });
    expect(parent.children).toHaveLength(1);
    expect(parent.children[0]?.textContent).toBe('child');
  });

  it('escapeRegex should escape special characters', () => {
    expect(escapeRegex('hello.world')).toBe('hello\\.world');
    expect(escapeRegex('test (1+2)')).toBe('test \\(1\\+2\\)');
  });
});
