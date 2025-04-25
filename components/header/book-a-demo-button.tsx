import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { BorderTrail } from '../ui/border-trail';

export default function BookADemoButton({ className }: { className?: string }) {
	return (
		<Button variant="outline" className={cn('relative', className)}>
			<BorderTrail
				style={{
					boxShadow:
						'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
				}}
				size={20}
			/>
			Book a Demo
		</Button>
	);
}
