import { ValueObject } from "../../lib/ValueObject.js";

export const OrderStatus = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
} as const;

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

export class OrderStatusVO extends ValueObject<OrderStatus> {
  constructor(value: OrderStatus) {
    super(value);
  }
}
