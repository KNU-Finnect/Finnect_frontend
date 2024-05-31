import { useGetPeople } from '@finnect/apis/people/useGetPeople';

import { useQuery } from '@tanstack/react-query';

export const useGetPeopleQuery = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['getPeople'],
    queryFn: useGetPeople,
    refetchOnMount: true,
  });

  return { data, isPending, isError, error, refetch };
};
