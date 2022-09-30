import { Entity, Index, PrimaryKey, Property, Unique } from '@mikro-orm/core';

@Entity()
export class Post {
  @PrimaryKey()
  @Unique()
  index!: number;

  @Property({ columnType: 'text', length: 65535 })
  @Index()
  title: string;

  @Property({ columnType: 'text', length: 65535 })
  content: string;

  @Property({ length: 255 })
  @Index()
  writer: string;

  @Property()
  @Property({ hidden: true })
  password: string;

  @Property({
    columnType: 'timestamp',
  })
  createdAt: Date = new Date();

  @Property({
    columnType: 'timestamp',
    onUpdate: () => new Date(),
  })
  updatedAt: Date = new Date();
}
