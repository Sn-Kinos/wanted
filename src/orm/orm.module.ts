import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      // entities: [Author, Book, BookTag, Publisher],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
