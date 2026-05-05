import { ValueObject } from "../../lib/ValueObject.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

export class CepVO extends ValueObject<string> {
  constructor(value: string) {
    const regex = /^\d{8}$/;
    if (!regex.test(value)) {
      throw new DomainException("Enter a valid CEP");
    }
    super(value);
  }
}
