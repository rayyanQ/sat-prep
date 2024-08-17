'use client'

import { Bold, Italic, Underline } from "lucide-react"
 
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Mathematics from '@tiptap-pro/extension-mathematics'

import 'katex/dist/katex.min.css'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Mathematics,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="w-full h-full border" />
    </div>
  )
}

const MenuBar = ({ editor }: {editor: Editor|null}) => {
  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-row w-full border rounded p-2">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

export default Tiptap