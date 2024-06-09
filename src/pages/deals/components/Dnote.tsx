import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { Button } from 'antd';
import { useState } from 'react';
import { Block } from '@blocknote/core';
import {
  getDealNoteList,
  postDealNote,
} from '@finnect/apis/deal/useDealDetail';

interface DnoteProps {
  handleAdd: () => void;
  fetchDealNotes: () => void;
  dealId: number;
}

const Dnote: React.FC<DnoteProps> = ({ handleAdd, fetchDealNotes, dealId }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: 'heading',
        content: [{ text: 'Write Title', type: 'text', styles: {} }],
      },
      {
        type: 'paragraph',
        content: [{ text: 'Write Content', type: 'text', styles: {} }],
      },
    ],
  });

  const handleSaveNote = async () => {
    try {
      await postDealNote(dealId, title, body);
      handleAdd();
      fetchDealNotes();
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const handleEditorChange = () => {
    const document = editor.document;
    const titleBlock = document[0];
    const bodyBlocks = document.slice(1);

    setTitle(titleBlock.content?.map((c: Block) => c.text).join(' ') || '');
    setBody(
      bodyBlocks
        .map((block: Block) =>
          (block.content ?? []).map((c: Block) => c.text).join(' ')
        )
        .join('\n\n')
    );
    console.log('body : ', body);
  };

  return (
    <>
      <BlockNoteView editor={editor} onChange={handleEditorChange} />
      <br />
      <Button type='primary' onClick={handleSaveNote}>
        Add
      </Button>
    </>
  );
};

export default Dnote;
