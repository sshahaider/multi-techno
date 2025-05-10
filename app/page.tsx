import HeroSection from '@/components/home/hero';
import OverviewSection from '@/components/home/overview';
import CallToAction from '@/components/home/call-to-action';
import IntegrationsSection from '@/components/home/integrations';
import RegistrationSection from '@/components/home/registration';
import DashboardSection from '@/components/home/dashboard';
import ScroolTextSection from '@/components/home/scrool-text';
import ClientsLogos from '@/components/home/clients-logos';
import ModulesSection from '@/components/home/modules';
import TestimonialsSection from '@/components/home/testimonials';
import EInvoicingSection from '@/components/home/e-invoicing';
import { Separator } from '@/components/ui/separator';

export default function Home() {
	return (
		<div className="relative">
			<HeroSection />
			<ClientsLogos />
			<OverviewSection />
			<Separator />
			<DashboardSection />
			<Separator />
			<ModulesSection />
			<Separator />
			<EInvoicingSection />
			<Separator />
			<IntegrationsSection />
			<Separator />
			<RegistrationSection />
			<Separator />
			<TestimonialsSection />
			<Separator />
			<ScroolTextSection />
			<Separator />
			<CallToAction />
		</div>
	);
}
