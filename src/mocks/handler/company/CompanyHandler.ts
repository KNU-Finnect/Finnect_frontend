import { http, HttpResponse } from 'msw';

import { CompanyInterface } from '@finnect/interface/CompanyInterface';
import { CompanyColumnInterface } from '@finnect/interface/CompanyInterface';

const CompanyDummyData = [
  {
    Companies: 'Samsung',
    Domains: 'www.samsung.com',
    Categories: 'B2C',
    About: 'Samsung is a South Korean multinational conglomerate',
  },
  {
    Companies: 'Naver',
    Domains: 'www.naver.com',
    Categories: 'B2C',
    About:
      'Naver is a South Korean online platform operated by Naver Corporation',
  },
];

export const CompanyHandler = [
  //GET company Datas
  http.get('/api/companies', () => {
    return HttpResponse.json(Array.from(CompanyDummyData.values()));
  }),

  //POST new company
  http.post('/api/new/company', async ({ request }) => {
    const { Companies, Domains } = (await request.json()) as CompanyInterface;

    if (!Companies || !Domains) {
      return HttpResponse.json(
        { message: 'Company and domain are required' },
        { status: 400 }
      );
    }

    const newCompany = {
      Companies: Companies,
      Domains: Domains,
      Categories: '',
      About: '',
    };

    CompanyDummyData.push(newCompany);

    return HttpResponse.json(newCompany, { status: 201 });
  }),

  //POst new Columns
  http.post('/api/new/company/column', async ({ request }) => {
    const { name, type } = (await request.json()) as CompanyColumnInterface;

    if (!name || !type) {
      return HttpResponse.json(
        { message: 'Name and type are required' },
        { status: 400 }
      );
    }
  }),
];
