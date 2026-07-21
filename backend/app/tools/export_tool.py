from langchain_core.messages import HumanMessage

from app.prompts.export_prompt import EXPORT_PROMPT
from app.services.llm_service import llm
from app.tools.base_tool import BaseTool


class ExportTool(BaseTool):

    def execute(self, resume_text: str, job_description: str = ""):
        prompt = f"""
{EXPORT_PROMPT}

Resume:
{resume_text}
"""

        response = llm.invoke([HumanMessage(content=prompt)])

        return response.content