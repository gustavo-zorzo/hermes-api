import type { EventMapper } from "../../lib/EventMapper.js";
import type {
  OrderCreatedEvent,
  OrderCreatedEventProps,
} from "@domain/events/OrderCreatedEvent.js";

export class OrderCreatedEventMapper implements EventMapper<
  OrderCreatedEvent,
  OrderCreatedEventProps
> {
  toPayload(input: OrderCreatedEvent): OrderCreatedEventProps {
    return input.payload;
  }
}
