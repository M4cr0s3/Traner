import {z} from 'zod'

export const createUserInput = z.object({
    email: z.string().email(),
    name: z.string().min(2).max(50),
    surname: z.string().min(3).max(50),
    password: z.string().min(8).max(50),
})

export const createUserSchema = createUserInput.extend({
    salt: z.string()
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(50)
})

export const registerResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    email: z.string(),
})

export type User = z.infer<typeof createUserInput>