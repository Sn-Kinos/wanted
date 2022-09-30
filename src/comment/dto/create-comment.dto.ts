import { PickType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumberString, IsOptional } from 'class-validator';
import { Comment } from '../entities/comment.entity';

export class CreateCommentDto extends PickType(Comment, ['writer', 'content'] as const) {
  @IsNotEmpty()
  writer: string;

  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsNumberString()
  reply_index?: number;

  @IsNotEmpty()
  post_index: number;
}
