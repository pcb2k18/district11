-- Browns Healthcare Database Schema
-- Run this migration to create all necessary tables

-- Job listings (managed by admin)
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  job_type TEXT NOT NULL, -- 'full-time', 'part-time', 'contract'
  profession TEXT NOT NULL, -- 'registered-nurse', 'healthcare-assistant', 'support-worker', 'care-worker'
  salary_range TEXT,
  requirements TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Candidate applications
CREATE TABLE IF NOT EXISTS candidates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country_of_residence TEXT NOT NULL,
  profession TEXT NOT NULL,
  cv_url TEXT NOT NULL,
  certificates_url TEXT,
  job_id UUID REFERENCES jobs(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'pending', -- 'pending', 'reviewed', 'contacted', 'rejected'
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Employer requests
CREATE TABLE IF NOT EXISTS employers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  job_role_needed TEXT NOT NULL,
  number_of_staff INTEGER NOT NULL,
  location TEXT NOT NULL,
  additional_info TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'contacted', 'fulfilled'
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Newsletter subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE employers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Jobs: Public can read active jobs, authenticated users can do everything
CREATE POLICY "jobs_public_read" ON jobs FOR SELECT USING (is_active = true);
CREATE POLICY "jobs_auth_all" ON jobs FOR ALL USING (auth.role() = 'authenticated');

-- Candidates: Public can insert, authenticated users can read/update
CREATE POLICY "candidates_public_insert" ON candidates FOR INSERT WITH CHECK (true);
CREATE POLICY "candidates_auth_select" ON candidates FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "candidates_auth_update" ON candidates FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "candidates_auth_delete" ON candidates FOR DELETE USING (auth.role() = 'authenticated');

-- Employers: Public can insert, authenticated users can read/update
CREATE POLICY "employers_public_insert" ON employers FOR INSERT WITH CHECK (true);
CREATE POLICY "employers_auth_select" ON employers FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "employers_auth_update" ON employers FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "employers_auth_delete" ON employers FOR DELETE USING (auth.role() = 'authenticated');

-- Contact submissions: Public can insert, authenticated users can read/update
CREATE POLICY "contact_public_insert" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "contact_auth_select" ON contact_submissions FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "contact_auth_update" ON contact_submissions FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "contact_auth_delete" ON contact_submissions FOR DELETE USING (auth.role() = 'authenticated');

-- Newsletter: Public can insert, authenticated users can read/delete
CREATE POLICY "newsletter_public_insert" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "newsletter_auth_select" ON newsletter_subscribers FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "newsletter_auth_delete" ON newsletter_subscribers FOR DELETE USING (auth.role() = 'authenticated');

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_jobs_is_active ON jobs(is_active);
CREATE INDEX IF NOT EXISTS idx_jobs_profession ON jobs(profession);
CREATE INDEX IF NOT EXISTS idx_jobs_location ON jobs(location);
CREATE INDEX IF NOT EXISTS idx_candidates_status ON candidates(status);
CREATE INDEX IF NOT EXISTS idx_candidates_created_at ON candidates(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_employers_status ON employers(status);
CREATE INDEX IF NOT EXISTS idx_employers_created_at ON employers(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);
