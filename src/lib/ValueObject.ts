export type Primitives =
  | string
  | number
  | boolean
  | Date
  | undefined
  | null
  | Record<string, unknown>;

export abstract class ValueObject<T extends Primitives> {
  constructor(private readonly input: T) {}

  get value(): T {
    return this.input;
  }

  protected isOneOf(input: T, options: object): boolean {
    return Object.values(options).includes(input);
  }

  toJSON(): { value: T } {
    return {
      value: this.input,
    };
  }
}
