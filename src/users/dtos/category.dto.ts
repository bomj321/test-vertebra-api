import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsOptional,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly userId: number;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) { }
