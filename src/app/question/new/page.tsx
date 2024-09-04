"use client"

//import { createClient } from '@/lib/supabase/client'

import Tiptap from '@/components/Tiptap'
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { H4 } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';

import { useEffect, useState } from 'react';

export default function NewQuestion({ params }: { params: { qid: string } }) {
  /*const supabase = createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    redirect('/login')
  }*/

  const [context, setContext] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [answers, setAnswers] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleContextSubmit = (data: object) => {
    setContext(JSON.stringify(data));
  }
  const handleQuestionSubmit = (data: object) => {
    setQuestion(JSON.stringify(data));
  }
  const handleAnswersSubmit = (data: object) => {
    setAnswers(JSON.stringify(data));
  }
  const handleSubmit = () => {
    setSubmitted(true);
  }

  useEffect(() => {
    // submit data to the server - using server actions?
    console.log(context);
    console.log(question);
    setSubmitted(false);
  }, [context, question, answers]);

  return(
    <main className="flex flex-col justify-between items-center w-full h-screen">

      <div className="h-full w-full flex flex-col justify-center items-center">
        <ResizablePanelGroup direction="horizontal" className="h-full container">

          <ResizablePanel defaultSize={50}>
            <div className="min-w-48 w-full h-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">
              <div className="w-full h-full flex flex-col justify-center items-start">
                <H4>Context</H4>
                <Tiptap submitted={submitted} handleSubmit={handleContextSubmit} placeholder="Provide context for the question here..." />
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle className="border-2" />

          <ResizablePanel defaultSize={50}>
            <div className="min-w-48 w-full h-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">

              <div className="w-full h-full flex flex-grow flex-col justify-center items-start">
                <H4>Question</H4>
                <Tiptap submitted={submitted} handleSubmit={handleQuestionSubmit}  placeholder="Enter the question here..." />
              </div>
              <br />
             
              <div className="row-span-1 w-full h-full flex flex-col justify-start items-start">
                <Tabs defaultValue="mcq" className="w-full">
                  <div className="flex flex-row justify-between items-center space-x-2">
                    <H4>Answer</H4>
                    <TabsList className="mb-1">
                      <TabsTrigger value="mcq">MCQ</TabsTrigger>
                      <TabsTrigger value="spr">Custom Response</TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="mcq">
                    <ol className="w-full space-y-3">
                      <li className="w-full h-12 flex flex-row justify-start items-center">
                        <div>
                          <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                            A
                          </span>
                        </div>
                        <Input type="text" placeholder="Option A" className="w-full rounded border border-neutral-950" />
                        <Checkbox className="mx-6" />
                      </li>
                      <li className="w-full h-12 flex flex-row justify-start items-center">
                        <div>
                          <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                            B
                          </span>
                        </div>
                        <Input type="text" placeholder="Option B" className="w-full rounded border border-neutral-950" />
                        <Checkbox className="mx-6" />
                      </li>
                      <li className="w-full h-12 flex flex-row justify-start items-center">
                        <div>
                          <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                            C
                          </span>
                        </div>
                        <Input type="text" placeholder="Option C" className="w-full rounded border border-neutral-950" />
                        <Checkbox className="mx-6" />
                      </li>
                      <li className="w-full h-12 flex flex-row justify-start items-center">
                        <div>
                          <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                            D
                          </span>
                        </div>
                        <Input type="text" placeholder="Option D" className="w-full rounded border border-neutral-950" />
                        <Checkbox className="mx-6" />
                      </li>
                    </ol>
                  </TabsContent>
                  <TabsContent value="spr">
                    <div className="flex flex-row justify-start items-center space-x-2">
                      <Input type="text" placeholder="Correct answer" className="rounded border border-neutral-950" />
                      <p>+/-</p>
                      <Input type="text" placeholder="Allowed error" className="rounded border border-neutral-950" />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      
      <NewQuestionFooter handleSubmit={handleSubmit} />
    </main>
  );
}


const NewQuestionFooter = ({handleSubmit}: {handleSubmit: () => void}) => {
  return (
    <footer className="bottom-0 flex flex-row justify-center items-center w-full border-t">
      <div className="container h-14 px-10 grid grid-cols-2">
        <div className="col-span-1 flex flex-row justify-start items-center">
          <b>Rayyan Quraishi</b>
        </div>
        <div className="col-span-1 flex flex-row justify-end items-center space-x-4">
          <Button variant="outline">Preview</Button>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
      </div>
    </footer>
  );
}