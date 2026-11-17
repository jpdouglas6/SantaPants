
// 🎅 Santa Pants - Supabase connection

const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL_HERE";

const SUPABASE_ANON_KEY = "PASTE_YOUR_PUBLISHABLE_KEY_HERE";

// Connect to Supabase
const santaPantsDB = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
