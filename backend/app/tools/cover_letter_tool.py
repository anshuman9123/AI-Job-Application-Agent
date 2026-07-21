from langchain_core.messages import HumanMessage

from app.prompts.cover_letter_prompt import COVER_LETTER_PROMPT
from app.services.llm_service import llm
from app.tools.base_tool import BaseTool


class CoverLetterTool(BaseTool):

    def execute(self, resume_text: str, job_description: str):
        prompt = f"""
{COVER_LETTER_PROMPT}

Resume:
{resume_text}

Job Description:
{job_description}
"""

        response = llm.invoke([HumanMessage(content=prompt)])

        return response.content