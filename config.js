const SUPABASE_URL = "https://.hgkyrgtbdaiboglqgzvq.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_29tNqpeaDgFhfiy-sHJhUw_1_M6rWxs";

// Connect to Supabase
const santaPantsDB = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
