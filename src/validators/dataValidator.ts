export function validateEmail(value: unknown): {
    valid: boolean;
    reason?: string;
}{
    if (value === "") {
        return {
             valid: false,
            reason: "Email absent"
        }
    }

    if (typeof value !== "string") {
        return {
            valid: false,
            reason: "Email doit être une chaîne"
        };
    }

    if (!value.includes("@")) {
        return {
            valid: false,
            reason: "Email invalide"
        };
    }
    
    return {
        valid : true
    }
}