import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PostService } from 'src/post/post.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: EntityRepository<Comment>,
    private readonly postService: PostService
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const post = await this.postService.findOne(createCommentDto.post_index);

    if (!post) {
      throw new BadRequestException('존재하지 않는 게시글에 댓글을 달 수 없습니다.');
    }

    delete createCommentDto.post_index;

    const comment = this.commentRepository.create({
      ...createCommentDto,
      post,
    });

    await this.commentRepository.persist(comment).flush();

    return comment;
  }

  async findComments(id: number) {
    const post = await this.postService.findOne(id);

    return this.commentRepository.find({ post });
  }
}
