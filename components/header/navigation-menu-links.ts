import {
	Briefcase,
	Factory,
	Package,
	ShoppingCart,
	Store,
	Users,
	Code,
	ClipboardList,
	Heart,
	Warehouse,
	TestTubeDiagonal,
	Shirt,
	HardHat,
	Construction,
	Globe,
	Layers,
	UserPlus,
	ListOrdered,
	Handshake,
	Star,
	FileText,
	Shield,
	RotateCcw,
	Leaf,
	HelpCircle,
} from 'lucide-react';
import {
	CRMIcon,
	JavaScriptIcon,
	NextJSIcon,
	NodeJSIcon,
	POSIcon,
	ReactIcon,
	SolarIcon,
	SupplyChainIcon,
} from '../icons';

export type NavItemType = {
	title: string;
	href: string;
	description?: string;
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const industries: NavItemType[] = [
	{ title: 'Trading', href: '/trading', description: 'Streamline trading operations', icon: ShoppingCart },
	{
		title: 'Manufacturing',
		href: '/manufacturing',
		description: 'Optimize production processes',
		icon: Factory,
	},
	{ title: 'Textile', href: '/textile', description: 'Manage Textile industry ERP', icon: Shirt },
	{ title: 'Food', href: '/food', description: 'Manage food industry ERP', icon: Store },
	{ title: 'Steel', href: '/steel', description: 'Steel industry solutions', icon: Package },
	{ title: 'Engineering', href: '/engineering ', description: 'Steel Engineering solutions', icon: HardHat },
	{ title: 'Cold Storage', href: '/cold-storage', description: 'Cold storage management', icon: Warehouse },
	{ title: 'Chemical', href: '/chemical', description: 'Chemical industry ERP', icon: TestTubeDiagonal },
	{ title: 'Solar', href: '/solar', description: 'Solar industry ERP', icon: SolarIcon },
	{ title: 'Services', href: '/services', description: 'Service-based ERP solutions', icon: Briefcase },
];

export const erpServices: NavItemType[] = [
	{ title: 'Point of Sale', href: '/point-of-sale', description: 'Efficient POS systems', icon: POSIcon },
	{
		title: 'Supply Chain Management',
		href: '/supply-chain-management',
		description: 'Optimize supply chain operations',
		icon: SupplyChainIcon,
	},
	{
		title: 'Manufacturing',
		href: '/manufacturing',
		description: 'Enhance manufacturing efficiency',
		icon: Factory,
	},
	{
		title: 'Project Management',
		href: '/project-management',
		description: 'Streamlined project oversight',
		icon: ClipboardList,
	},
	{ title: 'CRM', href: '/crm', description: 'Effective customer relationship management', icon: CRMIcon },
	{
		title: 'Construction Management',
		href: '/construction-management',
		description: 'Manage construction projects',
		icon: Construction,
	},
	{ title: 'NGO Management', href: '/ngo', description: 'NGO operations support', icon: Heart },
	{ title: 'Order Booking App', href: '/order-booking', description: 'Simplify order processing', icon: ListOrdered },
	{ title: 'HR & Payroll', href: '/hr-and-payroll', description: 'Manage HR and payroll', icon: Users },
];

export const services: NavItemType[] = [
	{
		title: 'Custom App',
		href: '/custom-app',
		description: 'Tailored mobile apps for your business',
		icon: Code,
	},
	{
		title: 'Custom Website',
		href: '/custom-website',
		description: 'Responsive websites to boost online presence',
		icon: Globe,
	},
	{
		title: 'Custom SaaS',
		href: '/custom-saas',
		description: 'Scalable cloud solutions for efficiency',
		icon: Layers,
	},
	{
		title: 'Hire a Talent!',
		href: '/hire-talent',
		description: 'Skilled professionals for your projects',
		icon: UserPlus,
	},
];

export const techs: NavItemType[] = [
	{ title: 'NextJS', href: '/nextjs', icon: NextJSIcon },
	{
		title: 'NodeJS',
		href: '/nodejs',
		icon: NodeJSIcon,
	},
	{ title: 'React', href: '/react', icon: ReactIcon },
	{ title: 'React Native', href: '/react-native', icon: ReactIcon },
	// { title: 'MERN Stack', href: '/mern-stack', icon: Code },
	{ title: 'Javascript', href: '/javascript', icon: JavaScriptIcon },
];

export const companyPages: NavItemType[] = [
	{
		title: 'About Us',
		href: '/about',
		description: 'Our mission, values, team',
		icon: Users,
	},
	{
		title: 'Testimonials',
		href: '/testimonials',
		description: 'Customer and partner feedback',
		icon: Star,
	},
	{
		title: 'Terms of Services',
		href: '/terms',
		description: 'Service usage terms',
		icon: FileText,
	},
	{
		title: 'Privacy Policy',
		href: '/privacy',
		description: 'Personal information protection',
		icon: Shield,
	},
	{
		title: 'Refund Policy',
		href: '/refund',
		description: 'Refund process details',
		icon: RotateCcw,
	},
	{
		title: 'Become A Partner',
		href: '/partner',
		icon: Handshake,
		description: 'Grow through partnerships',
	},
	{
		title: 'Blog',
		href: '/blog',
		icon: Leaf,
		description: 'Insights and updates',
	},
	{
		title: 'FAQS',
		href: '/faqs',
		icon: HelpCircle,
		description: 'Common questions answered',
	},
];
