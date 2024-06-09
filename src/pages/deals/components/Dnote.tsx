import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { Button } from 'antd';
import { useState } from 'react';
import { Block } from '@blocknote/core';
import { postDealNote } from '@finnect/apis/deal/useDealDetail';

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
        content: [{ text: '', type: 'text', styles: {} }],
      },
      {
        type: 'paragraph',
        content: [{ text: '', type: 'text', styles: {} }],
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
    if (document.length > 0) {
      const titleBlock = document[0];
      const bodyBlocks = document.slice(1);
      setTitle(titleBlock.content[0].text);

      const bodyText = bodyBlocks
        .map((block: Block) =>
          (block.content ?? []).map((c: { text: string }) => c.text).join(' ')
        )
        .join('\n\n');

      setBody(bodyText);
    }
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
