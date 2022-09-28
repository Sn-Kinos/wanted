import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Logger } from '@nestjs/common';
// import { Author, BaseEntity, Book, BookTag, Publisher } from './entities';

const logger = new Logger('MikroORM');
const config: Options = {
  // entities: [Author, Book, BookTag, Publisher, BaseEntity],
  dbName: 'wanted',
  user: 'wanted',
  password: 'Wanted_Makes_Recruit_Great_Again@220919',
  host: 'localhost',
  type: 'mariadb',
  port: 22922,
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
};

export default config;
