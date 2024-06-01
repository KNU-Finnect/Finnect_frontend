import { useRecoilState } from 'recoil';

import { peopleModalVisibleState } from '@finnect/atoms/people/usePeople';

export const usePeopleModal = () => {
  const [peopleModalVisible, setPeopleModalVisible] = useRecoilState(
    peopleModalVisibleState
  );

  const showPeopleModal = () => setPeopleModalVisible(true);
  const hidePeopleModal = () => setPeopleModalVisible(false);

  return {
    peopleModalVisible,
    showPeopleModal,
    hidePeopleModal,
  };
};
