import HeroSection from '@/components/home/hero';
import OverviewSection from '@/components/home/overview';
import CallToAction from '@/components/home/call-to-action';
import IntegrationsSection from '@/components/home/integrations';
import RegistrationSection from '@/components/home/registration';
import DashboardSection from '@/components/home/dashboard';
import ScroolTextSection from '@/components/home/scrool-text';
import ClientsLogos from '@/components/home/clients-logos';
import ModulesSection from '@/components/home/modules';

export default function Home() {
	return (
		<div className="relative">
			<HeroSection />
			<ClientsLogos />
			<OverviewSection />
			<DashboardSection />
			<ModulesSection />
			<IntegrationsSection />
			<RegistrationSection />
			<ScroolTextSection />
			<CallToAction />
		</div>
	);
}
