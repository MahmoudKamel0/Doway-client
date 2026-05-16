import z from "zod";
import { LoginAuthSchema } from "@lib/schema/auth.schema";

export = AuthTypes;
export as namespace AuthTypes;

namespace AuthTypes {
    type TLoginAuthData = z.infer<typeof LoginAuthSchema>;
}
