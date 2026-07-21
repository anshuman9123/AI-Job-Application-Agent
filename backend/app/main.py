from fastapi import FastAPI
from app.api.auth import router as auth_router
from app.database.database import Base, engine
from app.api.users import router as users_router
from app.api.resume import router as resume_router
from app.api.ats import router as ats_router
from app.api.rewrite import router as rewrite_router
from app.api.cover_letter import router as cover_letter_router
from app.api.export import router as export_router
from app.api.generate import router as generate_router

# Import all models here
from app.models.user import User

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Job Application Agent",
    version="1.0.0"
)
app.include_router(auth_router)
app.include_router(users_router)
app.include_router(resume_router)
app.include_router(ats_router)
app.include_router(rewrite_router)
app.include_router(cover_letter_router)
app.include_router(export_router)
app.include_router(generate_router)


@app.get("/")
def home():
    return {
        "message": "AI Job Application Agent is running 🚀"
    }