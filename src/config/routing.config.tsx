import { createBrowserRouter, redirect } from "react-router-dom";
import AttendancePage from "@pages/attendance.page";
import LoginAdminPage from "@pages/auth/login-admin.page";
import LoginEmployeePage from "@pages/auth/login-employee.page";
import LoginAuthPage from "@pages/auth/login.page";
import EmployeesPage from "@pages/employees.page";
import LeavePage from "@pages/leave.page";
import NotfoundPage from "@pages/not-found.page";
import OverviewPage from "@pages/overview.page";
import PayslipsPage from "@pages/payslips.page";
import PrintPayslipPage from "@pages/print-payslip.page";
import SettingsPage from "@pages/settings.page";
import AuthLayout from "@components/layouts/auth.layout";
import RootLayout from "@components/layouts/root.layout";

export const routing = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        index: true,
                        loader: () => redirect("/auth/login"),
                    },
                    {
                        path: "login",
                        element: <LoginAuthPage />,
                    },
                    {
                        path: "login/admin",
                        element: <LoginAdminPage />,
                    },
                    {
                        path: "login/employee",
                        element: <LoginEmployeePage />,
                    },
                    {
                        path: "signin",
                        element: <p>signin</p>,
                    },
                ],
            },
            {
                index: true,
                element: <p>hello world</p>,
            },
            {
                path: "overview",
                element: <OverviewPage />,
            },
            {
                path: "employees",
                element: <EmployeesPage />,
            },
            {
                path: "attendance",
                element: <AttendancePage />,
            },
            {
                path: "leave",
                element: <LeavePage />,
            },
            {
                path: "payslips",
                element: <PayslipsPage />,
            },
            {
                path: "settings",
                element: <SettingsPage />,
            },

            {
                path: "payslips/print/:id",
                element: <PrintPayslipPage />,
            },

            {
                path: "*",
                element: <NotfoundPage />,
            },
        ],
    },
]);
