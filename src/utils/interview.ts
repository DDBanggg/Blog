import type { CollectionEntry } from 'astro:content';

export type InterviewEntry = CollectionEntry<'interview'>;

export const sortInterviewEntries = (entries: InterviewEntry[]) =>
  [...entries].sort((first, second) => first.data.questionNumber - second.data.questionNumber);

export const formatInterviewDate = (date: Date) =>
  new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
