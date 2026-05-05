import type { AddressVO } from "@domain/value-objects/AddressVO.js";
import type { DocumentTypeVO } from "@domain/value-objects/DocumentVO.js";
import { Entity } from "../../lib/Entity.js";
import type { EntityIDVO } from "../../lib/EntityIDVO.js";
import type { EmailVO } from "@domain/value-objects/EmailVO.js";

type CustomerProps = {
  name: string;
  document: DocumentTypeVO;
  address: AddressVO;
  email: EmailVO;
};

export class Customer extends Entity<CustomerProps> {
  constructor(props: CustomerProps, id?: EntityIDVO) {
    super(props, id);
  }
}
