import styled from 'styled-components';
import { useState } from 'react';
import DealNav from './components/DealNav';
import DealNote from './DealNote';
import DealMain from './DealMain';
import DealActivity from './DealActivity';

const DealDetail = () => {
  const [selectedNav, setSelectedNav] = useState('main');

  const renderSelectedComponent = () => {
    switch (selectedNav) {
      case 'main':
        return <DealMain />;
      case 'note':
        return <DealNote />;
      case 'activity':
        return <DealActivity />;
      default:
        return null;
    }
  };

  return (
    <DealDetailWrapper>
      <DealNavWrapper>
        <DealNav onSelectNav={setSelectedNav} />
      </DealNavWrapper>
      {renderSelectedComponent()}
    </DealDetailWrapper>
  );
};

export default DealDetail;

const DealDetailWrapper = styled.div``;

const DealNavWrapper = styled.div``;
