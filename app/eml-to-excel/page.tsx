import Link from "next/link";

export const metadata = {
  title: "Convert EML to Excel Online | EML to XLSX Converter",
  description:
    "Convert .eml email files into structured Excel spreadsheets. Extract sender, recipient, subject, date, and email body into clean XLSX records.",
  alternates: {
    canonical: "/eml-to-excel",
  },
};

export default function EmlToExcelPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              EML to Excel Converter
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Convert EML files to Excel spreadsheets
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Upload your <strong>.eml email files</strong> and convert them
              into clean Excel records with sender, recipient, subject, date,
              and message body fields organized for review.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Structured XLSX output
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Easy sorting and filtering
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Great for email review
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <h2 className="mb-2 text-xl font-bold">Convert your EML file</h2>
            <p className="mb-5 text-sm text-slate-600">
              Use the converter to upload your email file and download a clean
              Excel export.
            </p>

            <Link
              href="/eml-to-pdf"
              className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black"
            >
              Open EML converter
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
          <Feature
            title="Organized email data"
            text="Turn email records into rows and columns for easier review, filtering, sorting, and analysis."
          />
          <Feature
            title="Useful for investigations"
            text="Excel output makes it easier to search through senders, subjects, dates, and message content."
          />
          <Feature
            title="Better than manual copying"
            text="Avoid copying email details by hand. Upload EML files and generate structured spreadsheets."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">How to convert EML to Excel</h2>

            <ol className="mt-6 space-y-4 text-slate-700">
              <Step number="1" text="Save your email as a .eml file." />
              <Step number="2" text="Upload the file using the converter." />
              <Step number="3" text="Choose Excel output." />
              <Step number="4" text="Download your structured XLSX file." />
            </ol>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <h2 className="text-2xl font-bold">Need a different format?</h2>

            <p className="mt-4 text-slate-300">
              Use PDF for readable records, Excel for structured review, or CSV
              for importing email data into other tools.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/eml-to-pdf"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                EML to PDF
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
          <h2 className="text-3xl font-bold">EML to Excel FAQ</h2>

          <div className="mt-8 space-y-6">
            <FAQ
              question="Can I convert EML files to Excel?"
              answer="Yes. ConvertMyEmail turns EML email files into structured spreadsheet records."
            />
            <FAQ
              question="What fields are included?"
              answer="The spreadsheet can include fields like sender, recipient, subject, date, and email body content."
            />
            <FAQ
              question="Why use Excel instead of PDF?"
              answer="Excel is better when you need to sort, filter, search, or analyze a group of emails."
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