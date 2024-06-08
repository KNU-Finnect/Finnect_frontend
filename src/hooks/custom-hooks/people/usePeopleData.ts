import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import {
  columnDefsPeopleState,
  rowPeopleDataState,
  selectedPersonState,
} from '@finnect/atoms/people/usePeople';

import { IPeopleAxiosProps } from '@finnect/interface/PeopleInterface';

import { usePostPeopleQuery } from '@finnect/hooks/queries/people/usePostPeopleQuery';
import { useGetPeopleQuery } from '@finnect/hooks/queries/people/useGetPeopleQuery';
import { useDeletePeopleQuery } from '@finnect/hooks/queries/people/useDeletePeopleQuery';

export const usePeopleData = () => {
  const [rowData, setRowData] = useRecoilState(rowPeopleDataState);
  const [columnDefs] = useRecoilState(columnDefsPeopleState);
  const { mutate } = usePostPeopleQuery();
  const { mutate: deletePerson } = useDeletePeopleQuery();
  const { data, isPending, isError, error, refetch } = useGetPeopleQuery();
  const [selectedPerson, setSelectedPerson] =
    useRecoilState(selectedPersonState);

  useEffect(() => {
    if (data) {
      setRowData(data.result.people);
    }
  }, [data, setRowData]);

  const addPerson = ({
    personName,
    personRole,
    personEmail,
    personPhone,
    companyId,
  }: {
    personName: string;
    personRole: string;
    personEmail: string;
    personPhone: string;
    companyId: number;
  }) => {
    mutate(
      { personName, personRole, personEmail, personPhone, companyId },
      {
        onSuccess: () => {
          setRowData(
            (prevData) =>
              [
                ...prevData,
                { personName, personRole, personEmail, personPhone, companyId },
              ] as IPeopleAxiosProps[]
          );
          refetch();
        },
      }
    );
  };

  const handleDeletePerson = () => {
    console.log(selectedPerson);
    if (selectedPerson) {
      deletePerson(selectedPerson.personId, {
        onSuccess: () => {
          setRowData((prevData) =>
            prevData.filter(
              (person) => person.personId !== selectedPerson.personId
            )
          );
          setSelectedPerson(null);
        },
      });
    }
  };

  return {
    rowData,
    columnDefs,
    handleDeletePerson,
    selectedPerson,
    setSelectedPerson,
    addPerson,
    isPending,
    isError,
    error,
  };
};
