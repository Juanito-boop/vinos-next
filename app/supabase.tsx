import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://npuxpuelimayqrsmzqur.supabase.co'
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wdXhwdWVsaW1heXFyc216cXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4NDA4OTUsImV4cCI6MjAwODQxNjg5NX0.BdphzWe3xBzZZ_helLZlsUVDVEjByXfS8FjJP6Agn0M";

export const supabase = createClient(supabaseUrl, supabaseKey)