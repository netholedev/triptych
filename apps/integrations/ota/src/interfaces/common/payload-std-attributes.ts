import { TARGET_ENVIRONMENT } from './target-environment';
import { TRANSACTION_STATUS_CODE } from './transaction-status-code';

export interface PayloadStdAttributes {
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
