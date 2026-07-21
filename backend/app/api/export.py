from fastapi import APIRouter, HTTPException

from app.agents.resume_agent import ResumeAgent
from app.schemas.export import ExportRequest


router = APIRouter(
    prefix="/export",
    tags=["Export"],
)


@router.post("/")
def export_resume(data: ExportRequest):
    try:
        result = ResumeAgent.export(
            resume_text=data.resume_text,
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