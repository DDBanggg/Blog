import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { sortInterviewEntries } from '../utils/interview';

const rawMarkdownFiles = import.meta.glob('../content/interview/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>;

const toSearchText = (markdown: string) =>
  markdown
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/[#>*_`[\]()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const GET: APIRoute = async () => {
  const entries = sortInterviewEntries(await getCollection('interview'));
  const searchIndex = entries.map((entry) => {
    const rawMarkdown = Object.entries(rawMarkdownFiles).find(([path]) =>
      path.endsWith(`/${entry.id}.md`),
    )?.[1];

    return {
      id: entry.id,
      searchText: [
        entry.data.title,
        entry.data.description,
        entry.data.category,
        ...entry.data.tags,
        rawMarkdown ? toSearchText(rawMarkdown) : '',
      ].join(' '),
    };
  });

  return new Response(JSON.stringify(searchIndex), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
