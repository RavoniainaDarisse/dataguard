import type { User } from "../types/user.js";
import { normalizeUserName } from "./usernameNormalizer.js";

export function normalizeUser(
    user: User,
    email: string,
    phone: string | undefined
): User {
    return {
        ...user,

        ...(phone !== undefined
            ? { phone }
            : {}),

        name: normalizeUserName(user.name),
        email
    };
}