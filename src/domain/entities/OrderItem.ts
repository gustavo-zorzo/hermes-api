import type { MoneyVO } from "@domain/value-objects/MoneyVO.js";
import type { QuantityVO } from "@domain/value-objects/QuantityVO.js";
import type { EntityIDVO } from "../../lib/EntityIDVO.js";
import { Entity } from "../../lib/Entity.js";

type OrderItemProps = {
  quantity: QuantityVO;
  price: MoneyVO;
  productId: EntityIDVO;
};

export class OrderItem extends Entity<OrderItemProps> {
  constructor(props: OrderItemProps) {
    super(props);
  }
}
