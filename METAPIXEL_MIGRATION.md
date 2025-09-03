# Meta Pixel Deduplication Fix - Migration Guide

## Problem Fixed
The website was experiencing **duplicate lead counting** in Meta because:
1. **Client-side tracking** was firing `CompleteRegistration` events via `fbq()` calls
2. **Server-side tracking** was firing the same events via Conversion API
3. Both were using different event IDs, causing Meta to count them as separate events

## Solution Implemented

### 1. Unified Meta Pixel Manager (`metaPixelManager.ts`)
- **Centralized pixel management** for multiple ad accounts
- **Consistent event ID generation** for deduplication
- **Route-based pixel selection** for different landing pages
- **Course-based pixel routing** for specific programs

### 2. Configuration-Based Setup (`metaPixelConfig.ts`)
- **Easy pixel configuration** - add new pixels here
- **Route mapping** - define which pixel fires on which routes
- **Course mapping** - map courses to specific pixels
- **Environment validation** - ensures all required env vars are set

### 3. Unified Form Tracking (`unifiedFormTracking.ts`)
- **Single function** to handle form submissions
- **Automatic deduplication** using consistent event IDs
- **Both client and server-side tracking** with same event ID

## Key Changes Made

### Components Updated
1. **App.tsx**: Replaced `MetaPixel` with `UnifiedMetaPixel`
2. **ChatWidget.tsx**: Updated to use `trackUnifiedFormSubmission`
3. **EnrollmentModal.tsx**: Updated to use unified tracking
4. **All form components**: Need to be updated (see migration steps below)

### New Files Created
- `src/utils/metaPixelManager.ts` - Main pixel management
- `src/utils/unifiedFormTracking.ts` - Form tracking utilities  
- `src/components/UnifiedMetaPixel.tsx` - New pixel component
- `src/config/metaPixelConfig.ts` - Configuration file

## Migration Steps for Remaining Components

### Step 1: Update Imports
**Before:**
```tsx
import { trackFormSubmission, getUTMDataForDB } from "../utils/metaPixel";
import { generateFormEventId } from "../utils/unifiedTracking";
```

**After:**
```tsx
import { trackUnifiedFormSubmission, createFormSubmissionData, getFormTrackingData } from "../utils/unifiedFormTracking";
```

### Step 2: Update Form Submission Logic
**Before:**
```tsx
const eventId = generateFormEventId();
const trackingFormData = new FormData();
trackingFormData.append("name", formData.name);
trackingFormData.append("email", formData.email);
trackingFormData.append("phone", formData.phone);
trackingFormData.append("course", formData.course);
trackingFormData.append("eventId", eventId);
await trackFormSubmission(trackingFormData);
```

**After:**
```tsx
const submissionData = createFormSubmissionData({
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  course: formData.course,
  education: formData.education,
  designation: formData.designation,
  workExperience: formData.workExperience
});
await trackUnifiedFormSubmission(submissionData);
```

### Step 3: Update UTM Data Usage
**Before:**
```tsx
const utmData = getUTMDataForDB();
```

**After:**
```tsx
const utmData = getFormTrackingData();
```

## Adding New Pixels/Ad Accounts

### 1. Add Environment Variables
```env
VITE_META_PIXEL_ID_NEW_PROGRAM=your_pixel_id
VITE_META_CONVERSION_API_ACCESS_TOKEN_NEW_PROGRAM=your_access_token
```

### 2. Update Configuration
In `src/config/metaPixelConfig.ts`:

```tsx
export const PIXEL_CONFIGS: Record<string, PixelConfig> = {
  // ... existing configs
  new_program: {
    pixelId: import.meta.env.VITE_META_PIXEL_ID_NEW_PROGRAM || '',
    accessToken: import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN_NEW_PROGRAM || '',
    name: 'New Program',
    description: 'Pixel for new program tracking'
  }
};

export const PIXEL_ROUTES: TrackingRoute[] = [
  // Add route for new pixel (higher priority routes first)
  {
    pattern: /\/courses\/new-program/,
    pixelKey: 'new_program',
    eventTypes: ['PageView', 'Lead', 'CompleteRegistration', 'ViewContent']
  },
  // ... existing routes
];

export const COURSE_PIXEL_MAPPING: Record<string, string> = {
  // ... existing mappings
  'New Program': 'new_program'
};
```

### 3. No Code Changes Required!
The system will automatically:
- Load the new pixel configuration
- Route traffic to the correct pixel based on URL/course
- Handle deduplication

## Components Still Needing Migration

The following components still need to be updated:

1. **WSForm.tsx** (workshop form)
2. **WSFormFree.tsx** (free workshop forms - 2 versions)
3. **KuppamEnrollmentModal.tsx**
4. Any other forms using the old tracking system

## Verification Steps

### 1. Check Console Logs
- Look for `✅ Event tracked` messages
- Verify pixel IDs match expected values
- Check for `🚫 Duplicate event prevented` warnings

### 2. Meta Events Manager
- Events should now appear only once
- Check that event IDs are consistent between client/server
- Verify proper attribution

### 3. Test Different Routes
- Data Analytics routes should use DA pixel
- Other routes should use default pixel
- Course-specific forms should use correct pixel

## Debugging

### Enable Debug Mode
The system includes extensive logging. Check browser console for:
- Pixel initialization messages
- Event tracking confirmations  
- Deduplication warnings
- Configuration validation errors

### Common Issues
1. **Missing Environment Variables**: Check console for validation errors
2. **Route Not Matching**: Verify route patterns in config
3. **Duplicate Events**: Should be prevented automatically now
4. **Wrong Pixel**: Check course mapping and route patterns

## Benefits of New System

1. **No More Duplicate Events**: Consistent event IDs prevent double counting
2. **Easy Scaling**: Add new pixels/routes without code changes
3. **Better Debugging**: Extensive logging and validation
4. **Centralized Management**: All pixel logic in one place
5. **Future-Proof**: Easy to add new ad accounts and landing pages
