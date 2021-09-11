import {
  IsString,
  IsOptional
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly type: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly dimension: string;

}

export class UpdateLocationDto extends PartialType(CreateLocationDto) { }
