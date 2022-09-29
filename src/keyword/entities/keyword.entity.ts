import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Keyword {
  @PrimaryKey({ columnType: 'bigint' })
  index!: string;

  @Property({ length: 255, nullable: true })
  writer?: string;

  @Property({ length: 255, nullable: true })
  word?: string;
}
