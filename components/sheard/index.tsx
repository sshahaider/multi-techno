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
		<h2 className={cn('font-heading text-3xl font-bold text-balance md:text-4xl lg:text-5xl xl:text-6xl xl:font-extrabold', className)}>
			{children}
		</h2>
	);
}
