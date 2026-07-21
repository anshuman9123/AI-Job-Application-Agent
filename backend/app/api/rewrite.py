from fastapi import APIRouter, HTTPException

from app.agents.resume_agent import ResumeAgent
from app.schemas.rewrite import RewriteRequest


router = APIRouter(
    prefix="/rewrite",
    tags=["Rewrite"],
)


@router.post("/")
def rewrite_resume(data: RewriteRequest):
    try:
        result = ResumeAgent.rewrite(
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