import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { clients } from '@/lib/constants';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

function ClientSlider({ reverse = false, list }: { reverse?: boolean; list: typeof clients }) {
	return (
		<div className="relative py-6 md:w-[calc(100%-10rem)]">
			<InfiniteSlider reverse={reverse} speedOnHover={10} speed={100} gap={112}>
				{list.map((client) => (
					<div className="flex" key={client.logo}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							className="mx-auto h-8 w-fit brightness-0 dark:invert filter"
							src={client.logo}
							alt={
								// client.name ||
								'Client logo'
							}
						/>
					</div>
				))}
			</InfiniteSlider>

			{/* Gradient and Blur Overlays */}
			<div className="from-background absolute inset-y-0 left-0 w-20 bg-linear-to-r" />
			<div className="from-background absolute inset-y-0 right-0 w-20 bg-linear-to-l" />
			<ProgressiveBlur
				className="pointer-events-none absolute top-0 left-0 h-full w-20"
				direction="left"
				blurIntensity={1}
			/>
			<ProgressiveBlur
				className="pointer-events-none absolute top-0 right-0 h-full w-20"
				direction="right"
				blurIntensity={1}
			/>
		</div>
	);
}

export default function ClientsLogos() {
	return (
		<section className="bg-background overflow-hidden py-16">
			{/* First Row */}
			<div className="group relative container flex flex-col items-center md:flex-row">
				<div className="md:max-w-44 md:border-r md:pr-6">
					<p className="text-end text-sm">Our Satisfied Clients</p>
				</div>
				<ClientSlider list={clients.slice(0, 5)} />
			</div>

			{/* Second Row */}
			<div className="group relative container flex flex-col items-center md:flex-row">
				<ClientSlider reverse list={clients.slice(5)} />
				<div className="md:max-w-24 md:border-l md:pl-6">
					<Button variant="link" className="group" asChild>
						<Link href="/clients">
							View More
							<ArrowRightIcon
								className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
								aria-hidden="true"
							/>
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
