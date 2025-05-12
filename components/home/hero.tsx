'use client';
import Link from 'next/link';
import { AnimatedContainer } from '../sheard/animated-container';
import { ElegantShapes } from '../ui/elegant-shapes';
import { MorphingText } from '../ui/morphing-text';
import { RainbowButton } from '../ui/button';

export default function HeroSection() {
	const texts = ['Best', 'Top', 'Smartest', 'Fastest', 'Most Reliable', 'All-in-One'];

	return (
		<section className="bg-background relative -mt-14 flex min-h-screen w-full items-center justify-center overflow-hidden">
			<ElegantShapes />
			<AnimatedContainer className="relative z-10 container flex flex-col items-center justify-center space-y-4 pt-16 text-center">
				<h1 className="font-heading w-full text-5xl font-extrabold md:text-7xl xl:text-[80px]">
					<span className="dark:bg-gradient-to-r dark:from-emerald-400 dark:via-emerald-100 dark:to-foreground dark:bg-clip-text dark:text-transparent">
						Pakistan&apos;s
					</span>
					<br />
					<MorphingText texts={texts} />
					<br />
					<span className="">ERP Solution</span>
				</h1>
				<p className="mx-auto max-w-lg px-4 text-sm font-light tracking-wide text-muted-foreground sm:text-base md:text-lg">
					Run your business seamlessly with Real-Time Insights, fast, informed decisions. Secure data.
				</p>
				<RainbowButton className="w-max" asChild>
					<Link href="/#book-a-demo">Book a Demo</Link>
				</RainbowButton>
			</AnimatedContainer>
			<div className="from-background pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-background/20" />
		</section>
	);
}
