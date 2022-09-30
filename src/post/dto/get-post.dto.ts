import { PartialType, PickType } from '@nestjs/mapped-types';
import { Post } from '../entities/post.entity';

export class GetPostDto extends PartialType(PickType(Post, ['title', 'writer'])) {
  title: string;

  writer: string;

  page: number;

  limit: number;
}
