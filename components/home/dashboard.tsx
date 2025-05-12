import { APP_NAME } from '@/lib/constants';
import { Cloud, Cpu, Lock, Zap } from 'lucide-react'; // Add the missing Cloud icon
import Image from 'next/image';
import { AnimatedContainer } from '../sheard/animated-container';
import { SectionDescription, SectionHeading } from '../sheard';

const features = [
	{
		icon: Cloud,
		title: 'Cloud Based',
		description: 'Work anywhere with online access.',
	},
	{
		icon: Cpu,
		title: 'Powerful',
		description: 'Handles big tasks without slowing down.',
	},
	{
		icon: Lock,
		title: 'Secure',
		description: 'Your data stays safe and private.',
	},
	{
		icon: Zap,
		title: 'Fast',
		description: 'Quick and smooth performance every time.',
	},
];

export default function DashboardSection() {
	return (
		<section className="overflow-hidden py-16 md:py-32">
			<div className="container-sm space-y-8">
				{/* Heading */}
				<div className="relative z-10 max-w-xl">
					<SectionHeading>
						Built for Scaling Businesses
					</SectionHeading>
					<SectionDescription>
						Empower your business with the tools and speed you need to grow.
					</SectionDescription>
				</div>
				{/* Dashboard Image */}
				<div className="-mx-2 md:-mx-12 perspective-midrange lg:col-span-3">
					<div className="relative aspect-auto rotate-x-6 -skew-3 rounded-md md:rounded-xl">
						<div className="to-background absolute -inset-2 z-1 bg-radial-[at_75%_25%] from-transparent to-85%" />
						<Image
							src="/dashboard.png"
							alt={`${APP_NAME} Dashboard`}
							width={1906}
							height={947}
							className="rounded-md invert dark:invert-0 md:rounded-xl contrast-110 grayscale-50 border-3 border-foreground/20"
						/>
					</div>
				</div>
				{/* Features */}
				<AnimatedContainer className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
					{features.map((feature, index) => (
						<div key={index} className="space-y-2">
							<div className="flex items-center gap-2">
								<feature.icon className="size-4" />
								<h3 className="text-sm font-medium">{feature.title}</h3>
							</div>
							<p className="text-muted-foreground text-sm">{feature.description}</p>
						</div>
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}
