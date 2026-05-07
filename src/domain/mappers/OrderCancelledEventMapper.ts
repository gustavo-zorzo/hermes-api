import type {
  OrderCancelledEvent,
  OrderCancelledEventProp,
} from "@domain/events/OrderCancelledEvent.js";
import type { EventMapper } from "../../lib/EventMapper.js";

export class OrderCancelledEventMapper implements EventMapper<
  OrderCancelledEvent,
  OrderCancelledEventProp
> {
  toPayload(input: OrderCancelledEvent): OrderCancelledEventProp {
    return input.payload;
  }
}
