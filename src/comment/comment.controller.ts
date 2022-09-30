import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParamsValidator } from 'src/common/validator/param.interface';
import { KeywordService } from 'src/keyword/keyword.service';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private readonly keywordService: KeywordService
  ) {}

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    const comment = await this.commentService.create(createCommentDto);
    this.keywordService.sendNotifications(comment.content);

    return comment;
  }

  @Get(':id')
  findOne(@Param() params: ParamsValidator) {
    return this.commentService.findComments(+params.id);
  }
}
