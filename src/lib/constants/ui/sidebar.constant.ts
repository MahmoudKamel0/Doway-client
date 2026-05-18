import type { PortalRole } from "@lib/enums/roles.enum";
import { Calendar1Icon, FileTextIcon, LayoutGridIcon, UserIcon, DollarSignIcon, SettingsIcon } from "lucide-react";

export const getSidebarNavLinks = (role: PortalRole) =>
    [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutGridIcon,
        },
        {
            name: role === "Admin" ? "Admin" : "Employees",
            path: role === "Admin" ? "/admin" : "/employees",
            icon: UserIcon,
        },
        {
            name: "Attendance",
            path: "/attendance",
            icon: Calendar1Icon,
        },
        {
            name: "Leave",
            path: "/leave",
            icon: FileTextIcon,
        },
        {
            name: "Payslips",
            path: "/payslips",
            icon: DollarSignIcon,
        },
        {
            name: "Settings",
            path: "/settings",
            icon: SettingsIcon,
        },
    ] as const;
