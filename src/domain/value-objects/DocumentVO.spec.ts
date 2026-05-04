import { describe, it, expect } from "vitest";
import { DocumentTypeVO } from "./DocumentVO.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

describe("DocumentVO", () => {
  it("deve rejeitar cpf invalido", () => {
    expect(() => new DocumentTypeVO("123.456.789.00")).toThrow(DomainException);
  });
  it("deve rejeitar cnpj invalid", () => {
    expect(() => new DocumentTypeVO("47.388.796/0001-64")).toThrow(
      DomainException,
    );
  });
  it("deve aceitar cpf valido", () => {
    expect(new DocumentTypeVO("010.096.190-80").value).toEqual({
      value: "010.096.190-80",
      type: "CPF",
    });
  });
  it("deve aceitar cnpj valido", () => {
    expect(new DocumentTypeVO("47.388.796/0001-65").value).toEqual({
      value: "47.388.796/0001-65",
      type: "CNPJ",
    });
  });
});
