import React from 'react';
import { TextHoverEffect } from './text-hover-effect';
import { APP_NAME } from '@/lib/constants';
import { SectionAnimation } from '../sheard/section-animation';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import { XSocialIcon } from '../icons';

// Define interfaces for type safety
interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

interface FooterImage {
	src: string;
	alt: string;
	className: string;
}

export function Footer() {
	const footerLinks: FooterSection[] = [
		{
			label: 'Product',
			links: [
				{ title: 'Features', href: '#features' },
				{ title: 'Pricing', href: '#pricing' },
				{ title: 'Testimonials', href: '#testimonials' },
				{ title: 'Integration', href: '/' },
			],
		},
		{
			label: 'Company',
			links: [
				{ title: 'FAQs', href: '/faqs' },
				{ title: 'About Us', href: '/about' },
				{ title: 'Privacy Policy', href: '/privacy' },
				{ title: 'Terms of Services', href: '/terms' },
			],
		},
		{
			label: 'Resources',
			links: [
				{ title: 'Blog', href: '/blog' },
				{ title: 'Changelog', href: '/changelog' },
				{ title: 'Customers', href: '/customers' },
				{ title: 'Brand', href: '/brand' },
				{ title: 'Help', href: '/help' },
			],
		},
		{
			label: 'Social Links',
			links: [
				{ title: 'Facebook', href: 'https://www.facebook.com/MultiTechno20', icon: FacebookIcon },
				{ title: 'Instagram', href: 'https://www.instagram.com/multi_techno20/', icon: InstagramIcon },
				{ title: 'Youtube', href: 'https://www.youtube.com/@multitechno3407', icon: YoutubeIcon },
				{ title: 'X', href: 'https://x.com/techno_multi', icon: XSocialIcon },
				{ title: 'LinkedIn', href: 'https://www.linkedin.com/company/multi-techno/', icon: LinkedinIcon },
			],
		},
	];

	const footerImages: FooterImage[] = [
		{
			src: '/fbr.png',
			alt: 'Federal Board of Revenue Pakistan logo',
			className: 'h-7 dark:invert',
		},
		{
			src: '/pseb.png',
			alt: 'Pakistan Software Export Board logo',
			className: 'h-7 dark:invert',
		},
		{
			src: '/pasha.png',
			alt: 'Pakistan Software Houses Association logo',
			className: 'h-4 dark:invert',
		},
		{
			src: '/mit.png',
			alt: 'Ministry of Information Technology logo',
			className: 'h-9 dark:invert',
		},
		{
			src: '/secp.png',
			alt: 'Securities and Exchange Commission of Pakistan logo',
			className: 'h-9 dark:invert',
		},
	];

	return (
		<footer className="md:rounded-t-6xl relative container flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 pt-16 lg:px-8 lg:pt-24">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur"></div>

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<SectionAnimation delay={0.1}>
					<div className="flex flex-col items-start justify-start md:max-w-max">
						<p className="text-muted-foreground mb-4 text-sm">Proudly Registered With</p>
						<div className="flex flex-wrap items-center justify-start gap-2">
							{footerImages.map((image) => (
								//  eslint-disable-next-line @next/next/no-img-element
								<img key={image.src} loading="lazy" src={image.src} alt={image.alt} className={image.className} />
							))}
						</div>
					</div>
				</SectionAnimation>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<SectionAnimation key={section.label} delay={0.2 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-base font-medium">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<Link
												href={link.href}
												className="hover:text-foreground inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</SectionAnimation>
					))}
				</div>
			</div>

			<div className="border-border/40 mt-8 w-full border-t pt-4 md:flex md:items-center md:justify-between md:pt-8">
				<SectionAnimation delay={0.6}>
					<p className="text-muted-foreground mt-8 text-sm md:mt-0">
						© {new Date().getFullYear()} {APP_NAME}. All rights reserved.
					</p>
				</SectionAnimation>
			</div>
			<TextHoverEffect className="z-10 pt-20" text={APP_NAME} />
		</footer>
	);
}
