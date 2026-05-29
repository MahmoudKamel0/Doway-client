import { RouterProvider } from "react-router-dom";
import { routing } from "@config/routing.config";
import RootProvider from "@components/providers/root.provider";

/**
 * The root Application component.
 *
 * Serves as the main entry point for the app, wrapping all pages and routes
 * with global providers (e.g., context, theming, state management).
 *
 * @returns {JSX.Element} The React element containing all app routes wrapped by providers.
 */
export default function Application() {
    return (
        <RootProvider>
            <RouterProvider router={routing} />
        </RootProvider>
    );
}
