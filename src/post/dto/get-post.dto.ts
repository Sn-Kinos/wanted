import { PartialType, PickType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Post } from '../entities/post.entity';

export class GetPostDto extends PartialType(PickType(Post, ['title', 'writer'])) {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  writer: string;

  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  limit: number;
}
