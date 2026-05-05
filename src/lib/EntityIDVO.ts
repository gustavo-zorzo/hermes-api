import { randomUUID } from "crypto";

export class EntityIDVO {
  public readonly value: string;
  constructor(input?: string) {
    this.value = input ?? randomUUID();
  }
}
