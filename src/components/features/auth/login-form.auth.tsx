import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginAction } from "@lib/actions/auth.action";
import { LoginAuthSchema } from "@lib/schema/auth.schema";
import { Button } from "@components/ui/button.ui";
import { Field, FieldLabel } from "@components/ui/field.ui";
import InputPassword from "@components/ui/input-password.ui";
import { Input } from "@components/ui/input.ui";

export default function LoginFormAuth() {
    const {
        register,
        handleSubmit,
        control,
        formState: { isSubmitting, isReady },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(LoginAuthSchema),
    });

    return (
        <form onSubmit={handleSubmit(loginAction)} className="flex flex-col gap-8">
            <Field>
                <FieldLabel htmlFor="email" className="mb-2 w-fit! text-sm font-medium text-slate-700">
                    Email address
                </FieldLabel>
                <Input id="email" type="email" autoComplete="email" placeholder="yassin@gmail.com" {...register("email")} />
            </Field>

            <Field>
                <FieldLabel htmlFor="password" className="mb-2 w-fit! text-sm font-medium text-slate-700">
                    Password
                </FieldLabel>
                <InputPassword id="password" placeholder="•••••••••••" {...register("password")} />
            </Field>

            <Field>
                <Button
                    id="btn-submit"
                    variant="gradient"
                    size="lg"
                    disabled={!isReady || isSubmitting}
                    aria-disabled={!isReady || isSubmitting}
                >
                    login
                </Button>
            </Field>

            <DevTool control={control} />
        </form>
    );
}
