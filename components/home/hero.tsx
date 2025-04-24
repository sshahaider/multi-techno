'use client';
import { SectionAnimation } from '../ui/section-animation';
import { HeroGeometric } from '../ui/shape-landing-hero';
import { MorphingText } from '../ui/morphing-text';
import { RainbowButton } from '../ui/rainbow-button';

export default function HeroSection() {
	const texts = ['Best', 'Top', 'Smartest', 'Fastest', 'Most Reliable', 'All-in-One'];

	return (
		<section className="relative -mt-14">
			<HeroGeometric>
				<SectionAnimation className="flex flex-col items-center justify-center space-y-4 pt-16 text-center">
					<h1 className="font-heading w-full text-5xl font-extrabold md:text-7xl xl:text-[80px]">
						<span className="bg-gradient-to-r from-emerald-400 via-emerald-100 to-white bg-clip-text text-transparent">
							Pakistan&apos;s
						</span>
						<br />
						<MorphingText texts={texts} />
						<br />
						<span className="">ERP Solution</span>
					</h1>
					<p className="mx-auto max-w-lg px-4 text-sm font-light tracking-wide text-white/50 sm:text-base md:text-lg">
						Run your business seamlessly with Real-Time Insights, fast, informed decisions. Secure data.
					</p>
					<RainbowButton className="w-max">Book a Demo</RainbowButton>
				</SectionAnimation>
			</HeroGeometric>
		</section>
	);
}
