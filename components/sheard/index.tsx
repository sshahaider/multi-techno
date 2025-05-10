import { cn } from '@/lib/utils';
import React from 'react';

export function SectionHeading({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: React.ComponentProps<'h2'>['className'];
}) {
	return (
		<h2 className={cn('font-heading text-3xl font-bold text-balance md:text-4xl lg:text-5xl xl:text-6xl xl:font-extrabold tracking-wide', className)}>
			{children}
		</h2>
	);
}

export function SectionDescription({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: React.ComponentProps<'p'>['className'];
}) {
	return (
		<p className={cn('text-foreground/80 mt-6 text-sm md:text-base text-balance tracking-wide', className)}>
			{children}
		</p>
	);
}
