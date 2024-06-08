import { http, HttpResponse } from 'msw';

const DealDummyData = [
  {
    status: 200,
    result: {
      viewId: 0,
      viewName: 'company',
      filters: [
        {
          filterId: 0,
          columnId: 0,
          condition: 'EQUAL',
          value: 'string',
        },
      ],
      viewColumns: [
        {
          columnId: 0,
          index: 0.0,
          hided: false,
          columnType: 'string',
          columnName: 'category',
          sorting: 'ASC',
        },
        {
          columnId: 1,
          index: 1.0,
          hided: false,
          columnType: 'string',
          columnName: 'about',
          sorting: 'ASC',
        },
      ],
      viewCompanies: [
        {
          companyId: 12,
          companyName: 'Naver',
          DealName: '네이버',
          userName: 'admin',
          rowId: 0,
          cells: [
            {
              columnId: 0,
              value: '',
              peopleId: 0,
              companyId: 0,
              userId: 0,
            },
            {
              columnId: 1,
              value: '',
              peopleId: 0,
              companyId: 0,
              userId: 0,
            },
          ],
        },
      ],
    },
  },
];

export const DealHandler = [
  //GET deal Datas
  http.get('/api/deals', () => {
    return HttpResponse.json(Array.from(DealDummyData.values()));
  }),
];
