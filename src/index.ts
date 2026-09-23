import {
    logInfo,
    logWarning,
    logError
} from "./utils/logger.js";

import { validateEmail } from "./validators/dataValidator.js";
import { isValidUserId, isValidUserName } from "./validators/userValidator.js";
const receivedData = [
    {
        id: 1,
        name: "Ravoniaina",
        email: "user1@example.com"
    },
    {
        id: 2,
        name: "Heriniaina",
        email: ""
    },
    {
        id: 3,
        name: "randrianirina",
        email: "rendrianairinagmail.com"
    },
    {
        id: 4,
        name: "",
        email : "rado@gmail.com"
    }
];

console.table(receivedData)

for (const data of receivedData){
    if(!isValidUserId(data.id)){
        logError(`User invalide : id incorrect`);
        continue;
    }

    if(!isValidUserName(data.name)){
        logError(`User ${data.id} : nom invalide`);
        continue;
    }

    const result =  validateEmail(data.email);

    if(!result.valid){
        logError(`User ${data.id} : ${result.reason}`)
        continue;
    }

    logInfo(`User ${data.id} : donne valide`)

}
