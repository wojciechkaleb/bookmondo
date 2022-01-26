import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { BookRepository } from './repositories/book.repository';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookRepository)
    private bookRepository: BookRepository,
  ) {}

  async create(data: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create({
      ...data,
    });

    await this.bookRepository.save(book);

    return book;
  }

  async findOne(id: string): Promise<Book> {
    const book = this.bookRepository.findOne(id);
    if (!book) {
      throw new NotFoundException();
    }

    return book;
  }

  async update(id: string, data: UpdateBookDto) {
    let book = await this.findOne(id);
    book = { ...book, ...data };

    this.bookRepository.save(book);

    return book;
  }

  async delete(id: string) {
    const result = await this.bookRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }
}
