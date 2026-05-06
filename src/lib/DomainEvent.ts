export abstract class DomainEvent<T> {
  eventType: string;
  occurredAt: Date;
  payload: T;
  constructor(eventType: string, payload: T) {
    this.eventType = eventType;
    this.occurredAt = new Date();
    this.payload = payload;
  }
}
