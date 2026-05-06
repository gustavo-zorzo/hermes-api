import { Customer } from "@domain/entities/Customer.js";
import type { EntityIDVO } from "../../lib/EntityIDVO.js";
import type { DocumentTypeVO } from "@domain/value-objects/DocumentVO.js";

export interface ICustomerRepositort {
  create(customer: Customer): Promise<void>;
  findById(id: EntityIDVO): Promise<Customer | null>;
  findByDocument(document: DocumentTypeVO): Promise<Customer | null>;
}
