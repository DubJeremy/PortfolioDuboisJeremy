import * as fs from 'fs';
import { ServerResponse } from 'http';

const Sitemap = () => {
	return null;
};

export const getServerSideProps = async ({ res }: { res: ServerResponse }) => {
	const staticPaths = fs
		.readdirSync('pages')
		.filter((staticPage) => {
			return !['api', '_app', '_document.js', '404', 'index'].includes(
				staticPage
			);
		})
		.map((staticPagePath) => {
			return `${process.env.BASE_URL}/${staticPagePath}`;
		});

	const allPaths = [...staticPaths];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${allPaths
		.map((url) => {
			return `
			<url>
			<loc>${url}</loc>
			<lastmod>${new Date().toISOString()}</lastmod>
			<changefreq>monthly</changefreq>
			<priority>1.0</priority>
			</url>
		`;
		})
		.join('')}
	</urlset>
`;

	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();
	return {
		props: {},
	};
};

export default Sitemap;
