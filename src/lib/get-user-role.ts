import 'server-only';

import { JWTPayload, jwtVerify } from 'jose';
import { createClient } from './supabase/client';

// Extend the JWTPayload type to include Supabase-specific metadata
type SupabaseJwtPayload = JWTPayload & {
  app_metadata: {
    role: string,
  },
};

export async function getUserRole() {
  // Create a Supabase client for server-side operations
  const supabase = createClient();

  // Retrieve the current session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: roleData } = await supabase
    .from('userRoles')
    .select()
    .eq('userId', session?.user.id);

  let role;

  if (roleData?.[0]?.role === 'admin') {
    // Extract the access token from the session

    try {
      // Extract the role from the app_metadata in the payload
      role = roleData?.[0].role;
    } catch (error) {
      console.error('Failed to verify token:', error);
    }
  }

  return role;
}
