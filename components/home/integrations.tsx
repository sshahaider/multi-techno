import { cn } from '@/lib/utils';
import { AnimatedContainer } from '../sheard/animated-container';
import { ShopifyIcon, DropboxIcon, GoogleIcon, PayPalIcon, SlackIcon, StripeIcon } from '../icons';
import { LogoIcon } from '../logo';
import BookADemoButton from '../sheard/book-a-demo-button';
import { SectionHeading } from '../sheard';

export default function IntegrationsSection() {
	return (
		<section className="py-32 md:py-48 flex items-center">
			<div className="container-sm grid items-center md:grid-cols-[.70fr_1fr] gap-12 md:gap-24">
				<AnimatedContainer className="bg-muted/50 relative w-fit mx-auto">
					<div className="to-background absolute inset-0 z-10 bg-radial from-transparent to-75%" />
					<div className="mx-auto mb-2 flex w-fit justify-center gap-5">
						<IntegrationCard>
							<ShopifyIcon />
						</IntegrationCard>
						<IntegrationCard>
							<DropboxIcon />
						</IntegrationCard>
					</div>
					<div className="mx-auto my-2 flex w-fit justify-center gap-5">
						<IntegrationCard>
							<StripeIcon />
						</IntegrationCard>
						<IntegrationCard borderClassName="border-white/25" iconClassName="*:size-12" className="bg-muted/50">
							<LogoIcon />
						</IntegrationCard>
						<IntegrationCard>
							<PayPalIcon />
						</IntegrationCard>
					</div>

					<div className="mx-auto flex w-fit justify-center gap-5">
						<IntegrationCard>
							<GoogleIcon />
						</IntegrationCard>

						<IntegrationCard>
							<SlackIcon />
						</IntegrationCard>
					</div>
				</AnimatedContainer>
				<AnimatedContainer className="mt-6 space-y-6 text-center sm:mt-0 sm:text-left">
					<SectionHeading>
						Integrate with your favorite tools
					</SectionHeading>
					<p className="text-muted-foreground md:text-lg">
						Connect seamlessly with popular platforms and services to enhance your workflow.
					</p>
					<BookADemoButton size="lg" variant="ghost" showIcon />
				</AnimatedContainer>
			</div>
		</section>
	);
}

const IntegrationCard = ({
	children,
	className,
	borderClassName,
	iconClassName,
}: {
	children: React.ReactNode;
	className?: React.ComponentProps<'div'>['className'];
	borderClassName?: React.ComponentProps<'div'>['className'];
	iconClassName?: React.ComponentProps<'div'>['className'];
}) => {
	return (
		<div className={cn('relative flex size-24 rounded-xl', className)}>
			<div role="presentation" className={cn('absolute inset-0 rounded-xl border border-dashed', borderClassName)} />
			<div className={cn("relative z-10 m-auto size-fit *:size-8", iconClassName)}>{children}</div>
		</div>
	);
};
