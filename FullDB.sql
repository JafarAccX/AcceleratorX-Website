create table public.ad_spends (
  id bigint generated always as identity not null,
  date date not null,
  course text not null,
  ad_spend numeric(10, 2) not null default 0,
  created_at timestamp with time zone null default now(),
  constraint ad_spends_pkey primary key (id),
  constraint ad_spends_date_course_unique unique (date, course)
) TABLESPACE pg_default;

create index IF not exists idx_ad_spends_date on public.ad_spends using btree (date) TABLESPACE pg_default;

create index IF not exists idx_ad_spends_course on public.ad_spends using btree (course) TABLESPACE pg_default;


create view public.course_performance as
select
  e.course,
  count(distinct e.id) as total_enrollments,
  count(distinct e.email) as unique_leads,
  sum(ad.ad_spend) as total_spend,
  case
    when count(distinct e.id) > 0 then sum(ad.ad_spend) / count(distinct e.id)::numeric
    else 0::numeric
  end as lifetime_cpl,
  count(distinct e.utm_source) as unique_sources,
  array_agg(distinct e.utm_source) filter (
    where
      e.utm_source is not null
  ) as traffic_sources
from
  enrollments e
  left join ad_spends ad on e.course = ad.course
  and date_trunc('day'::text, e.created_at)::date = ad.date
where
  e.course is not null
group by
  e.course
order by
  (count(distinct e.id)) desc;

  create view public.cpl_analysis as
select
  ad.date,
  ad.course,
  ad.ad_spend,
  count(e.id) as leads,
  case
    when count(e.id) > 0 then ad.ad_spend / count(e.id)::numeric
    else 0::numeric
  end as cpl
from
  ad_spends ad
  left join enrollments e on date_trunc('day'::text, e.created_at)::date = ad.date
  and e.course = ad.course
group by
  ad.date,
  ad.course,
  ad.ad_spend
order by
  ad.date desc;

  create table public.enrollments (
  id bigint generated always as identity not null,
  full_name text not null,
  phone_number text not null,
  email text not null,
  education_level text not null,
  created_at timestamp with time zone null default now(),
  course text null,
  work_experience character varying(10) null,
  designation character varying(100) null,
  utm_source character varying(255) null,
  utm_medium character varying(255) null,
  utm_campaign character varying(255) null,
  utm_term character varying(255) null,
  utm_content character varying(255) null,
  referrer character varying(512) null,
  landing_page_url character varying(2048) null,
  fbclid character varying(255) null,
  gclid character varying(255) null,
  ttclid character varying(255) null,
  msclkid character varying(255) null,
  constraint enrollments_pkey primary key (id),
  constraint unique_email unique (email)
) TABLESPACE pg_default;

create index IF not exists idx_enrollments_utm on public.enrollments using btree (utm_source, utm_medium, utm_campaign) TABLESPACE pg_default;

create table public.workshop_registrations (
  id uuid not null default extensions.uuid_generate_v4 (),
  created_at timestamp with time zone not null default timezone ('utc'::text, now()),
  name text not null,
  email text not null,
  phone text not null,
  education text not null,
  designation text not null,
  years_of_experience text not null,
  workshop_type character varying(20) null,
  payment_status text not null default 'pending'::text,
  razorpay_order_id text null,
  razorpay_payment_id text null,
  updated_at timestamp with time zone not null default timezone ('utc'::text, now()),
  is_free boolean not null default false,
  constraint workshop_registrations_pkey primary key (id),
  constraint workshop_registrations_email_key unique (email),
  constraint workshop_registrations_phone_key unique (phone),
  constraint workshop_registrations_payment_status_check check (
    (
      payment_status = any (
        array[
          'pending'::text,
          'completed'::text,
          'failed'::text
        ]
      )
    )
  ),
  constraint workshop_registrations_workshop_type_check check (
    (
      (workshop_type)::text = any (
        array[
          'DAWorkshop'::text,
          'PMWorkshop'::text,
          'GENAIWorkshop'::text,
          'DMWorkshop'::text
        ]
      )
    )
  )
) TABLESPACE pg_default;

-- Daily Course Performance View
CREATE OR REPLACE VIEW public.daily_course_performance AS
SELECT 
    DATE_TRUNC('day', e.created_at)::date as date,
    e.course,
    COUNT(DISTINCT e.id) as daily_leads,
    COUNT(DISTINCT e.email) as unique_leads,
    COALESCE(SUM(ad.ad_spend), 0) as daily_spend,
    CASE 
        WHEN COUNT(DISTINCT e.id) > 0 
        THEN COALESCE(SUM(ad.ad_spend), 0) / COUNT(DISTINCT e.id)::numeric 
        ELSE 0 
    END as daily_cpl,
    array_agg(DISTINCT e.utm_source) FILTER (WHERE e.utm_source IS NOT NULL) as sources,
    array_agg(DISTINCT e.utm_medium) FILTER (WHERE e.utm_medium IS NOT NULL) as mediums,
    array_agg(DISTINCT e.utm_campaign) FILTER (WHERE e.utm_campaign IS NOT NULL) as campaigns
