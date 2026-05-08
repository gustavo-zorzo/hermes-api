import type { DomainEvent } from "../../lib/DomainEvent.js";

export interface IEventBus {
  publish<T>(events: DomainEvent<T>[]): Promise<void>;
}
