from fastapi import APIRouter, HTTPException

from app.agents.resume_agent import ResumeAgent
from app.schemas.cover_letter import CoverLetterRequest


router = APIRouter(
    prefix="/cover-letter",
    tags=["Cover Letter"],
)


@router.post("/")
def cover_letter(data: CoverLetterRequest):
    try:
        result = ResumeAgent.cover_letter(
            resume_text=data.resume_text,
            job_description=data.job_description,
        )

        return {
            "success": True,
            "result": result,
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )