import { z } from 'zod';

const countrySchema = z.string()
  .min(1, "Country is required")
  .regex(/^[A-Za-z\s]+$/, "Country must be in Latin characters");

export const pictureSchema = z
  .string()
  .refine(
    (val) => /^data:image\/(png|jpeg);base64,/.test(val),
    'Only PNG and JPEG images allowed.'
  );

export const formSchema = z.object({
  name: z.string().min(1, 'The name is required').regex(/^[A-Z]/, 'The name must begin with a capital letter.'),
  age: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, 'Age must be a positive number.'),
  email: z.string().email('Enter the correct email address'),
  password: z.string()
    .refine((val) => 
      /[A-Z]/.test(val) && 
      /[a-z]/.test(val) && 
      /[0-9]/.test(val) && 
      /[^A-Za-z0-9]/.test(val) && 
      val.length >= 8, 
      'The password must contain at least 8 characters, one uppercase and lowercase letter, a number and a special character.'
),
  confirmPassword: z.string(),
  gender: z.enum(['male', 'female']),
  country: countrySchema,
  accept: z.boolean().refine((val) => val === true, 'You must accept the terms of use.'),
  picture: pictureSchema,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});
