import { describe, expect, it } from "vitest";
import { AddressVO } from "./AddressVO.js";
import { CepVO } from "./CepVO.js";
import { BrazilianStateVO } from "./BrazilianStateVO.js";

describe("AddressVO", () => {
  it("deve aceitar um endereço valido", () => {
    expect(
      new AddressVO({
        street: "Rua teste",
        neighbourhood: "Bairro Teste",
        city: "Campinas",
        state: new BrazilianStateVO("SP"),
        zipcode: new CepVO("12345678"),
      }).value,
    ).toEqual({
      street: "Rua teste",
      neighbourhood: "Bairro Teste",
      city: "Campinas",
      state: new BrazilianStateVO("SP"),
      zipcode: new CepVO("12345678"),
    });
  });
});
