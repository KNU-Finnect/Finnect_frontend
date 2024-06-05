import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import {
  companiesState,
  isCompanySelectedState,
} from '@finnect/atoms/company/useSelectCompany';

import { useGetWC } from '@finnect/hooks/queries/company/useGetWC';

export const useSelectCompany = () => {
  const [companies, setCompanies] = useRecoilState(companiesState);
  const [isCompanySelected, setIsCompanySelected] = useRecoilState(
    isCompanySelectedState
  );
  const { data: CompanyData } = useGetWC();

  useEffect(() => {
    if (CompanyData) {
      setCompanies(CompanyData.result.companies);
    }
  }, [CompanyData, setCompanies]);

  return {
    companies,
    isCompanySelected,
    setIsCompanySelected,
  };
};
