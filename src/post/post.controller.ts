import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ParamsValidator } from './post.interface';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
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
