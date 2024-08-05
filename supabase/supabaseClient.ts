import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nrraokvfwiemlxpzfjnc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ycmFva3Zmd2llbWx4cHpmam5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3NTYwMDUsImV4cCI6MjAzODMzMjAwNX0.A1WxZDSYJw9MxqBU3fbM2HfJY3KvpmpBFQvk0JKYRFI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
