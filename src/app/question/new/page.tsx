import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

import Tiptap from '@/components/Tiptap'
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header";


export default async function NewQuestion({ params }: { params: { qid: string } }) {
  const supabase = createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    redirect('/login')
  }

  return(
    <main className="flex flex-col justify-between items-center w-full h-screen">
      <Header />

      <div className="h-full w-full flex flex-col justify-center items-center">
        <ResizablePanelGroup direction="horizontal" className="h-full container">

          <ResizablePanel defaultSize={50}>
            <div className="min-w-48 w-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">
              <p className="w-full flex justify-start items-center my-6 font-serif">
                <Tiptap />
              </p>
            </div>
          </ResizablePanel>

          <ResizableHandle className="border-2" />

          <ResizablePanel defaultSize={50}>
            <div className="min-w-48 w-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">
             
              <Tabs defaultValue="mcq" className="w-full">
                <TabsList>
                  <TabsTrigger value="mcq">Multiple Choice Question</TabsTrigger>
                  <TabsTrigger value="spr">Student Produced Response</TabsTrigger>
                </TabsList>
                <TabsContent value="mcq">
                  <p className="w-full flex justify-start items-center my-6 font-serif">
                    <Tiptap />
                  </p>

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
                </TabsContent>
                <TabsContent value="spr">Change your password here.</TabsContent>
              </Tabs>

            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      
      <NewQuestionFooter />
    </main>
  );
}


const NewQuestionFooter = () => {
  return (
    <footer className="bottom-0 flex flex-row justify-center items-center w-full border-t">
      <div className="container h-14 px-10 grid grid-cols-2">
        <div className="col-span-1 flex flex-row justify-start items-center">
          <b>Rayyan Quraishi</b>
        </div>
        <div className="col-span-1 flex flex-row justify-end items-center space-x-4">
          <Button variant="outline">Preview</Button>
          <Button>Submit</Button>
        </div>
      </div>
    </footer>
  );
}