import React from 'react';
import { cva } from 'class-variance-authority';

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
	return <img alt="Logo" className={logoVariants({ size })} src="/logo.png" />;
}
