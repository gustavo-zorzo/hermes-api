import { ValueObject } from "../../lib/ValueObject.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

export const BrazilianStates = {
  AC: "AC",
  AP: "AP",
  AM: "AM",
  PA: "PA",
  RO: "RO",
  RR: "RR",
  TO: "TO",
  AL: "AL",
  BA: "BA",
  CE: "CE",
  MA: "MA",
  PB: "PB",
  PE: "PE",
  PI: "PI",
  RN: "RN",
  SE: "SE",
  DF: "DF",
  GO: "GO",
  MT: "MT",
  MS: "MS",
  ES: "ES",
  MG: "MG",
  RJ: "RJ",
  SP: "SP",
  PR: "PR",
  RS: "RS",
  SC: "SC",
} as const;

export type BrazilianStates =
  (typeof BrazilianStates)[keyof typeof BrazilianStates];

export class BrazilianStateVO extends ValueObject<BrazilianStates> {
  constructor(value: BrazilianStates) {
    if (!Object.values(BrazilianStates).includes(value)) {
      throw new DomainException("Enter an valid state");
    }
    super(value);
  }
}
