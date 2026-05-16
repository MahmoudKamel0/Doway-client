import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <section className="flex h-screen">
            <div className="cover | relative w-1/2 place-content-center overflow-hidden border-r border-slate-200 bg-indigo-950 p-12 lg:p-20">
                {/* Decorative blurred circle background */}
                <span className="circle | absolute -top-30 -left-30 block h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></span>

                {/* Title and description for the authentication section.
                    Provides users with context about the Employee Management System and its core benefits. */}
                <h1 className="mb-4 text-2xl leading-tight font-medium tracking-tight text-white lg:text-3xl">
                    Employee Management System
                </h1>
                <p className="max-w-md text-slate-400">
                    Streamline your workforce operations, track attendance, manage payroll, and empower your team securely.
                </p>
            </div>
            <main className="h-full w-1/2 place-content-center bg-white p-12 lg:p-20">
                <Outlet />
            </main>
        </section>
    );
}
