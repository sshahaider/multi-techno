'use client';

import { TextReveal } from '@/components/ui/text-reveal';
import BookADemoButton from '../header/book-a-demo-button';

export default function CallToAction() {
	return (
		<section className="bg-background relative py-16" aria-label="Call to Action Section">
			<TextReveal texts={['"Let Your Business Boom!"']}>
				<BookADemoButton />
			</TextReveal>
		</section>
	);
}
