import { useMutation } from '@tanstack/react-query';

import { deletePeople } from '@finnect/apis/people/useDeletePeople';

import { queryClient } from '@finnect/hooks/queries/Http';

export const useDeletePeopleQuery = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (personId: string) => deletePeople(personId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['deletePeople'] });
    },
  });

  return { mutate, isPending, isError, error };
};
