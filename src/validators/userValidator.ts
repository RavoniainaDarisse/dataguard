export function isValidUserId(value: unknown): boolean {
    return typeof value === "number" && value > 0;
}

export function isValidUserName(value: unknown): boolean {
    return typeof value === "string" && value.length > 0;
}

