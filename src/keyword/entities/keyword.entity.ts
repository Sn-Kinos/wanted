import { Entity, Property } from '@mikro-orm/core';

@Entity()
export class Keyword {
  @Property({ length: 255, nullable: true })
  writer?: string;

  @Property({ length: 255, nullable: true })
  word?: string;
}
