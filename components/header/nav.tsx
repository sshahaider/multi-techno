'use client';

import * as React from 'react';
import Link from 'next/link';
import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { navigationMenuLinks } from './navigation-menu-links';

export function Navigation() {
	return (
		<NavigationMenuPrimitive.Root
			delayDuration={0}
			data-slot="navigation-menu"
			className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center"
		>
			<NavigationMenuList>
				{navigationMenuLinks.map((nav, index) => (
					<NavigationMenuItem key={index}>
						<NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-full gap-2 p-3 md:w-192 md:grid-cols-2 lg:w-256 xl:w-305">
								{nav.contents.map(({ links }, contentIndex) => (
									<div key={contentIndex}>
										{/* <span className="text-muted-foreground pb-2 text-sm">{label}</span> */}
										<div className="grid md:grid-cols-2">
											{links.map((navLink) => (
												<li key={navLink.href}>
													<NavigationMenuLink asChild>
														<Link
															href={navLink.href}
															className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block w-full space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
														>
															<div className="text-sm leading-none font-medium">{navLink.title}</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																{navLink.description}
															</p>
														</Link>
													</NavigationMenuLink>
												</li>
											))}
										</div>
									</div>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
				<NavigationMenuItem>
					<NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
						<Link href="/about">About Us</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
			<div className="absolute top-full left-1/2 mt-2 -translate-x-1/2">
				<NavigationMenuPrimitive.Viewport
					data-slot="navigation-menu-viewport"
					className="origin-top-center bg-popover/95 supports-[backdrop-filter]:bg-popover/80 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-dashed shadow backdrop-blur-lg transition-[width,height] md:w-[var(--radix-navigation-menu-viewport-width)]"
				/>
			</div>
		</NavigationMenuPrimitive.Root>
	);
}
