// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Convert EML Files to Excel, CSV or PDF | ConvertMyEmail",
  description:
    "Free online tool to convert EML email files into Excel spreadsheets, CSV files, or court-ready PDFs. Upload .eml files and download structured email data instantly.",

  icons: {
    icon: [
      { url: "/icon-light.png", media: "(prefers-color-scheme: light)", type: "image/png" },
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)", type: "image/png" },
      { url: "/favicon-light.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.ico", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/favicon-light.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  openGraph: {
    title: "Convert EML Files to Excel, CSV or PDF | ConvertMyEmail",
    description:
      "Upload .eml files and instantly convert them into Excel spreadsheets, CSV files, or court-ready PDFs.",
    url: "https://convertmyemail.com",
    siteName: "ConvertMyEmail",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="29EFtUv1daprJNeB0w5XK_-nxTYodB4dFF6hvi8JOrY"
        />

        <link
          rel="icon"
          href="/icon-light.png"
          type="image/png"
          sizes="512x512"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/icon-dark.png"
          type="image/png"
          sizes="512x512"
          media="(prefers-color-scheme: dark)"
        />

        <link
          rel="shortcut icon"
          href="/favicon-light.ico"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          sizes="180x180"
        />
      </head>

      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J4BFEE5NND"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J4BFEE5NND');
          `}
        </Script>
      </body>
    </html>
  );
}