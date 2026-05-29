import type { TLoginAuthResponse } from "@lib/types/api";
import type { TLoginAuthData } from "@lib/types/auth";
import ky from "ky";

export async function loginApi(userBody: TLoginAuthData) {
    return (await ky.post("https://ecommerce.routemisr.com/api/v1/auth/signin", { json: userBody }).json()) as TLoginAuthResponse;
}
