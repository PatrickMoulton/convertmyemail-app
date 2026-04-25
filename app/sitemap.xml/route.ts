export async function GET() {
  const baseUrl = "https://convertmyemail.com";

  // Static pages
  const staticUrls = [
    "/",
    "/pricing",
    "/how-it-works",
    "/how-to-save-eml",
  ];

  // ONLY pages that actually exist in page.tsx
  const emlSlugs = [
    "eml-to-pdf",
    "eml-to-excel",
    "eml-to-csv",
    "outlook-eml-to-pdf",
    "email-to-pdf",
    "convert-eml-to-pdf",
    "save-eml-as-pdf",
    "open-eml-file",
    "eml-viewer",
  ];

  const allUrls = [
    ...staticUrls,
    ...emlSlugs.map((slug) => `/eml/${slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}