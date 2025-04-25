'use client';

import { TextReveal } from '@/components/ui/text-reveal';
import BookADemoButton from '../header/book-a-demo-button';

export default function CallToAction() {
	return (
		<section className="bg-background relative py-16" aria-label="Call to Action Section">
			<div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
			<TextReveal texts={['"Let Your Business Boom!"']}>
				<BookADemoButton />
			</TextReveal>
		</section>
	);
}
