
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://jjnbvfkiraojiduoyjuh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqbmJ2ZmtpcmFvamlkdW95anVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MTg1MjcsImV4cCI6MjAyODQ5NDUyN30.fz75h6hHoc9OkgBRQWgepqsC9I1tSGOw6Q4eIaIwjGc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;