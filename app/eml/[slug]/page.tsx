import { notFound } from "next/navigation";
import PublicUploader from "../../components/public-uploader.client";

/* ========================= */
/* TYPES */
/* ========================= */

type SeoPage = {
  title: string;
  description: string;
  h1: string;
};

/* ========================= */
/* PAGE CONFIG */
/* ========================= */

const pages: Record<string, SeoPage> = {
  "eml-to-pdf": {
    title: "Convert EML to PDF Online",
    description:
      "Convert .eml email files into clean PDF documents for records, legal use, and documentation.",
    h1: "Convert EML to PDF instantly",
  },
  "eml-to-excel": {
    title: "Convert EML to Excel Online",
    description:
      "Convert .eml email files into structured Excel spreadsheets for sorting and analysis.",
    h1: "Convert EML to Excel spreadsheets",
  },
  "eml-to-csv": {
    title: "Convert EML to CSV Online",
    description:
      "Convert .eml email files into clean CSV data for databases and spreadsheets.",
    h1: "Convert EML to CSV data",
  },
  "outlook-eml-to-pdf": {
    title: "Convert Outlook EML to PDF",
    description:
      "Convert Outlook .eml files into clean PDF records instantly.",
    h1: "Convert Outlook EML to PDF",
  },
  "email-to-pdf": {
    title: "Convert Email to PDF Online",
    description:
      "Convert email files into PDF format for easy sharing and documentation.",
    h1: "Convert email to PDF",
  },
  "convert-eml-to-pdf": {
    title: "Convert EML to PDF Free",
    description:
      "Free online tool to convert EML email files into PDF format instantly.",
    h1: "Convert EML to PDF for free",
  },
  "save-eml-as-pdf": {
    title: "Save EML as PDF",
    description:
      "Save .eml email files as PDF documents quickly and easily.",
    h1: "Save EML files as PDF",
  },
};

/* ========================= */
/* STATIC GENERATION */
/* ========================= */

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = pages[params.slug];

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
  };
}

/* ========================= */
/* PAGE */
/* ========================= */

export default function Page({ params }: { params: { slug: string } }) {
  const page = pages[params.slug];

  if (!page) return notFound();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              {page.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Instant conversion
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                No install required
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Clean formatting
              </span>
            </div>
          </div>

          {/* 🔥 CONVERTER */}
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <h2 className="mb-2 text-xl font-bold">
              Upload your EML file
            </h2>
            <p className="mb-5 text-sm text-slate-600">
              Convert your email file directly on this page.
            </p>

            <PublicUploader />
          </div>
        </div>
      </section>
    </main>
  );
}