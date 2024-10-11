'use server'

import { createClient } from '@/lib/supabase/server'

interface QuestionData {
  uid: string,
  type: string,
  answer: string
}

export async function submitQuestion(questionData: QuestionData) {

  const supabase = createClient()
  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    return 'User not logged in';
  }

  if (questionData) {
    const {uid, type, answer} = questionData;

    /*if (type === "mcq") {
      // MCQ option
    } else {
      // SPR option
    }*/


    
    let { data: questions, error } = await supabase
      .from('questions')
      .select('correct_answer')
      .eq('uid', uid)

    if (error || !questions || questions.length == 0) {
      console.error(error);
      return 'Question not found';
    }

    const result = answer === questions[0].correct_answer ? 'Correct' : 'Incorrect';
  
    const { data: questionAttempt, error: questionAttemptError } = await supabase
      .from('question_attempts')
      .insert([
        {
          user_uid: userData.user.id,
          question_uid: uid,
          user_answer: answer,
          result: result,
        },
      ])

    return result;
  }

  return 'Invalid data';
}
  
  //
  // JSON.parse(context);
  // validate input
  // submit data to the server
  // error handling
  // return success or failure msg
