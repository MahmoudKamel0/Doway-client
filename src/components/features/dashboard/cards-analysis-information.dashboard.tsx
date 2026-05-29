import type { PortalRole } from "@lib/enums/roles.enum";
import { getAnalysisInformation } from "@lib/constants/ui/cards-analysis-Information.constant";
import { Card, CardContent } from "@components/ui/card.ui";

/**
 * CardsAnalysisInformationDashboard renders a section containing analysis information cards
 * for the dashboard view.
 *
 * @returns {JSX.Element} The dashboard cards analysis information section.
 */
export default function CardsAnalysisInformationDashboard({ role }: { role: PortalRole }) {
    const ANALYSIS_INFORMATION_DASHBOARD = getAnalysisInformation(role);

    return (
        <section className="animate-fade-in mt-8 flex items-center gap-5">
            {ANALYSIS_INFORMATION_DASHBOARD.map((item) => (
                <Card className="h-20 flex-auto">
                    <CardContent className="flex items-center justify-between gap-1">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-700">{item.title}</span>
                            <strong className="text-2xl font-semibold text-slate-900">{item.value}</strong>
                        </div>
                        <item.icon className="size-10 rounded-full bg-slate-100 p-2.5 text-slate-600 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600" />
                    </CardContent>
                </Card>
            ))}
        </section>
    );
}
