/* eslint-disable max-len */

import { createClient } from '@supabase/supabase-js';
export const SUPABASE_URL = 'https://eeyfhodxnenhzlpkjxcl.supabase.co';

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVleWZob2R4bmVuaHpscGtqeGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkzOTA4MjcsImV4cCI6MTk3NDk2NjgyN30.dAHowYEy5EYy1duf_j3cFFltO_xUcdvDUh-Lq-KrW2w';

export const client = createClient(SUPABASE_URL, SUPABASE_KEY);
