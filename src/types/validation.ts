export type ValidationResult<T> =
    | {
        valid: true;
        data: T;
        errors: [];
    }
    | {
        valid: false;
        data: null;
        errors: string[];
    };