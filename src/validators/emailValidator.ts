export function isValidEmail(email : unknown) : boolean{
    if (typeof email !== "string") {
        return false;
    }
    return email.includes('@')
}