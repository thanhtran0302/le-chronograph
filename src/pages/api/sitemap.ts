import { NextApiRequest, NextApiResponse } from 'next';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import { BLOG_PAGE_MAX } from '../../constants/common';
import { PrimsicTypes } from '../../interfaces/prismic';
import { getRandomDate } from '../../utils/date';
import { PrismicClient } from '../../utils/prismic';
import Prismic from 'prismic-javascript';

enum URLFrequence {
  ALWAYS = 'always',
  HOURLY = 'hourly',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
  NEVER = 'never'
}

const generateXMLURL = (
  url: string,
  date: string,
  frequence: URLFrequence,
  priority: number = 0.5
) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${frequence}</changefreq>
    <priority>${priority}</priority>
  </url>
`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prismicQuery: string[] = [
    Prismic.Predicates.at('document.type', PrimsicTypes.BLOG_POSTS)
  ];
  const {
    results,
    total_pages,
    total_results_size
  }: ApiSearchResponse = await PrismicClient(req).query(prismicQuery, {
    fetchLinks: ['authors.name', 'categories.name'],
    orderings: [`[my.${PrimsicTypes.BLOG_POSTS}.creation_date desc]`],
    pageSize: BLOG_PAGE_MAX
  });

  const lastWeek: number = new Date().setDate(new Date().getDate() - 7);
  const yesterday: number = new Date().setDate(new Date().getDate() - 1);
  const today: number = new Date().getTime();
  const urls: string[] = [
    generateXMLURL(
      'https://www.lechronograph.com',
      getRandomDate(lastWeek, today),
      URLFrequence.MONTHLY,
      1
    ),
    generateXMLURL(
      'https://wwww.lechronograph.com/bog',
      getRandomDate(yesterday, today),
      URLFrequence.DAILY,
      0.5
    ),
    generateXMLURL(
      'https://www.lechronograph.com/mentions-legales',
      '2021-01-01',
      URLFrequence.YEARLY,
      0.2
    ),
    generateXMLURL(
      'https://www.lechronograph.com/lechronograph-inside',
      '2021-02-01',
      URLFrequence.MONTHLY,
      0.4
    ),
    generateXMLURL(
      'https://www.lechronograph.com/investissement',
      getRandomDate(lastWeek, today),
      URLFrequence.WEEKLY,
      0.4
    )
  ];

  for (const result of results) {
    urls.push(
      generateXMLURL(
        `https://www.lechronograph.com/blog/articles/${result.data.slug}`,
        getRandomDate(lastWeek, today),
        URLFrequence.WEEKLY,
        0.5
      )
    );
  }

  const xmlTemplate: string = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map((url: string) => url)}
    </urlset>
  `;

  res.setHeader('Content-Type', 'application/xml');
  res.send(xmlTemplate);
};
