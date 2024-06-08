import { getDealLog } from '@finnect/apis/deal/useDealDetail';
import React, { useEffect, useState } from 'react';
import { Avatar, List } from 'antd';
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
        <List
          itemLayout='horizontal'
          dataSource={dealLogs}
          renderItem={(log, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={<LogTitle>{log.dealLog}</LogTitle>}
                description={
                  <small>{new Date(log.savedTime).toLocaleString()}</small>
                }
              />
            </List.Item>
          )}
        />
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

const LogTitle = styled.span`
  font-weight: bold;
`;
