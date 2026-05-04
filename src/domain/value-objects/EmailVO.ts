import { ValueObject } from "../../lib/ValueObject.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

export class EmailVO extends ValueObject<string> {
  constructor(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      throw new DomainException("Enter a valid email");
    }
    super(email);
  }
}
