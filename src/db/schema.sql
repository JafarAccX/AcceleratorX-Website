
-- Ad Spends Table
create table if not exists public.ad_spends (
    id bigint generated always as identity not null,
    date date not null,
    course text null, -- Nullable to match enrollments schema
    ad_spend numeric(10,2) not null default 0,
    created_at timestamp with time zone default now(),
    constraint ad_spends_pkey primary key (id)
);

-- Ad Spends Indexes
-- Unique constraint for date+course combination (excluding nulls)
create unique index if not exists idx_ad_spends_date_course 
    on public.ad_spends (date, course) 
    where course is not null;

-- Index for date-based queries
create index if not exists idx_ad_spends_date 
    on public.ad_spends using btree (date);

-- Index for course-based queries
create index if not exists idx_ad_spends_course 
    on public.ad_spends using btree (course);

-- CPL Analysis View
create or replace view public.cpl_analysis as
select 
    ad.date,
    ad.course,
    ad.ad_spend,
    count(e.id) as leads,
    case 
        when count(e.id) > 0 then ad.ad_spend / count(e.id)
        else 0 
    end as cpl
from 
    public.ad_spends ad
    left join public.enrollments e on 
        date_trunc('day', e.created_at)::date = ad.date 
        and e.course = ad.course
group by 
    ad.date,
    ad.course,
    ad.ad_spend
order by 
    ad.date desc;

-- Monthly CPL Analysis View
create or replace view public.monthly_cpl_analysis as
select 
    date_trunc('month', ad.date)::date as month,
    ad.course,
    sum(ad.ad_spend) as total_ad_spend,
    count(distinct e.id) as total_leads,
    case 
        when count(distinct e.id) > 0 then sum(ad.ad_spend) / count(distinct e.id)
        else 0 
    end as average_cpl
from 
    public.ad_spends ad
    left join public.enrollments e on 
        date_trunc('month', e.created_at) = date_trunc('month', ad.date)
        and e.course = ad.course
group by 
    date_trunc('month', ad.date),
    ad.course
order by 
    month desc,
    course;

-- Course Performance View
create or replace view public.course_performance as
select 
    e.course,
    count(distinct e.id) as total_enrollments,
    count(distinct e.email) as unique_leads,
    sum(ad.ad_spend) as total_spend,
    case 
        when count(distinct e.id) > 0 then sum(ad.ad_spend) / count(distinct e.id)
        else 0 
    end as lifetime_cpl,
    count(distinct e.utm_source) as unique_sources,
    array_agg(distinct e.utm_source) filter (where e.utm_source is not null) as traffic_sources
from 
    public.enrollments e
    left join public.ad_spends ad on 
        e.course = ad.course 
        and date_trunc('day', e.created_at)::date = ad.date
where 
    e.course is not null
group by 
    e.course
order by 
    total_enrollments desc;
