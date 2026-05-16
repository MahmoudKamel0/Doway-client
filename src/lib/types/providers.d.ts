import type { ReactNode } from "react";

export = ProvidersTypes;
export as namespace ProvidersTypes;

namespace ProvidersTypes {
    interface IBaseProviders {
        children: ReactNode;
    }
}
