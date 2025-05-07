import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { clients } from '@/lib/constants';

export default function ClientsLogos() {
	return (
		<section className="bg-background overflow-hidden py-16">
			<div className="group relative m-auto max-w-7xl px-6">
				<div className="flex flex-col items-center md:flex-row">
					<div className="md:max-w-44 md:border-r md:pr-6">
						<p className="text-end text-sm">Powering the best teams</p>
					</div>
					<div className="relative py-6 md:w-[calc(100%-11rem)]">
						<InfiniteSlider speedOnHover={20} speed={40} gap={112}>
							{clients.map((client, index) => (
								<div className="flex" key={index}>
                                     {/* eslint-disable @next/next/no-img-element */}
									<img
										className="mx-auto h-8 w-fit brightness-0 invert filter"
										src={client.logo}
										alt={`Logo`}    
									/>
								</div>
							))} 
						</InfiniteSlider>

						<div className="from-background absolute inset-y-0 left-0 w-20 bg-linear-to-r"></div>
						<div className="from-background absolute inset-y-0 right-0 w-20 bg-linear-to-l"></div>
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
				</div>
			</div>
		</section>
	);
}
