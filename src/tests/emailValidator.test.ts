import test from "node:test";
import assert from "node:assert/strict";

import { validateEmail } from "../validators/dataValidator.js";
test("validateEmail refuse un email vide", () => {
    const result = validateEmail("");

    assert.equal(result.valid, false);
});

test("validateEmail refuse un email invalide", () => {
    const result = validateEmail("email-invalide");

    assert.equal(result.valid, false);
});

test("validateEmail refuse une valeur non-string", () => {
    const result = validateEmail(123);

    assert.equal(result.valid, false);
});