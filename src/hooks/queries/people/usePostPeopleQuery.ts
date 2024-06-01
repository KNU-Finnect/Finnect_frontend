import { useMutation } from '@tanstack/react-query';
import { postPeople } from '@finnect/apis/people/usePostPeople';
import { queryClient } from '@finnect/hooks/queries/Http';
import { IPeopleProps } from '@finnect/interface/PeopleInterface';

export const usePostPeopleQuery = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({ nickname, role, phone }: IPeopleProps) =>
      postPeople(nickname, role, phone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postPeople'] });
    },
  });

  return { mutate, isPending, isError, error };
};
