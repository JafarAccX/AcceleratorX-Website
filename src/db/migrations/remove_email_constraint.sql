-- Migration to remove the email constraint from workshop_registrations table
-- This allows the same email to be used multiple times for workshop registrations

ALTER TABLE public.workshop_registrations DROP CONSTRAINT IF EXISTS workshop_registrations_email_key;
