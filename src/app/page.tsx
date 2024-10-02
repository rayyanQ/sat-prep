import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

import { Question, columns } from "@/components/question-table/columns"
import { DataTable } from "@/components/question-table/data-table"
import { H2 } from "@/components/ui/heading"


// Main Home page component
const Home = () => {
  return (
    <main className="w-full flex flex-col justify-center items-start">
      <QuestionSection />
    </main>
  );
}

async function QuestionSection() {
  const supabase = createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    redirect('/login')
  }
  
  // https://tiptap.dev/docs/guides/output-json-html#render
  let { data: questions, error } = await supabase
    .from('questions')
    .select("uid, serial_number, title, context, section, domain, topic, difficulty")
  // TODO: get user status for each question
  /**
   * Get all questions from the database,
   * where user_id = userData.user.id
   * and question_id = questions.id
   */
  
  if (error) {
    // Handle the error appropriately
    console.error('Error fetching questions:', error);
    questions = [];
  }

  return (
    <section className="container py-6">
      <div className="flex flex-row justify-start items-center pb-2">
        <H2>Question Bank</H2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <DataTable columns={columns} data={questions || []} />
      </div>
    </section>
  );
}

export default Home;