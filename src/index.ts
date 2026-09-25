
import type { User } from "./types/user.js";

import {
    logInfo,
    logError
} from "./utils/logger.js";

import { validateUser } from "./services/userValidationService.js";


/**
 * Données reçues depuis une source externe.
 */
const receivedData: User[] = [
    {
        id: 1,
        name: "Ravoniaina",
        email: "user1@example.com",
        phone: "0341209922",
        metadata: {
            source: "api",
            createdAt: "2026-09-23"
        }
    },
    {
        id: 3,
        name: "",
        email: "rendrianairinagmail.com",
        metadata: {
            source: "api",
            createdAt: "2026-09-23"
        }
    },
    {
        id: 4,
        name: "  Jean  ",
        email: "jean@example.com",
        phone: "12345",
        metadata: {
            source: "api",
            createdAt: "2026-09-23"
        }
    }
];


/**
 * Validation des données reçues.
 */
console.log("=== VALIDATION DES DONNÉES ===");

for (const user of receivedData) {
    const result = validateUser(user);

    if (result.valid) {
        logInfo(`User ${result.data.id} : donnée valide`);
        console.table(result.data);
    } else {
        logError(`User ${user.id} : données invalides`);
    
        for (const error of result.errors) {
            logError(`  - ${error}`);
        }
    }
}