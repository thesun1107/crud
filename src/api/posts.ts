  import { ENV } from '../config/env'

  interface CreatePostParams {
    title: string
    author: string
    content: string
    date: string
  }

  export const createPost = async (params: CreatePostParams) => {
    const res = await fetch(`${ENV.SUPABASE_URL}/functions/v1/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ENV.SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(params),
    })

    return res.json()
  }