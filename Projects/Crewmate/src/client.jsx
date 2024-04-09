import { createClient } from '@supabase/supabase-js'
const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY
const URL = 'https://wbkobdaixfqyfuyjzpmp.supabase.co'

export const supabase = createClient(URL, API_KEY)
