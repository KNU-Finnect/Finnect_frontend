import { useGetWCompany } from '@finnect/apis/companies/useGetWCompany';

import { useQuery } from '@tanstack/react-query';

export const useGetWC = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['getWCompany'],
    queryFn: useGetWCompany,
    refetchOnMount: true,
  });

  return { data, isPending, isError, error, refetch };
};
