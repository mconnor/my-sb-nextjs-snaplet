
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: comments } = await supabase.from('comments').select()

  return (
    <ul>
      {comments?.map((comment) => (
        <li>{comment}</li>
      ))}
    </ul>
  )
}
