from fastapi import APIRouter, HTTPException

from app.agents.resume_agent import ResumeAgent
from app.schemas.ats import ATSRequest


router = APIRouter(
    prefix="/ats",
    tags=["ATS"],
)


@router.post("/")
def ats_analysis(data: ATSRequest):
    try:
        result = ResumeAgent.ats(
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