// Wait for supabase CDN to be ready
window.addEventListener('DOMContentLoaded', function() {
  if (typeof supabase === 'undefined') {
    console.error('[Bloodline Acres] Supabase CDN failed to load');
    return;
  }
  window.sb = supabase.createClient(
    'https://vjxaltcdvxlmnmymkcox.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqeGFsdGNkdnhsbW5teW1rY294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNjgxMjMsImV4cCI6MjA4ODg0NDEyM30.p-zRdzhyGpDd_ujKj1ScfPnIjiIgQEkOSxdy_BgrEeE'
  );
  console.log('[Bloodline Acres] Supabase client ready', window.sb);
});
