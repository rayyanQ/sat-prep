'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function logoff() {

  const supabase = createClient()

  const { error } = await supabase.auth.signOut()
  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}