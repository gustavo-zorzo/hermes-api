import { describe, it, expect } from "vitest";
import { CepVO } from "./CepVO.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

describe("CepVO", () => {
  it("não deve aceitar CEP com mais de 8 digitos", () => {
    expect(() => new CepVO("123456789")).toThrow(DomainException);
  });
  it("não deve aceitar CEP com menos de 8 digitos", () => {
    expect(() => new CepVO("123")).toThrow(DomainException);
  });
  it("não deve aceitar cep com hifen", () => {
    expect(() => new CepVO("12345-040")).toThrow(DomainException);
  });
  it("deve aceitar um CEP valido", () => {
    expect(new CepVO("12345678").value).toBe("12345678");
  });
});
