import { useGetCVData } from '@finnect/apis/companies/useGetCVData';

import { useQuery } from '@tanstack/react-query';

export const useGetCV = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['getCVData'],
    queryFn: useGetCVData,
    refetchOnMount: true,
  });

  return { data, isPending, isError, error, refetch };
};
