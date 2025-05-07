"use client";
import React from 'react';
import { InputWithIcon } from '../ui/input';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form';
import { BookADemoSchema, BookADemoTypes } from '@/lib/zod-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { AtSignIcon, PhoneIcon, User2Icon } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';

export default function DemoForm() {
	const form = useForm<BookADemoTypes>({
		resolver: zodResolver(BookADemoSchema),
		defaultValues: {
			name: '',
			phone: '',
			email: '',
			message: '',
			notifications: false,
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (data: BookADemoTypes) => {
		try {
			// TODO: Handle form submission
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Form {...form}>
			<div className="bg-input/20 border-b border-dashed p-4">
				<h2 className="font-heading text-xl font-semibold md:text-2xl">Book a Demo</h2>
				<p className="text-muted-foreground text-sm">Fill out the form below and we’ll be in touch shortly.</p>
			</div>

			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
				<div className="space-y-4 p-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<InputWithIcon icon={User2Icon} disabled={isLoading} placeholder="John Doe" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email Address</FormLabel>
								<FormControl>
									<InputWithIcon
										type="email"
										icon={AtSignIcon}
										disabled={isLoading}
										placeholder="example@example.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<InputWithIcon
										type="tel"
										icon={PhoneIcon}
										disabled={isLoading}
										placeholder="03xxxxxxxxx"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Tell us about your business</FormLabel>
								<FormControl>
									<Textarea
										className="h-28"
										disabled={isLoading}
										placeholder="Briefly describe your business needs..."
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="notifications"
						render={({ field }) => (
							<FormItem className="flex items-center">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
										disabled={isLoading}
									/>
								</FormControl>
								<FormLabel>Send me promotions, updates, and news.</FormLabel>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="bg-input/20 border-t border-dashed p-3">
					<Button type="submit" disabled={isLoading} className="w-full">
						{isLoading ? 'Submitting...' : 'Submit'}
					</Button>
				</div>
			</form>
		</Form>
	);
}
