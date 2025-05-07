import BecomeAPartnerForm from '@/components/forms/become-a-partner-form';
import { Card } from '@/components/ui/card';
import React from 'react';
import OurPartners from './_components/our-partners';
import { BackGround } from '@/components/ui/background';
import { constructMetadata } from '@/lib/utils/construct-metadata';

export const metadata = constructMetadata({
	title: 'Become a Partner',
	url: '/partner',
});

export default function PartnerPage() {
	return (
		<div>
			<section className="relative min-h-screen py-24 md:py- -mt-14">
				<BackGround mask="toTop" variant="dot" />
				<div className="container grid gap-12 md:grid-cols-[1fr_.70fr] md:gap-24">
					<div className="flex flex-col justify-center ">
						<div className="relative z-10 space-y-5 max-w-xl">
							<h1 className="font-heading text-5xl font-bold md:text-5xl lg:text-6xl xl:text-7xl lg:font-extrabold">
								Become a Partner With Us
							</h1>
							<p className="text-foreground/80 text-lg">
								Unlock collaborative growth opportunities with Multi-Techno&apos;s cutting-edge ERP solutions. Join our
								Partner Program today for innovative tools, lucrative commissions, and comprehensive support.
							</p>
						</div>
					</div>
					<Card className="rounded-md">
						<BecomeAPartnerForm />
					</Card>
				</div>
			</section>
			<OurPartners />
		</div>
	);
}
