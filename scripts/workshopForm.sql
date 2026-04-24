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
  utm_source text null,
  utm_medium text null,
  utm_campaign text null,
  utm_term text null,
  utm_content text null,
  referrer text null,
  landing_page_url text null,
  fbclid text null,
  gclid text null,
  ttclid text null,
  msclkid text null,
  constraint workshop_registrations_pkey primary key (id),
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
          'DASecondWorkshop'::text,
          'PMWorkshop'::text,
          'GENAIWorkshop'::text,
          'DMWorkshop'::text
        ]
      )
    )
  )
) TABLESPACE pg_default;