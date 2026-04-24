import UploadPage from "../app/uploadpage.client";

export const metadata = {
  title: "Convert EML to PDF Online | ConvertMyEmail",
  description:
    "Convert .eml email files into clean, readable PDF documents online.",
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
              Upload your .eml email file and convert it into a clean PDF for
              records, legal review, documentation, disputes, or archiving.
            </p>
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
    </main>
  );
}