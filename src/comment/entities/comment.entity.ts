import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Post } from 'src/post/entities/post.entity';

@Entity()
export class Comment {
  @PrimaryKey()
  index!: number;

  @ManyToOne({ entity: () => Post, index: 'FK_post_TO_comment_1' })
  post!: Post;

  @ManyToOne({ entity: () => Comment, index: 'FK_comment_TO_comment_1', nullable: true })
  reply?: Comment;

  @Property({ columnType: 'text', length: 65535 })
  content: string;

  @Property({ length: 255 })
  writer: string;

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
