import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Post {
  @PrimaryKey({ columnType: 'bigint' })
  index!: string;

  @Property({ columnType: 'text', length: 65535, nullable: true })
  title?: string;

  @Property({ columnType: 'text', length: 65535, nullable: true })
  content?: string;

  @Property({ length: 255, nullable: true })
  writer?: string;

  @Property({ columnType: 'binary(16)', length: 16, nullable: true })
  password?: unknown;

  @Property({ nullable: true })
  createdAt?: Date;

  @Property({ nullable: true })
  updatedAt?: Date;
}
