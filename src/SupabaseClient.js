
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xyedvqcuefnbboegrzwa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZWR2cWN1ZWZuYmJvZWdyendhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjkzNTUyOCwiZXhwIjoyMDAyNTExNTI4fQ.dGcUljOSIuP6JsEmRTZJy1YPnjrsBf9NjzFcKLB5dyI'
export const supabase = createClient(supabaseUrl, supabaseKey)