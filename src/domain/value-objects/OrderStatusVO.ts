import { ValueObject } from "../../lib/ValueObject.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

export const OrderStatus = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
} as const;

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

export class OrderStatusVO extends ValueObject<OrderStatus> {
  static transitions: Record<OrderStatus, OrderStatus[]> = {
    PENDING: ["CONFIRMED", "CANCELLED"],
    CONFIRMED: ["SHIPPED"],
    SHIPPED: ["DELIVERED"],
    DELIVERED: [],
    CANCELLED: [],
  };
  constructor(value: OrderStatus) {
    super(value);
  }
  transitionTo(newStatus: OrderStatus) {
    if (OrderStatusVO.transitions[this.value].includes(newStatus)) {
      return new OrderStatusVO(newStatus);
    } else {
      throw new DomainException("Enter a valid status");
    }
  }
}
