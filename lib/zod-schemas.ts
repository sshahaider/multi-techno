import * as z from 'zod';

export const BookADemoSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	phone: z.string().min(1, 'Please enter a valid Phone number').max(15, 'Phone number must be at most 15 characters'),
	email: z.string().email('Please enter a valid email address'),
	message: z
		.string()
		.min(20, 'must be at least 20 characters long')
		.max(500, 'Message must be less than 500 characters'),
	notifications: z.boolean().optional(),
});

export type BookADemoTypes = z.infer<typeof BookADemoSchema>;

export const BecomeAPartnerSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	businessName: z.string().min(1, 'Business Name is required'),
	phone: z.string().min(1, 'Please enter a valid Phone number').max(15, 'Phone number must be at most 15 characters'),
	email: z.string().email('Please enter a valid email address'),
	message: z
		.string()
		.min(20, 'must be at least 20 characters long')
		.max(500, 'Message must be less than 500 characters'),
});

export type BecomeAPartnerTypes = z.infer<typeof BecomeAPartnerSchema>;
