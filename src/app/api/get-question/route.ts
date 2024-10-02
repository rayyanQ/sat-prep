import { type NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest, response: NextResponse) {

  const supabase = createClient()

  // Check if the user is logged in
  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    redirect('/login')
  }

  console.log(request);
  // Fetch the question data based on the serial number provided in the url
  /*const { data: question, error: questionError } = await supabase
    .from('questions')
    .select("*")
    // Filters
    .eq('serial_number', params.qid)*/

}