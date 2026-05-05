export abstract class DomainEvent<T> {
  eventType: string;
  occuredAt: Date;
  payload: T;
  constructor(eventType: string, payload: T) {
    this.eventType = eventType;
    this.occuredAt = new Date();
    this.payload = payload;
  }
}
