import { ValueObject } from "../../lib/ValueObject.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

export class QuantityVO extends ValueObject<number> {
  constructor(value: number) {
    if (value < 1 || !Number.isInteger(value)) {
      throw new DomainException("Value must be greater than 0 and an Integer");
    }
    super(value);
  }
}
