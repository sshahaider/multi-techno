import HeroSection from '@/components/home/hero';
import OverviewSection from '@/components/home/overview';
import CallToAction from '@/components/home/call-to-action';
import IntegrationsSection from '@/components/home/integrations';
import RegistrationSection from '@/components/home/registration';

export default function Home() {
	return (
		<div className="relative">
			<HeroSection />
			<div className="bg-background supports-[backdrop-filter]:bg-background/80 relative z-10 backdrop-blur-2xl">
				<OverviewSection />
				<IntegrationsSection />
				<RegistrationSection />
				<CallToAction />
			</div>
		</div>
	);
}
