import os
import shutil
from fastapi import UploadFile, HTTPException
from langchain_community.document_loaders import PyMuPDFLoader

UPLOAD_DIR = "uploads/resumes"

os.makedirs(UPLOAD_DIR, exist_ok=True)


def save_resume(file: UploadFile):
    # Allow only PDF files
    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )
# 2. Save PDF
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    resume_text = clean_resume_text(file_path)

    return {
        "filename": file.filename,
        "file_path": file_path,
         "text": resume_text
    }

#PDF text extraction function

def extract_resume_text(file_path: str):
    loader = PyMuPDFLoader(file_path)
    documents = loader.load()

    text = "\n".join(doc.page_content for doc in documents)

    return text

'''LLM ko clean input doge to parsing aur ATS analysis dono better honge.'''
def clean_resume_text(text: str) -> str:
    text = text.replace("\x00", "")
    text = "\n".join(line.strip() for line in text.splitlines())
    text = "\n".join(line for line in text.splitlines() if line)

    return {
        "filename": file.filename,
        "file_path": file_path,
        "resume_text": resume_text,
    }