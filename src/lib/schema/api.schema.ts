import z from "zod";

export const LoginAuthResponseSchema = z.object({
    message: z.string(),
    user: z.object({
        name: z.string(),
        email: z.string(),
        role: z.string(),
    }),
    token: z.string(),
});