import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { constructMetadata } from '@/lib/utils/construct-metadata';
import { cn } from '@/lib/utils';
import { fontHeading, fontMono, fontSans } from '@/lib/fonts';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = constructMetadata({
	url: '/',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'bg-background text-foreground min-h-svh overscroll-none font-sans antialiased',
					fontHeading.variable,
					fontSans.variable,
					fontMono.variable,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Header />
					<main className="relative flex min-h-svh flex-col">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
