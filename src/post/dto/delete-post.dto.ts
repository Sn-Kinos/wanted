import { PickType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Post } from '../entities/post.entity';

export class DeletePostDto extends PickType(Post, ['password'] as const) {
  @IsNotEmpty()
  password: string;
}
