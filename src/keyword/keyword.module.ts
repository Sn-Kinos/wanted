import { Module } from '@nestjs/common';
import { OrmModule } from 'src/orm/orm.module';
import { KeywordService } from './keyword.service';

@Module({
  imports: [OrmModule],
  providers: [KeywordService],
  exports: [KeywordService],
})
export class KeywordModule {}
