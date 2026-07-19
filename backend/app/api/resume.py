from fastapi import APIRouter, UploadFile, File

from app.services.resume_service import save_resume

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)


@router.post("/upload")
def upload_resume(file: UploadFile = File(...)):
    return save_resume(file)