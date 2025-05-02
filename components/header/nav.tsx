'use client';

import * as React from 'react';
import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { companyPages, erpServices, industries, services, techs } from './navigation-menu-links';
import { NavGridCard, NavItem, NavLargeItem, NavSmallItem } from './sheard';

export function Navigation() {
	return (
		<NavigationMenuPrimitive.Root
			delayDuration={0}
			data-slot="navigation-menu"
			className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center"
		>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Product</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-full md:w-192 md:grid-cols-2 lg:w-256 xl:w-305">
							<div className="space-y-1 border-dashed p-4 lg:border-r">
								<p className="text-muted-foreground font-heading ps-2 text-xs">INDUSTRIES</p>
								<ul className="grid gap-1 lg:grid-cols-2">
									{industries.map((link) => (
										<li key={link.href}>
											<NavItem item={link} href={link.href} />
										</li>
									))}
								</ul>
							</div>
							<div className="space-y-1 p-4">
								<p className="text-muted-foreground font-heading ps-2 text-xs">ERP SERVICES</p>
								<ul className="grid gap-1 lg:grid-cols-2">
									{erpServices.map((link) => (
										<li key={link.href}>
											<NavItem item={link} href={link.href} />
										</li>
									))}
								</ul>
							</div>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-full md:w-192 lg:w-256 lg:grid-cols-[1fr_.30fr] xl:w-305">
							<ul className="grid grow gap-4 border-dashed p-4 lg:grid-cols-4 lg:border-r">
								{services.map((link) => (
									<li key={link.href}>
										<NavGridCard href={link.href} link={link} />
									</li>
								))}
							</ul>
							<ul className="space-y-1 p-4">
								<p className="text-muted-foreground font-heading ps-2 text-xs">FRAMWORKS</p>
								{techs.map((link) => (
									<li key={link.href}>
										<NavSmallItem item={link} href={link.href} className="gap-x-1" />
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Company</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-full md:w-192 lg:w-256 lg:grid-cols-[1fr_.40fr] xl:w-305">
							<ul className="grid grow grid-cols-2 gap-4 border-dashed p-4 lg:border-r">
								{companyPages.slice(0, 2).map((link) => (
									<li key={link.href}>
										<NavGridCard href={link.href} link={link} className="min-h-36" />
									</li>
								))}
								<div className="col-span-2 grid grid-cols-3 gap-x-4">
									{companyPages.slice(2, 5).map((link) => (
										<li key={link.href}>
											<NavLargeItem href={link.href} link={link} />
										</li>
									))}
								</div>
							</ul>
							<ul className="space-y-2 p-4">
								{companyPages.slice(5, 10).map((link) => (
									<li key={link.href}>
										<NavLargeItem href={link.href} link={link} />
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
			<div className="absolute top-full left-1/2 mt-2 -translate-x-1/2">
				<NavigationMenuPrimitive.Viewport
					data-slot="navigation-menu-viewport"
					className="origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border border-dashed shadow transition-[width,height] md:w-[var(--radix-navigation-menu-viewport-width)]"
				/>
			</div>
		</NavigationMenuPrimitive.Root>
	);
}
