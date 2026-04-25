import Link from "next/link";
import PublicUploader from "../components/public-uploader.client";

export const metadata = {
  title: "Convert EML to PDF Online | ConvertMyEmail",
  description:
    "Convert .eml email files into clean, readable PDF documents online. Great for email records, disputes, legal review, documentation, and archiving.",
  alternates: {
    canonical: "/eml-to-pdf",
  },
};

export default function EmlToPdfPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              EML to PDF Converter
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Convert EML to PDF online
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Upload your <strong>.eml email file</strong> and convert it into
              a clean, readable PDF for records, legal review, documentation,
              disputes, or archiving.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Clean PDF formatting
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Email records
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Legal-friendly exports
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
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
          <Feature
            title="Readable email records"
            text="Turn raw EML files into clean PDF records that are easier to read, print, save, and share."
          />
          <Feature
            title="Better than screenshots"
            text="Avoid messy screenshots or copy-pasted emails. Convert the original email file into a structured PDF."
          />
          <Feature
            title="Useful for documentation"
            text="Great for disputes, legal review, business records, support documentation, and archived emails."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">How to convert EML to PDF</h2>

            <ol className="mt-6 space-y-4 text-slate-700">
              <Step number="1" text="Save or export your email as a .eml file." />
              <Step number="2" text="Upload the file using the converter above." />
              <Step number="3" text="Choose PDF output." />
              <Step number="4" text="Download your formatted email PDF." />
            </ol>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <h2 className="text-2xl font-bold">Need another format?</h2>

            <p className="mt-4 text-slate-300">
              Use PDF for readable records, Excel for structured review, or CSV
              for portable email data.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/eml-to-excel"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                EML to Excel
              </Link>

              <Link
                href="/eml-to-csv"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white"
              >
                EML to CSV
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-bold">EML to PDF FAQ</h2>

          <div className="mt-8 space-y-6">
            <FAQ
              question="What is an EML file?"
              answer="An EML file is a saved email message file. It usually includes the sender, recipient, subject, date, and message body."
            />
            <FAQ
              question="Why convert EML to PDF?"
              answer="PDF files are easier to print, share, store, and review than raw email files."
            />
            <FAQ
              question="Can I use this for email records?"
              answer="Yes. PDF exports are useful for records, disputes, business documentation, and legal review."
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