from pydantic import BaseModel


class GenerateRequest(BaseModel):
    resume_text: str
    job_description: str