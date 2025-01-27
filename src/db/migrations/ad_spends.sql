-- Drop existing constraint if it exists
alter table if exists public.ad_spends
    drop constraint if exists ad_spends_course_fkey;

-- Drop existing table if it exists
drop table if exists public.ad_spends;

-- Create ad_spends table without foreign key constraint
create table public.ad_spends (
    id bigint generated always as identity not null,
    date date not null,
    course text null, 
    ad_spend numeric(10,2) not null default 0,
    created_at timestamp with time zone default now(),
    constraint ad_spends_pkey primary key (id)
);

-- Create composite unique constraint to prevent duplicate entries for same date and course
create unique index if not exists idx_ad_spends_date_course on public.ad_spends (date, course) 
where course is not null;

-- Create index for faster queries
create index if not exists idx_ad_spends_date on public.ad_spends using btree (date);
create index if not exists idx_ad_spends_course on public.ad_spends using btree (course);

-- Create view for CPL analysis that matches exact course names from enrollments
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
