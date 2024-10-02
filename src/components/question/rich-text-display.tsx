"use client";

import { Skeleton } from '@/components/ui/skeleton';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Mathematics from '@tiptap-pro/extension-mathematics'
import Image from "@tiptap/extension-image"
import 'katex/dist/katex.min.css'

const RichTextDisplay = ({ content }: { content: string }) => {
  const editor = useEditor({
    content: JSON.parse(content),
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-6',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-6',
          },
        },
        heading: {
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: 'text-style',
          },
        },
      }),
      Mathematics,
      Underline,
      Image
    ],
    autofocus: 'all',
    editorProps: {
      attributes: {
        class: 'w-full focus:outline-none',
      },
    },
  })
  editor?.setEditable(false);

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}

const RichTextDisplaySkeleton = () => (
  <span className="w-full flex flex-col justify-start items-start">
    <Skeleton className="w-2/5 h-16 mb-2" />
    <Skeleton className="w-3/5 h-12 mb-2" />
    <Skeleton className="w-4/5 h-12 mb-2" />
  </span>
)

export { RichTextDisplay, RichTextDisplaySkeleton };