export function localstorage() {
    return {
        get(key: string) {
            return localStorage.getItem(key);
        },
        set(key: string, value: unknown) {
            const v = JSON.stringify(value);
            return localStorage.setItem(key, v);
        },
    };
}
