import { ALL_TOPICS } from '@content/ContentRegistry';

export interface SearchIndexEntry {
  readonly topicId: number;
  readonly category: string;
  readonly title: string;
  readonly text: string; // stripped HTML
  readonly lowerTitle: string;
  readonly lowerText: string;
}

export interface SearchResult {
  readonly topicId: number;
  readonly category: string;
  readonly title: string;
  readonly matchCount: number;
  readonly snippet: string;
}

export class SearchService {
  private index: SearchIndexEntry[] = [];

  /** Build search index from all built topics. Call once at app init. */
  buildIndex(): void {
    this.index = ALL_TOPICS
      .filter((t) => t.built && t.html.length > 0)
      .map((t) => {
        const text = this.stripHtml(t.html);
        return {
          topicId: t.id,
          category: t.category,
          title: t.title,
          text,
          lowerTitle: t.title.toLocaleLowerCase('tr'),
          lowerText: text.toLocaleLowerCase('tr'),
        };
      });
  }

  /** Search for query (already lowercased) across all indexed topics */
  search(queryLower: string): SearchResult[] {
    if (queryLower.length < 3) return [];

    const results: SearchResult[] = [];

    for (const entry of this.index) {
      const titleMatch = entry.lowerTitle.includes(queryLower);
      let textMatchCount = 0;
      let snippet = '';

      // Count occurrences in text
      let pos = 0;
      while (true) {
        const idx = entry.lowerText.indexOf(queryLower, pos);
        if (idx === -1) break;
        textMatchCount++;
        if (textMatchCount === 1) {
          snippet = this.extractSnippet(entry.text, idx, queryLower.length);
        }
        pos = idx + 1;
      }

      if (titleMatch || textMatchCount > 0) {
        results.push({
          topicId: entry.topicId,
          category: entry.category,
          title: entry.title,
          matchCount: (titleMatch ? 1 : 0) + textMatchCount,
          snippet,
        });
      }
    }

    // Sort by match count descending
    results.sort((a, b) => b.matchCount - a.matchCount);
    return results;
  }

  private stripHtml(html: string): string {
    // Remove HTML tags, decode basic entities
    return html
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private extractSnippet(text: string, matchIndex: number, matchLen: number): string {
    const before = 40;
    const after = 60;
    const start = Math.max(0, matchIndex - before);
    const end = Math.min(text.length, matchIndex + matchLen + after);
    let snippet = text.substring(start, end);
    if (start > 0) snippet = '…' + snippet;
    if (end < text.length) snippet += '…';
    return snippet;
  }
}
