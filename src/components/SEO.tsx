import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPageMetadata } from '../utils/metadata';

interface SEOProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export function SEO({ 
  title, 
  description, 
  ogTitle, 
  ogDescription, 
  ogImage,
  canonicalUrl,
  noIndex = false
}: SEOProps) {
  const location = useLocation();
  const defaultMetadata = getPageMetadata(location.pathname);
  
  // Use provided props or fall back to metadata from path
  const finalTitle = title || defaultMetadata.title;
  const finalDescription = description || defaultMetadata.description;
  const finalOgTitle = ogTitle || defaultMetadata.ogTitle;
  const finalOgDescription = ogDescription || defaultMetadata.ogDescription;
  const finalOgImage = ogImage || defaultMetadata.ogImage || '/companylogo-new.webp';
  const finalCanonicalUrl = canonicalUrl || defaultMetadata.canonicalUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={`https://acceleratorx.org${finalOgImage}`} />
      <meta property="og:site_name" content="AcceleratorX" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonicalUrl} />
      <meta property="twitter:title" content={finalOgTitle} />
      <meta property="twitter:description" content={finalOgDescription} />
      <meta property="twitter:image" content={`https://acceleratorx.org${finalOgImage}`} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="AcceleratorX" />
      <meta name="theme-color" content="#1a71f6" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
    </Helmet>
  );
}
