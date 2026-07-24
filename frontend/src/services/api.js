import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
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

export default api;