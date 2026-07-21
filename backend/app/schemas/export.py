from pydantic import BaseModel


class ExportRequest(BaseModel):
    resume_text: str