import ButtonBackLoginAuth from "@components/features/auth/button-back-login.auth";
import LoginFormAuth from "@components/features/auth/login-form.auth";

export default function LoginEmployeePage() {
    return (
        <section id="employee-auth" className="flex h-full flex-col gap-10">
            <ButtonBackLoginAuth />
            <div>
                <h2 className="text-xl font-medium text-zinc-800 sm:text-lg">Hello Employee</h2>
                <p className="text-sm text-slate-500">Sign in to access your account</p>
            </div>
            <LoginFormAuth />
        </section>
    );
}
