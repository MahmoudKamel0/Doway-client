import type { ComponentProps } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@lib/utils/cn.util";

export function Sidebar({ className, children, ...props }: ComponentProps<"aside">) {
    return (
        <aside
            className={cn(
                "flex h-screen w-64 shrink-0 flex-col border-r border-white/4 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 px-5 text-white",
                className,
            )}
            {...props}
        >
            {children}
        </aside>
    );
}

export function SidebarHeader({ className, children, ...props }: ComponentProps<"header">) {
    return (
        <header className={cn("border-b border-white/6 pt-6 pb-5", className)} {...props}>
            {children}
        </header>
    );
}

export function SidebarBody({ className, children, ...props }: ComponentProps<"section">) {
    return (
        <section className={cn("flex-auto", className)} {...props}>
            {children}
        </section>
    );
}

export function SidebarMenu({ className, children, label, ...props }: ComponentProps<"ul"> & { label?: string }) {
    return (
        <ul className={cn("", className)} {...props}>
            {label && <span className="text-[10px] font-semibold tracking-tight text-slate-500 uppercase">{label}</span>}
            {children}
        </ul>
    );
}

export function SidebarMenuItem({ className, children, href, ...props }: ComponentProps<"a">) {
    return (
        <li>
            <NavLink
                to={href}
                className={({ isActive }) =>
                    cn(
                        "relative flex items-center gap-2 rounded-sm p-2",
                        isActive &&
                            "bg-indigo-500/12 text-indigo-300 before:absolute before:top-0 before:-left-3 before:h-full before:w-px before:bg-indigo-500 before:content-['']",
                        className,
                    )
                }
                {...props}
            >
                {children}
            </NavLink>
        </li>
    );
}

export function SidebarFooter({ className, children, ...props }: ComponentProps<"footer">) {
    return (
        <footer className={cn("pb-6 pt-5", className)} {...props}>
            {children}
        </footer>
    );
}
