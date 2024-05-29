// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yetrkwbxweagaibutsoh.supabase.co"; // Replace with your Supabase project URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldHJrd2J4d2VhZ2FpYnV0c29oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5MzM5NjksImV4cCI6MjAzMTUwOTk2OX0.1fl1i8dGTjkTzF54AvhkEiXp7plVGcB88-UqLfMd3rM"; // Replace with your Supabase public API key

export const supabase = createClient(supabaseUrl, supabaseKey);
