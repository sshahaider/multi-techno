import HeroSection from '@/components/home/hero';
import { SectionAnimation } from '@/components/ui/section-animation';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { APP_NAME } from '@/lib/constants';

export default function Home() {
	return (
		<>
			<HeroSection />
			<SectionAnimation className="container pt-20">
				<TextHoverEffect text={APP_NAME} />
			</SectionAnimation>
		</>
	);
}
