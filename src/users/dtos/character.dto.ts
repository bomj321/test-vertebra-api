import {
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCharacterDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly status: string;


  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly species: string;


  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;


  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly gender: string;


  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;

}

export class UpdateCharacterDto extends PartialType(CreateCharacterDto) { }
