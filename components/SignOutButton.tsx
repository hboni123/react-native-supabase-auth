import React from 'react';
import { Button } from 'react-native';
import { supabase } from '../supabase/supabaseClient';

const SignOutButton = () => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return <Button title="Sign Out" onPress={handleSignOut} />;
};

export default SignOutButton;
