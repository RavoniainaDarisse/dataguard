import {
    logInfo,
    logWarning,
    logError
} from "./utils/logger.js";

import { validateEmail } from "./validators/dataValidator.js";
import { isValidUserId, isValidUserName } from "./validators/userValidator.js";
const receivedData :{
    id : number,
    name : string,
    email :string,
    phone? : string,
    metadata :{
        source : string,
        createdAt : string
    }
}[] = [
    {
        id: 1,
        name: "Ravoniaina",
        email: "user1@example.com",
        phone : "0341209922",
        metadata: {
            source: "api",
            createdAt: "2026-09-23"
        }
    },
    {
        id: 3,
        name: "randrianirina",
        email: "rendrianairinagmail.com",
        // phone : "023129000",
        metadata: {
            source: "api",
            createdAt: "2026-09-23"
        }
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


const users : {
    id:number,
    name : string,
    email : string,
    phone? : string,
    metadata:{
        source : string,
        createdAt : string
    }
}[] =[
    {
        id: 1,
        name: "Heritiana",
        email: "user3@example.com",
        phone : "0341209922",
        metadata: {
            source: "api",
            createdAt: "2026-09-23"
        }
    },
    {
        id: 3,
        name: "Niaina",
        email: "rendrianairinagmail.com",
        phone : "",
        metadata: {
            source: "api",
            createdAt: "2026-09-23"
        }
    },
    {
        id: 4,
        name: "Dairsse",
        email: "",
        phone : "0293023093",
        metadata: {
            source: "api",
            createdAt: "2026-09-24"
        }
    }
]

const FilterUserEmail = users.filter(user =>{
    return user.email
})
console.log(FilterUserEmail)

const MapNameUserEmail = FilterUserEmail.map(user =>{
    return user.name
})
console.log(MapNameUserEmail)

const NbrUserEmail = FilterUserEmail.reduce((count, user)=>{
        return user.email ? count + 1 :  count 
},0)
console.log(NbrUserEmail)

const FindUser = users.find(user=>{
    return user.id === 3
})
console.log(FindUser)
