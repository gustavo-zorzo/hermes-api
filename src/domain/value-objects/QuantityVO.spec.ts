import { describe, expect, it } from "vitest";
import { QuantityVO } from "./QuantityVO.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

describe("QuantityVO", () => {
  it("deve ser maior que 0", () => {
    expect(() => new QuantityVO(0)).toThrow(DomainException);
  });
  it("deve ser um inteiro", () => {
    expect(() => new QuantityVO(0.5)).toThrow(DomainException);
  });
  it("deve aceitar um inteiro pequeno", () => {
    expect(new QuantityVO(1).value).toBe(1);
  });
  it("deve aceitar inteiro grande", () => {
    expect(new QuantityVO(999999999999).value).toBe(999999999999);
  });
});
