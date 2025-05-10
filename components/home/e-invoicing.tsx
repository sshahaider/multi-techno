'use client';
import React from 'react';
import { SectionDescription, SectionHeading } from '../sheard';
import { AnimatedContainer } from '../sheard/animated-container';
import { GridPattern, getRandomPattern } from '../ui/background';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { LogoIcon } from '../logo';

export default function EInvoicingSection() {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const fbrRef = React.useRef<HTMLDivElement>(null);
	const zatcaRef = React.useRef<HTMLDivElement>(null);
	const logoRef = React.useRef<HTMLDivElement>(null);

	const p = getRandomPattern(10);

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden py-32 md:py-48">
			<div className="to-background absolute inset-0 z-1 bg-radial-[at_80%_20%] from-transparent to-85%" />
			<GridPattern
				width={50}
				height={50}
				x="0"
				y="0"
				squares={p}
				className="fill-muted/20 stroke-muted/40 absolute inset-0 h-full w-full"
			/>

			<div className="container-sm relative z-10 space-y-12">
				<AnimatedContainer className="text-center">
					<SectionHeading>Certified E-Invoicing Compliance</SectionHeading>
					<SectionDescription>
						Our ERP is officially integrated with the <strong>FBR (Pakistan)</strong> and{' '}
						<strong>ZATCA Phase 2 (Saudi Arabia)</strong> authorities, ensuring seamless, government-approved
						e-invoicing for your business.
					</SectionDescription>
				</AnimatedContainer>
				<AnimatedContainer>
					<div
						className="relative mx-auto flex w-full max-w-2xl items-center justify-center overflow-hidden"
						ref={containerRef}
					>
						<div className="flex w-full flex-row items-center justify-between">
							<div
								className="bg-background z-10 flex size-16 items-center justify-center rounded-md border md:size-18 lg:size-20 xl:size-24"
								ref={fbrRef}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/fbr.png" alt="FBR Logo" className="-mt-1 -ml-0.5 h-7 invert lg:h-8" />
							</div>
							<div
								className="bg-popover z-10 flex size-16 items-center justify-center rounded-md border-2 md:size-18 lg:size-20 xl:size-24"
								ref={logoRef}
							>
								<LogoIcon className="size-10 lg:size-12" />
							</div>
							<div
								className="bg-background z-10 flex size-16 items-center justify-center rounded-md border md:size-18 lg:size-20 xl:size-24"
								ref={zatcaRef}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/zatca.png" alt="ZATCA Logo" className="h-9 invert lg:h-10" />
							</div>
						</div>
						<AnimatedBeam duration={3} containerRef={containerRef} reverse fromRef={fbrRef} toRef={logoRef} />
						<AnimatedBeam duration={3} containerRef={containerRef} fromRef={logoRef} toRef={zatcaRef} />
					</div>
				</AnimatedContainer>
			</div>
		</section>
	);
}
