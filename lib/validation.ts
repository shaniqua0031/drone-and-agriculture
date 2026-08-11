import { z } from 'zod';

export const bookingSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your full name')
    .max(100, 'Name is too long'),
  farmName: z
    .string()
    .min(2, 'Please enter your farm or company name')
    .max(100, 'Name is too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[\d\s+()-]+$/, 'Phone number contains invalid characters'),
  farmLocation: z
    .string()
    .min(3, 'Please provide the farm location')
    .max(200, 'Location is too long'),
  service: z
    .string()
    .min(1, 'Please select a service'),
  preferredDate: z
    .string()
    .min(1, 'Please select a preferred date'),
  preferredTime: z
    .string()
    .min(1, 'Please select a preferred time'),
  farmSize: z
    .string()
    .min(1, 'Please enter the farm size in hectares'),
  additionalInfo: z
    .string()
    .max(1000, 'Additional information is too long')
    .optional(),
});

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your name')
    .max(100, 'Name is too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[\d\s+()-]+$/, 'Phone number contains invalid characters'),
  company: z
    .string()
    .max(100, 'Company name is too long')
    .optional(),
  message: z
    .string()
    .min(10, 'Please enter at least 10 characters')
    .max(2000, 'Message is too long'),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;
