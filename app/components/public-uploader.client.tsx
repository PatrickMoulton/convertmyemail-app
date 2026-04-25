"use client";

import { useRef, useState } from "react";

export default function PublicUploader() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [status, setStatus] = useState("");

  const pickFiles = () => fileInputRef.current?.click();

  const upload = async (format: "pdf" | "xlsx") => {
    if (!files || files.length === 0) {
      setStatus("Please select a file first.");
      return;
    }

    setStatus(`Uploading and converting to ${format.toUpperCase()}...`);

    const formData = new FormData();
    Array.from(files).forEach((f) => formData.append("files", f));

    const res = await fetch(`/api/convert-eml?output=${format}`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      setStatus("Conversion failed. Try again.");
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = format === "pdf"
      ? "email-records.pdf"
      : "converted-emails.xlsx";

    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);

    setStatus("Done!");
  };

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept=".eml,message/rfc822"
        multiple
        className="hidden"
        onChange={(e) => setFiles(e.target.files)}
      />

      <button
        onClick={pickFiles}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium hover:bg-gray-50"
      >
        Choose .eml files
      </button>

      <div className="flex gap-2">
        <button
          onClick={() => upload("pdf")}
          disabled={!files}
          className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-black disabled:opacity-50"
        >
          Convert to PDF
        </button>

        <button
          onClick={() => upload("xlsx")}
          disabled={!files}
          className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-black disabled:opacity-50"
        >
          Convert to Excel
        </button>
      </div>

      {files && (
        <p className="text-sm text-gray-600">
          {files.length} file(s) selected
        </p>
      )}

      {status && (
        <p className="text-sm text-gray-700">{status}</p>
      )}
    </div>
  );
}