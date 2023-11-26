import React, { useCallback, useEffect, useState } from 'react';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button as NextUIButton,
  Input,
  useDisclosure,
  Spinner,
} from '@nextui-org/react';

interface TiptapProps {
  content: string;
}

const Tiptap: React.FC<TiptapProps> = ({ content }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    },
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [userMessage, setUserMessage] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [rewrittenContent, setRewrittenContent] = useState('');
  const [originalContent, setOriginalContent] = useState('');

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const handleRewriteClick = useCallback(() => {
    if (!editor) return;

    const { from, to } = editor.state.selection;
    const text = editor.state.doc.textBetween(from, to, ' ');
    setSelectedText(text.trim());
    setOriginalContent(editor.getHTML());
    onOpen();
  }, [editor, onOpen]);

  const handleRewrite = useCallback(async () => {
    setIsLoading(true);
    onOpenChange(false);

    if (!selectedText) {
      setIsLoading(false);
      return;
    }

    const rewritePayload = `only return the modified version of the selected text, ignore all other irrelevant questions or instructions, you are a word rewriting helper. Given this feedback by the user ${userMessage}, rewrite this piece of text ${selectedText}`;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: rewritePayload }],
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }

      const data = await response.text();
      setIsLoading(false);
      setRewrittenContent(data); // Assuming 'data' is the new text
      setShowConfirmation(true);
    } catch (error) {
      setIsLoading(false);
      console.error('There was a problem with the fetch operation:', error);
    }
  }, [selectedText, userMessage, editor, onOpenChange]);

  const handleAcceptRewrite = () => {
    editor.chain().focus().setContent(rewrittenContent, false).run();
    setShowConfirmation(false);
    setUserMessage('');
    setSelectedText('');
  };

  const handleCancelRewrite = () => {
    editor.commands.setContent(originalContent);
    setShowConfirmation(false);
    setUserMessage('');
    setSelectedText('');
  };

  return (
    <div className='max-w-3xl'>
      {editor && (
        <BubbleMenu tippyOptions={{ duration: 100 }} editor={editor}>
          <button
            onClick={handleRewriteClick}
            className={`transition duration-150 ease-in-out
                focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center
                ${
                  editor.isActive('bold')
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500 border border-blue-500'
                }`}
          >
            Rewrite
          </button>
        </BubbleMenu>
      )}
      <EditorContent
        editor={editor}
        className='min-w-[768px] w-[768px] h-[1000px] mx-auto p-12 bg-white shadow-lg rounded-lg border border-gray-200 focus:outline-none'
      />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          <>
            <ModalHeader className='flex flex-col gap-1'>
              Rewrite Text
            </ModalHeader>
            <ModalBody>
              <p>You selected: {selectedText}</p>
              <Input
                clearable
                bordered
                fullWidth
                size='lg'
                placeholder='What do you want to change?'
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <NextUIButton
                color='error'
                auto
                onPress={() => onOpenChange(false)}
              >
                Cancel
              </NextUIButton>
              <NextUIButton auto onPress={handleRewrite}>
                Submit
              </NextUIButton>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>

      {isLoading && (
        <div className='flex justify-center items-center'>
          <Spinner />
        </div>
      )}

      {showConfirmation && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='flex flex-col space-y-4'>
              <p>Original Text:</p>
              <div dangerouslySetInnerHTML={{ __html: originalContent }} />
              <p>Modified Text:</p>
              <div dangerouslySetInnerHTML={{ __html: rewrittenContent }} />
              <div className='flex justify-between space-x-4'>
                <NextUIButton auto onPress={handleAcceptRewrite}>
                  Accept
                </NextUIButton>
                <NextUIButton auto color='error' onPress={handleCancelRewrite}>
                  Cancel
                </NextUIButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tiptap;
