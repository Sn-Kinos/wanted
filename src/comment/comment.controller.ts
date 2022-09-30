import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParamsValidator } from 'src/common/validator/param.interface';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get(':id')
  findOne(@Param() params: ParamsValidator) {
    return this.commentService.findComments(+params.id);
  }
}
