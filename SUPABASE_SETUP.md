# Supabase Setup Guide for ChatRank

This guide will help you set up Supabase authentication for your ChatRank application.

## Prerequisites
- A Supabase account (sign up at [supabase.com](https://supabase.com))
- The ChatRank application running locally

## Step 1: Create a New Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in to your account
2. Click "New Project"
3. Choose your organization
4. Fill in the project details:
   - Name: `chatrank-auth` (or any name you prefer)
   - Database Password: Create a strong password (save this!)
   - Region: Choose the region closest to your users
5. Click "Create new project"
6. Wait for the project to be set up (this may take a few minutes)

## Step 2: Get Your Project Credentials

1. Once your project is ready, go to the project dashboard
2. Click on "Settings" in the sidebar
3. Click on "API" in the settings menu
4. Copy the following values:
   - **Project URL** (looks like: `https://your-project-ref.supabase.co`)
   - **anon public key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

## Step 3: Configure Environment Variables

1. In your ChatRank project root directory, create a file named `.env.local`
2. Add the following content (replace with your actual values):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Important:** 
- Replace `https://your-project-ref.supabase.co` with your actual Project URL
- Replace the anon key with your actual anon public key
- Never commit the `.env.local` file to version control

## Step 4: Configure Authentication Settings

1. In your Supabase dashboard, go to "Authentication" in the sidebar
2. Click on "Settings"
3. In the "Site URL" field, add: `http://localhost:3002` (or your local dev URL)
4. In the "Redirect URLs" section, add:
   - `http://localhost:3002/dashboard`
   - `http://localhost:3002/login`
   - `http://localhost:3002/register`

## Step 5: Enable Social Authentication (Optional)

### Google OAuth
1. Go to Authentication > Settings
2. Find "Auth Providers" section
3. Click on "Google"
4. Toggle "Enable sign in with Google"
5. Add your Google OAuth credentials:
   - Client ID: Get from [Google Cloud Console](https://console.cloud.google.com/)
   - Client Secret: Get from Google Cloud Console
6. Save the configuration

### GitHub OAuth
1. In the "Auth Providers" section, click on "GitHub"
2. Toggle "Enable sign in with GitHub"
3. Add your GitHub OAuth credentials:
   - Client ID: Get from [GitHub Developer Settings](https://github.com/settings/developers)
   - Client Secret: Get from GitHub Developer Settings
4. Save the configuration

## Step 6: Set up User Profiles Table (Optional)

1. Go to "SQL Editor" in your Supabase dashboard
2. Create a new query and run this SQL:

```sql
-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  first_name text,
  last_name text,
  company text,
  avatar_url text,
  
  constraint first_name_length check (char_length(first_name) >= 1)
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Create policy for users to see their own profile
create policy "Users can view own profile." 
  on profiles for select 
  using ( auth.uid() = id );

-- Create policy for users to update their own profile
create policy "Users can update own profile." 
  on profiles for update 
  using ( auth.uid() = id );

-- Create policy for users to insert their own profile
create policy "Users can insert own profile." 
  on profiles for insert 
  with check ( auth.uid() = id );

-- Function to automatically create profile on signup
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, first_name, last_name, company)
  values (
    new.id,
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name',
    new.raw_user_meta_data->>'company'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function on user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## Step 7: Test the Setup

1. Make sure your development server is running:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3002/register`
3. Try creating a new account
4. Check your Supabase dashboard under "Authentication" > "Users" to see if the user was created
5. Try logging in with the account you just created

## Step 8: Email Configuration (Optional)

To enable email verification and password reset:

1. Go to Authentication > Settings in your Supabase dashboard
2. Scroll down to "SMTP Settings"
3. Configure your SMTP provider (or use Supabase's built-in email for development)
4. Enable "Confirm email" if you want users to verify their email addresses

## Production Deployment

When deploying to production:

1. Update your Site URL and Redirect URLs in Supabase to match your production domain
2. Set up environment variables in your hosting platform
3. Ensure your `.env.local` file is not included in your deployment

## Common Issues

### "Invalid API key" error
- Double-check that your environment variables are correctly set
- Ensure you're using the anon public key, not the service role key
- Restart your development server after adding environment variables

### Social login not working
- Verify your OAuth app credentials in the respective provider (Google/GitHub)
- Check that redirect URLs are correctly configured
- Ensure your app is approved/published if required by the provider

### Users not being created
- Check the browser's developer console for error messages
- Verify your Supabase project is active and not paused
- Check the Authentication logs in your Supabase dashboard

## Next Steps

Once authentication is working:
1. Implement user profiles and settings
2. Add protected routes and authentication guards
3. Build out the dashboard functionality
4. Set up proper error handling and user feedback

## Support

For issues with this setup:
- Check the [Supabase documentation](https://supabase.com/docs)
- Visit the [Supabase community](https://github.com/supabase/supabase/discussions)
- Review the authentication logs in your Supabase dashboard 