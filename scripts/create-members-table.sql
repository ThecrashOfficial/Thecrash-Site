-- Create members table
CREATE TABLE IF NOT EXISTS public.members (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  first_name TEXT,
  created_at TIMESTAMP DEFAULT NOW() AT TIME ZONE 'UTC'
);

-- Enable Row Level Security
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public can join)
CREATE POLICY "Allow insert for everyone" ON public.members
  FOR INSERT WITH CHECK (true);

-- Allow anyone to read total count
CREATE POLICY "Allow read count for everyone" ON public.members
  FOR SELECT USING (true);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_members_email ON public.members(email);

-- Create a function to get member count
CREATE OR REPLACE FUNCTION get_member_count()
RETURNS INTEGER AS $$
  SELECT COUNT(*)::INTEGER FROM public.members;
$$ LANGUAGE SQL IMMUTABLE;
