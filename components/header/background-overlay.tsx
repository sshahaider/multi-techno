'use client';
import { useIsOpen } from '@/hooks/use-is-open';
import React from 'react';

export default function BackgroundOverlay() {
	const { isOpen } = useIsOpen('nav');

	return (
		<div
			data-state={isOpen ? 'open' : 'closed'}
			data-slot="navigation-menu-overlay"
			className="pointer-events-none fixed inset-0 z-40 bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 ease-in-out data-[state=open]:opacity-100"
			aria-hidden="true"
		/>
	);
}
