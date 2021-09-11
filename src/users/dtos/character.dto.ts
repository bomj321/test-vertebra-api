import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Min,

} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCharacterDto {

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  readonly status: string;


  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  readonly species: string;


  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;


  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  readonly gender: string;


  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;

}

export class UpdateCharacterDto extends PartialType(CreateCharacterDto) { }
export class FilterCharacterDto {
  @IsOptional()
  @Min(1)
  @ApiProperty()
  page: number;

  @IsOptional()
  @IsPositive()
  @ApiProperty()
  limit: number;

}
