import { IPeopleProps } from '@finnect/interface/PeopleInterface';
import { http, HttpResponse } from 'msw';

export const PeopleHandler = [
  http.get('/workspaces/members', () => {
    return HttpResponse.json({
      status: 0,
      result: {
        members: [
          {
            nickname: 'kimkyuhoi',
            role: 'member',
            phone: '010-4922-7687',
          },
          {
            nickname: 'leesanghee',
            role: 'lead',
            phone: '010-1234-5678',
          },
        ],
      },
    });
  }),

  http.post('/workspaces/members', async ({ request }) => {
    const { nickname, role, phone } = (await request.json()) as IPeopleProps;

    if (!nickname || !role || !phone) {
      return HttpResponse.json(
        { message: 'Nickname, role, and phone are required' },
        { status: 400 }
      );
    }

    return HttpResponse.json({ message: 'Person added successfully' });
  }),
];
