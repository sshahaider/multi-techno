import Link from 'next/link';
import { Headerwraper } from './wraper';
import { Navigation } from './nav';
import MoileNav from './moile-nav';
import BookADemoButton from './book-a-demo-button';
import { LogoWithText } from '../logo';
import BackgroundOverlay from './background-overlay';

export function Header() {
	return (
		<>
			<Headerwraper>
				<nav className="container flex h-14 items-center justify-between">
					<Link href="/" className="w-full">
						<LogoWithText />
					</Link>
					<div className="hidden w-full lg:flex lg:justify-center">
						<Navigation />
					</div>
					<div className="hidden w-full lg:flex lg:items-center lg:justify-end lg:gap-2">
						<BookADemoButton className="rounded-full" />
					</div>
					<MoileNav />
				</nav>
			</Headerwraper>
			<BackgroundOverlay />
		</>
	);
}
