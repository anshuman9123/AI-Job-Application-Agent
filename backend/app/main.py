from fastapi import FastAPI

app = FastAPI(
    title="AI Job Application Agent",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to AI Job Application Agent 🚀"
    }