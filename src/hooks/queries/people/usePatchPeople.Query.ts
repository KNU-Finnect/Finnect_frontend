import { useMutation } from '@tanstack/react-query';

import { patchPeople } from '@finnect/apis/people/usePatchPeople';
import { queryClient } from '@finnect/hooks/queries/Http';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

export const usePatchPeopleQuery = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({
      personName,
      personRole,
      personEmail,
      personPhone,
    }: IPeopleProps) =>
      patchPeople(personName, personRole, personEmail, personPhone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patchPeople'] });
    },
  });

  return { mutate, isPending, isError, error };
};
