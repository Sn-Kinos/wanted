import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Post } from 'src/post/entities/post.entity';

@Entity()
export class Comment {
  @PrimaryKey()
  index!: number;

  @ManyToOne({ entity: () => Post, index: 'FK_post_TO_comment_1' })
  post!: Post;

  @ManyToOne({ entity: () => Comment, index: 'FK_comment_TO_comment_1' })
  reply!: Comment;

  @Property({ length: 255, nullable: true })
  content?: string;

  @Property({ columnType: 'text', length: 65535, nullable: true })
  writer?: string;

  @Property({ nullable: true })
  createdAt?: Date;
}
