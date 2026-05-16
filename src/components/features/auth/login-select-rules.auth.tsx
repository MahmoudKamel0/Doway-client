import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ROLES_OPTIONS } from "@lib/constants/ui/auth.constant";

export default function LoginRoleSelectionAuth() {
    return (
        <section id="login-role-selection" className="fade-in">
            <h2 className="text-xl font-medium">Welcome Back</h2>
            <p className="text-sm text-slate-500">select your portal to securely access the systems</p>

            <ul className="my-4 flex flex-col gap-4">
                {ROLES_OPTIONS.map((role) => (
                    <li>
                        <Link
                            key={role.path}
                            to={role.path}
                            className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 p-4 text-sm transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600"
                        >
                            {role.title}
                            <ArrowRightIcon size="15" />
                        </Link>
                    </li>
                ))}
            </ul>

            <footer className="mt-8 text-xs text-slate-400">
                © {new Date().getFullYear()} Doway employee Management System. All rights reserved.
            </footer>
        </section>
    );
}
