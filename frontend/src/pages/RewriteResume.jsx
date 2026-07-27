import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { rewriteResume } from "../services/api";
import jsPDF from "jspdf";
import ResumeTemplate from "../components/ResumeTemplate";

function RewriteResume() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [rewrittenResume, setRewrittenResume] = useState("");

  const downloadPDF = () => {
  const doc = new jsPDF();

  const lines = doc.splitTextToSize(rewrittenResume, 180);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  doc.text(lines, 15, 20);

  doc.save("AI_Rewritten_Resume.pdf");
};

  useEffect(() => {
    if (!state) {
      navigate("/job-description");
      return;
    }

    const fetchRewrite = async () => {
  try {
    const response = await rewriteResume(
      state.resumeText,
      state.jobDescription
    );

    console.log("Response =", response);
    console.log("Response =", response);
console.log("Response.data =", response.data);

setRewrittenResume(
  response.data?.result?.content?.[0]?.text || "No content found"
);

  } catch (error) {
    console.error("Error =", error);
    alert("Failed to rewrite resume.");
  } finally {
    setLoading(false);
  }
};

    fetchRewrite();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-4xl font-bold">
            AI Resume Rewriter
          </h1>

          <p className="text-gray-500 mt-2">
            Optimized resume based on your Job Description.
          </p>

          {loading ? (
            <div className="py-20 text-center text-xl font-semibold">
              Rewriting Resume...
            </div>
          ) : (
            <>
         <ResumeTemplate />
<button
  onClick={downloadPDF}
  style={{
    background: "red",
    color: "white",
    padding: "12px 20px",
    marginTop: "20px",
    fontSize: "18px",
    display: "block",
  }}
>
  DOWNLOAD PDF
</button>

            
            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default RewriteResume;