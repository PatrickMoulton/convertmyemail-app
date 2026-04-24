import Link from "next/link";
import UploadPage from "../app/uploadpage.client";

export const metadata = {
  title: "Convert EML to CSV Online | Email to CSV Converter",
  description:
    "Convert .eml email files into clean CSV records. Extract email sender, recipient, subject, date, and message body into structured data.",
  alternates: {
    canonical: "/eml-to-csv",
  },
};

export default function EmlToCsvPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              EML to CSV Converter
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Convert EML files to CSV data
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Upload your <strong>.eml email files</strong> and convert them
              into clean CSV records for spreadsheets, databases, legal review,
              reporting, and data cleanup workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Clean CSV export
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Easy database import
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Structured email fields
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-slate-200">
            <h2 className="mb-2 text-xl font-bold">Upload your EML file</h2>
            <p className="mb-5 text-sm text-slate-600">
              Convert your email file directly on this page.
            </p>

            <UploadPage />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
          <Feature
            title="Structured email export"
            text="Convert email details into CSV columns like from, to, subject, date, and body text."
          />
          <Feature
            title="Simple data portability"
            text="CSV files can be opened in Excel, Google Sheets, databases, and many review tools."
          />
          <Feature
            title="Useful for bulk email review"
            text="Turn messy email files into structured rows that are easier to search, filter, and process."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">How to convert EML to CSV</h2>

            <ol className="mt-6 space-y-4 text-slate-700">
              <Step number="1" text="Export or save your email as a .eml file." />
              <Step number="2" text="Upload the EML file using the converter above." />
              <Step number="3" text="Convert the email into structured data." />
              <Step number="4" text="Download the CSV file." />
            </ol>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <h2 className="text-2xl font-bold">Need another output?</h2>

            <p className="mt-4 text-slate-300">
              Use PDF for clean records, Excel for spreadsheet review, or CSV
              when you need portable structured email data.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/eml-to-pdf"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                EML to PDF
              </Link>

              <Link
                href="/eml-to-excel"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white"
              >
                EML to Excel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-bold">EML to CSV FAQ</h2>

          <div className="mt-8 space-y-6">
            <FAQ
              question="Can I convert EML to CSV?"
              answer="Yes. ConvertMyEmail can turn EML email files into structured CSV data."
            />
            <FAQ
              question="Why use CSV?"
              answer="CSV is useful when you need a lightweight format for spreadsheets, databases, imports, or data processing."
            />
            <FAQ
              question="What email data is exported?"
              answer="The output can include sender, recipient, subject, date, body text, and other structured email fields."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
        {number}
      </span>
      <span className="pt-1">{text}</span>
    </li>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-slate-200 pb-6">
      <h3 className="text-lg font-bold">{question}</h3>
      <p className="mt-2 leading-7 text-slate-700">{answer}</p>
    </div>
  );
}