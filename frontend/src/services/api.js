import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/resume/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const analyzeResume = async (resumeText, jobDescription) => {
  const response = await api.post("/ats/", {
    resume_text: resumeText,
    job_description: jobDescription,
  });

  return response.data;
};

export const rewriteResume = (resumeText, jobDescription) =>
  api.post("/rewrite/", {
    resume_text: resumeText,
    job_description: jobDescription,
  });

export default api;