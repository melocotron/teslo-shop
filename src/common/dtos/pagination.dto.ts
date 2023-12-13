import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  //Transformar
  limimt?: number;

  @IsOptional()
  @IsPositive()
  offset?: number;
}
