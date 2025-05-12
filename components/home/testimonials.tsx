import React from 'react';
import { SectionDescription, SectionHeading } from '../sheard';
import { Grid } from '../ui/background';
import { AnimatedContainer } from '../sheard/animated-container';
import { Testimonial, testimonials } from './testimonials-list';


export default function TestimonialsSection() {
	const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
		const result: Testimonial[][] = [];
		for (let i = 0; i < array.length; i += chunkSize) {
			result.push(array.slice(i, i + chunkSize));
		}
		return result;
	};

	const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3));

	return (
		<section className="py-16 md:py-32">
			<div className="container space-y-8">
				<AnimatedContainer delay={0.1}>
					<SectionHeading>Real Results, Real Voices</SectionHeading>
					<SectionDescription>
						 See how businesses are thriving with our ERP — real stories, real impact, real growth.
					</SectionDescription>
				</AnimatedContainer>
				<div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
					{testimonialChunks.map((chunk, chunkIndex) => (
						<div key={chunkIndex} className="space-y-2">
							{chunk.map(({ name, role, company, quote, image }, index) => (
								<AnimatedContainer
									key={index}
                                    delay={0.1 * index + 0.1}
									className="border-muted relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden border border-dashed p-4"
								>
									<Grid size={30} />
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img alt={name} src={image} loading="lazy" className="size-9 rounded-full" />
									<div>
										<div className="-mt-0.5 -space-y-0.5">
											<p className="font-heading text-sm md:text-base">{name}</p>
											<span className="text-muted-foreground block text-xs tracking-wide">
												{role} at {company}
											</span>
										</div>
										<blockquote className="mt-3">
											<p className="text-foreground/80 text-sm font-light tracking-wide">{quote}</p>
										</blockquote>
									</div>
								</AnimatedContainer>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
