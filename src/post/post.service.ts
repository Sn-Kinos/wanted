import { EntityRepository, FilterQuery } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
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

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne({
      index: id,
    });

    if (post) {
      const isPasswordCorrect = await bcrypt.compare(updatePostDto.password, post.password);

      if (isPasswordCorrect) {
        delete updatePostDto.password;
        this.postRepository.assign(post, updatePostDto);
        await this.postRepository.persist(post).flush();

        delete post.password;

        return post;
      } else {
        throw new ForbiddenException('비밀번호가 일치하지 않습니다.');
      }
    }

    throw new NotFoundException('존재하지 않는 게시글입니다.');
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
