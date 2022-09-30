import { EntityRepository, FilterQuery } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostDto } from './dto/get-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

const getQueryString = (value: string) =>
  value.length > 0
    ? value
        .split(' ')
        .map((word) => `${word}*`)
        .join(' ')
    : '';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: EntityRepository<Post>
  ) {}

  async create(createPostDto: CreatePostDto) {
    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(createPostDto.password, salt);

    const post = this.postRepository.create({
      ...createPostDto,
      password: encryptedPassword,
    });
    await this.postRepository.persist(post).flush();

    delete post.password;

    return post;
  }

  findAll(getPostDto: GetPostDto) {
    const { title = undefined, writer = undefined, page = 1, limit = 10 } = getPostDto;

    const postWhere: FilterQuery<Post> = {};

    if (title) {
      postWhere.title = {
        $fulltext: getQueryString(title),
      };
    }

    if (writer) {
      postWhere.writer = {
        $fulltext: getQueryString(writer),
      };
    }

    return this.postRepository.find(postWhere, {
      limit,
      offset: (page - 1) * limit,
      orderBy: {
        index: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.postRepository.findOne({
      index: id,
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
