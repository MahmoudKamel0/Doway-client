import { Outlet } from "react-router-dom";
import SidebarDashboard from "@components/features/dashboard/sidebar.dashboard";

/**
 * Dashboard layout component.
 * Provides an outlet for rendering nested dashboard routes.
 */
export default function DashboardLayout() {
    return (
        <div className="flex h-screen gap-6 overflow-hidden">
            <SidebarDashboard />
            <main className="h-full flex-auto overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}
