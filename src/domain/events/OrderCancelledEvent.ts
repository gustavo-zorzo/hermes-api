import { DomainEvent } from "../../lib/DomainEvent.js";

export type OrderCancelledEventProp = {
  id: string;
  customer: {
    id: string;
    name: string;
    document: { value: string; type: "CPF" | "CNPJ" };
    address: {
      street: string;
      neighbourhood: string;
      city: string;
      state: string;
      zipcode: string;
    };
    email: string;
  };
  items: { productId: string; quantity: number; price: number }[];
  totalPrice: number;
};
export class OrderCancelledEvent extends DomainEvent<OrderCancelledEventProp> {
  constructor(payload: OrderCancelledEventProp) {
    super(OrderCancelledEvent.eventName(), payload);
  }
  static eventName() {
    return "order.cancelled";
  }
}
