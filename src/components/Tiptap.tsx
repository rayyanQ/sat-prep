'use client'

import {
  Bold,
  Italic,
  UnderlineIcon,
  ListIcon,
  ListOrderedIcon,
  UndoIcon,
  RedoIcon,
} from "lucide-react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline';
import Mathematics from '@tiptap-pro/extension-mathematics'

import { useState } from 'react'

import 'katex/dist/katex.min.css'

const Tiptap = () => {

  const editor = useEditor({
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
      }),
      Mathematics,
      Underline,
    ],
    content: '<p>Hello World! 🌎️</p>',
    autofocus: 'all',
    editorProps: {
      attributes: {
        class: 'w-full focus:outline-none',
      },
    },
  })

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <MenuBar editor={editor} />
      <ScrollArea className="w-full h-full border rounded p-1">
        <EditorContent editor={editor} />
      </ScrollArea>
    </div>
  )
}

const MenuBar = ({ editor }: {editor: Editor|null}) => {
  const [value, setValue] = useState("");

  if (!editor) {
    return null
  }

  const setTextStyle = (value: string) => {
    switch (value) {
      case "Heading 1":
        editor.chain().focus().setHeading({ level: 1 }).run()
        break
      case "Heading 2":
        editor.chain().focus().setHeading({ level: 2 }).run()
        break
      case "Heading 3":
        editor.chain().focus().setHeading({ level: 3 }).run()
        break
      case "Paragraph":
        editor.chain().focus().setParagraph().run()
        break
      default:
        break
    }
    setValue(value)
  }
  
  return (
    <div className="flex flex-row justify-start w-full border rounded gap-2 p-1 mb-1">

      <Select value={value} onValueChange={setTextStyle}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Text Style">
            {value ? value : "Text Style"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Text Style</SelectLabel>
            <SelectItem value="Heading 1">Heading 1</SelectItem>
            <SelectItem value="Heading 2">Heading 2</SelectItem>
            <SelectItem value="Heading 3">Heading 3</SelectItem>
            <SelectItem value="Paragraph">Paragraph</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <ToggleGroup type="multiple" variant="outline">
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

      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bulletList" aria-label="Toggle buttle list" data-state={editor.isActive('bulletList') ? 'on' : 'off'} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <ListIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="orderedList" aria-label="Toggle ordered list" data-state={editor.isActive('orderedList') ? 'on' : 'off'} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrderedIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <div className="flex items-center justify-center gap-1">
        <Button variant="outline" size="icon" aria-label="Undo" onClick={() => editor.chain().focus().undo().run()}>
          <UndoIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Redo" onClick={() => editor.chain().focus().redo().run()}>
          <RedoIcon className="h-4 w-4" />
        </Button>
      </div>

    </div>
  )
}

export default Tiptap