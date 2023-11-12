'use client';

import './styles.css';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Tiptap: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: `
    <p>
      Try to select <em>this text</em> to see what we call the bubble menu.
    </p>
    <p>
      Neat, isn’t it? Add an empty paragraph to see the floating menu.
    </p>
  `,
  });

  return (
    <>
      {editor && (
        <BubbleMenu
          className='bubble-menu'
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
          >
            Chat
          </button>
        </BubbleMenu>
      )}

      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
