from pydantic import BaseModel


class RewriteRequest(BaseModel):
    resume_text: str
    job_description: str