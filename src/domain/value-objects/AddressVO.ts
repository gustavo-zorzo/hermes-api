import { ValueObject } from "../../lib/ValueObject.js";
import type { BrazilianStateVO } from "./BrazilianStateVO.js";
import type { CepVO } from "./CepVO.js";

type Address = {
  street: string;
  neighbourhood: string;
  city: string;
  state: BrazilianStateVO;
  zipcode: CepVO;
};

export class AddressVO extends ValueObject<Address> {
  constructor(value: Address) {
    super(value);
  }
}
