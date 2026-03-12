const SUPABASE_URL = 'https://vjxaltcdvxlmnmymkcox.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqeGFsdGNkdnhsbW5teW1rY294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNjgxMjMsImV4cCI6MjA4ODg0NDEyM30.p-zRdzhyGpDd_ujKj1ScfPnIjiIgQEkOSxdy_BgrEeE'

const { createClient } = supabase
window.sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

console.log('[Bloodline Acres] Supabase client ready')
