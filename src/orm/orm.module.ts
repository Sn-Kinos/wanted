import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Comment } from 'src/comment/entities/comment.entity';
import { Keyword } from 'src/keyword/entities/keyword.entity';
import { Post } from 'src/post/entities/post.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [Post, Comment, Keyword],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
