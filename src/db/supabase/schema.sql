-- Create education_level enum type
CREATE TYPE education_level AS ENUM ('bachelors', 'masters', 'phd', 'others');

-- Create scholarship_applications table
CREATE TABLE scholarship_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL UNIQUE CHECK (phone ~ '^\+91[0-9]{10}$'),
    education education_level NOT NULL,
    is_enthusiastic BOOLEAN NOT NULL,
    is_ai_related BOOLEAN NOT NULL,
    career_likelihood TEXT NOT NULL,
    scholarship_reasons TEXT NOT NULL,
    course_motivation TEXT NOT NULL
);
