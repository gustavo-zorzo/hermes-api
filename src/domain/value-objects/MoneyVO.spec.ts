import { describe, it, expect } from "vitest";
import { MoneyVO } from "./MoneyVO.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

describe("MoneyVO", () => {
  it("deve aceitar zero", () => {
    expect(new MoneyVO(0).value).toBe(0);
  });

  it("deve lançar erro para valor negativo", () => {
    expect(() => new MoneyVO(-1)).toThrow(DomainException);
  });

  it("deve lançar erro para float", () => {
    expect(() => new MoneyVO(0.5)).toThrow(DomainException);
  });
  it("deve aceitar inteiro pequeno", () => {
    expect(new MoneyVO(1).value).toBe(1);
  });
  it("deve aceitar inteiro gigante", () => {
    expect(new MoneyVO(9999999999999999999999999999).value).toBe(
      9999999999999999999999999999,
    );
  });
});
