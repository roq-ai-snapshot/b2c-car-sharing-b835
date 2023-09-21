import { BookingInterface } from 'interfaces/booking';
import { OperationInterface } from 'interfaces/operation';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  location: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  operation?: OperationInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
    operation?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  location?: string;
  company_id?: string;
}
