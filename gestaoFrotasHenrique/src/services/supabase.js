import { createClient } from "@supabase/supabase-js";

const   SUPABASE_URL = 'https://umopteuhxwpbdlzywjcm.supabase.co'
const   SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtb3B0ZXVoeHdwYmRsenl3amNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNDczMzAsImV4cCI6MjA3OTgyMzMzMH0.3-F4AnH4h_v4TNjvRXcXC-jMj6n3W07m8Oqijp87cSY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)