import { Customer, type CustomerProps } from "@domain/entities/Customer.js";
import { AddressVO } from "@domain/value-objects/AddressVO.js";
import { BrazilianStateVO } from "@domain/value-objects/BrazilianStateVO.js";
import { CepVO } from "@domain/value-objects/CepVO.js";
import { DocumentTypeVO } from "@domain/value-objects/DocumentVO.js";
import { EmailVO } from "@domain/value-objects/EmailVO.js";

export class CustomerMock {
  static create(props?: Partial<CustomerProps>): Customer {
    const defaultProps: CustomerProps = {
      name: "mock nome",
      document: new DocumentTypeVO("010.096.190-80"),
      address: new AddressVO({
        street: "rua mock",
        neighbourhood: "bairro mock",
        city: "cidade mock",
        state: new BrazilianStateVO("SP"),
        zipcode: new CepVO("12345789"),
      }),
      email: new EmailVO("teste@mock.com"),
    };
    return new Customer({ ...defaultProps, ...props });
  }
}
