/**
 * Topic domain model.
 *
 * Represents a single study topic in the KPSS curriculum.
 */

/** Category identifier */
export type CategoryId = 'turkce' | 'matematik' | 'tarih' | 'cografya' | 'vatandaslik' | 'guncel';

/** Category display info */
export interface CategoryInfo {
  readonly id: CategoryId;
  readonly name: string;
  readonly icon: string;
  readonly topicCount: number;
}

/** A single topic definition (static content data) */
export interface TopicDefinition {
  readonly id: number;
  readonly category: string;
  readonly categoryId: CategoryId;
  readonly title: string;
  readonly built: boolean;
  readonly html: string;
}
