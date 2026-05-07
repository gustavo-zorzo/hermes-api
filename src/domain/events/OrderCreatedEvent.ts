import { DomainEvent } from "../../lib/DomainEvent.js";

export type OrderCreatedEventProps = {
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
  status: string;
  totalPrice: number;
};

export class OrderCreatedEvent extends DomainEvent<OrderCreatedEventProps> {
  constructor(payload: OrderCreatedEventProps) {
    super(OrderCreatedEvent.eventName(), payload);
  }
  static eventName() {
    return "order.created";
  }
}
