import { Card } from '../ui/card';
import DemoForm from '../forms/demo-form';
import { WarpBackground } from '../ui/warp-background';
import { AnimatedContainer } from '../sheard/animated-container';

export default function CallToAction() {
	return (
		<section className="bg-background relative py-20 md:py-32 -scroll-mt-24" id="book-a-demo" aria-label="Call to Action Section">
			<AnimatedContainer>
				<WarpBackground className="container-sm">
					<Card className="mx-auto max-w-md rounded-md">
						<DemoForm />
					</Card>
				</WarpBackground>
			</AnimatedContainer>
		</section>
	);
}
