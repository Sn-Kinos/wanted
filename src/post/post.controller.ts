import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { KeywordService } from 'src/keyword/keyword.service';
import { ParamsValidator } from '../common/validator/param.interface';
import { CreatePostDto } from './dto/create-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly keywordService: KeywordService
  ) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    const post = await this.postService.create(createPostDto);
    this.keywordService.sendNotifications(post.content);

    return post;
  }

  @Get()
  findAll(
    @Query('title') title?: string,
    @Query('writer') writer?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number
  ) {
    return this.postService.findAll({
      title,
      writer,
      page,
      limit,
    });
  }

  @Get(':id')
  findOne(@Param() params: ParamsValidator) {
    return this.postService.findOne(+params.id);
  }

  @Patch(':id')
  update(@Param() params: ParamsValidator, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+params.id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param() params: ParamsValidator, @Body() deletePostDto: DeletePostDto) {
    return this.postService.remove(+params.id, deletePostDto);
  }
}
