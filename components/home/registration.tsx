import React from 'react';
import { cn } from '@/lib/utils';
import { AnimatedContainer } from '../sheard/animated-container';
import { BackGround } from '../ui/background';
import BookADemoButton from '../sheard/book-a-demo-button';
import { SectionHeading } from '../sheard';

interface Registrar {
	image: {
		src: string;
		className: string;
	};
	description: string;
	className?: string;
}

const registrars: Registrar[] = [
	{
		image: { src: '/fbr.png', className: 'h-7' },
		description: 'Federal Board of Revenue Pakistan',
		className: 'col-span-2',
	},
	{
		image: { src: '/pseb.png', className: 'h-7' },
		description: 'Pakistan Software Export Board',
	},
	{
		image: { src: '/pasha.png', className: 'h-4' },
		description: 'Pakistan Software Houses Association',
	},
	{
		image: { src: '/mit.png', className: 'h-9' },
		description: 'Ministry of Information Technology',
	},
	{
		image: { src: '/secp.png', className: 'h-9' },
		description: 'Securities and Exchange Commission of Pakistan',
	},
];

export default function RegistrationSection() {
	return (
		<section className="relative border-t py-24 md:py-32">
			<BackGround mask="toTop" variant="dot" />
			<div className="container-sm flex flex-col px-6 md:grid md:grid-cols-2 md:gap-12">
				<div className="order-last mt-6 flex flex-col justify-center gap-12 md:order-first">
					<AnimatedContainer className="space-y-6">
						<SectionHeading>
							Proudly Registered With
						</SectionHeading>
						<p className="text-muted-foreground md:text-lg">
							We are officially registered with leading government authorities, ensuring full compliance, transparency,
							and credibility in everything we do.
						</p>
						<BookADemoButton size="lg" showIcon />
					</AnimatedContainer>
				</div>

				<div
					className="[mask-image:linear-gradient(to_bottom,var(--background)_70%,transparent)] md:-mx-6 md:mr-0 md:ml-auto"
				>
					<AnimatedContainer
						delay={0.5}
						className="bg-popover rounded-2xl border border-dashed p-3 shadow-lg md:pb-12"
					>
						<div className="grid grid-cols-2 gap-2">
							{registrars.map((reg, index) => (
								<RegistrationBox key={index} {...reg} />
							))}
						</div>
					</AnimatedContainer>
				</div>
			</div>
		</section>
	);
}

const RegistrationBox = ({ image, description, className }: React.ComponentProps<'div'> & Registrar) => {
	return (
		<div
			title={description}
			className={cn('bg-background hover:bg-input/20 space-y-4 rounded-lg border p-3 transition-colors md:p-4', className)}
		>
			<div className="flex size-fit items-center justify-center">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					loading="lazy"
					src={image.src}
					alt={`${description} Logo`}
					className={cn('dark:invert', image.className)}
				/>
			</div>
			<div className="space-y-1">
				{description && <h3 className="text-muted-foreground line-clamp-2 text-xs md:text-sm">{description}</h3>}
			</div>
		</div>
	);
};
