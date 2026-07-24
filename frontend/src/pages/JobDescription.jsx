import { useState } from "react";
import { analyzeResume } from "../services/api";

function JobDescription() {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const resumeText = localStorage.getItem("resume_text");

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      alert("Please enter the Job Description.");
      return;
    }

    if (!resumeText) {
      alert("Resume not found. Please upload your resume first.");
      return;
    }

    try {
      setLoading(true);

      const response = await analyzeResume(
        resumeText,
        jobDescription
      );

      setResult(response.result);
    } catch (error) {
      console.error(error);
      alert("Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-10">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          Resume Analysis
        </h1>

        <textarea
          rows={12}
          className="w-full border rounded-lg p-4 outline-none resize-none"
          placeholder="Paste Job Description..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

        {result && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-5">
              Analysis Result
            </h2>

            <pre className="bg-gray-100 p-5 rounded-lg overflow-auto whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
}

export default JobDescription;