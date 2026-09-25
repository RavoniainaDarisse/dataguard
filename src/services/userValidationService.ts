import type { User } from "../types/user.js";
import type { ValidationResult } from "../types/validation.js";

import { validateEmail, validatePhone } from "../validators/dataValidator.js";
import { normalizeUser } from "../validators/normalizeUser.js";

import {
    isValidUserId,
    isValidUserName
} from "../validators/userValidator.js";

function collectErrors(
    errors: string[],
    result: ValidationResult<unknown>
): void {
    if (!result.valid) {
        errors.push(...result.errors);
    }
}

export function validateUser(
    user: User
): ValidationResult<User> {

    const errors: string[] = [];

    if (!isValidUserId(user.id)) {
        errors.push("ID utilisateur invalide");
    }

    if (!isValidUserName(user.name)) {
        errors.push("Nom utilisateur invalide");
    }

    const emailResult = validateEmail(user.email);
    const phoneResult = validatePhone(user.phone);

    collectErrors(errors, emailResult);
    collectErrors(errors, phoneResult);

    if (
        errors.length > 0 ||
        !emailResult.valid ||
        !phoneResult.valid
    ) {
        return {
            valid: false,
            data: null,
            errors
        };
    }

    return {
        valid: true,
        data: normalizeUser(
            user,
            emailResult.data,
            phoneResult.data
        ),
        errors: []
    };
}