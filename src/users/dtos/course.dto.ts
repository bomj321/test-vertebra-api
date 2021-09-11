import {
  IsString,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly duration: string;

  @IsPositive()
  @ApiProperty()
  readonly categoryId: number;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) { }
