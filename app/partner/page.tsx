import BecomeAPartnerForm from '@/components/forms/become-a-partner-form';
import { Card } from '@/components/ui/card';
import React from 'react';
import OurPartners from './_components/our-partners';
import { getRandomPattern, GridPattern } from '@/components/ui/background';
import { constructMetadata } from '@/lib/utils/construct-metadata';

export const metadata = constructMetadata({
	title: 'Become a Partner',
	url: '/partner',
});

export default function PartnerPage() {
	const p = getRandomPattern(10);

	return (
		<div>
			<section className="md:py- relative -mt-14 min-h-screen py-24">
				<div className="to-background absolute inset-0 z-1 bg-radial-[at_80%_20%] from-transparent to-85%" />
				<GridPattern
					width={50}
					height={50}
					x="0"
					y="0"
					squares={p}
					className="fill-muted/50 stroke-foreground/10 absolute inset-0 h-full w-full"
				/>
				<div className="z-10 container grid gap-12 md:grid-cols-[1fr_.70fr] md:gap-24">
					<div className="flex flex-col justify-center">
						<div className="relative z-10 max-w-xl space-y-5">
							<h1 className="font-heading text-5xl font-bold md:text-5xl lg:text-6xl lg:font-extrabold xl:text-7xl">
								Become a Partner With Us
							</h1>
							<p className="text-foreground/80 text-lg">
								Unlock collaborative growth opportunities with Multi-Techno&apos;s cutting-edge ERP solutions. Join our
								Partner Program today for innovative tools, lucrative commissions, and comprehensive support.
							</p>
						</div>
					</div>
					<Card className="rounded-md z-10">
						<BecomeAPartnerForm />
					</Card>
				</div>
			</section>
			<OurPartners />
		</div>
	);
}
