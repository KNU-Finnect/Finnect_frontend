import { useDeletePeople } from '@finnect/apis/people/useDeletePeople';

import { useQuery } from '@tanstack/react-query';

export const useDeletePeopleQuery = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['getPeople'],
    queryFn: useDeletePeople,
    refetchOnMount: true,
  });

  return { data, isPending, isError, error, refetch };
};
