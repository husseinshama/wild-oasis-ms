import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gixbydjsxuorkcukpjij.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpeGJ5ZGpzeHVvcmtjdWtwamlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4ODcxNTgsImV4cCI6MjA5MTQ2MzE1OH0.JR2cnIVSeXFxvEMtERcJc-iFAkjkYLeVqWH3X5NG3I8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
