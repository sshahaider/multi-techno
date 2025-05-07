import React from 'react';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { BorderTrail } from '../ui/border-trail';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';

export default function BookADemoButton({
	className,
	variant = 'outline',
	size = 'default',
	showIcon = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		showIcon?: boolean;
	}) {
	return (
		<Button variant={variant} size={size} className={cn('group relative', className)} {...props} asChild>
			<Link href="/#book-a-demo">
				<BorderTrail
					style={{
						boxShadow:
							'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
					}}
					size={20}
				/>
				Book a Demo
				{showIcon && (
					<ArrowRightIcon
						className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
						aria-hidden="true"
					/>
				)}
			</Link>
		</Button>
	);
}
