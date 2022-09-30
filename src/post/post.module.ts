import { Module } from '@nestjs/common';
import { OrmModule } from 'src/orm/orm.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [OrmModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
