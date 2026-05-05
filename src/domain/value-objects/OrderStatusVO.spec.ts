import { describe, it, expect, beforeEach } from "vitest";
import { OrderStatus, OrderStatusVO } from "./OrderStatusVO.js";
import { DomainException } from "../../lib/exceptions/DomainException.js";

describe("OrderStatusVO", () => {
  const pending: OrderStatusVO = new OrderStatusVO("PENDING");
  const cancelled: OrderStatusVO = new OrderStatusVO("CANCELLED");

  it("nao deve sair de pending para shipped ou delivered", () => {
    expect(() => pending.transitionTo("SHIPPED")).toThrow(DomainException);
    expect(() => pending.transitionTo("DELIVERED")).toThrow(DomainException);
  });
  it("deve poder sair de pending para confimed", () => {
    expect(pending.transitionTo("CONFIRMED").value).toBe("CONFIRMED");
  });
  it("nao deve poder sair de um status terminal", () => {
    expect(() => cancelled.transitionTo("PENDING")).toThrow(DomainException);
  });
});
