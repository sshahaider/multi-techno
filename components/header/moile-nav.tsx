import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import BookADemoButton from './book-a-demo-button';
import { LogoWithText } from '../logo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { companyPages, erpServices, industries, services, techs } from './navigation-menu-links';
import { NavItemMobile } from './sheard';

const sections = [
	{
		id: 'product',
		list: [
			{
				label: 'INDUSTRIES',
				links: industries,
			},
			{
				label: 'ERP SERVICES',
				links: erpServices,
			},
		],
	},
	{
		id: 'services',
		list: [
			{
				links: services,
			},
			{
				label: 'FRAMWORKS',
				links: techs,
			},
		],
	},
	{
		id: 'company',
		list: [
			{
				links: companyPages,
			},
		],
	},
];

export default function MoileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="ghost" className="rounded-full lg:hidden">
					<MenuIcon className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent
				className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-lg"
				showClose={false}
			>
				<div className="container flex min-h-14 items-center justify-between border-b border-dashed">
					<LogoWithText />
					<SheetClose asChild>
						<Button size="icon" variant="ghost" className="rounded-full">
							<XIcon className="size-5" />
							<span className="sr-only">Close</span>
						</Button>
					</SheetClose>
				</div>
				<div className="container grid gap-y-2 overflow-y-auto pt-5 pb-12">
					<BookADemoButton />
					<Accordion type="single" defaultValue="" collapsible>
						{sections.map((section) => (
							<AccordionItem key={section.id} value={section.id}>
								<AccordionTrigger className="capitalize hover:no-underline">{section.id}</AccordionTrigger>
								<AccordionContent className="space-y-1">
									{section.list.map((list, i) => (
										<React.Fragment key={i}>
											{list.label && (
												<p className="text-muted-foreground font-heading ps-2 pt-2 text-xs">{list.label}</p>
											)}
											<ul className="grid gap-1">
												{list.links.map((link) => (
													<li key={link.href}>
														<SheetClose asChild>
															<NavItemMobile item={link} href={link.href} />
														</SheetClose>
													</li>
												))}
											</ul>
										</React.Fragment>
									))}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</SheetContent>
		</Sheet>
	);
}
