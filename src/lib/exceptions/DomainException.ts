import { HttpStatus } from "../controllers/HttpStatusCode.js";

export class DomainException extends Error {
  readonly code: string;
  readonly statusCode: number;

  constructor(
    message: string,
    code = "DOMAIN_ERROR",
    statusCode = HttpStatus.BAD_REQUEST,
  ) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
}
