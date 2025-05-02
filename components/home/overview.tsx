'use client';
import { TextReveal } from '@/components/ui/text-reveal';
import { AnimatedContainer } from '../sheard/animated-container';

export default function OverviewSection() {
	return (
		<section>
			<AnimatedContainer>
				<TextReveal
					textClassName="tracking-wide gap-y-12 py-10 md:py-20 text-start font-normal text-lg md:text-2xl lg:text-4xl justify-start items-start max-w-5xl"
					texts={[
						"Hi, We're Multi-Techno!",
						"All-in-One ERP that's easy and ready to go",
						"Book a demo — we'll show you exactly how it fits your business",
						"Let's get started!",
					]}
				/>
			</AnimatedContainer>
		</section>
	);
}
