import { CalendarIcon, FileTextIcon, DollarSignIcon, UsersIcon, Building2Icon } from "lucide-react";
import { PortalRole } from "@lib/enums/roles.enum";

const ADMIN_ANALYSIS_INFORMATION_DASHBOARD = [
    {
        icon: UsersIcon,
        title: "Total Employees",
        description: "Active workforce",
        value: "3",
    },
    {
        icon: Building2Icon,
        title: "Departments",
        description: "Organization units",
        value: "10",
    },
    {
        icon: CalendarIcon,
        title: "Today's Attendance",
        description: "Checked in today",
        value: "5",
    },
    {
        icon: FileTextIcon,
        title: "Pending Leaves",
        description: "Awaiting approval",
        value: "2",
    },
];

const EMPLOYEE_ANALYSIS_INFORMATION_DASHBOARD = [
    {
        icon: CalendarIcon,
        title: "Days Present",
        description: "This month",
        value: "20",
    },
    {
        icon: FileTextIcon,
        title: "Pending Leaves",
        description: "Awaiting approval",
        value: "2",
    },
    {
        icon: DollarSignIcon,
        title: "Latest Payslip",
        description: "Most recent payout",
        value: "N/A",
    },
];

/**
 * Returns an array of analysis information cards for the dashboard
 * based on the user's portal role.
 *
 * @param {PortalRole} role - The portal role of the user (e.g., Admin, Employee).
 * @returns {Array<Object>} The list of analysis card data objects relevant to the given role.
 */
export const getAnalysisInformation = (role: PortalRole) => {
    return role === PortalRole.ADMIN ? ADMIN_ANALYSIS_INFORMATION_DASHBOARD : EMPLOYEE_ANALYSIS_INFORMATION_DASHBOARD;
};
