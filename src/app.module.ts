import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CommentModule } from './comment/comment.module';
import { SuccessInterceptor } from './common/interceptor';
import { KeywordModule } from './keyword/keyword.module';
import { OrmModule } from './orm/orm.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [OrmModule, PostModule, KeywordModule, CommentModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: SuccessInterceptor,
    },
  ],
})
export class AppModule {}
