import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function BecomeAPartnerButton({ className }: { className?: string }) {
	return (
		<Button variant="ghost" size="sm" className={cn('relative', className)}>
			Become A Partner
		</Button>
	);
}
