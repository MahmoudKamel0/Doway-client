import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { PortalRole } from "@lib/enums/roles.enum";
import CardsAnalysisInformationDashboard from "@components/features/dashboard/cards-analysis-information.dashboard";
import { Button } from "@components/ui/button.ui";

/**
 * DashboardPage renders the main dashboard view based on the user's portal role.
 *
 * @returns {JSX.Element} A section containing the dashboard content for admin or employee roles.
 */
export default function DashboardPage() {
    const ROLE = PortalRole.ADMIN;
    const FIRST_NAME_USER = "Mahmoud";
    const EMPLOYEE_POSITION = "Accountant";
    const EMPLOYEE_DEPARTMENT = "Finance";

    return (
        <section id="dashboard-page">
            <h1 className="text-xl font-semibold">{ROLE === PortalRole.ADMIN ? "Dashboard" : `Welcome, ${FIRST_NAME_USER}`}</h1>
            <p className="text-sm text-slate-500">
                {ROLE === PortalRole.ADMIN
                    ? "Welcome back, Admin - here's your overview"
                    : `${EMPLOYEE_POSITION} - ${EMPLOYEE_DEPARTMENT ?? "No Department"}`}
            </p>

            <CardsAnalysisInformationDashboard role={ROLE} />

            <div className="mt-8 flex items-center gap-3">
                <Button asChild>
                    <Link to="/attendance">
                        Mark Attendance <ArrowRightIcon />
                    </Link>
                </Button>
                <Button variant="secondary" asChild>
                    <Link to="/leave">
                        Apply for Leave <ArrowRightIcon />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
