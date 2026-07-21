from fastapi import APIRouter, UploadFile, File

from app.services.resume_service import save_resume

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)


@router.post("/upload")
def upload_resume(file: UploadFile = File(...)):
    data= save_resume(file)

    return {
        "success": True,
        "message": "Resume uploaded successfully.",
        "data": data,
    }