import { useQuery } from '@tanstack/react-query';

import { useGetType } from '@finnect/apis/colOption/useGetType';

export const useGetColQ = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['getC'],
    queryFn: useGetType,
  });

  return { data, isPending, isError, error, refetch };
};
