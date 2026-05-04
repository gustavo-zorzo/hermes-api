import { describe, expect, it } from "vitest";
import { EmailVO } from "./EmailVO.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

describe("EmailVO", () => {
  it("email deve conter @", () => {
    expect(() => new EmailVO("testegmail.com")).toThrow(DomainException);
  });
  it("email deve conter dominio", () => {
    expect(() => new EmailVO("teste@.com")).toThrow(DomainException);
  });
  it("email deve ter TLD", () => {
    expect(() => new EmailVO("teste@gmail")).toThrow(DomainException);
  });
  it("deve aceitar email valido", () => {
    expect(new EmailVO("teste@gmail.com").value).toBe("teste@gmail.com");
  });
});
