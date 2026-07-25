import { useState } from "react";
import { analyzeResume } from "../services/api";
import { useNavigate } from "react-router-dom";

function JobDescription() {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
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

  const score = result?.ats_score ?? 0;

  const color =
    score < 40
      ? "#ef4444"
      : score < 70
      ? "#f59e0b"
      : "#22c55e";

  const radius = 70;
  const stroke = 12;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (score / 100) * circumference;

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-4xl font-bold">
            Resume ATS Analysis
          </h1>

          <p className="text-gray-500 mt-2">
            Compare your resume against any Job Description.
          </p>

          <textarea
            rows={10}
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(e.target.value)
            }
            placeholder="Paste Job Description..."
            className="w-full mt-6 border rounded-xl p-5 resize-none outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            {loading
              ? "Analyzing..."
              : "Analyze Resume"}
          </button>

        </div>

        {result && (

          <>

            {/* ATS CARD */}

            <div className="bg-white rounded-2xl shadow-lg border mt-8 p-10">

              <h2 className="text-3xl font-bold text-left">
                ATS Score
              </h2>

              <p className="text-center text-gray-500 mt-2">
                Overall Resume Compatibility
              </p>

              <div className="flex justify-center mt-8">

                <div className="relative w-56 h-56">

                  <svg
                  
                    className="-rotate-90"
                    width="224"
                    height="224"
                  >

                    

                    <circle
                      cx="112"
                      cy="112"
                      r={radius}
                      stroke="#e5e7eb"
                      strokeWidth={stroke}
                      fill="none"
                    />

                    <circle
                      cx="112"
                      cy="112"
                      r={radius}
                      stroke={color}
                      strokeWidth={stroke}
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      style={{
                        transition:
                          "stroke-dashoffset .8s ease",
                      }}
                      
                    />

                  </svg>
                  

                  <div className="absolute inset-0 flex items-center justify-center">

  <div className="flex items-start">

    <span
      className="text-7xl font-bold leading-none"
      style={{ color }}
    >
      {score}
    </span>

    <span
      className="text-3xl font-bold ml-1 mt-2"
      style={{ color }}
    >
      %
    </span>

  </div>

</div>

                </div>

              </div>

              <p className="text-center mt-8 text-gray-500">

                {score < 40
                  ? "Your resume needs significant improvements."
                  : score < 70
                  ? "You're close. Improve the missing skills."
                  : "Excellent resume for this role."}

              </p>

            </div>

            {/* SUMMARY */}

            <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">

              <h2 className="text-2xl font-bold mb-5">
                Analysis Summary
              </h2>

              <p className="text-gray-700 leading-8">
                {result.analysis_summary}
              </p>

            </div>
                        {/* Skills */}

            <div className="grid lg:grid-cols-2 gap-8 mt-8">

              {/* Matched Skills */}

              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-2xl font-bold text-green-600 mb-6">
                  Matched Skills
                </h2>

                <div className="flex flex-wrap gap-3">

                  {result.matched_skills?.length ? (
                    result.matched_skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-500">
                      No matched skills found.
                    </p>
                  )}

                </div>

              </div>

              {/* Missing Skills */}

              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-2xl font-bold text-red-600 mb-6">
                  Missing Skills
                </h2>

                <div className="flex flex-wrap gap-3">

                  {result.missing_skills?.length ? (
                    result.missing_skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-500">
                      No missing skills.
                    </p>
                  )}

                </div>

              </div>

            </div>

            {/* Strengths & Weaknesses */}

            <div className="grid lg:grid-cols-2 gap-8 mt-8">

              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-2xl font-bold text-green-700 mb-6">
                  Strengths
                </h2>

                <div className="space-y-4">

                  {result.strengths?.length ? (
                    result.strengths.map((item, index) => (
                      <div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded-lg p-4"
                      >
                        {item}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">
                      No strengths found.
                    </p>
                  )}

                </div>

              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-2xl font-bold text-red-700 mb-6">
                  Weaknesses
                </h2>

                <div className="space-y-4">

                  {result.weaknesses?.length ? (
                    result.weaknesses.map((item, index) => (
                      <div
                        key={index}
                        className="bg-red-50 border border-red-200 rounded-lg p-4"
                      >
                        {item}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">
                      No weaknesses found.
                    </p>
                  )}

                </div>

              </div>

            </div>

            {/* Suggestions */}

            <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">

              <h2 className="text-2xl font-bold text-blue-700 mb-6">
                Suggestions
              </h2>

              <div className="space-y-4">

                {result.suggestions?.length ? (
                  result.suggestions.map((item, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-5"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">
                    No suggestions available.
                  </p>
                )}

              </div>

            </div>
                <div className="mt-8 flex justify-end">
  <button
    onClick={() =>
      navigate("/rewrite", {
        state: {
          resumeText,
          jobDescription,
        },
      })
    }
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
  >
    Rewrite Resume →
  </button>
</div>
          </>

        )}

      </div>

    </div>
  );
}

export default JobDescription;