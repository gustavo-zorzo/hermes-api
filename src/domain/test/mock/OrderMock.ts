import { Order, type OrderProps } from "@domain/aggregates/Order.js";
import { CustomerMock } from "./CustomerMock.js";
import { OrderItem } from "@domain/entities/OrderItem.js";
import { QuantityVO } from "@domain/value-objects/QuantityVO.js";
import { MoneyVO } from "@domain/value-objects/MoneyVO.js";
import { EntityIDVO } from "../../../lib/EntityIDVO.js";

export class OrderMock {
  static create(
    props?: Partial<Omit<OrderProps, "totalPrice" | "status">>,
  ): Order {
    const defaultProps = {
      customer: CustomerMock.create(),
      items: [
        new OrderItem({
          quantity: new QuantityVO(1),
          price: new MoneyVO(100000),
          productId: new EntityIDVO(),
        }),
      ],
    };
    return Order.create({ ...defaultProps, ...props });
  }
}
