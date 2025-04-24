import { Outfit } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

export const fontSans = GeistSans;

export const fontMono = GeistMono;

export const fontHeading = Outfit({
	subsets: ['latin'],
	variable: '--font-heading',
});
