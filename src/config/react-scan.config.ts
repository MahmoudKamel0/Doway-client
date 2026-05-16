export async function enableReactScan() {
    const shouldEnable = true;
    if (!shouldEnable) return;
    const { scan } = await import("react-scan");

    scan({
        enabled: true,
    });
}
