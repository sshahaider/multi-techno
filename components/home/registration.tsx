import React from 'react';
import { cn } from '@/lib/utils';
import { AnimatedContainer } from '../sheard/animated-container';

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
		<section className="border-y py-24 md:py-32">
			<div className="mx-auto flex flex-col px-6 md:grid md:max-w-4xl md:grid-cols-2 md:gap-12">
				<div className="order-last mt-6 flex flex-col gap-12 md:order-first">
					<AnimatedContainer className="space-y-6">
						<h2 className="font-heading text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
							Proudly Registered With
						</h2>
						<p className="text-muted-foreground">
							We are officially registered with leading government authorities, ensuring full compliance, transparency,
							and credibility in everything we do.
						</p>
					</AnimatedContainer>
				</div>

				<div className="-mx-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] px-6 sm:mx-auto sm:max-w-md md:-mx-6 md:mr-0 md:ml-auto">
					<AnimatedContainer
						delay={0.5}
						className="bg-muted/30 rounded-2xl border border-dashed p-3 shadow-lg md:pb-12"
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
			className={cn('bg-popover hover:bg-muted/20 space-y-4 rounded-lg border p-3 transition-colors md:p-4', className)}
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
