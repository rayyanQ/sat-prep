import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <ol className="list-decimal list-outside ml-5">
        <li className='list-item'>Question 1</li>
        <li>Question 2</li>
        <li>Question 3</li>
      </ol>
    </div>
  );
}