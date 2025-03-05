-- Add years_of_passing column to workshop_registrations table
ALTER TABLE public.workshop_registrations
ADD COLUMN years_of_passing text;

-- Update existing records to have a default value (can be modified as needed)
UPDATE public.workshop_registrations
SET years_of_passing = '<2000'
WHERE years_of_passing IS NULL;

-- Make the column not null after populating existing records
ALTER TABLE public.workshop_registrations
ALTER COLUMN years_of_passing SET NOT NULL;
