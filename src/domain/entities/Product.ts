import type { MoneyVO } from "@domain/value-objects/MoneyVO.js";
import type { QuantityVO } from "@domain/value-objects/QuantityVO.js";
import { Entity } from "../../lib/Entity.js";
import type { EntityIDVO } from "../../lib/EntityIDVO.js";

type ProductProps = {
  name: string;
  description: string;
  price: MoneyVO;
  stock: QuantityVO;
  category: string;
};

export class Product extends Entity<ProductProps> {
  constructor(props: ProductProps, id?: EntityIDVO) {
    super(props, id);
  }
}
