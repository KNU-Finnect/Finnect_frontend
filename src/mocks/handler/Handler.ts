import { CompanyHandler } from '@finnect/mocks/handler/company/CompanyHandler';
import { PeopleHandler } from '@finnect/mocks/handler/people/PeopleHandler';
import { DealHandler } from './deal/DealHandler';

export const Handlers = [...CompanyHandler, ...DealHandler, ...PeopleHandler];
