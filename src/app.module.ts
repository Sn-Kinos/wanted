import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './orm/orm.module';
import { PostModule } from './post/post.module';
import { KeywordModule } from './keyword/keyword.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [OrmModule, PostModule, KeywordModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
