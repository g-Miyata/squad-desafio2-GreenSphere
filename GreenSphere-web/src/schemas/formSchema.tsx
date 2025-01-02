import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(3, 'The plant name must have at least 3 characters.').max(40, 'The plant name must have at most 40 characters.'),
  subtitle: z.string().min(3, 'The subtitle must have at least 3 characters.').max(50, 'The subtitle must have at most 50 characters.'),
  type: z.string().min(3, 'The plant type must have at least 3 characters.').max(30, 'The plant type must have at most 30 characters.'),
  price: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value) && value > 0, {
      message: 'The price must be a positive number.',
    }),
  discount: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value) && value >= 0 && value <= 100, {
      message: 'The discount must be a number between 0 and 100.',
    }),
  labelOption: z.enum(['Indoor', 'Outdoor'], {
    errorMap: () => ({ message: 'Select one of the options: Indoor or Outdoor.' }),
  }),
  features: z.string().min(10, 'The features must have at least 10 characters.').max(200, 'The features must have at most 200 characters.'),
  description: z.string().min(10, 'The description must have at least 10 characters.').max(500, 'The description must have at most 500 characters.'),
  label: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
