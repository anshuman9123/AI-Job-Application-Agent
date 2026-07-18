from fastapi import FastAPI
from app.api.auth import router as auth_router
from app.database.database import Base, engine
from app.api.users import router as users_router

# Import all models here
from app.models.user import User

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Job Application Agent",
    version="1.0.0"
)
app.include_router(auth_router)
app.include_router(users_router)


@app.get("/")
def home():
    return {
        "message": "AI Job Application Agent is running 🚀"
    }