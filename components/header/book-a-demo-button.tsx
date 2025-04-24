import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export default function BookADemoButton({ className }: { className?: string }) {
	return (
		<Button variant="ghost" className={cn('relative', className)}>
			Book a Demo
		</Button>
	);
}
