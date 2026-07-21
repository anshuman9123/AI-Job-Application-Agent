from pydantic import BaseModel


class CoverLetterRequest(BaseModel):
    resume_text: str
    job_description: str