import { cpf, cnpj } from "cpf-cnpj-validator";
import { ValueObject } from "../../lib/ValueObject.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

export const DocumentType = {
  CPF: "CPF",
  CNPJ: "CNPJ",
} as const;

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];

export class DocumentTypeVO extends ValueObject<{
  value: string;
  type: DocumentType;
}> {
  constructor(value: string) {
    if (cpf.isValid(value)) {
      super({ value, type: "CPF" });
    } else if (cnpj.isValid(value)) {
      super({ value, type: "CNPJ" });
    } else {
      throw new DomainException("Enter a valid document");
    }
  }
}
