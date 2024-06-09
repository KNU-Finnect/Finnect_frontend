import { useRecoilState } from 'recoil';

import { columnDefsState } from '@finnect/atoms/company/useCompany';

import { useGetWC } from '@finnect/hooks/queries/company/useGetWC';
import { usePostWC } from '@finnect/hooks/queries/company/usePostWC';

import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

export const useCompanyData = () => {
  const [columnDefs] = useRecoilState(columnDefsState);
  const { refetch: CompanyList } = useGetWC();
  const { refetch: CV } = useGetCV();
  const { mutate } = usePostWC();

  const addCompany = async (name: string, domain: string) => {
    mutate(
      { companyName: name, domain: domain },
      {
        onSuccess: () => {
          CV();
          CompanyList();
        },
      }
    );
  };

  return {
    columnDefs,
    addCompany,
  };
};
