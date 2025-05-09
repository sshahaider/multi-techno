import React from 'react';
import { SectionHeading } from '../sheard';
import { Grid } from '../ui/background';
import { AnimatedContainer } from '../sheard/animated-container';

type Testimonial = {
	name: string;
	role: string;
	image: string;
	company: string;
	quote: string;
};

const testimonials: Testimonial[] = [
	{
		quote:
			"The team at Multi techno didn't just provide us with an ERP system—they helped us achieve our vision. Our success wouldn't have been possible without their expertise and constant support. We celebrate our milestones together, and it feels like we’re part of the same team.",
		name: 'Name Of The Person',
		role: 'HR Manager',
		company: 'Pak Mission Society',
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
	},
	{
		quote:
			'From our first meeting to now, Multi techno has always been there with valuable insights and guidance. Their ERP solution is top-notch, but what really sets them apart is the relationship they build with their clients. Every strategy session is a memorable experience, and we look forward to many more.',
		name: 'Name Of The Person',
		role: 'CEO',
		company: 'Galry Five Home',
		image: 'https://randomuser.me/api/portraits/men/2.jpg',
	},
	{
		quote:
			'Working with Multi techno has been a wonderful experience. Their team took the time to visit our facility and understand our processes, which helped them craft a solution perfectly suited to our needs. The memories we’ve created through this partnership go beyond business.',
		name: 'Name Of The Person',
		role: 'Manager',
		company: 'Al-Tayyab Foods',
		image: 'https://randomuser.me/api/portraits/men/3.jpg',
	},
	{
		quote:
			'Working with Multi techno has been a seamless experience. Their personalized approach and dedication have made a significant impact on our business.',
		name: 'Name Of The Person',
		role: 'Director',
		company: 'Shafiqe Foods',
		image: 'https://randomuser.me/api/portraits/men/4.jpg',
	},
	{
		quote:
			"The team at Multi techno didn't just provide us with an ERP system—they helped us achieve our vision. Our success wouldn't have been possible without their expertise and constant support. We celebrate our milestones together, and it feels like we’re part of the same team.",
		name: 'Name Of The Person',
		role: 'HR Manager',
		company: 'Pak Mission Society',
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
	},
    	{
		quote:
			'Working with Multi techno has been a seamless experience. Their personalized approach and dedication have made a significant impact on our business.',
		name: 'Name Of The Person',
		role: 'Director',
		company: 'Shafiqe Foods',
		image: 'https://randomuser.me/api/portraits/men/4.jpg',
	},
	{
		quote:
			'Working with Multi techno has been a wonderful experience. Their team took the time to visit our facility and understand our processes, which helped them craft a solution perfectly suited to our needs. The memories we’ve created through this partnership go beyond business.',
		name: 'Name Of The Person',
		role: 'Manager',
		company: 'Al-Tayyab Foods',
		image: 'https://randomuser.me/api/portraits/men/3.jpg',
	},
	{
		quote:
			'Working with Multi techno has been a seamless experience. Their personalized approach and dedication have made a significant impact on our business.',
		name: 'Name Of The Person',
		role: 'Director',
		company: 'Shafiqe Foods',
		image: 'https://randomuser.me/api/portraits/men/4.jpg',
	},
    {
		quote:
			'From our first meeting to now, Multi techno has always been there with valuable insights and guidance. Their ERP solution is top-notch, but what really sets them apart is the relationship they build with their clients. Every strategy session is a memorable experience, and we look forward to many more.',
		name: 'Name Of The Person',
		role: 'CEO',
		company: 'Galry Five Home',
		image: 'https://randomuser.me/api/portraits/men/2.jpg',
	},
];

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
		<section className="border-t py-16 md:py-32">
			<div className="container space-y-8">
				<AnimatedContainer delay={0.1} className="">
					<SectionHeading>Real Results, Real Voices</SectionHeading>
					<p className="text-foreground/80 mt-6 text-sm md:text-base">
						 See how businesses are thriving with our ERP — real stories, real impact, real growth.
					</p>
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
									<img alt={name} src={image} loading="lazy" className="size-9 rounded-full" />
									<div>
										<div className="-mt-0.5 -space-y-0.5">
											<p className="font-heading text-sm md:text-base">{name}</p>
											<span className="text-muted-foreground block text-xs tracking-wide">
												{role} at {company}
											</span>
										</div>
										<blockquote className="mt-3">
											<p className="text-foreground/80 text-sm font-thin tracking-wide">{quote}</p>
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
