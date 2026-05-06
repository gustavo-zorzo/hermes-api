import { EntityIDVO } from "./EntityIDVO.js";

export type EntityProps<T> = {} & T;

export abstract class Entity<T> {
  private readonly $props: T;
  private readonly $id: EntityIDVO;
  private readonly $isCreation: boolean;

  constructor(props: T, id?: EntityIDVO) {
    this.$id = id || new EntityIDVO();
    this.$props = props;
    this.$isCreation = !id;
  }
  get id(): EntityIDVO {
    return this.$id;
  }
  get props(): T {
    return this.$props;
  }

  protected isCreation(): boolean {
    return this.$isCreation;
  }
}
