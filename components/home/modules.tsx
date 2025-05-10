import React from 'react';
import {
	Banknote,
	Boxes,
	Megaphone,
	Users,
	ShoppingCart,
	PackageSearch,
	Factory,
	Truck,
	Handshake,
	Landmark,
	BarChart2,
	ClipboardList,
} from 'lucide-react';
import { SectionDescription, SectionHeading } from '../sheard';
import { AnimatedContainer } from '../sheard/animated-container';
import { Grid } from '../ui/background';

const modules = [
	{
		title: 'Finance & Accounting',
		description: ['Ledger Management', 'Accounts Payable/Receivable', 'Budget Forecasting', 'Financial Reports'],
		icon: Banknote,
	},
	{
		title: 'Procurement & Purchase',
		description: ['Vendor Selection', 'Purchase Requests', 'Purchase Orders', 'Supplier Contracts'],
		icon: PackageSearch,
	},
	{
		title: 'Inventory Management',
		description: ['Stock Tracking', 'Warehouse Management', 'Inventory Valuation', 'Stock Alerts'],
		icon: Boxes,
	},

	{
		title: 'Production & Manufacturing',
		description: ['BOM', 'Production Planning', 'Quality Control', 'MRP'],
		icon: Factory,
	},
	{
		title: 'Supply Chain',
		description: ['Order Processing', 'Logistics Management', 'Demand Planning', 'Distributor Management'],
		icon: Truck,
	},
	{
		title: 'Sales & Marketing',
		description: ['CRM', 'Lead Management', 'Sales Orders', 'Marketing Campaigns'],
		icon: Megaphone,
	},
	{
		title: 'Order Booking App',
		description: ['Order Management', 'Mobile Order Booking', 'Route Planning', 'Order Booker Tracking'],
		icon: ShoppingCart,
	},
	{
		title: 'Customer Relationship',
		description: ['Customer Data', 'Sales Tracking', 'Support Tickets', 'Customer Feedback'],
		icon: Handshake,
	},
	{
		title: 'Project Management',
		description: ['Task Scheduling', 'Resource Allocation', 'Project Tracking', 'Cost Management'],
		icon: ClipboardList,
	},
	{
		title: 'Human Resources',
		description: ['Employee Management', 'Payroll System', 'Attendance Tracking', 'Recruitment Management'],
		icon: Users,
	},
	{
		title: 'Asset Management',
		description: ['Asset Tracking', 'Maintenance Scheduling', 'Depreciation Management', 'Lifecycle Management'],
		icon: Landmark,
	},
	{
		title: 'Data Analytics & Reporting',
		description: ['Business Intelligence', 'Custom Reports', 'Data Visualization', 'Predictive Analytics'],
		icon: BarChart2,
	},
];

export default function ModulesSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="container space-y-8">
				<AnimatedContainer delay={0.1} className="text-center max-w-2xl mx-auto">
					<SectionHeading>Modules for Growth</SectionHeading>
					<SectionDescription>
						All essential modules you need to grow, manage, and streamline operations.
Designed to boost efficiency, control, and business scalability.
					</SectionDescription>
				</AnimatedContainer>
				<AnimatedContainer className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{modules.map((module) => (
						<div key={module.title} className="relative overflow-hidden p-6">
							<Grid size={20} />
							<module.icon className="size-6 text-foreground/75" strokeWidth={1} aria-hidden />
							<h3 className="font-heading mt-10 text-sm xl:text-base">{module.title}</h3>
							<p className="text-muted-foreground relative z-20 mt-2 text-xs font-light">
								{module.description.join(', ')}
							</p>
						</div>
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}
