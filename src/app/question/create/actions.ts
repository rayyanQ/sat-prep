'use server'

import { createClient } from '@/lib/supabase/server'

type answerOptionsType = {
  "A": string,
  "B": string,
  "C": string,
  "D": string,
  "correct": string
} | {
  "correct": string,
  "error": string
}

interface QuestionData {
  context: string,
  question: string,
  answers: string
}

export async function createQuestion(questionData: QuestionData) {

  const supabase = createClient()
  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    return 'User not logged in';
  }

  if (questionData) {
    const {context, question, answers} = questionData;

    const answerData = JSON.parse(answers);
    let answerOptions;
    const correctAnswer = answerData.options['correct'];
    if (answerData.type === "mcq") {
      answerOptions = {
        "A": answerData.options["A"],
        "B": answerData.options['B'],
        "C": answerData.options['C'],
        "D": answerData.options['D'],
      }
    } else {
      answerOptions = {
        "correct": answerData.options['correct'],
        "error": answerData.options['error']
      }
    }


    const { data, error } = await supabase
    .from('questions')
    .insert([
      {
        title: 'some title',
        context: context,
        question: question,
        question_type: answerData.type,
        answer_options: JSON.stringify(answerOptions),// to be updated
        correct_answer: correctAnswer
      },
    ])
    .select()
    console.log(answerOptions);
  }
  
  //
  // JSON.parse(context);
  // validate input
  // submit data to the server
  // error handling
  // return success or failure msg
  return null;
}