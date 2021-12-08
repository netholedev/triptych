import { ERROR_WARNING_TYPE, STATUS } from '../codelist';

export interface ErrorWarning {
  value: string;
  language: string;
  type: ERROR_WARNING_TYPE;
  typeExtension: string;
  shortText: string;
  code: string;
  docURL: string;
  tag: string;
  recordID: string;
  nodeList: string;
  status: STATUS;
  statusExtension: string;
}
