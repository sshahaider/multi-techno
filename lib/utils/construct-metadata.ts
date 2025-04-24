import { Metadata } from 'next';
import { APP_DESCRIPTION, APP_HOME_URL, APP_NAME, APP_STORAGE_URL, APP_SHORT_DESCRIPTION } from '../constants';

const app_icons = [
	{
		rel: 'apple-touch-icon',
		sizes: '32x32',
		url: `${APP_STORAGE_URL}/favicons/apple-touch-icon.png`,
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		url: `${APP_STORAGE_URL}/favicons/favicon-32x32.png`,
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		url: `${APP_STORAGE_URL}/favicons/favicon-16x16.png`,
	},
];

export function constructMetadata({
	title,
	fullTitle,
	description = APP_DESCRIPTION,
	image = `${APP_STORAGE_URL}/thumbnail.jpg`,
	video,
	icons = app_icons,
	url,
	canonicalUrl,
	noIndex = false,
	manifest,
}: {
	title?: string;
	fullTitle?: string;
	description?: string;
	image?: string | null;
	video?: string | null;
	icons?: Metadata['icons'];
	url?: string;
	canonicalUrl?: string;
	noIndex?: boolean;
	manifest?: string | URL | null;
} = {}): Metadata {
	return {
		title: fullTitle || (title ? `${title} | ${APP_NAME}` : `${APP_NAME} - ${APP_SHORT_DESCRIPTION}`),
		description,
		openGraph: {
			title,
			description,
			...(image && {
				images: image,
			}),
			url,
			...(video && {
				videos: video,
			}),
		},
		// twitter: {
		//   title,
		//   description,
		//   ...(image && {
		//     card: "summary_large_image",
		//     images: [image],
		//   }),
		//   ...(video && {
		//     player: video,
		//   }),
		//   creator: "@dubdotco",
		// },
		icons,
		metadataBase: new URL(APP_HOME_URL),
		...((url || canonicalUrl) && {
			alternates: {
				canonical: url || canonicalUrl,
			},
		}),
		...(noIndex && {
			robots: {
				index: false,
				follow: false,
			},
		}),
		...(manifest && {
			manifest,
		}),
	};
}
