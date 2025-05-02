import { cn } from '@/lib/utils';
import { AnimatedContainer } from '../sheard/animated-container';
import { BackGround } from '../ui/background';
import { ShopifyIcon, DropboxIcon, GoogleIcon, PayPalIcon, SlackIcon, StripeIcon } from '../icons';
import { LogoIcon } from '../logo';

export default function IntegrationsSection() {
	return (
		<section className="bg-muted/20 relative py-24 backdrop-blur-2xl md:py-32">
			<BackGround variant="dot" mask="toBottom" className="opacity-80" />
			<AnimatedContainer className="mx-auto px-6">
				<div className="relative mx-auto flex max-w-sm items-center justify-between">
					<div className="space-y-6">
						<IntegrationCard position="left-top">
							<GoogleIcon />
						</IntegrationCard>
						<IntegrationCard position="left-middle">
							<PayPalIcon />
						</IntegrationCard>
						<IntegrationCard position="left-bottom">
							<DropboxIcon />
						</IntegrationCard>
					</div>
					<div className="mx-auto my-2 flex w-fit justify-center gap-2">
						<div className="bg-muted relative z-20 rounded-2xl border p-1">
							<IntegrationCard
								className="bg-background size-16 border-white/25 shadow-xl shadow-white/10"
								isCenter={true}
							>
								<LogoIcon className="size-full" />
							</IntegrationCard>
						</div>
					</div>
					<div
						role="presentation"
						className="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px] opacity-40 [--dots-color:white]"
					></div>

					<div className="space-y-6">
						<IntegrationCard position="right-top">
							<ShopifyIcon />
						</IntegrationCard>
						<IntegrationCard position="right-middle">
							<SlackIcon />
						</IntegrationCard>
						<IntegrationCard position="right-bottom">
							<StripeIcon />
						</IntegrationCard>
					</div>
				</div>
				<div className="mx-auto mt-12 max-w-xl space-y-6 text-center">
					<h2 className="font-heading text-3xl font-semibold text-balance md:text-4xl">
						Integrate with your favorite tools
					</h2>
					<p className="text-muted-foreground">
						Connect seamlessly with popular platforms and services to enhance your workflow.
					</p>
				</div>
			</AnimatedContainer>
		</section>
	);
}

const IntegrationCard = ({
	children,
	className,
	position,
	isCenter = false,
}: {
	children: React.ReactNode;
	className?: string;
	position?: 'left-top' | 'left-middle' | 'left-bottom' | 'right-top' | 'right-middle' | 'right-bottom';
	isCenter?: boolean;
}) => {
	return (
		<div className={cn('bg-background relative flex size-12 rounded-xl border', className)}>
			<div className={cn('relative z-20 m-auto size-fit *:size-6', isCenter && '*:size-8')}>{children}</div>
			{position && !isCenter && (
				<div
					className={cn(
						'to-muted-foreground/25 absolute z-10 h-px bg-linear-to-r',
						position === 'left-top' && 'top-1/2 left-full w-[130px] origin-left rotate-[25deg]',
						position === 'left-middle' && 'top-1/2 left-full w-[120px] origin-left',
						position === 'left-bottom' && 'top-1/2 left-full w-[130px] origin-left rotate-[-25deg]',
						position === 'right-top' && 'top-1/2 right-full w-[130px] origin-right rotate-[-25deg] bg-linear-to-l',
						position === 'right-middle' && 'top-1/2 right-full w-[120px] origin-right bg-linear-to-l',
						position === 'right-bottom' && 'top-1/2 right-full w-[130px] origin-right rotate-[25deg] bg-linear-to-l',
					)}
				/>
			)}
		</div>
	);
};
