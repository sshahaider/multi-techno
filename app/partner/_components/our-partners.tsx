import { Button } from '@/components/ui/button';
import { PhoneIcon, MailIcon, MapPinIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function OurPartners() {
	const partners = [
		{
			name: 'LinksZen IT',
			country: 'UAE',
			phone: '+971 50 844 0948',
			email: 'admin@linkszenit.com',
			logo: '/linkszen-logo.webp',
			link: 'https://linkszenit.com/',
		},
		{
			name: 'Fourth Dimension Systems (4DS)',
			country: 'Saudi Arabia',
			phone: '+966 1 14565235',
			email: 'info@multi-techno.com',
			logo: '/4ds-logo.png',
			link: 'https://www.fdsme.com/',
		},
		{
			name: 'BinS',
			country: 'Oman',
			phone: '+968 95371076',
			email: 'info@binshub.com',
			logo: '/bins-logo.png',
			link: 'https://binshub.com/',
		},
	];

	return (
		<section className="bg-background overflow-hidden py-16">
			<div className="container">
				<h2 className="mb-10 text-center text-3xl font-bold font-heading">Our Partners</h2>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
					{partners.map((partner, index) => (
						<div key={index} className="bg-input/20 border border-dashed rounded-lg">
							<div className='p-6'>
                                {/* eslint-disable @next/next/no-img-element */}
                                <img
								src={partner.logo}
								alt={`${partner.name} Logo`}
								className="h-16 object-contain brightness-0 invert filter"
							/>
                            </div>
							<div className="flex flex-wrap gap-2 p-6 h-32">
								<p className="text-muted-foreground bg-background flex items-center rounded border p-1 text-xs h-max">
									<MapPinIcon className="mr-1 size-3" />
									{partner.country}
								</p>
								<p className="text-muted-foreground bg-background flex items-center rounded border p-1 text-xs h-max">
									<PhoneIcon className="mr-1 size-3" />
									{partner.phone}
								</p>
								<p className="text-muted-foreground bg-background flex items-center rounded border p-1 text-xs h-max">
									<MailIcon className="mr-1 size-3" />
									{partner.email}
								</p>
							</div>
							<div className="flex rounded-b-lg items-center justify-end bg-background border-t border-dashed p-4">
								<p className="text-muted-foreground flex items-center">
									Visit Website
								</p>
								<Button variant="outline" className="ml-auto border rounded-full size-10" asChild>
									<Link href={partner.link}>
										<ArrowRight />
									</Link>
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
