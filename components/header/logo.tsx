import React from 'react';
import { cva } from 'class-variance-authority';
import { APP_NAME } from '@/lib/constants';

interface Props {
	size?: 'sm' | 'md' | 'lg';
}

const logoVariants = cva('w-max invert', {
	variants: {
		size: {
			sm: 'h-5',
			md: 'h-7',
			lg: 'h-10',
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

export function Logo({ size }: Props) {
	//  eslint-disable-next-line @next/next/no-img-element
	return <img alt={`${APP_NAME} Logo`} className={logoVariants({ size })} src="/logo.png" />;
}
