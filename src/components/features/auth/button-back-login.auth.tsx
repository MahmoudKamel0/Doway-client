import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function ButtonBackLoginAuth() {
    return (
        <Link
            to="/auth/login"
            className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-700"
        >
            <ArrowLeftIcon size="16" />
            Back to portals
        </Link>
    );
}
