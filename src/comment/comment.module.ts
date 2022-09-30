import { Module } from '@nestjs/common';
import { KeywordModule } from 'src/keyword/keyword.module';
import { OrmModule } from 'src/orm/orm.module';
import { PostModule } from 'src/post/post.module';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [OrmModule, PostModule, KeywordModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
