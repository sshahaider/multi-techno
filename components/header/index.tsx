import Link from 'next/link';
import { Headerwraper } from './wraper';
import { Navigation } from './nav';
import { Logo } from './logo';
import MoileNav from './moile-nav';
import BookADemoButton from './book-a-demo-button';
import BecomeAPartnerButton from '../become-a-partner-button';

export function Header() {
	return (
		<Headerwraper>
			<nav className="container flex h-14 items-center justify-between">
				<div className="w-full">
					<Link href="/">
						<Logo />
					</Link>
				</div>
				<div className="hidden w-full lg:flex lg:justify-center">
					<Navigation />
				</div>
				<div className="hidden w-full lg:flex lg:items-center lg:justify-end lg:gap-2">
					<BecomeAPartnerButton className="rounded-full" />
					<BookADemoButton className="rounded-full" />
				</div>
				<MoileNav />
			</nav>
		</Headerwraper>
	);
}
