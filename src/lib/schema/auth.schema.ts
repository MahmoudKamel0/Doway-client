import z from "zod";

/**
 * Zod schema for user login validation.
 * Ensures email and password fields are non-empty.
 */
export const LoginAuthSchema = z.object({
    email: z.email().nonempty(),
    password: z.string().nonempty(),
});
