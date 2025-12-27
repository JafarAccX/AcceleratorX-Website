# Kuppam AI Workshop Components

This directory contains the components for the Kuppam AI Workshop landing page and enrollment system.

## Components

### KuppamHeader.tsx

- Main hero section for the Kuppam AI Workshop
- Contains the "Claim your scholarship" button that opens the enrollment modal
- Integrated with the KuppamEnrollmentModal

### KuppamSecond.tsx

- Second section highlighting the AI tools and skills
- Focuses on "Learn the skill that get you hired"

### KuppamTopics.tsx

- Topics section showing what participants will learn
- Features AI Code Pilot and Agent Development Environment

### KuppamAnimatedSection.tsx

- Animated section with cycling text messages
- Features three key value propositions with fade up animations
- Includes "Claim 50% Scholarship" CTA button
- Infinite loop animation cycling through messages every 3 seconds

### KuppamEnrollmentModal.tsx

- Custom enrollment modal specifically for the Kuppam AI Workshop
- Based on the main EnrollmentModal.tsx but customized for Kuppam context
- Sends WhatsApp messages with Kuppam-specific brochure
- Uses "kuppam_workshop_reg" campaign name for tracking

## Features

### Enrollment Modal Features:

- Form validation for phone and email
- UTM tracking and analytics
- WhatsApp integration with custom brochure
- Scholarship claim functionality
- Responsive design with dark theme

### Form Fields:

- Full Name (required)
- Email Address (required)
- Phone Number (required, with +91 prefix)
- Designation (required)
- Education Level (required)
- Work Experience (required)

## Usage

The Kuppam workshop is accessible at `/courses/onsite-workshopz` and uses the `KuppamCourses` component which includes all three sections.

### Integration:

```tsx
import { KuppamHeader, KuppamSecond, KuppamTopics, KuppamAnimatedSection } from "../pages/kuppam";

// The modal is automatically integrated in KuppamHeader and KuppamAnimatedSection
// Just click the "Claim your scholarship" or "Claim 50% Scholarship" button to open it
```

## API Integration

The enrollment modal integrates with:

- `createEnrollment` API for database storage
- WhatsApp API for sending workshop brochures
- Meta Pixel for conversion tracking
- UTM parameter tracking for analytics

## Customization

To modify the workshop details:

1. Update the brochure URL in `kuppamBroucher` object
2. Modify the WhatsApp campaign name in `sendWhatsAppMessage`
3. Update the course name in form data
4. Customize the modal title and description
