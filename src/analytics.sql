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