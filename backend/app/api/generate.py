from fastapi import APIRouter, HTTPException

from app.agents.resume_agent import ResumeAgent
from app.schemas.generate import GenerateRequest


router = APIRouter(
    prefix="/generate",
    tags=["Generate"],
)


@router.post("/")
def generate_everything(data: GenerateRequest):
    try:
        result = ResumeAgent.generate_everything(
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