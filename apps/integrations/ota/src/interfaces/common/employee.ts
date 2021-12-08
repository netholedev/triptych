import { EMPLOYEE_STATUS } from '../codelist';

export interface Employee {
  id: string;
  level: string;
  title: string;
  status: EMPLOYEE_STATUS;
  description: string;
  employer: string;
}
