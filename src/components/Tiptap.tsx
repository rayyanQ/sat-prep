'use client'

import { Bold, Italic, Underline as UnderlineIcon } from "lucide-react"
 
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline';
import Mathematics from '@tiptap-pro/extension-mathematics'

import 'katex/dist/katex.min.css'

const Tiptap = () => {

  /**
   * TODO:
   * - add a button to insert a math block
   * - add a button to insert images
   * - add a button to insert tables
   * - add gap cursor
   * - put editor in focus, when user clicks on the editor box
   */
  const editor = useEditor({
    extensions: [
      StarterKit,
      Mathematics,
      Underline,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="w-full h-full border p-1 first:h-full first:border-none m-0" />
    </div>
  )
}

const MenuBar = ({ editor }: {editor: Editor|null}) => {
  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-row w-full border rounded p-1 mb-1">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold" data-state={editor.isActive('bold') ? 'on' : 'off'} onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic" data-state={editor.isActive('italic') ? 'on' : 'off'} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline" data-state={editor.isActive('underline') ? 'on' : 'off'} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

export default Tiptap