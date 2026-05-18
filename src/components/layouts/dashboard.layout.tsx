import { Outlet } from "react-router-dom";
import SidebarDashboard from "@components/features/dashboard/sidebar.dashboard";

/**
 * Dashboard layout component.
 * Provides an outlet for rendering nested dashboard routes.
 */
export default function DashboardLayout() {
    return (
        <div className="flex h-screen overflow-hidden gap-6">
            <SidebarDashboard />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
