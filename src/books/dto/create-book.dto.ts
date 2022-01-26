import {
  MaxLength,
  MinLength,
  Max,
  Min,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsDate,
} from 'class-validator';

export class CreateBookDto {
  @MinLength(4)
  @MaxLength(500)
  title: string;

  @MinLength(4)
  @MaxLength(250)
  author_fullname: string;

  @IsNumber()
  @Min(1)
  @Max(10000)
  number_of_pages: number;

  @IsNumber()
  @Min(0)
  @Max(10000)
  current_page: number;

  @IsOptional()
  @IsBoolean()
  show_progress_as_percentage: boolean;

  @IsOptional()
  @IsDate()
  reading_started_at: Date;

  @IsOptional()
  @IsDate()
  reading_finished_at: Date;
}
