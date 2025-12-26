# SEO Component for ACE BITS Website

This SEO component provides dynamic meta tags, Open Graph tags, and Twitter Card tags for better search engine optimization and social media sharing.

## Installation

The project already has `react-helmet-async` installed. If you need to install it in a new project:

```bash
npm install react-helmet-async
```

## Usage

### Basic Usage

Import and use the SEO component in any page:

```javascript
import SEO from '../components/SEO';
import { seoConfig } from '../components/SEO/seoConfig';

function AboutPage() {
  return (
    <>
      <SEO {...seoConfig.about} />
      {/* Your page content */}
    </>
  );
}
```

### Custom SEO Data

You can also pass custom SEO data directly:

```javascript
import SEO from '../components/SEO';

function CustomPage() {
  return (
    <>
      <SEO
        title="Custom Page Title | ACE BITS"
        description="Custom page description for SEO"
        keywords="custom, keywords, here"
        url="/custom-page"
      />
      {/* Your page content */}
    </>
  );
}
```

## SEO Config

The `seoConfig.js` file contains pre-configured SEO data for all major pages:

- `home` - Homepage
- `about` - About page
- `events` - Events page
- `risce` - RISCE conference page
- `department` - Department page
- `gallery` - Gallery page
- `coordinators` - Team/Coordinators page
- `faculty` - Faculty page
- `lab` - Laboratory page
- `blogs` - Blogs page
- `magazine` - Magazine page
- `constitution` - Constitution page
- `gate` - GATE coaching page
- `posting` - Postings page
- `contact` - Contact page
- `joinCommunity` - Join community page
- Team pages (2k20, 2k21, 2k23, core)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | Default site title | Page title (appears in browser tab and search results) |
| `description` | string | Default description | Meta description for SEO |
| `keywords` | string | Default keywords | Comma-separated keywords for SEO |
| `image` | string | Logo512.png URL | Image for social media sharing (OG/Twitter) |
| `url` | string | Homepage URL | Canonical URL of the page |
| `type` | string | "website" | OpenGraph type (website, article, etc.) |
| `author` | string | "ACE BITS, BIT Sindri" | Content author |
| `canonicalUrl` | string | Same as url | Canonical URL (if different from url) |

## Example Implementation in All Pages

### Home Page (src/views/Home.js)
```javascript
import React from 'react';
import SEO from '../components/SEO';
import { seoConfig } from '../components/SEO/seoConfig';

const Home = () => {
  return (
    <>
      <SEO {...seoConfig.home} />
      {/* Rest of your Home component */}
    </>
  );
};

export default Home;
```

### About Page (src/views/About.js)
```javascript
import React from 'react';
import SEO from '../components/SEO';
import { seoConfig } from '../components/SEO/seoConfig';

const About = () => {
  return (
    <>
      <SEO {...seoConfig.about} />
      {/* Rest of your About component */}
    </>
  );
};

export default About;
```

## Features

- Dynamic page titles
- Meta descriptions optimized for search engines
- Comprehensive keyword targeting for BIT Sindri related searches
- Open Graph tags for Facebook sharing
- Twitter Card tags for Twitter sharing
- Canonical URLs to prevent duplicate content
- Robot meta tags for search engine crawling
- Supports all major social media platforms

## SEO Best Practices Implemented

1. **Unique titles and descriptions** for each page
2. **Keyword optimization** targeting BIT Sindri, engineering departments, clubs, events, etc.
3. **Proper meta tags** for search engines and social media
4. **Canonical URLs** to avoid duplicate content issues
5. **Image optimization** for social sharing with proper alt text
6. **Structured data** (JSON-LD) in index.html for rich results
7. **Mobile-friendly** meta viewport settings
8. **Fast loading** through proper meta tag implementation

## Google Search Console

After implementing SEO:

1. Submit your sitemap at: `https://acebits1.onrender.com/sitemap.xml`
2. Verify your website in Google Search Console
3. Request indexing for important pages
4. Monitor search performance and rankings

## Logo in Google Search Results

To display the ACE BITS logo in Google search results:

1. The Organization schema with logo is already added in `index.html`
2. Logo URL: `https://acebits1.onrender.com/logo512.png`
3. Logo should be square (512x512px) and accessible
4. It may take several weeks for Google to display the logo
5. Verify structured data using Google's Rich Results Test: https://search.google.com/test/rich-results

## Testing SEO

Test your SEO implementation:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **Schema Markup Validator**: https://validator.schema.org/

## Notes

- The SEO component uses `react-helmet-async` which updates the document head dynamically
- Make sure to use the SEO component at the top of each page component
- Update the `seoConfig.js` file when adding new pages
- Keep descriptions between 150-160 characters for optimal display in search results
- Keep titles under 60 characters to avoid truncation in search results
