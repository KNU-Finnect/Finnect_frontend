import { useMutation } from '@tanstack/react-query';

import { postPeople } from '@finnect/apis/people/usePostPeople';
import { queryClient } from '@finnect/hooks/queries/Http';

export const usePostPeopleQuery = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({
      personName,
      personRole,
      personEmail,
      personPhone,
      companyId,
    }: {
      personName: string;
      personRole: string;
      personEmail: string;
      personPhone: string;
      companyId: number;
    }) =>
      postPeople(personName, personRole, personEmail, companyId, personPhone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postPeople'] });
    },
  });

  return { mutate, isPending, isError, error };
};
