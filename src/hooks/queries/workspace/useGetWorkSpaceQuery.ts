import { useGetWorkspace } from '@finnect/apis/workspace/useGetWorkSpace';

import { useQuery } from '@tanstack/react-query';

export const useGetWorkSpaceQuery = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['getWorkspace'],
    queryFn: useGetWorkspace,
  });

  return { data, isPending, isError, error, refetch };
};
