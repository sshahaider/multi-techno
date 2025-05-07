import React from 'react';
import { VelocityScroll } from '../ui/scroll-based-velocity';

export default function ScroolTextSection() {
	return (
		<section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20 md:py-32">
			<VelocityScroll>Let Your Business Boom!</VelocityScroll>
			<div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
			<div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
		</section>
	);
}
