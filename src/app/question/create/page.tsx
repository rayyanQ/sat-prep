"use client"

//import { createClient } from '@/lib/supabase/client'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { H4 } from '@/components/ui/heading';
import CreateOptionsForm from "@/components/question/create-options-form"
import CreateQuestionFooter from "@/components/question/create-question-footer"
import RichTextEditor from '@/components/rich-text-editor'
import { createQuestion } from './actions'


import { useEffect, useState } from 'react';

type OptionsType = {
  type: string,
  options: {
    'correct': string,
    'error': string
  } | {
    'A': string,
    'B': string,
    'C': string,
    'D': string,
    'correct': string
  },
}

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


  const handleContextSubmit = (context: object) => {
    setContext(JSON.stringify(context));
  }
  const handleQuestionSubmit = (question: object) => {
    setQuestion(JSON.stringify(question));
  }
  const handleAnswersSubmit = (answer: OptionsType) => {
    setAnswers(JSON.stringify(answer));
  }
  const handleSubmit = () => {
    setSubmitted(true); // flag used to trigger callback functions in children components
  }

  // Runs when the data is updated
  useEffect(() => {
    const questionData = {
      "context": context,
      "question": question,
      "answers": answers
    };
    createQuestion(questionData);
    // Validate input
    // Submit data to the server
    // Error handling
    // On success, redirect to the admin dashboard page
    // server action to process data
  }, [context, question, answers]);

  // Runs when the submitted flag is updated
  useEffect(() => {
    if (submitted) setSubmitted(false);
  }, [submitted]);


  return(
    <div className="flex flex-grow w-full">
      <main className="flex flex-col justify-between items-center w-full">

        <div className="h-full w-full flex flex-col justify-center items-center">
          <ResizablePanelGroup direction="horizontal" className="h-full container">

            <ResizablePanel defaultSize={50}>
              <div className="min-w-48 w-full h-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">
                <div className="w-full h-full flex flex-col justify-center items-start">
                  <H4>Context</H4>
                  <RichTextEditor submitted={submitted} handleSubmit={handleContextSubmit} placeholder="Provide context for the question here..." />
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle className="border-2" />
            <ResizablePanel defaultSize={50}>
              <div className="min-w-48 w-full h-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">

                <div className="w-full h-full flex flex-grow flex-col justify-center items-start">
                  <H4>Question</H4>
                  <RichTextEditor submitted={submitted} handleSubmit={handleQuestionSubmit}  placeholder="Enter the question here..." />
                </div>
                <br />
              
                <div className="w-full h-full flex flex-col justify-start items-start">
                  <CreateOptionsForm submitted={submitted} handleSubmit={handleAnswersSubmit} />
                </div>

              </div>
            </ResizablePanel>

          </ResizablePanelGroup>
        </div>
        
        <CreateQuestionFooter handleSubmit={handleSubmit} />
      </main>
    </div>
  );
}