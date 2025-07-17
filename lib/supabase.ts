import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create Supabase client with fallback for build time
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: false
    }
  }
)

// Check if Supabase is properly configured
const isSupabaseConfigured = () => {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

// Authentication utilities
export const auth = {
  // Check if Supabase is configured
  isConfigured: isSupabaseConfigured,

  // Sign up new user
  signUp: async (email: string, password: string, metadata?: any) => {
    if (!isSupabaseConfigured()) {
      return { data: null, error: { message: 'Supabase is not configured' } }
    }
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    })
    return { data, error }
  },

  // Sign in existing user
  signIn: async (email: string, password: string) => {
    if (!isSupabaseConfigured()) {
      return { data: null, error: { message: 'Supabase is not configured' } }
    }
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  // Sign in with Google
  signInWithGoogle: async () => {
    if (!isSupabaseConfigured()) {
      return { data: null, error: { message: 'Supabase is not configured' } }
    }
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    })
    return { data, error }
  },

  // Sign in with GitHub
  signInWithGitHub: async () => {
    if (!isSupabaseConfigured()) {
      return { data: null, error: { message: 'Supabase is not configured' } }
    }
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    })
    return { data, error }
  },

  // Sign out
  signOut: async () => {
    if (!isSupabaseConfigured()) {
      return { error: { message: 'Supabase is not configured' } }
    }
    
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Get current user
  getCurrentUser: async () => {
    if (!isSupabaseConfigured()) {
      return { user: null, error: { message: 'Supabase is not configured' } }
    }
    
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  // Get current session
  getSession: async () => {
    if (!isSupabaseConfigured()) {
      return { session: null, error: { message: 'Supabase is not configured' } }
    }
    
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  },

  // Reset password
  resetPassword: async (email: string) => {
    if (!isSupabaseConfigured()) {
      return { data: null, error: { message: 'Supabase is not configured' } }
    }
    
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    })
    return { data, error }
  },

  // Listen to auth state changes
  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    if (!isSupabaseConfigured()) {
      // Return a dummy subscription object for cases where Supabase isn't configured
      return {
        data: { subscription: { unsubscribe: () => {} } }
      }
    }
    
    return supabase.auth.onAuthStateChange(callback)
  }
}

// Database utilities (for future use)
export const db = {
  // Users table operations
  users: {
    create: async (userData: any) => {
      const { data, error } = await supabase
        .from('users')
        .insert([userData])
        .select()
      return { data, error }
    },

    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single()
      return { data, error }
    },

    update: async (id: string, updates: any) => {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', id)
        .select()
      return { data, error }
    }
  }
}

export default supabase 