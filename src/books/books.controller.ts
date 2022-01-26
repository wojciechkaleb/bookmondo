import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  create(@Body() data: CreateBookDto) {
    return this.bookService.create(data);
  }

  @Get(':id')
  findOne(id: string) {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  update(id: string, data: UpdateBookDto) {
    return this.bookService.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(id: string) {
    return this.bookService.delete(id);
  }
}