FROM 
    enrollments e
    LEFT JOIN ad_spends ad ON e.course = ad.course 
    AND DATE_TRUNC('day', e.created_at)::date = ad.date
WHERE 
    e.course IS NOT NULL
GROUP BY 
    DATE_TRUNC('day', e.created_at)::date,
    e.course
ORDER BY 
    date DESC;

-- Weekly Course Performance View
CREATE OR REPLACE VIEW public.weekly_course_performance AS
SELECT 
    DATE_TRUNC('week', e.created_at)::date as week_start,
    e.course,
    COUNT(DISTINCT e.id) as weekly_leads,
    COUNT(DISTINCT e.email) as unique_leads,
    COALESCE(SUM(ad.ad_spend), 0) as weekly_spend,
    CASE 
        WHEN COUNT(DISTINCT e.id) > 0 
        THEN COALESCE(SUM(ad.ad_spend), 0) / COUNT(DISTINCT e.id)::numeric 
        ELSE 0 
    END as weekly_cpl,
    array_agg(DISTINCT e.utm_source) FILTER (WHERE e.utm_source IS NOT NULL) as sources,
    array_agg(DISTINCT e.utm_medium) FILTER (WHERE e.utm_medium IS NOT NULL) as mediums
FROM 
    enrollments e
    LEFT JOIN ad_spends ad ON e.course = ad.course 
    AND DATE_TRUNC('day', e.created_at)::date = ad.date
WHERE 
    e.course IS NOT NULL
GROUP BY 
    DATE_TRUNC('week', e.created_at)::date,
    e.course
ORDER BY 
    week_start DESC;

-- Monthly Course Performance View
CREATE OR REPLACE VIEW public.monthly_course_performance AS
SELECT 
    DATE_TRUNC('month', e.created_at)::date as month_start,
    e.course,
    COUNT(DISTINCT e.id) as monthly_leads,
    COUNT(DISTINCT e.email) as unique_leads,
    COALESCE(SUM(ad.ad_spend), 0) as monthly_spend,
    CASE 
        WHEN COUNT(DISTINCT e.id) > 0 
        THEN COALESCE(SUM(ad.ad_spend), 0) / COUNT(DISTINCT e.id)::numeric 
        ELSE 0 
    END as monthly_cpl,
    array_agg(DISTINCT e.utm_source) FILTER (WHERE e.utm_source IS NOT NULL) as sources,
    array_agg(DISTINCT e.utm_medium) FILTER (WHERE e.utm_medium IS NOT NULL) as mediums
FROM 
    enrollments e
    LEFT JOIN ad_spends ad ON e.course = ad.course 
    AND DATE_TRUNC('day', e.created_at)::date = ad.date
WHERE 
    e.course IS NOT NULL
GROUP BY 
    DATE_TRUNC('month', e.created_at)::date,
    e.course
ORDER BY 
    month_start DESC;

-- Source Performance Analysis
CREATE OR REPLACE VIEW public.source_performance AS
SELECT 
    e.course,
    COALESCE(e.utm_source, 'Direct') as source,
    COALESCE(e.utm_medium, 'none') as medium,
    COALESCE(e.utm_campaign, 'none') as campaign,
    COUNT(DISTINCT e.id) as total_leads,
    COUNT(DISTINCT e.email) as unique_leads,
    COALESCE(SUM(ad.ad_spend), 0) as total_spend,
    CASE 
        WHEN COUNT(DISTINCT e.id) > 0 
        THEN COALESCE(SUM(ad.ad_spend), 0) / COUNT(DISTINCT e.id)::numeric 
        ELSE 0 
    END as source_cpl
FROM 
    enrollments e
    LEFT JOIN ad_spends ad ON e.course = ad.course 
    AND DATE_TRUNC('day', e.created_at)::date = ad.date
WHERE 
    e.course IS NOT NULL
GROUP BY 
    e.course,
    COALESCE(e.utm_source, 'Direct'),
    COALESCE(e.utm_medium, 'none'),
    COALESCE(e.utm_campaign, 'none')
ORDER BY 
    total_leads DESC;

-- Conversion Time Analysis
CREATE OR REPLACE VIEW public.conversion_time_analysis AS
SELECT 
    e.course,
    EXTRACT(HOUR FROM e.created_at) as hour_of_day,
    EXTRACT(DOW FROM e.created_at) as day_of_week,
    COUNT(DISTINCT e.id) as leads,
    COUNT(DISTINCT e.email) as unique_leads
FROM 
    enrollments e
WHERE 
    e.course IS NOT NULL
GROUP BY 
    e.course,
    EXTRACT(HOUR FROM e.created_at),
    EXTRACT(DOW FROM e.created_at)
ORDER BY 
    leads DESC;