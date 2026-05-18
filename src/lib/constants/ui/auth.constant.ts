import { ShieldIcon, UserIcon } from "lucide-react";

export const ROLES_OPTIONS = [
    {
        path: "/auth/login/admin",
        title: "Admin Portal",
        description: "Manage employee, departments, payroll, and system configurations.",
        icons: ShieldIcon,
    },
    {
        path: "/auth/login/employee",
        title: "Employee Portal",
        description: "View your profile, track attendance, requests time off, and access payslips",
        icons: UserIcon,
    },
];
