'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from './ui/button';

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Button variant="ghost" size="icon" className="rounded-full" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			<SunIcon className="scale-0 rotate-90 transition-transform duration-500 ease-in-out dark:scale-100 dark:rotate-0" />
			<MoonIcon className="absolute scale-100 rotate-0 transition-transform duration-500 ease-in-out dark:scale-0 dark:-rotate-90" />
			<span className="sr-only">Switch Theme</span>
		</Button>
	);
}
