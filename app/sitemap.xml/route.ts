export async function GET() {
  const baseUrl = "https://convertmyemail.com";

  // Static pages
  const staticUrls = [
    "/",
    "/pricing",
    "/how-it-works",
    "/how-to-save-eml",
  ];

  // 🔥 AUTO-GENERATED FROM YOUR PAGE FILE (copy of your slugs)
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
    "eml-to-pdf-mac",
    "eml-to-pdf-windows",
    "eml-to-pdf-online-free",
    "how-to-open-eml-without-outlook",
    "eml-file-viewer-online",
    "eml-to-docx",
    "eml-to-txt",
    "eml-to-html",
    "eml-to-pdf-online",
    "eml-to-pdf-fast",
    "eml-to-pdf-secure",
    "convert-eml-files",
    "bulk-eml-to-pdf",
    "eml-to-pdf-free-tool",
    "eml-to-pdf-no-outlook",
    "eml-to-pdf-with-attachments",
    "eml-converter-online",
    "open-eml-on-mac",
    "open-eml-on-windows",
    "view-eml-files-online",
    "eml-viewer-free",
    "eml-file-reader",
    "eml-to-excel-online",
    "eml-to-excel-free",
    "extract-eml-data",
    "eml-data-extractor",
    "email-to-excel",
    "email-to-csv",
    "email-parser-online",
    "parse-eml-files",
    "convert-outlook-email-to-pdf",
    "save-outlook-email-as-pdf",
    "outlook-email-export",
    "outlook-email-converter",
    "convert-email-thread-to-pdf",
    "email-archive-to-pdf",
    "email-evidence-pdf",
    "legal-email-export",
    "email-to-pdf-for-court",
    "print-email-to-pdf",
    "email-to-pdf-converter-free",
    "email-to-pdf-no-install",
    "eml-to-pdf-browser",
    "convert-email-files-online",
    "email-file-converter",
    "eml-converter-free",
    "eml-to-pdf-best",
    "best-eml-viewer",
    "eml-file-opener",
  ];

  const allUrls = [
    ...staticUrls,
    ...emlSlugs.map((slug) => `/eml/${slug}`),
  ];

  const now = new Date().toISOString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${now}</lastmod>
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