import {
	LucideIcon,
	BarChart2,
	Briefcase,
	Factory,
	Package,
	ShoppingCart,
	Store,
	TrendingUp,
	Users,
	Code,
	Server,
	ShoppingBag,
	Building,
	ClipboardList,
	Heart,
} from 'lucide-react';

type NavLink = {
	title: string;
	href: string;
	description: string;
	icon?: LucideIcon;
};

type NavigationMenu = {
	title: string;
	contents: {
		label: string;
		links: NavLink[];
	}[];
};

export const navigationMenuLinks: NavigationMenu[] = [
	{
		title: 'Product',
		contents: [
			{
				label: 'ERP for Industries',
				links: [
					{ title: 'Trading', href: '/trading', description: 'Streamline trading operations', icon: ShoppingCart },
					{
						title: 'Manufacturing',
						href: '/manufacturing',
						description: 'Optimize production processes',
						icon: Factory,
					},
					{ title: 'Food', href: '/food', description: 'Manage food industry ERP', icon: Store },
					{ title: 'Steel', href: '/steel', description: 'Steel industry solutions', icon: Package },
					{ title: 'Cold Storage', href: '/cold-storage', description: 'Cold storage management' },
					{ title: 'Chemical', href: '/chemical', description: 'Chemical industry ERP' },
					{ title: 'Services', href: '/services', description: 'Service-based ERP solutions', icon: Briefcase },
				],
			},
			{
				label: 'ERP for Business Process',
				links: [
					{
						title: 'Accounts and Finance',
						href: '/accounts-and-finance',
						description: 'Comprehensive financial management',
						icon: TrendingUp,
					},
					{ title: 'Cash Management', href: '/cash-management', description: 'Efficient cash flow control' },
					{
						title: 'Inventory Management',
						href: '/inventory-management',
						description: 'Real-time inventory tracking',
						icon: Package,
					},
					{
						title: 'Purchase Management',
						href: '/purchase-management',
						description: 'Streamlined procurement processes',
						icon: ShoppingBag,
					},
					{ title: 'Account Payable', href: '/account-payable', description: 'Manage vendor payments' },
					{ title: 'Fixed Asset Management', href: '/fixed-asset-management', description: 'Track and manage assets' },
					{
						title: 'Administration & Securities',
						href: '/administration-and-securities',
						description: 'Secure administrative operations',
					},
					{
						title: 'Data Analytics & Reporting',
						href: '/data-analytics-and-reporting',
						description: 'Insightful business analytics',
						icon: BarChart2,
					},
				],
			},
		],
	},
	{
		title: 'Services',
		contents: [
			{
				label: 'Web Development',
				links: [
					{ title: 'NextJS Development', href: '/nextjs', description: 'Build scalable NextJS apps', icon: Code },
					{
						title: 'NodeJS Development',
						href: '/nodejs',
						description: 'Robust NodeJS backend solutions',
						icon: Server,
					},
					{ title: 'React Development', href: '/react', description: 'Dynamic React user interfaces', icon: Code },
					{ title: 'ERP Development', href: '/erp', description: 'Custom ERP software solutions' },
				],
			},
			{
				label: 'ERP Services',
				links: [
					{ title: 'Point of Sale', href: '/point-of-sale', description: 'Efficient POS systems', icon: ShoppingCart },
					{
						title: 'Supply Chain Management',
						href: '/supply-chain-management',
						description: 'Optimize supply chain operations',
						icon: Package,
					},
					{
						title: 'Project Management',
						href: '/project-management',
						description: 'Streamlined project oversight',
						icon: ClipboardList,
					},
					{ title: 'CRM', href: '/crm', description: 'Effective customer relationship management', icon: Users },
					{
						title: 'Construction Management',
						href: '/construction-management',
						description: 'Manage construction projects',
						icon: Building,
					},
					{ title: 'NGO Management', href: '/ngo', description: 'NGO operations support', icon: Heart },
					{ title: 'Order Booking App', href: '/order-booking', description: 'Simplify order processing' },
					{ title: 'HR & Payroll', href: '/hr-and-payroll', description: 'Manage HR and payroll', icon: Users },
					{
						title: 'Manufacturing',
						href: '/manufacturing',
						description: 'Enhance manufacturing efficiency',
						icon: Factory,
					},
				],
			},
		],
	},
];
