import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import React, { useEffect, useState } from 'react';

export default ({ content }) => {
  const [modelValue, setModelValue] = useState(content);

  const editor = useEditor({
    content: modelValue,
    editorProps: {
      attributes: {
        class: 'm-2 p-2 border border-black rounded-lg',
      },
    },
    onUpdate() {
      setModelValue(editor?.getText() ?? '');
    },
    extensions: [StarterKit],
  });

  useEffect(() => {
    // Update the editor's content when the `content` prop changes
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    // @ts-ignore
    <EditorContent editor={editor} className='w-[768px]' />
  );
};
