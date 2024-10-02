import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'


import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Bookmark } from "lucide-react";
import { RichTextDisplay } from "@/components/question/rich-text-display";
import { MCQInput } from "@/components/question/mcq-input";
import { SPRInput } from "@/components/question/spr-input";
import { QuestionFooter } from "@/components/question/footer";


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

  // Get the total number of questions
  const { count, error: countError } = await supabase
    .from('questions')
    .select('*', { count: 'exact', head: true })

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

                {
                  question[0]?.question_type === "mcq" ?
                    <MCQInput options={answerData} />
                    :
                    <SPRInput />
                }

              </div>
            </ResizablePanel>
          </ResizablePanelGroup>

        </div>
        
        <QuestionFooter currentQuestion={question[0]?.serial_number} questionCount={count} />
      </main>
    </div>
  );
}