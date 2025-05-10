import Link from 'next/link';
import { NavigationMenuLink } from '../ui/navigation-menu';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { NavItemType } from './navigation-menu-links';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import { BackGround } from '../ui/background';
import React from 'react';

export function NavItem({
	item,
	className,
	...props
}: React.ComponentProps<typeof Link> & {
	item: NavItemType;
}) {
	return (
		<NavigationMenuLink asChild>
			<Link className={cn('group relative flex-row gap-x-2', className)} {...props}>
				<div className={cn('bg-background flex size-10 items-center justify-center rounded-sm border border-dashed')}>
					{item.icon && <item.icon />}
				</div>
				<div className={cn('flex h-10 flex-col justify-center')}>
					<p className="text-sm">{item.title}</p>
					<span className="text-muted-foreground line-clamp-1 text-xs leading-snug">{item.description}</span>
				</div>
			</Link>
		</NavigationMenuLink>
	);
}

export function NavItemMobile({
	item,
	className,
	...props
}: React.ComponentProps<typeof Link> & {
	item: NavItemType;
}) {
	return (
		<Link
			className={cn(
				"data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground group relative flex gap-1 gap-x-2 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			<div className={cn('bg-muted/20 flex size-10 items-center justify-center  border border-dashed')}>
				{item.icon && <item.icon />}
			</div>
			<div className={cn('flex h-10 flex-col justify-center')}>
				<p className="text-sm">{item.title}</p>
				<span className="text-muted-foreground line-clamp-1 text-xs leading-snug">{item.description}</span>
			</div>
		</Link>
	);
}

export function NavSmallItem({
	item,
	className,
	...props
}: React.ComponentProps<typeof Link> & {
	item: NavItemType;
}) {
	return (
		<NavigationMenuLink asChild>
			<Link className={cn('group relative flex-row gap-x-2', className)} {...props}>
				<div className={cn('flex size-5 items-center justify-center')}>{item.icon && <item.icon />}</div>
				<div className={cn('flex h-5 flex-col justify-center')}>
					<p className="text-sm">{item.title}</p>
					<span className="text-muted-foreground line-clamp-1 text-xs leading-snug">{item.description}</span>
				</div>
				<div className="relative ml-auto h-5 w-4">
					<ArrowRightIcon className="absolute top-0.5 right-0 size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
				</div>
			</Link>
		</NavigationMenuLink>
	);
}

export function NavLargeItem({
	link,
	className,
	...props
}: React.ComponentProps<typeof Link> & {
	link: NavItemType;
}) {
	return (
		<NavigationMenuLink className="p-0" asChild>
			<Link
				className={cn(
					'bg-background group relative flex flex-col justify-center border border-dashed',
					className,
				)}
				{...props}
			>
				<div className="flex items-center justify-between px-5 py-4">
					<div className="space-y-1">
						<span className="text-sm leading-none font-medium">{link.title}</span>
						{link.description && <p className="text-muted-foreground line-clamp-1 text-xs">{link.description}</p>}
					</div>
					{link.icon && <link.icon className="text-muted-foreground size-6" />}
				</div>
			</Link>
		</NavigationMenuLink>
	);
}

export function NavGridCard({
	link,
	className,
	...props
}: React.ComponentProps<typeof Link> & {
	link: NavItemType;
}) {
	return (
		<NavigationMenuPrimitive.Link asChild>
			<Link
				className={cn(
					'group bg-background relative isolate z-0 flex h-full flex-col justify-between overflow-hidden rounded-sm  border border-dashed px-5 py-4 transition-colors duration-75',
					className,
				)}
				{...props}
			>
				<div className="absolute inset-0">
					<div className="absolute -inset-[25%] -skew-y-12 [mask-image:linear-gradient(225deg,black,transparent)]">
						<BackGround className="translate-y-2 transition-transform duration-150 ease-out group-hover:translate-y-0" />
					</div>
					<div
						className={cn(
							'absolute -inset-[10%] opacity-0 blur-[50px] transition-opacity duration-150 group-hover:opacity-10',
							'bg-[conic-gradient(#F35066_0deg,#F35066_117deg,#9071F9_180deg,#5182FC_240deg,#F35066_360deg)]',
						)}
					/>
				</div>
				{link.icon && <link.icon className="text-foreground/80 relative size-5" />}
				<div className="relative">
					<span className="text-foreground/80 text-sm font-medium">{link.title}</span>
					{link.description && <p className="text-muted-foreground mt-2 text-xs">{link.description}</p>}
				</div>
			</Link>
		</NavigationMenuPrimitive.Link>
	);
}
