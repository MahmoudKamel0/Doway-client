import { Calendar1Icon, FileTextIcon, LayoutGridIcon, UserIcon, DollarSignIcon, SettingsIcon } from "lucide-react";
import { PortalRole } from "@lib/enums/roles.enum";

export const getSidebarNavLinks = (role: PortalRole) =>
    [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutGridIcon,
        },
        {
            name: role === PortalRole.ADMIN ? "Admin" : "Employees",
            path: role === PortalRole.ADMIN ? "/admin" : "/employees",
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
