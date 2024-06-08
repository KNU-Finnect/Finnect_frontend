import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { Button, Input } from 'antd';
import './styles.css';

interface DnoteProps {
  handleAdd: () => void;
}

const Dnote: React.FC<DnoteProps> = ({ handleAdd }) => {
  const editor = useCreateBlockNote();

  return (
    <>
      <Input placeholder='input title' allowClear />

      <BlockNoteView editor={editor} data-theming-css-variables-demo />
      <br />
      <Button type='primary' onClick={handleAdd}>
        Add
      </Button>
    </>
  );
};

export default Dnote;
