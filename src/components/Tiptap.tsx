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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

/**
 * 
 * "@tiptap/pm": "^2.4.0",
 * "@tiptap/react": "^2.4.0",
 * "@tiptap/starter-kit - bold
 *  .configure({
        heading: false,
        codeBlock: false,
        underline: false,
        italic: false,
        strike: false,
        listItem: false,
        orderedList: false,
        bulletList: false,
        blockquote: false,
        hardBreak: false,
        horizontalRule: false,
        gapcursor: false,
      }),
 * "@tiptap-pro/extension-mathematics": "^2.10.7",
 * "@tiptap/extension-underline": "^2.6.4",
 * 
 */
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
      <ScrollArea className="w-full h-full border rounded p-1">
        <EditorContent editor={editor} className="w-full h-fit m-0" />
      </ScrollArea>
    </div>
  )
}

const MenuBar = ({ editor }: {editor: Editor|null}) => {
  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-row justify-between w-full border rounded p-1 mb-1">
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

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Text Style" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Text Style</SelectLabel>
            <SelectItem value="h1">Heading 1</SelectItem>
            <SelectItem value="h2">Heading 2</SelectItem>
            <SelectItem value="h3">Heading 3</SelectItem>
            <SelectItem value="p">Paragraph</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

    </div>
  )
}

export default Tiptap