import type { DomainEvent } from "./DomainEvent.js";
import { Entity } from "./Entity.js";
import type { EntityIDVO } from "./EntityIDVO.js";

export abstract class AggregateRoot<T> extends Entity<T> {
  private readonly $eventsDomain: Array<DomainEvent<unknown>> = [];

  constructor(props: T, id?: EntityIDVO) {
    super(props, id);
  }
  raiseEvent<T>(event: DomainEvent<T>): void {
    this.$eventsDomain.push(event);
  }
  get raisedEvents(): Array<DomainEvent<unknown>> {
    return this.$eventsDomain;
  }
}
