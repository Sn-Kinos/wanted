import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, Logger } from '@nestjs/common';
import { Keyword } from './entities/keyword.entity';

@Injectable()
export class KeywordService {
  constructor(
    @InjectRepository(Keyword)
    private readonly keywordRepository: EntityRepository<Keyword>
  ) {}

  async sendNotifications(content: string) {
    const keywords = await this.keywordRepository.findAll();

    keywords.forEach((keyword) => {
      if (content.includes(keyword.word)) {
        Logger.log(`Notification sent to ${keyword.writer}`);
      }
    });
  }
}
