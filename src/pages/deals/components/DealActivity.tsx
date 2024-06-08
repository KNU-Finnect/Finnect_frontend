import { getDealLog } from '@finnect/apis/deal/useDealDetail';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DealActivity: React.FC<{ dealId: number }> = ({ dealId }) => {
  const [dealLogs, setDealLogs] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDealLogs = async () => {
      try {
        const response = await getDealLog(dealId);
        setDealLogs(response.data.result);
      } catch (error) {
        setError('Failed to fetch deal logs');
        console.error('Error during get deal log:', error);
      }
    };

    fetchDealLogs();
  }, [dealId]);

  if (error) {
    return <DealNoteWrapper>{error}</DealNoteWrapper>;
  }

  return (
    <DealNoteWrapper>
      <h2>Activity</h2>
      {dealLogs.length > 0 ? (
        dealLogs.map((log) => (
          <LogWrapper key={log.dealLogId}>
            <p>{log.dealLog}</p>
            <small>{new Date(log.savedTime).toLocaleString()}</small>
          </LogWrapper>
        ))
      ) : (
        <p>No activity logs found.</p>
      )}
    </DealNoteWrapper>
  );
};

export default DealActivity;

const DealNoteWrapper = styled.div`
  padding: 16px;
  background-color: #f9f9f9;
`;

const LogWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 8px 0;

  p {
    margin: 0;
  }

  small {
    display: block;
    color: #888;
    margin-top: 4px;
  }
`;
