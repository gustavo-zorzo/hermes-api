import { ValueObject } from "../../lib/ValueObject.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

export class MoneyVO extends ValueObject<number> {
  constructor(value: number) {
    if (value < 0 || !Number.isInteger(value)) {
      throw new DomainException(
        "Number must be greater or equal to 0 and an Integer",
      );
    }
    super(value);
  }
}
