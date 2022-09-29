import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './orm/orm.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [OrmModule, PostModule, KeywordModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
