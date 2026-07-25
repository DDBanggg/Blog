import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortInterviewEntries } from '../utils/interview';

export async function GET(context: { site: URL }) {
  const entries = sortInterviewEntries(await getCollection('interview'));

  return rss({
    title: 'Data Engineering Interview Blog',
    description: '48 câu hỏi phỏng vấn Data Engineer bằng tiếng Việt.',
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      link: `/interview/${entry.id}/`,
      pubDate: entry.data.publishedAt,
      ...(entry.data.updatedAt
        ? { customData: `<updated>${entry.data.updatedAt.toISOString()}</updated>` }
        : {}),
    })),
    customData: '<language>vi-VN</language>',
  });
}
