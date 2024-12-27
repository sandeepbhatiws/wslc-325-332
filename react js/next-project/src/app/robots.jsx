export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/about-us/',
      },
      sitemap: 'https://acme.com/sitemap.xml',
    }
  }