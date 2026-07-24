import os
import shutil

from fastapi import UploadFile, HTTPException
from langchain_community.document_loaders import PyMuPDFLoader

# Upload folder
UPLOAD_DIR = "uploads/resumes"
os.makedirs(UPLOAD_DIR, exist_ok=True)


def save_resume(file: UploadFile):
    # Allow only PDF files
    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    # Save uploaded PDF
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text from PDF
    resume_text = extract_resume_text(file_path)

    # Clean extracted text
    resume_text = clean_resume_text(resume_text)

    return {
        "filename": file.filename,
        "file_path": file_path,
        "text": resume_text,
    }


def extract_resume_text(file_path: str) -> str:
    """
    Extract text from PDF using PyMuPDFLoader.
    """
    loader = PyMuPDFLoader(file_path)
    documents = loader.load()

    text = "\n".join(doc.page_content for doc in documents)

    return text


def clean_resume_text(text: str) -> str:
    """
    Clean extracted resume text.
    """
    # Remove null characters
    text = text.replace("\x00", "")

    # Remove extra spaces
    text = "\n".join(line.strip() for line in text.splitlines())

    # Remove empty lines
    text = "\n".join(line for line in text.splitlines() if line)

    return text