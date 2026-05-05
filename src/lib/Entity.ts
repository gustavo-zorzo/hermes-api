import { EntityIDVO } from "./EntityIDVO.js";

export type EntityProps<T> = {} & T;

export abstract class Entity<T> {
  private readonly $props: T;
  private readonly $id: EntityIDVO;

  constructor(props: T, id?: EntityIDVO) {
    this.$id = id || new EntityIDVO();
    this.$props = props;
  }
  get id(): EntityIDVO {
    return this.$id;
  }
  get props(): T {
    return this.$props;
  }
}
