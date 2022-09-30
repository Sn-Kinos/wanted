import { PickType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Comment } from '../entities/comment.entity';

export class CreateCommentDto extends PickType(Comment, ['writer', 'content'] as const) {
  @IsNotEmpty()
  writer: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  post_index: number;
}
