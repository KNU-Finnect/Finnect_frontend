import { useMutation } from '@tanstack/react-query';

import { patchPeople } from '@finnect/apis/people/usePatchPeople';
import { queryClient } from '@finnect/hooks/queries/Http';

export const usePatchPeopleQuery = () => {
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
      patchPeople(personName, personRole, personEmail, companyId, personPhone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patchPeople'] });
    },
  });

  return { mutate, isPending, isError, error };
};
