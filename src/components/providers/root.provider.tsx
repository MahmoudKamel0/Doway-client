import type { IBaseProviders } from "@lib/types/providers";
import { Toaster } from "@components/ui/sonner.ui";

/**
 * RootProvider component that wraps the application with any required global providers.
 *
 * @param {Readonly<IBaseProviders>} props - The provider's props.
 * @param {React.ReactNode} props.children - The child components to render within the provider context.
 * @returns {JSX.Element} The rendered children wrapped by the root provider.
 */
export default function RootProvider({ children }: Readonly<IBaseProviders>) {
    return (
        <>
            {children}
            <Toaster />
        </>
    );
}
