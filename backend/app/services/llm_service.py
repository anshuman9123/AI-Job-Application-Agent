from langchain_google_genai import ChatGoogleGenerativeAI

from app.core.config import settings


llm = ChatGoogleGenerativeAI(
    model="gemini-3.1-flash-lite",
    google_api_key=settings.GEMINI_API_KEY,
    temperature=0.2,
)