import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mdcjrztiyhyrdpkqyyhj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kY2pyenRpeWh5cmRwa3F5eWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxMzY1MDAsImV4cCI6MjAyMTcxMjUwMH0.Jlend6y7Q6N_WgvVvDFT9HS2_nBxHkqmvDoZVkgTkUg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
