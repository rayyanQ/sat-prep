"use client"

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Bookmark } from "lucide-react";
import { RichTextDisplay, RichTextDisplaySkeleton } from "@/components/question/rich-text-display";
import { MCQInput, MCQInputSkeleton } from "@/components/question/mcq-input";
import { SPRInput } from "@/components/question/spr-input";
import { QuestionFooter } from "@/components/question/footer";
import { submitQuestion } from './actions';

import { useState, useEffect } from 'react';


export default function Question({ params }: { params: { qid: string } }) {

  const [question, setQuestion] = useState<any>([]);
  const [questionError, setQuestionError] = useState<any>(null);
  const [count, setCount] = useState<any>(0);
  const [answerData, setAnswerData] = useState<any>(null);
  const [userAnswer, setUserAnswer] = useState<string>("-");
  const [userResult, setUserResult] = useState<string|null>(null);

  async function fetchData() {

    const supabase = createClient();

    // Check if the user is logged in
    const { data: userData, error: userError } = await supabase.auth.getUser()
    if (userError || !userData?.user) {
      redirect('/login')
    }
    
    // Fetch the question data based on the serial number provided in the url
    let { data: questionData, error: questionError } = await supabase
      .from('questions')
      .select("uid, serial_number, question, context, answer_options, question_type")
      // Filters
      .eq('serial_number', params.qid)

    // Redirect if question does not exist or more than one question is returned
    if (questionError !== null || questionData === null || questionData.length !== 1) {
      // TODO: redirect to 404 or 'question does not exist'
      redirect('/')
    }

    // Set question data
    setQuestion(questionData);
    setQuestionError(questionError);
    setAnswerData(JSON.parse(questionData[0]?.answer_options));

    // Get the total number of questions
    const { count, error: countError } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
    setCount(count);

  }
  useEffect(() => {fetchData()}, []);

  const handleSubmit = async () => {
    if (userAnswer === "-") {
      return;
    }
    setUserResult(null);
    const result = await submitQuestion({
      uid: question[0]?.uid,
      type: question[0]?.question_type,
      answer: userAnswer
    });
    await setUserResult(result);
  }

  return (
    <div className="flex flex-grow w-full">
      <main className="flex flex-col justify-between items-center w-full">
        <div className="h-full w-full flex flex-col justify-center items-center">

          <ResizablePanelGroup direction="horizontal" className="h-full container">
            <ResizablePanel defaultSize={50}>
              <div className="min-w-48 w-full max-w-[700px] flex flex-col justify-start items-start mx-auto px-10 py-6">
                <div className="w-full flex justify-start items-start my-6 font-serif">
                  {
                    question.length === 0 ?
                      <RichTextDisplaySkeleton />
                      :
                      questionError !== null ?
                        <div>Error fetching question</div>
                        :
                          <RichTextDisplay content={question[0]?.context}/>
                  }
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle className="border-2" />
            <ResizablePanel defaultSize={50}>
              <div className="min-w-48 w-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">
              
                <div className="w-full h-8 flex justify-between items-center bg-neutral-200 border-b-2 border-neutral-950 border-dashed">
                  <div className="flex flex-row">
                    <span className="flex justify-center items-center bg-neutral-950 text-white w-full h-8 aspect-square">
                      <b>{question[0]?.serial_number}</b>
                    </span>
                    {/*<Bookmark size={20} />*/}
                  </div>
                  {/*<div>ABC</div>*/}
                </div>

                <div className="w-full flex justify-start items-start my-6 font-serif">
                  {
                    question.length === 0 ?
                      <RichTextDisplaySkeleton />
                      :
                      questionError !== null ?
                        <div>Error fetching question</div>
                        :
                          <RichTextDisplay content={question[0]?.question}/>
                  }
                </div>

                {
                  answerData === null ?
                  <MCQInputSkeleton />
                  :
                  questionError !== null ?
                    <div>Error fetching question</div>
                    :
                    question[0]?.question_type === "mcq" ?
                      <MCQInput userResult={userResult} options={answerData} selected={userAnswer} handleUpdate={setUserAnswer} />
                      :
                      <SPRInput />
                }

              </div>
            </ResizablePanel>
          </ResizablePanelGroup>

        </div>
        
        <QuestionFooter
          userAnswer={userAnswer}
          userResult={userResult}
          currentQuestion={question[0]?.serial_number}
          questionCount={count}
          handleSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}