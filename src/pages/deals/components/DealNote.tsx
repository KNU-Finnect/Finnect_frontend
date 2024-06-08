import { getDealNoteList } from '@finnect/apis/deal/useDealDetail';
import { useEffect, useState } from 'react';
import { Button, Table, Modal } from 'antd';
import type { TableColumnsType } from 'antd';
import styled from 'styled-components';
import Dnote from './Dnote'; // Adjust the import path as needed

interface DealMainProps {
  dealId: number;
}

interface NoteType {
  key: React.Key;
  title: string;
  author: string;
  lastModified: string;
}

const DealNote: React.FC<DealMainProps> = ({ dealId }) => {
  const [dealNotes, setDealNotes] = useState<NoteType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddNote = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const fetchDealNotes = async () => {
      try {
        const response = await getDealNoteList(dealId);
        const notes = response.data.result.notes.map((note: any) => ({
          key: note.noteId,
          title: note.title,
          author: 'Author Name',
          lastModified: new Date(note.createdDate).toLocaleString(),
        }));
        setDealNotes(notes);
      } catch (error) {
        setError('Failed to fetch deal notes');
        console.error('Error during get deal notes:', error);
      }
    };

    fetchDealNotes();
  }, [dealId]);

  const columns: TableColumnsType<NoteType> = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Last Modified',
      dataIndex: 'lastModified',
      sorter: (a, b) =>
        new Date(a.lastModified).getTime() - new Date(b.lastModified).getTime(),
    },
  ];

  if (error) {
    return <DealNoteWrapper>{error}</DealNoteWrapper>;
  }

  return (
    <DealNoteWrapper>
      <Table
        columns={columns}
        dataSource={dealNotes}
        style={{ height: '460px' }}
      />
      <br />
      <Button type='primary' onClick={handleAddNote}>
        Add note
      </Button>
      <Modal
        title='Add Note'
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Dnote handleAdd={handleCancel} />
      </Modal>
    </DealNoteWrapper>
  );
};

export default DealNote;

const DealNoteWrapper = styled.div`
  padding: 16px;
  /* background-color: #f9f9f9; */
`;
