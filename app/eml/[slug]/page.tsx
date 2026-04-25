import { notFound } from "next/navigation";
import PublicUploader from "../../components/public-uploader.client";

type SeoPage = {
  title: string;
  description: string;
  h1: string;
};

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
    description: "Convert Outlook .eml files into clean PDF records instantly.",
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
    description: "Save .eml email files as PDF documents quickly and easily.",
    h1: "Save EML files as PDF",
  },
  "open-eml-file": {
    title: "Open EML Files Online",
    description:
      "Open .eml files online and convert them into readable PDF or Excel files.",
    h1: "Open EML files online",
  },
  "eml-viewer": {
    title: "EML Viewer Online",
    description:
      "View and convert .eml email files online without installing Outlook or Thunderbird.",
    h1: "EML viewer online",
  },
  "eml-to-pdf-mac": {
    title: "Convert EML to PDF on Mac",
    description: "Convert .eml files to PDF on macOS instantly.",
    h1: "Convert EML to PDF on Mac",
  },
  "eml-to-pdf-windows": {
    title: "Convert EML to PDF on Windows",
    description: "Convert .eml files to PDF on Windows instantly.",
    h1: "Convert EML to PDF on Windows",
  },
  "eml-to-pdf-online-free": {
    title: "Convert EML to PDF Online Free",
    description: "Free online EML to PDF converter.",
    h1: "Convert EML to PDF online for free",
  },
  "how-to-open-eml-without-outlook": {
    title: "Open EML Without Outlook",
    description: "Open EML files without installing Outlook.",
    h1: "How to open EML without Outlook",
  },
  "eml-file-viewer-online": {
    title: "EML File Viewer Online",
    description: "View EML files instantly online.",
    h1: "EML file viewer",
  },
  "eml-to-docx": {
    title: "Convert EML to Word DOCX",
    description: "Convert EML files to Word documents easily.",
    h1: "Convert EML to Word DOCX",
  },
  "eml-to-txt": {
    title: "Convert EML to Text",
    description: "Extract plain text from EML email files.",
    h1: "Convert EML to TXT",
  },
  "eml-to-html": {
    title: "Convert EML to HTML",
    description: "Convert EML email files into HTML format.",
    h1: "Convert EML to HTML",
  },
  "eml-to-pdf-online": {
    title: "EML to PDF Online",
    description: "Convert EML files to PDF online instantly.",
    h1: "EML to PDF Online",
  },
  "eml-to-pdf-fast": {
    title: "Fast EML to PDF Converter",
    description: "Convert EML files to PDF quickly.",
    h1: "Fast EML to PDF conversion",
  },
  "eml-to-pdf-secure": {
    title: "Secure EML to PDF Converter",
    description: "Securely convert EML files to PDF.",
    h1: "Secure EML to PDF",
  },
  "convert-eml-files": {
    title: "Convert EML Files Online",
    description: "Convert EML files into multiple formats.",
    h1: "Convert EML files online",
  },
  "bulk-eml-to-pdf": {
    title: "Bulk EML to PDF Converter",
    description: "Convert multiple EML files to PDF.",
    h1: "Bulk EML to PDF conversion",
  },
  "eml-to-pdf-free-tool": {
    title: "Free EML to PDF Tool",
    description: "Free tool to convert EML to PDF.",
    h1: "Free EML to PDF tool",
  },
  "eml-to-pdf-no-outlook": {
    title: "Convert EML to PDF Without Outlook",
    description: "Convert EML files without Outlook installed.",
    h1: "EML to PDF without Outlook",
  },
  "eml-to-pdf-with-attachments": {
    title: "EML to PDF With Attachments",
    description: "Convert EML files including attachments.",
    h1: "Convert EML with attachments",
  },
  "eml-converter-online": {
    title: "EML Converter Online",
    description: "Convert EML files to PDF, Excel, and more.",
    h1: "EML converter online",
  },
  "open-eml-on-mac": {
    title: "Open EML Files on Mac",
    description: "Open EML files on macOS easily.",
    h1: "Open EML on Mac",
  },
  "open-eml-on-windows": {
    title: "Open EML Files on Windows",
    description: "Open EML files on Windows easily.",
    h1: "Open EML on Windows",
  },
  "view-eml-files-online": {
    title: "View EML Files Online",
    description: "View EML email files instantly online.",
    h1: "View EML files online",
  },
  "eml-viewer-free": {
    title: "Free EML Viewer",
    description: "Free tool to view EML files.",
    h1: "Free EML viewer",
  },
  "eml-file-reader": {
    title: "EML File Reader",
    description: "Read EML files easily online.",
    h1: "EML file reader",
  },
  "eml-to-excel-online": {
    title: "EML to Excel Online",
    description: "Convert EML to Excel spreadsheets online.",
    h1: "EML to Excel online",
  },
  "eml-to-excel-free": {
    title: "Free EML to Excel Converter",
    description: "Convert EML to Excel for free.",
    h1: "Free EML to Excel",
  },
  "extract-eml-data": {
    title: "Extract Data From EML",
    description: "Extract structured data from EML files.",
    h1: "Extract EML data",
  },
  "eml-data-extractor": {
    title: "EML Data Extractor",
    description: "Extract sender, subject, and body from EML.",
    h1: "EML data extractor",
  },
  "email-to-excel": {
    title: "Convert Email to Excel",
    description: "Convert email files into Excel format.",
    h1: "Email to Excel conversion",
  },
  "email-to-csv": {
    title: "Convert Email to CSV",
    description: "Convert email data into CSV format.",
    h1: "Email to CSV",
  },
  "email-parser-online": {
    title: "Email Parser Online",
    description: "Parse email files into structured data.",
    h1: "Email parser online",
  },
  "parse-eml-files": {
    title: "Parse EML Files",
    description: "Parse email files into readable data.",
    h1: "Parse EML files",
  },
  "convert-outlook-email-to-pdf": {
    title: "Convert Outlook Email to PDF",
    description: "Convert Outlook emails into PDF format.",
    h1: "Outlook email to PDF",
  },
  "save-outlook-email-as-pdf": {
    title: "Save Outlook Email as PDF",
    description: "Save Outlook emails as PDF documents.",
    h1: "Save Outlook email as PDF",
  },
  "outlook-email-export": {
    title: "Export Outlook Emails",
    description: "Export Outlook emails into different formats.",
    h1: "Export Outlook emails",
  },
  "outlook-email-converter": {
    title: "Outlook Email Converter",
    description: "Convert Outlook emails to PDF or Excel.",
    h1: "Outlook email converter",
  },
  "convert-email-thread-to-pdf": {
    title: "Convert Email Thread to PDF",
    description: "Convert entire email threads into PDF.",
    h1: "Email thread to PDF",
  },
  "email-archive-to-pdf": {
    title: "Email Archive to PDF",
    description: "Convert archived emails to PDF.",
    h1: "Email archive to PDF",
  },
  "email-evidence-pdf": {
    title: "Email Evidence PDF",
    description: "Convert emails into court-ready PDF evidence.",
    h1: "Email evidence PDF",
  },
  "legal-email-export": {
    title: "Legal Email Export Tool",
    description: "Export emails for legal documentation.",
    h1: "Legal email export",
  },
  "email-to-pdf-for-court": {
    title: "Email to PDF for Court",
    description: "Convert emails into court-ready PDFs.",
    h1: "Email to PDF for court",
  },
  "print-email-to-pdf": {
    title: "Print Email to PDF",
    description: "Print email files into PDF format.",
    h1: "Print email to PDF",
  },
  "email-to-pdf-converter-free": {
    title: "Free Email to PDF Converter",
    description: "Convert emails to PDF for free.",
    h1: "Free email to PDF",
  },
  "email-to-pdf-no-install": {
    title: "Email to PDF Without Installing Software",
    description: "Convert emails without installing anything.",
    h1: "Email to PDF no install",
  },
  "eml-to-pdf-browser": {
    title: "EML to PDF in Browser",
    description: "Convert EML files directly in your browser.",
    h1: "EML to PDF in browser",
  },
  "convert-email-files-online": {
    title: "Convert Email Files Online",
    description: "Convert email files into multiple formats.",
    h1: "Convert email files online",
  },
  "email-file-converter": {
    title: "Email File Converter",
    description: "Convert email files easily online.",
    h1: "Email file converter",
  },
  "eml-converter-free": {
    title: "Free EML Converter",
    description: "Convert EML files for free online.",
    h1: "Free EML converter",
  },
  "eml-to-pdf-best": {
    title: "Best EML to PDF Converter",
    description: "Best tool to convert EML files to PDF.",
    h1: "Best EML to PDF",
  },
  "best-eml-viewer": {
    title: "Best EML Viewer Online",
    description: "Best way to view EML files online.",
    h1: "Best EML viewer",
  },
  "eml-file-opener": {
    title: "EML File Opener",
    description: "Open EML files instantly online.",
    h1: "EML file opener",
  },

  "convert-email-evidence-to-pdf": {
    title: "Convert Email Evidence to PDF",
    description:
      "Convert email evidence into clean PDF files for records, disputes, legal matters, and documentation.",
    h1: "Convert email evidence to PDF",
  },
  "export-email-for-legal-records": {
    title: "Export Email for Legal Records",
    description:
      "Export emails into readable PDF files for legal records, case files, and documentation.",
    h1: "Export email for legal records",
  },
  "convert-forwarded-email-to-pdf": {
    title: "Convert Forwarded Email to PDF",
    description:
      "Convert forwarded email messages into clean PDF documents that are easier to save, print, and share.",
    h1: "Convert forwarded email to PDF",
  },
  "convert-email-chain-to-pdf": {
    title: "Convert Email Chain to PDF",
    description:
      "Convert long email chains into readable PDF files for documentation, records, and review.",
    h1: "Convert email chain to PDF",
  },
  "email-record-export": {
    title: "Email Record Export Tool",
    description:
      "Export email records into clean PDF or Excel files for storage, review, and documentation.",
    h1: "Email record export tool",
  },
  "convert-customer-emails-to-excel": {
    title: "Convert Customer Emails to Excel",
    description:
      "Convert customer email files into structured Excel spreadsheets for sorting, tracking, and analysis.",
    h1: "Convert customer emails to Excel",
  },
  "extract-email-subjects-to-excel": {
    title: "Extract Email Subjects to Excel",
    description:
      "Extract email subjects, senders, dates, and message content into a clean Excel spreadsheet.",
    h1: "Extract email subjects to Excel",
  },
  "email-documentation-tool": {
    title: "Email Documentation Tool",
    description:
      "Turn email files into organized documentation with clean PDF and Excel exports.",
    h1: "Email documentation tool",
  },
  "convert-business-emails-to-pdf": {
    title: "Convert Business Emails to PDF",
    description:
      "Convert business email files into professional PDF records for sharing, storage, and review.",
    h1: "Convert business emails to PDF",
  },
  "email-backup-to-pdf": {
    title: "Email Backup to PDF",
    description:
      "Convert backed-up email files into readable PDF documents for long-term storage.",
    h1: "Email backup to PDF",
  },
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) notFound();

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

          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <h2 className="mb-2 text-xl font-bold">Upload your EML file</h2>
            <p className="mb-5 text-sm text-slate-600">
              Convert your email file directly on this page.
            </p>

            <PublicUploader />
          </div>
        </div>

        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">Related EML tools</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <a href="/eml/eml-to-pdf" className="underline">
              EML to PDF
            </a>
            <a href="/eml/eml-to-excel" className="underline">
              EML to Excel
            </a>
            <a href="/eml/open-eml-file" className="underline">
              Open EML File
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}