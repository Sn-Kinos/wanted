import { Module } from '@nestjs/common';
import { KeywordService } from './keyword.service';

@Module({
  providers: [KeywordService],
})
export class KeywordModule {}
