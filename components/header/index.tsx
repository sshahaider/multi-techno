import Link from 'next/link';
import { Headerwraper } from './wraper';
import { Navigation } from './nav';
import MoileNav from './moile-nav';
import BookADemoButton from '../sheard/book-a-demo-button';
import { LogoWithText } from '../logo';
import BackgroundOverlay from './background-overlay';
import { ThemeToggle } from '../theme-toggle';

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
					<div className='flex w-full items-center justify-end gap-2 lg:gap-4'>
						<ThemeToggle />
						<BookADemoButton className="hidden rounded-full lg:block" />
						<MoileNav />
					</div>
				</nav>
			</Headerwraper>
			<BackgroundOverlay />
		</>
	);
}
