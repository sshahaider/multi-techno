import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { constructMetadata } from '@/lib/utils/construct-metadata';
import { cn } from '@/lib/utils';
import { fontHeading, fontMono, fontSans } from '@/lib/fonts';
import { Footer } from '@/components/footer';

export const metadata: Metadata = constructMetadata({});

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
				<Header />
				<main className="relative flex min-h-svh flex-col">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
