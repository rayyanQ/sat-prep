import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Bookmark } from "lucide-react";
import { RichTextDisplay } from "@/components/rich-text-display";


export default async function Question({ params }: { params: { qid: string } }) {

  const supabase = createClient();

  // Check if the user is logged in
  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    redirect('/login')
  }
  
  // Fetch the question data based on the serial number provided in the url
  let { data: question, error } = await supabase
    .from('questions')
    .select("*")
    // Filters
    .eq('serial_number', params.qid)

  // Redirect if question does not exist or more than one question is returned
  if (error !== null || question === null || question.length !== 1) {
    // TODO: redirect to 404 or 'question does not exist'
    redirect('/')
  }

  // Parse answer options
  const answerData = JSON.parse(question[0]?.answer_options);


  return (
    <div className="flex flex-grow w-full">
      <main className="flex flex-col justify-between items-center w-full">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <ResizablePanelGroup direction="horizontal" className="h-full container">
            <ResizablePanel defaultSize={50}>
              <div className="min-w-48 w-full max-w-[700px] flex flex-col justify-start items-start mx-auto px-10 py-6">
                <div className="w-full flex justify-start items-start my-6 font-serif">
                  <RichTextDisplay content={question[0]?.context}/>
                </div>
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
                  <RichTextDisplay content={question[0]?.question}/>
                </div>

                <ol className="w-full space-y-3">
                  <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                    <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                      A
                    </span>
                    {answerData['A']}
                  </li>
                  <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                    <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                      B
                    </span>
                    {answerData['B']}
                  </li>
                  <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                    <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                      C
                    </span>
                    {answerData['C']}
                  </li>
                  <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                    <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                      D
                    </span>
                    {answerData['D']}
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