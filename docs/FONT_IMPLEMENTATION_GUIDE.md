# Font Implementation Guide

## Overview
Custom fonts have been added to the AcceleratorX website for course pages:
- **Epilogue**: For all headings (h1, h2, h3, h4, h5, h6)
- **Open Sans**: For body text and paragraphs

## What Was Done

### 1. Font Files Added
The following font files are already in `/public/fonts/`:
- `Epilogue-VariableFont_wght.ttf` - Variable font supporting weights 100-900
- `OpenSans-Regular.ttf` - Regular weight (400)

### 2. CSS Configuration (`src/index.css`)
Added `@font-face` declarations for both fonts:
```css
/* Epilogue Variable Font - For Headings */
@font-face {
  font-family: 'Epilogue';
  src: url('/fonts/Epilogue-VariableFont_wght.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-style: normal;
}

/* Open Sans - For Body Text */
@font-face {
  font-family: 'Open Sans';
  src: url('/fonts/OpenSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
```

### 3. Tailwind Configuration (`tailwind.config.js`)
Added font families to the theme:
```javascript
fontFamily: {
  heading: ['Epilogue', 'system-ui', 'sans-serif'], // For h1, h2, h3, etc.
  sans: ['Open Sans', 'system-ui', 'sans-serif'], // For body text
}
```

## How to Use in Components

### For Headings (using Epilogue)
Use the `font-heading` class:

```tsx
<h1 className="font-heading text-4xl font-bold">
  Advanced Generative AI
</h1>

<h2 className="font-heading text-3xl font-semibold">
  Course Overview
</h2>

<h3 className="font-heading text-2xl font-medium">
  Module 1
</h3>
```

### For Body Text (using Open Sans)
Use the `font-sans` class (or no font class, as it's the default):

```tsx
<p className="font-sans text-base">
  This is body text using Open Sans font.
</p>

<div className="font-sans">
  <p>All text in this div will use Open Sans.</p>
</div>
```

### Font Weight Options for Epilogue
Since Epilogue is a variable font, you can use any weight from 100-900:

```tsx
<h1 className="font-heading font-thin">Weight 100</h1>
<h1 className="font-heading font-extralight">Weight 200</h1>
<h1 className="font-heading font-light">Weight 300</h1>
<h1 className="font-heading font-normal">Weight 400</h1>
<h1 className="font-heading font-medium">Weight 500</h1>
<h1 className="font-heading font-semibold">Weight 600</h1>
<h1 className="font-heading font-bold">Weight 700</h1>
<h1 className="font-heading font-extrabold">Weight 800</h1>
<h1 className="font-heading font-black">Weight 900</h1>
```

## Example Component Update

### Before:
```tsx
export default function AdvanceGenAIHeroEIE() {
  return (
    <section>
      <h1 className="text-5xl md:text-7xl font-serif text-white">
        Advanced Generative AI
      </h1>
      <p className="text-gray-200 text-lg">
        Design, deploy, and scale AI agents
      </p>
    </section>
  );
}
```

### After:
```tsx
export default function AdvanceGenAIHeroEIE() {
  return (
    <section>
      <h1 className="font-heading text-5xl md:text-7xl font-medium text-white">
        Advanced Generative AI
      </h1>
      <p className="font-sans text-gray-200 text-lg">
        Design, deploy, and scale AI agents
      </p>
    </section>
  );
}
```

## Quick Find & Replace Guide

To update all course components, you can search for heading tags and add the `font-heading` class:

1. **Find**: `<h1 className="`
   **Replace with**: `<h1 className="font-heading `

2. **Find**: `<h2 className="`
   **Replace with**: `<h2 className="font-heading `

3. **Find**: `<h3 className="`
   **Replace with**: `<h3 className="font-heading `

For paragraphs and body text, add `font-sans`:

4. **Find**: `<p className="`
   **Replace with**: `<p className="font-sans `

## Files That Need Updates

All the course component files you mentioned should be updated to use these font classes:

### Advanced Gen AI
- `AdvanceGenAIHeroEIE.tsx`
- `AdvanceGenAIIndustryShiftEIE.tsx`
- `AdvanceGenAIProgramEIE.tsx`
- `AdvanceGenAIFAQEIE.tsx`

### AI Crash Course
- All files in `AICrashCourse/components/`

### AIDM
- `AIDMHeroEIE.tsx`
- `AIDMProgramEIE.tsx`
- `AIDMWhoIsThisContentForEIE.tsx`
- `AIDMFAQEIE.tsx`

### Data Analytics
- All files in `dataanalytics/EIE/`

### Data Science
- All files in `datascience/EIE/`
- All files in `datascience-fb/components/`

### Product Management
- All files in `productmanagement/EIE/`

### Entry Points
- All files in `EntryPoint/` and `EntryPoint/WorkshopEntry/`

### All Programs Ads
- All files in `allprograms-ads/`

### Gen AI AD
- All files in `genAIAD/`

## Testing
After updating components, verify:
1. All headings display in Epilogue font
2. All body text displays in Open Sans font
3. Font weights render correctly
4. Fonts load properly on first page visit

## Notes
- The fonts are now available globally across the application
- No additional imports needed in components
- Just use the Tailwind classes `font-heading` and `font-sans`
- The dev server should hot-reload with the changes
