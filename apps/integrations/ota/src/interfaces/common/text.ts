import { TEXT_FORMAT_TYPE } from './text-format-type';

export interface Text {
  value: string;
  language: string;
  textFormat: TEXT_FORMAT_TYPE;
}
