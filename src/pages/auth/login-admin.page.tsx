import ButtonBackLoginAuth from "@components/features/auth/button-back-login.auth";
import LoginFormAuth from "@components/features/auth/login-form.auth";

export default function LoginAdminPage() {
    return (
        <section id="admin-auth" className="flex h-full flex-col gap-10">
            <ButtonBackLoginAuth />
            <header>
                <h2 className="text-xl font-medium text-zinc-800 sm:text-lg">Hello Admin</h2>
                <p className="text-sm text-slate-500">Sign in to access your account</p>
            </header>
            <LoginFormAuth />
        </section>
    );
}
