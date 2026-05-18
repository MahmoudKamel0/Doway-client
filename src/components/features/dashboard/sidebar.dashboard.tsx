import { LogOutIcon, UserIcon } from "lucide-react";
import { getSidebarNavLinks } from "@lib/constants/ui/sidebar.constant";
import { PortalRole } from "@lib/enums/roles.enum";
import { Button } from "@components/ui/button.ui";
import { Sidebar, SidebarBody, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@components/ui/sidebar.ui";

export default function SidebarDashboard() {
    const USER_NAME = "Mahmoud Kamel";
    const ROLE = PortalRole.EMPLOYEE;
    const SIDEBAR_NAV_LINKS = getSidebarNavLinks(ROLE);

    return (
        <Sidebar>
            {/*  */}
            <SidebarHeader>
                <div className="flex items-center gap-3">
                    <UserIcon size="20" className="text-white" />
                    <div className="">
                        <h2 className="tracking-white text-sm font-semibold text-white">Doway Employee MS</h2>
                        <p className="text-xs font-medium text-slate-500">Management System</p>
                    </div>
                </div>

                {USER_NAME && (
                    <div className="mt-4 mb-1 flex items-center gap-3 rounded-lg border border-white/4 bg-white/3 px-3 py-1.5">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-400 ring-1 ring-white/10">
                            {USER_NAME.charAt(0).toUpperCase()}
                        </span>
                        <div className="">
                            <strong className="truncate text-sm font-medium text-slate-200">{USER_NAME}</strong>
                            <p className="truncate text-xs text-slate-500">{ROLE}</p>
                        </div>
                    </div>
                )}
            </SidebarHeader>

            {/*  */}
            <SidebarBody>
                <SidebarMenu label="navigation">
                    {SIDEBAR_NAV_LINKS.map((item) => (
                        <SidebarMenuItem key={item.name} href={item.path} className="text-sm">
                            <item.icon className="size-4" /> {item.name}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarBody>

            {/*  */}
            <SidebarFooter>
                <Button className="flex w-full items-center gap-3 rounded-md bg-rose-500 px-3 py-2.5 text-sm font-medium text-slate-200 transition-[background,colors] duration-150 hover:bg-rose-500/80 hover:text-slate-400">
                    <LogOutIcon />
                    logout
                </Button>
            </SidebarFooter>
        </Sidebar>
    );
}
