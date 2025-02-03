CREATE TABLE scholarship_applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(13) NOT NULL CHECK (phone LIKE '+91%' AND LENGTH(phone) = 13),
    education TEXT NOT NULL,
    is_enthusiastic BOOLEAN NOT NULL,
    is_ai_related BOOLEAN NOT NULL,
    career_likelihood TEXT NOT NULL,
    scholarship_reasons TEXT NOT NULL,
    course_motivation TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster lookups
CREATE INDEX idx_scholarship_applications_email ON scholarship_applications(email);
CREATE INDEX idx_scholarship_applications_status ON scholarship_applications(status);

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_scholarship_applications_updated_at
    BEFORE UPDATE ON scholarship_applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
