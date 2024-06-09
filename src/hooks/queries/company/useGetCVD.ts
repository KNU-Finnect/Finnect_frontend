import { GetCVDetailData } from '@finnect/apis/companies/useGetCVDetailData';

import { useQuery } from '@tanstack/react-query';

export const useGetCVD = (companyId: number) => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['getCVDData'],
    queryFn: () => GetCVDetailData(companyId),
  });

  return { data, isPending, isError, error, refetch };
};
