import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Post } from '../entities/post.entity';

export class UpdatePostDto extends PartialType(Post) {
  title?: string;
  content?: string;
  writer?: string;

  @IsNotEmpty()
  password!: string;
}
