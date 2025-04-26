import React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const backGroundVariants = cva('z--10 absolute inset-0 h-full w-full', {
	variants: {
		variant: {
			grid: 'bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)10%,transparent)_1px,transparent_1px)]',
			dot: 'bg-[radial-gradient(color-mix(in_oklab,var(--foreground)30%,transparent)_1px,transparent_1px)]',
		},
		mask: {
			rounded: '[mask-image:radial-gradient(ellipse_at_center,var(--background)_30%,transparent)]',
			toTop: '[mask-image:linear-gradient(to_bottom,var(--background),transparent)]',
			toBottom: '[mask-image:linear-gradient(to_bottom,transparent,var(--background))]',
			topBottom: '[mask-image:linear-gradient(to_bottom,transparent,var(--background),transparent)]',
		},
		size: {
			sm: 'bg-[size:24px_24px]',
			md: 'bg-[size:28px_28px]',
			lg: 'bg-[size:32px_32px]',
		},
	},
	defaultVariants: {
		variant: 'grid',
		mask: 'topBottom',
		size: 'sm',
	},
});

type BackGroundProps = React.ComponentProps<'div'> & VariantProps<typeof backGroundVariants>;

const BackGround = ({ variant, mask, size, className, ...props }: BackGroundProps) => {
	return <div className={cn(backGroundVariants({ variant, mask, size, className }))} {...props} />;
};
BackGround.displayName = 'BackGround';

export { BackGround };
