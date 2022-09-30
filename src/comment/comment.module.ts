import { Module } from '@nestjs/common';
import { OrmModule } from 'src/orm/orm.module';
import { PostModule } from 'src/post/post.module';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [OrmModule, PostModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
