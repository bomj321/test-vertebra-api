import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsArray,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateEpisodeDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly locationId: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  readonly charactersIds: number[];

}

export class UpdateEpisodeDto extends PartialType(CreateEpisodeDto) { }
