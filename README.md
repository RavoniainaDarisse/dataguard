# DataGuard

**Professional TypeScript data validation and normalization system.**

DataGuard is a practical Software Engineering project built with TypeScript to validate, normalize, and safely process external user data.

The project focuses on strict typing, runtime validation, structured error handling, data normalization, automated testing, and Continuous Integration.

## Features

* Type-safe user data modeling
* Runtime validation of external data
* Email validation and normalization
* Phone number validation
* User name validation and normalization
* Structured validation results
* Centralized error collection
* Automated unit tests
* TypeScript strict mode
* GitHub Actions CI

## Architecture

```text
External Data
     │
     ▼
Validation
     │
     ├── User validation
     ├── Email validation
     └── Phone validation
     │
     ▼
Error Collection
     │
     ├── Invalid → Validation errors
     │
     └── Valid
           │
           ▼
      Normalization
           │
           ▼
      Valid User Data
```

### Project structure

```text
dataguard/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── services/
│   │   └── userValidationService.ts
│   ├── tests/
│   │   └── emailValidator.test.ts
│   ├── types/
│   │   ├── user.ts
│   │   └── validation.ts
│   ├── utils/
│   │   └── logger.ts
│   └── validators/
│       ├── dataValidator.ts
│       ├── emailNormalizer.ts
│       ├── normalizeUser.ts
│       ├── userValidator.ts
│       └── usernameNormalizer.ts
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Technologies

* TypeScript
* Node.js
* Node.js Test Runner
* Git
* GitHub
* GitHub Actions
* npm

## TypeScript concepts demonstrated

DataGuard applies several TypeScript concepts in a practical project:

* Strict typing
* `unknown` and type narrowing
* Type inference
* Union types
* Discriminated unions
* Generics
* Optional properties
* Array processing
* Typed functions
* Runtime validation
* Error handling

## Validation Result

DataGuard uses a discriminated union to represent validation results:

```ts
type ValidationResult<T> =
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
```

This allows TypeScript to safely narrow the result depending on the value of `valid`.

## Testing

Run the complete test suite:

```bash
npm test
```

The test command:

1. Compiles the TypeScript project.
2. Runs the compiled tests with Node.js.
3. Reports passed and failed tests.

## Build

Compile the project:

```bash
npm run build
```

## Run

Run the compiled application:

```bash
npm start
```

## Continuous Integration

DataGuard uses GitHub Actions to automatically verify the project when changes are pushed to `main` or submitted through a Pull Request.

The CI pipeline:

```text
Push / Pull Request
        │
        ▼
GitHub Actions
        │
        ▼
Install dependencies
        │
        ▼
TypeScript build
        │
        ▼
Run tests
        │
        ▼
Pass / Fail
```

## Engineering Practices

The project applies several professional development practices:

* Strict TypeScript configuration
* Separation of responsibilities
* Validation before normalization
* Structured error handling
* Automated testing
* Git version control
* Continuous Integration
* Technical documentation

## Project Goal

DataGuard was developed as part of a Software Engineering learning path to practice building reliable TypeScript systems with professional development practices.

The project serves as a foundation for more advanced backend, DevOps, and AI automation projects.
