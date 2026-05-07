import { Customer } from "@domain/entities/Customer.js";
import { AggregateRoot } from "../../lib/AggregateRoot.js";
import { OrderItem } from "@domain/entities/OrderItem.js";
import { OrderStatusVO } from "@domain/value-objects/OrderStatusVO.js";
import { MoneyVO } from "@domain/value-objects/MoneyVO.js";
import type { EntityIDVO } from "../../lib/EntityIDVO.js";
import { OrderCreatedEvent } from "@domain/events/OrderCreatedEvent.js";
import { OrderCancelledEvent } from "@domain/events/OrderCancelledEvent.js";

export type OrderProps = {
  customer: Customer;
  items: OrderItem[];
  status: OrderStatusVO;
  totalPrice: MoneyVO;
};

export class Order extends AggregateRoot<OrderProps> {
  constructor(input: OrderProps, id?: EntityIDVO) {
    super(input, id);
    if (this.isCreation()) {
      this.raiseEvent(
        new OrderCreatedEvent({
          id: this.id.value,
          customer: {
            id: this.props.customer.id.value,
            name: this.props.customer.props.name,
            document: {
              value: this.props.customer.props.document.value.value,
              type: this.props.customer.props.document.value.type,
            },
            address: {
              street: this.props.customer.props.address.value.street,
              neighbourhood:
                this.props.customer.props.address.value.neighbourhood,
              city: this.props.customer.props.address.value.city,
              state: this.props.customer.props.address.value.state.value,
              zipcode: this.props.customer.props.address.value.zipcode.value,
            },
            email: this.props.customer.props.email.value,
          },
          items: this.props.items.map((item) => {
            return {
              productId: item.props.productId.value,
              quantity: item.props.quantity.value,
              price: item.props.price.value,
            };
          }),
          status: this.props.status.value,
          totalPrice: this.props.totalPrice.value,
        }),
      );
    }
  }
  static create(input: Omit<OrderProps, "totalPrice" | "status">) {
    const total = input.items.reduce(
      (acc: number, current: OrderItem) =>
        acc + current.props.quantity.value * current.props.price.value,
      0,
    );
    const data: OrderProps = {
      ...input,
      totalPrice: new MoneyVO(total),
      status: new OrderStatusVO("PENDING"),
    };
    return new Order(data);
  }
  confirm() {
    return new Order(
      {
        ...this.props,
        status: this.props.status.transitionTo("CONFIRMED"),
      },
      this.id,
    );
  }
  ship() {
    return new Order(
      {
        ...this.props,
        status: this.props.status.transitionTo("SHIPPED"),
      },
      this.id,
    );
  }
  deliver() {
    return new Order(
      {
        ...this.props,
        status: this.props.status.transitionTo("DELIVERED"),
      },
      this.id,
    );
  }
  cancel() {
    this.raiseEvent(
      new OrderCancelledEvent({
        id: this.id.value,
        customer: {
          id: this.props.customer.id.value,
          name: this.props.customer.props.name,
          document: {
            value: this.props.customer.props.document.value.value,
            type: this.props.customer.props.document.value.type,
          },
          address: {
            street: this.props.customer.props.address.value.street,
            neighbourhood:
              this.props.customer.props.address.value.neighbourhood,
            city: this.props.customer.props.address.value.city,
            state: this.props.customer.props.address.value.state.value,
            zipcode: this.props.customer.props.address.value.zipcode.value,
          },
          email: this.props.customer.props.email.value,
        },

        items: this.props.items.map((item) => {
          return {
            productId: item.props.productId.value,
            quantity: item.props.quantity.value,
            price: item.props.price.value,
          };
        }),
        totalPrice: this.props.totalPrice.value,
      }),
    );

    return new Order(
      {
        ...this.props,
        status: this.props.status.transitionTo("CANCELLED"),
      },
      this.id,
    );
  }
}
