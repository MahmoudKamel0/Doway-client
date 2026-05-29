import z from "zod";
import { LoginAuthResponseSchema } from "@lib/schema/api.schema";

export = ApiTypes;
export as namespace ApiTypes;

namespace ApiTypes {
    type TLoginAuthResponse = z.infer<typeof LoginAuthResponseSchema>;
}
