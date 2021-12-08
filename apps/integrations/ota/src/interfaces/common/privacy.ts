import { YES_NO_INHERIT } from './yes-no-inherit';
import { OPT_IN_STATUS } from './opt-in-status';

export interface Privacy {
  shareMarketInd: YES_NO_INHERIT;
  shareSyncInd: YES_NO_INHERIT;
  optInStatus: OPT_IN_STATUS;
  optInDate: string;
  optOutDate: string;
}
