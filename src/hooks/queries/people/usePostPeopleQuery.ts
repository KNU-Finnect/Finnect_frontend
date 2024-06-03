import { useMutation } from '@tanstack/react-query';

import { postPeople } from '@finnect/apis/people/usePostPeople';
import { queryClient } from '@finnect/hooks/queries/Http';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

export const usePostPeopleQuery = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({
      personName,
      personRole,
      personEmail,
      companyId,
      personPhone,
    }: IPeopleProps) =>
      postPeople(personName, personRole, personEmail, companyId, personPhone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postPeople'] });
    },
  });

  return { mutate, isPending, isError, error };
};
