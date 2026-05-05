import type { Customer } from "@domain/entities/Customer.js";
import { AggregateRoot } from "../../lib/AggregateRoot.js";
import type { OrderItem } from "@domain/entities/OrderItem.js";
import type { OrderStatusVO } from "@domain/value-objects/OrderStatusVO.js";
import type { MoneyVO } from "@domain/value-objects/MoneyVO.js";
import type { EntityIDVO } from "../../lib/EntityIDVO.js";

type OrderProps = {
  customer: Customer;
  items: OrderItem[];
  status: OrderStatusVO;
  totalPrice: MoneyVO;
};

export class Order extends AggregateRoot<OrderProps> {
  constructor(input: OrderProps, id?: EntityIDVO) {
    super(input, id);
  }
}
