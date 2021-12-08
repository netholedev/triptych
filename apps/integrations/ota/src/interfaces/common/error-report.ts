import { ERROR_STATUS } from './error-status';
import { ERROR_CODES } from './error-codes';
import { TARGET_ENVIRONMENT } from './target-environment';
import { TRANSACTION_STATUS_CODE } from './transaction-status-code';

export interface ErrorReport {
  status: ERROR_STATUS;
  errorCode: ERROR_CODES;
  errorCodeExtension: string;
  severity: string;
  errorMessage: ERROR_CODES;
  errorMessageExtension: string;
  docURL: string;
  echoToken: string;
  timeStamp: string;
  target: TARGET_ENVIRONMENT;
  targetName: string;
  version: number;
  transactionIdentifier: string;
  sequenceNmbr: string;
  transactionStatusCode: TRANSACTION_STATUS_CODE;
  correlationID: string;
  primaryLangID: string;
  altLangID: string;
  retransmissionIndicatorInd: boolean;
}
