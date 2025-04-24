import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Logo } from './logo';
import BookADemoButton from './book-a-demo-button';
import BecomeAPartnerButton from '../become-a-partner-button';

export default function MoileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="ghost" className="rounded-full md:hidden">
					<MenuIcon className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent
				className="bg-background/95 supports-[backdrop-filter]:bg-background/60 w-full backdrop-blur-lg"
				showClose={false}
			>
				<SheetHeader>
					<Logo />
					<SheetClose asChild>
						<Button size="icon" variant="ghost" className="absolute top-2.5 right-5 rounded-full">
							<XIcon className="size-5" />
							<span className="sr-only">Close</span>
						</Button>
					</SheetClose>
				</SheetHeader>

				<SheetFooter>
					<BookADemoButton />
					<BecomeAPartnerButton />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
