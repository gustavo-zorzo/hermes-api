import { describe, it, expect } from "vitest";
import { OrderMock } from "@domain/test/mock/OrderMock.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

describe("Order", () => {
  const order = OrderMock.create();
  it("deve criar uma order com status certo", () => {
    expect(order.props.status.value).toBe("PENDING");
  });
  it("deve criar uma order com total price certo", () => {
    expect(order.props.totalPrice.value).toBe(100000);
  });
  it("deve disparar evento no create", () => {
    expect(order.raisedEvents.length).toBe(1);
  });
  it("confirm deve transicionar status para CONFIRMED", () => {
    expect(order.confirm().props.status.value).toBe("CONFIRMED");
  });
  it("ship deve transicionar status para SHIPPED", () => {
    expect(order.confirm().ship().props.status.value).toBe("SHIPPED");
  });
  it("deliver deve transicionar status para DELIVERED", () => {
    expect(order.confirm().ship().deliver().props.status.value).toBe(
      "DELIVERED",
    );
  });
  it("cancel deve transicionar status para CANCELLED e lancar evento", () => {
    const ordemNova = OrderMock.create();
    const ordemCancelada = ordemNova.cancel();
    expect(ordemCancelada.props.status.value).toBe("CANCELLED");
    expect(ordemNova.raisedEvents.length).toBeGreaterThan(1);
  });
  it("deve rejeitar uma transição invalida", () => {
    expect(() => order.ship().props.status.value).toThrow(DomainException);
  });
});
