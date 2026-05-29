import type { TLoginAuthData } from "@lib/types/auth";
import { toast } from "sonner";
import { loginApi } from "@lib/api/auth.api";

export async function loginAction(formData: TLoginAuthData) {
    toast.promise(loginApi(formData), {
        loading: "Loading...",
        success: ({ user }) => {
            window.location.assign("/dashboard");
            return `${user.name} welcome back!`;
        },
        error: () => "Incorrect email or password",
    });
}
