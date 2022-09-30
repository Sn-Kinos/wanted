import { PickType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Post } from '../entities/post.entity';
export class CreatePostDto extends PickType(Post, [
  'title',
  'content',
  'writer',
  'password',
] as const) {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  writer: string;

  @IsNotEmpty()
  password: string;
}

export class CreatePostResponseDto extends PickType(Post, [
  'index',
  'title',
  'content',
  'writer',
  'createdAt',
  'updatedAt',
] as const) {}
