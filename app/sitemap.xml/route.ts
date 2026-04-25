export async function GET() {
  const baseUrl = "https://convertmyemail.com";

  // Static pages
  const staticUrls = [
    "/",
    "/pricing",
    "/how-it-works",
    "/how-to-save-eml",
  ];

  // SEO pages (THIS is what we’re adding)
  const emlSlugs = [
    "eml-to-pdf",
    "eml-to-excel",
    "open-eml-file",
    "eml-to-pdf-mac",
    "eml-to-pdf-windows",
    "eml-viewer",
  ];

  const emlUrls = emlSlugs.map((slug) => `/eml/${slug}`);

  const allUrls = [...staticUrls, ...emlUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
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