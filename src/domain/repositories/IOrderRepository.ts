import type { Order } from "@domain/aggregates/Order.js";
import type { EntityIDVO } from "../../lib/EntityIDVO.js";

export interface IOrderRepository {
  findById(id: EntityIDVO): Promise<Order | null>;
  create(order: Order): Promise<void>;
  update(order: Order): Promise<void>;
  listByCustomer(id: EntityIDVO): Promise<Order[]>;
}
