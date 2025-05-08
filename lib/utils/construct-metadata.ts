import { Metadata } from 'next';
import { APP_DESCRIPTION, APP_HOME_URL, APP_NAME, APP_TAGLINE } from '../constants';
;

export function constructMetadata({
	title,
	fullTitle,
	description = APP_DESCRIPTION,
	image = `${APP_HOME_URL}/apple-icon.png`,
	video,
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
		title: fullTitle || (title ? `${title} | ${APP_NAME}` : `${APP_NAME} - ${APP_TAGLINE}`),
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
