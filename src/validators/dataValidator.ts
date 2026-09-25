import type { ValidationResult } from "../types/validation.js";

import { normalizeEmail } from "./emailNormalizer.js";

export function validateEmail(
    value: unknown
): ValidationResult<string> {

    const errors: string[] = [];

    if (typeof value !== "string") {
        errors.push("Email doit être une chaîne");

        return {
            valid: false,
            data: null,
            errors
        };
    }

    const email = normalizeEmail(value);

    if (email === "") {
        errors.push("Email absent");

        return {
            valid: false,
            data: null,
            errors
        };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errors.push("Email invalide");

        return {
            valid: false,
            data: null,
            errors
        };
    }

    return {
        valid: true,
        data: email,
        errors: []
    };
}

export function validatePhone ( value : unknown) : ValidationResult<string | undefined>{
    if (value === undefined) {
        return {
            valid: true,
            data: undefined,
            errors: []
        };
    }

    if (typeof value !== "string") {
        return {
            valid: false,
            data: null,
            errors: ["Téléphone invalide"]
        };
    }

    const phone = value.trim();

    if (phone === "") {
        return {
            valid: false,
            data: null,
            errors: ["Téléphone vide"]
        };
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        return {
            valid: false,
            data: null,
            errors: ["Numéro de téléphone invalide"]
        };
    }

    return {
        valid: true,
        data: phone,
        errors: []
    };
}