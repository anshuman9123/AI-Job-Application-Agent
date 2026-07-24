import { FaUpload, FaFilePdf } from "react-icons/fa";
import { useRef, useState } from "react";
import { uploadResume } from "../services/api";
import { useNavigate } from "react-router-dom";

function UploadResume() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
  if (!file) {
    alert("Please select a PDF");
    return;
  }

  try {
    const response = await uploadResume(file);

    localStorage.setItem(
      "resume_text",
      response.data.text
    );

    alert("Resume uploaded successfully!");

    navigate("/analyze");
  } catch (error) {
    console.error(error);
    alert("Upload failed!");
  }
};

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-slate-800">
          Upload Resume
        </h1>

        <p className="text-slate-500 mt-2">
          Upload your resume in PDF format to begin ATS analysis.
        </p>

        <div
          onClick={() => fileInputRef.current.click()}
          className="border-2 border-dashed border-blue-400 rounded-2xl mt-10 p-16 flex flex-col items-center cursor-pointer"
        >
          <FaUpload className="text-6xl text-blue-600 mb-5" />

          <h2 className="text-2xl font-semibold">
            Drag & Drop Resume
          </h2>

          <p className="text-slate-500 mt-3">
            or click anywhere to choose a PDF
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="mt-10 bg-slate-100 rounded-xl p-5 flex items-center gap-4">
          <FaFilePdf className="text-red-600 text-4xl" />

          <div>
            <h3 className="font-bold">
              {file ? file.name : "No file selected"}
            </h3>

            <p className="text-slate-500">
              {file
                ? `${(file.size / 1024).toFixed(2)} KB`
                : "Please select a PDF"}
            </p>
          </div>
        </div>

        <button
          onClick={handleUpload}
          className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Upload Resume
        </button>
      </div>
    </div>
  );
}

export default UploadResume;