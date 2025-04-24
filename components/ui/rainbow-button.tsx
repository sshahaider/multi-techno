import React from 'react';
import { cn } from '@/lib/utils/index';

export const RainbowButton = ({ children, className, ...props }: React.ComponentProps<'button'>) => {
	return (
		<button
			className={cn(
				'group animate-rainbow text-primary-foreground focus-visible:ring-ring relative inline-flex h-9 cursor-pointer items-center justify-center rounded-md border-0 bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] px-8 py-2 font-medium transition-colors [border:calc(0.08*1rem)_solid_transparent] focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
				// before styles
				'before:animate-rainbow before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--rainbow-1),var(--rainbow-5),var(--rainbow-3),var(--rainbow-4),var(--rainbow-2))] before:[filter:blur(calc(0.8*1rem))]',
				// light mode colors
				'bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--rainbow-1),var(--rainbow-5),var(--rainbow-3),var(--rainbow-4),var(--rainbow-2))]',
				// dark mode colors
				'dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--rainbow-1),var(--rainbow-5),var(--rainbow-3),var(--rainbow-4),var(--rainbow-2))]',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};

RainbowButton.displayName = 'RainbowButton';
