from pydantic import BaseModel


class ATSRequest(BaseModel):
    resume_text: str
    job_description: str