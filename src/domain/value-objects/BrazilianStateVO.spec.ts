import { it, describe, expect } from "vitest";
import { BrazilianStateVO } from "./BrazilianStateVO.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

describe("BrazilianStateVO", () => {
  it("não deve aceitar um estado invalido", () => {
    // @ts-expect-error
    expect(() => new BrazilianStateVO("VIRGINIA")).toThrow(DomainException);
  });
  it("não deve aceitar string vazia", () => {
    // @ts-expect-error
    expect(() => new BrazilianStateVO("")).toThrow(DomainException);
  });
  it("deve aceitar um estado valido", () => {
    expect(new BrazilianStateVO("AC").value).toBe("AC");
  });
});
