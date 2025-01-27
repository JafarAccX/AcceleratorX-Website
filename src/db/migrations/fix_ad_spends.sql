-- First drop the dependent views
DROP VIEW IF EXISTS public.course_performance CASCADE;
DROP VIEW IF EXISTS public.monthly_cpl_analysis CASCADE;
DROP VIEW IF EXISTS public.cpl_analysis CASCADE;

-- Drop the existing foreign key constraint
ALTER TABLE IF EXISTS public.ad_spends
    DROP CONSTRAINT IF EXISTS ad_spends_course_fkey;

-- Drop and recreate the table
DROP TABLE IF EXISTS public.ad_spends CASCADE;

-- Recreate the table without foreign key constraint
CREATE TABLE public.ad_spends (
    id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
    date date NOT NULL,
    course text NOT NULL,
    ad_spend numeric(10,2) NOT NULL DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    CONSTRAINT ad_spends_pkey PRIMARY KEY (id),
    CONSTRAINT ad_spends_date_course_unique UNIQUE (date, course)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ad_spends_date 
    ON public.ad_spends USING btree (date);

CREATE INDEX IF NOT EXISTS idx_ad_spends_course 
    ON public.ad_spends USING btree (course);

-- Recreate the views
CREATE OR REPLACE VIEW public.cpl_analysis AS
SELECT 
    ad.date,
    ad.course,
    ad.ad_spend,
    count(e.id) as leads,
    CASE 
        WHEN count(e.id) > 0 THEN ad.ad_spend / count(e.id)
        ELSE 0 
    END as cpl
FROM 
    public.ad_spends ad
    LEFT JOIN public.enrollments e ON 
        date_trunc('day', e.created_at)::date = ad.date 
        AND e.course = ad.course
GROUP BY 
    ad.date,
    ad.course,
    ad.ad_spend
ORDER BY 
    ad.date DESC;

CREATE OR REPLACE VIEW public.monthly_cpl_analysis AS
SELECT 
    date_trunc('month', ad.date)::date as month,
    ad.course,
    sum(ad.ad_spend) as total_ad_spend,
    count(distinct e.id) as total_leads,
    CASE 
        WHEN count(distinct e.id) > 0 THEN sum(ad.ad_spend) / count(distinct e.id)
        ELSE 0 
    END as average_cpl
FROM 
    public.ad_spends ad
    LEFT JOIN public.enrollments e ON 
        date_trunc('month', e.created_at) = date_trunc('month', ad.date)
        AND e.course = ad.course
GROUP BY 
    date_trunc('month', ad.date),
    ad.course
ORDER BY 
    month DESC,
    course;

CREATE OR REPLACE VIEW public.course_performance AS
SELECT 
    e.course,
    count(distinct e.id) as total_enrollments,
    count(distinct e.email) as unique_leads,
    sum(ad.ad_spend) as total_spend,
    CASE 
        WHEN count(distinct e.id) > 0 THEN sum(ad.ad_spend) / count(distinct e.id)
        ELSE 0 
    END as lifetime_cpl,
    count(distinct e.utm_source) as unique_sources,
    array_agg(distinct e.utm_source) filter (where e.utm_source is not null) as traffic_sources
FROM 
    public.enrollments e
    LEFT JOIN public.ad_spends ad ON 
        e.course = ad.course 
        AND date_trunc('day', e.created_at)::date = ad.date
WHERE 
    e.course IS NOT NULL
GROUP BY 
    e.course
ORDER BY 
    total_enrollments DESC;

-- Grant necessary permissions
GRANT ALL ON TABLE public.ad_spends TO postgres;
GRANT ALL ON TABLE public.ad_spends TO anon;
GRANT ALL ON TABLE public.ad_spends TO authenticated;
GRANT ALL ON TABLE public.ad_spends TO service_role;

-- Enable RLS
ALTER TABLE public.ad_spends ENABLE ROW LEVEL SECURITY;

-- Create RLS policy
CREATE POLICY "Enable all access for authenticated users" ON public.ad_spends
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Grant view permissions
GRANT SELECT ON public.cpl_analysis TO anon, authenticated, service_role;
GRANT SELECT ON public.monthly_cpl_analysis TO anon, authenticated, service_role;
GRANT SELECT ON public.course_performance TO anon, authenticated, service_role;
