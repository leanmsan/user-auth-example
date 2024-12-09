import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './schemas/blog.schema';
import { AuthGuard } from '../auth/auth.guard';

@Controller('blogs')
@UseGuards(AuthGuard)
export class BlogController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }
}
