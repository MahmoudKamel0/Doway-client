import { Outlet } from "react-router-dom";
import SidebarDashboard from "@components/shared/sidebar.shared";

/**
 * Dashboard layout component.
 * Provides an outlet for rendering nested dashboard routes.
 */
export default function DashboardLayout() {
    return (
        <div className="flex h-screen overflow-hidden">
            <SidebarDashboard />
            <main className="h-full flex-auto overflow-y-auto p-6">
                <Outlet />
            </main>
        </div>
    );
}
