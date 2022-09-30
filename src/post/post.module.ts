import { Module } from '@nestjs/common';
import { KeywordModule } from 'src/keyword/keyword.module';
import { OrmModule } from 'src/orm/orm.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [OrmModule, KeywordModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
