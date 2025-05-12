"use client";
import React from 'react';
import { InputWithIcon } from '../ui/input';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form';
import { BecomeAPartnerSchema, BecomeAPartnerTypes } from '@/lib/zod-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { AtSignIcon, PhoneIcon, User2Icon } from 'lucide-react';

export default function BecomeAPartnerForm() {
    const form = useForm<BecomeAPartnerTypes>({
        resolver: zodResolver(BecomeAPartnerSchema),
        defaultValues: {
            name: '',
            businessName: '',
            phone: '',
            email: '',
            message: '',
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (data: BecomeAPartnerTypes) => {
        try {
            // TODO: Handle form submission
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-5 p-5 dark:bg-input/20">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                    <InputWithIcon icon={User2Icon} disabled={isLoading} placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Business Name</FormLabel>
                                <FormControl>
                                    <InputWithIcon icon={User2Icon} disabled={isLoading} placeholder="e.g. Acme Corp" {...field} />
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
                </div>

                <div className="border-t border-dashed p-3">
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
