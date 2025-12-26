import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "ACE BITS — Association of Civil Engineers | BIT Sindri, Dhanbad",
  description = "Official website of ACE BITS — Association of Civil Engineers at Birla Institute of Technology (BIT) Sindri, Dhanbad, Jharkhand. Premier technical society organizing RISCE conference, workshops, seminars, technical events, industrial visits, and career development programs for civil, mechanical, electrical, computer science, and all engineering students.",
  keywords = "ACE BITS, BIT Sindri, Civil Engineering BIT Sindri, Engineering College Jharkhand",
  image = "https://acebits1.onrender.com/logo512.png",
  url = "https://acebits1.onrender.com/",
  type = "website",
  author = "ACE BITS, BIT Sindri",
  canonicalUrl
}) => {
  const siteUrl = "https://acebits1.onrender.com";
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const canonical = canonicalUrl || fullUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ACE BITS - BIT Sindri" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@AceSindri" />
      <meta name="twitter:creator" content="@AceSindri" />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
