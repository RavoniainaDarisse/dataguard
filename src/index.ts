import {
    logInfo,
    logWarning,
    logError
} from "./utils/logger.js";

import { validateEmail } from "./validators/dataValidator.js";
const receivedData = [
    {
        id: 1,
        name: "Ravoniaina",
        email: "user1@example.com"
    },
    {
        id: 2,
        name: "Test",
        email: ""
    },
    {
        id: 3,
        name: "Invalid",
        email: "invalid-email"
    },
    {
        id: 4,
        name: "WrongType",
        email: 123
    },
    {
        id: 5,
        name: "NullValue",
        email: null
    },
    {
        id: 6,
        name: "UndefinedValue",
        email: undefined
    },
    {
        id: 7,
        name: "BooleanValue",
        email: true
    }
];

console.table(receivedData)

for (const data of receivedData){
    const result =  validateEmail(data.email);

    if(!result.valid){
        logError(`User ${data.id} : ${result.reason}`)
        continue;
    }

    logInfo(`User ${data.id} : donne valide`)

}
