export function getDocHeight(): string {
    if (typeof window !== "undefined") {
        return ` calc(${window.innerHeight}px - 55px)`;
    }
    return " 100%";
}