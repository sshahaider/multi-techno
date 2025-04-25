'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

function ElegantShape({
	className,
	delay = 0,
	width = 400,
	height = 100,
	rotate = 0,
	gradient = 'from-white/[0.08]',
}: {
	className?: string;
	delay?: number;
	width?: number;
	height?: number;
	rotate?: number;
	gradient?: string;
}) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -150,
				rotate: rotate - 15,
			}}
			animate={{
				opacity: 1,
				y: 0,
				rotate: rotate,
			}}
			transition={{
				duration: 2.4,
				delay,
				ease: [0.23, 0.86, 0.39, 0.96],
				opacity: { duration: 1.2 },
			}}
			className={cn('absolute', className)}
		>
			<motion.div
				animate={{
					y: [0, 15, 0],
				}}
				transition={{
					duration: 5,
					repeat: Number.POSITIVE_INFINITY,
					ease: 'easeInOut',
				}}
				style={{
					width,
					height,
				}}
				className="relative"
			>
				<div
					className={cn(
						'absolute inset-0 rounded-full',
						'bg-gradient-to-r to-transparent',
						gradient,
						'border-2 border-white/[0.15] backdrop-blur-[2px]',
						'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
						'after:absolute after:inset-0 after:rounded-full',
						'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]',
					)}
				/>
			</motion.div>
		</motion.div>
	);
}

export function ElegantShapes() {
	return (
			<div className="absolute inset-0 overflow-hidden">
				<ElegantShape
					delay={0.3}
					width={600}
					height={140}
					rotate={12}
					gradient="from-indigo-500/[0.15]"
					className="top-[15%] left-[-10%] md:top-[20%] md:left-[-5%]"
				/>

				<ElegantShape
					delay={0.5}
					width={500}
					height={120}
					rotate={-15}
					gradient="from-rose-500/[0.15]"
					className="top-[70%] right-[-5%] md:top-[75%] md:right-[0%]"
				/>

				<ElegantShape
					delay={0.4}
					width={300}
					height={80}
					rotate={-8}
					gradient="from-violet-500/[0.15]"
					className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
				/>

				<ElegantShape
					delay={0.6}
					width={200}
					height={60}
					rotate={20}
					gradient="from-amber-500/[0.15]"
					className="top-[10%] right-[15%] md:top-[15%] md:right-[20%]"
				/>

				<ElegantShape
					delay={0.7}
					width={150}
					height={40}
					rotate={-25}
					gradient="from-cyan-500/[0.15]"
					className="top-[5%] left-[20%] md:top-[10%] md:left-[25%]"
				/>
			</div>
	);
}