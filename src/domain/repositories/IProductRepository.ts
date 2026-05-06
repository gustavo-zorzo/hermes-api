import type { Product } from "@domain/entities/Product.js";
import type { EntityIDVO } from "../../lib/EntityIDVO.js";

export interface IProductRepository {
  findById(id: EntityIDVO): Promise<Product | null>;
  listAll(): Promise<Product[]>;
}
