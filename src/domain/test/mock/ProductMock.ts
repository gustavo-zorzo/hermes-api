import { Product, type ProductProps } from "@domain/entities/Product.js";
import { MoneyVO } from "@domain/value-objects/MoneyVO.js";
import { QuantityVO } from "@domain/value-objects/QuantityVO.js";

export class ProductMock {
  static create(props?: Partial<ProductProps>): Product {
    const defaultProps = {
      name: "nome mock",
      description: "descricao mock",
      price: new MoneyVO(10000),
      stock: new QuantityVO(1),
      category: "categoria mock",
    };
    return new Product({ ...defaultProps, ...props });
  }
}
