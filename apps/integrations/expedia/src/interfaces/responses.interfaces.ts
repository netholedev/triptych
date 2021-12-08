export interface ErrorDto {
  code: number;
  message: string;
}

export interface ResponseWrapperDTO<T> {
  entity?: T;
  errors?: ErrorDto[];
}
