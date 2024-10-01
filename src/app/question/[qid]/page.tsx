import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Header from "@/components/Header";
import {
  EllipsisVertical,
  PencilLine,
  Bookmark,
  CircleHelp,
  Keyboard,
  PersonStanding,
  ScanLine,
  DoorOpen,
  TriangleAlert
} from "lucide-react";
import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Mathematics from '@tiptap-pro/extension-mathematics'
import Image from "@tiptap/extension-image"
// TODO: add types for he
// import he from 'he';

export default async function Question({ params }: { params: { qid: string } }) {

  const supabase = createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    redirect('/login')
  }
  
  // https://tiptap.dev/docs/guides/output-json-html#render
  let { data: question, error } = await supabase
    .from('questions')
    .select("*")
    // Filters
    .eq('serial_number', params.qid)

  if (error !== null || question === null || question.length === 0) {
    // TODO: redirect to 404 or 'question does not exist'
    redirect('/')
  }

  const tiptapExtensions = [
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
    Image,
  ]
  const contextHTML = generateHTML(JSON.parse(question[0]?.context), tiptapExtensions)
  const questionHTML = generateHTML(JSON.parse(question[0]?.question), tiptapExtensions)


  return (
    <div className="flex flex-grow w-full">
      <main className="flex flex-col justify-between items-center w-full">
        <div className="h-full w-full flex flex-col justify-center items-center">
          {
          /*
            TODO:
            - change width to w-full
          */
          }
          <ResizablePanelGroup direction="horizontal" className="h-full container">
            <ResizablePanel defaultSize={50}>
              <div className="min-w-48 w-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">
                <p className="w-full flex justify-start items-center my-6 font-serif">
                  {/*he.decode(question[0]?.context)*/}
                  <span className='tiptap'>
                    <span className="Tiptap-mathematics-render" dangerouslySetInnerHTML={{ __html: contextHTML }}>
                    </span>
                  </span>
                </p>
              </div>
            </ResizablePanel>
            <ResizableHandle className="border-2" />
            <ResizablePanel defaultSize={50}>
              <div className="min-w-48 w-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">
              
                <div className="w-full h-8 flex justify-between items-center bg-neutral-200 border-b-2 border-neutral-950 border-dashed">
                  <div className="flex flex-row">
                    <span className="flex justify-center items-center bg-neutral-950 text-white h-full aspect-square">
                      <b>1</b>
                    </span>
                    <Bookmark size={20} />
                  </div>
                  <div>ABC</div>
                </div>

                <div className="w-full flex justify-start items-start my-6 font-serif">
                  <span className='tiptap'>
                    <span className="Tiptap-mathematics-render" dangerouslySetInnerHTML={{ __html: questionHTML }}>
                    </span>
                  </span>
                </div>

                <ol className="w-full space-y-3">
                  <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                    <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                      A
                    </span>
                    scholarly
                  </li>
                  <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                    <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                      B
                    </span>
                    melodic
                  </li>
                  <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                    <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                      C
                    </span>
                    jarring
                  </li>
                  <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                    <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                      D
                    </span>
                    personal
                  </li>
                </ol>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        
        <QuestionFooter />
      </main>
    </div>
  );
}


const QuestionFooter = () => {
  return (
    <footer className="bottom-0 flex flex-row justify-center items-center w-full border-t">
      <div className="container h-14 px-10 grid grid-cols-3">
        <div className="col-span-1 flex flex-row justify-start items-center">
          <b>Rayyan Quraishi</b>
        </div>
        <div className="col-span-1 flex flex-row justify-center items-center">
          <div className="bg-neutral-950 text-white px-3 py-1 rounded">Question 1 of 8</div>
        </div>
        <div className="col-span-1 flex flex-row justify-end items-center space-x-4">
          <Button variant="outline">Previous</Button>
          <Button>Submit</Button>
        </div>
      </div>
    </footer>
  );
}