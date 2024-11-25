import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo,
  Quote,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useCallback } from 'react';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const MenuButton = ({ 
  onClick, 
  active, 
  children, 
  title 
}: { 
  onClick: () => void; 
  active?: boolean; 
  children: React.ReactNode;
  title?: string;
}) => (
  <button
    type="button" // Add this to prevent form submission
    onClick={(e) => {
      e.preventDefault(); // Prevent form submission
      onClick();
    }}
    title={title}
    className={`p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 ${
      active ? 'bg-blue-50 text-blue-600' : ''
    }`}
  >
    {children}
  </button>
);

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  // Debounce the onChange callback
  const debouncedOnChange = useCallback((newContent: string) => {
    const timeoutId = setTimeout(() => {
      onChange(newContent);
    }, 300); // 300ms delay

    return () => clearTimeout(timeoutId);
  }, [onChange]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      Heading.configure({
        levels: [1, 2],
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-lg max-w-full',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 hover:text-blue-800 underline',
        },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      debouncedOnChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose max-w-none focus:outline-none min-h-[200px]',
      },
      handleDOMEvents: {
        keydown: (view, event) => {
          // Prevent form submission on Enter key
          if (event.key === 'Enter' && event.ctrlKey) {
            event.preventDefault();
            return true;
          }
          return false;
        },
      },
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = window.prompt('Enter image URL');
    if (url) {
      if (url.match(/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i)) {
        editor.chain().focus().setImage({ src: url }).run();
      } else {
        toast.error('Please enter a valid image URL');
      }
    }
  };

  const addLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = window.prompt('Enter URL');
    if (url) {
      if (url.match(/^https?:\/\//i)) {
        editor.chain().focus().setLink({ href: url }).run();
      } else {
        toast.error('Please enter a valid URL starting with http:// or https://');
      }
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-300 bg-gray-50">
        <div className="flex items-center gap-1">
          <MenuButton
            onClick={() => editor.chain().focus().undo().run()}
            title="Undo"
            active={false}
          >
            <Undo className="w-5 h-5" />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().redo().run()}
            title="Redo"
            active={false}
          >
            <Redo className="w-5 h-5" />
          </MenuButton>
        </div>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <div className="flex items-center gap-1">
          <MenuButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive('bold')}
            title="Bold"
          >
            <Bold className="w-5 h-5" />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive('italic')}
            title="Italic"
          >
            <Italic className="w-5 h-5" />
          </MenuButton>
        </div>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <div className="flex items-center gap-1">
          <MenuButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive('bulletList')}
            title="Bullet List"
          >
            <List className="w-5 h-5" />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive('orderedList')}
            title="Numbered List"
          >
            <ListOrdered className="w-5 h-5" />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editor.isActive('blockquote')}
            title="Quote"
          >
            <Quote className="w-5 h-5" />
          </MenuButton>
        </div>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <div className="flex items-center gap-1">
          <MenuButton
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            active={editor.isActive({ textAlign: 'left' })}
            title="Align Left"
          >
            <AlignLeft className="w-5 h-5" />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            active={editor.isActive({ textAlign: 'center' })}
            title="Align Center"
          >
            <AlignCenter className="w-5 h-5" />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            active={editor.isActive({ textAlign: 'right' })}
            title="Align Right"
          >
            <AlignRight className="w-5 h-5" />
          </MenuButton>
        </div>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <div className="flex items-center gap-1">
          <MenuButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            active={editor.isActive('heading', { level: 1 })}
            title="Heading 1"
          >
            <Heading1 className="w-5 h-5" />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            active={editor.isActive('heading', { level: 2 })}
            title="Heading 2"
          >
            <Heading2 className="w-5 h-5" />
          </MenuButton>
        </div>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <div className="flex items-center gap-1">
          <MenuButton onClick={addLink} title="Add Link">
            <LinkIcon className="w-5 h-5" />
          </MenuButton>
          <MenuButton onClick={addImage} title="Add Image">
            <ImageIcon className="w-5 h-5" />
          </MenuButton>
        </div>
      </div>

      <EditorContent 
        editor={editor} 
        className="prose max-w-none p-4 min-h-[300px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 transition-all duration-200" 
      />
    </div>
  );
}