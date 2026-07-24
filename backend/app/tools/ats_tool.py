import json
from langchain_core.messages import HumanMessage

from app.prompts.ats_prompt import ATS_PROMPT
from app.services.llm_service import llm
from app.tools.base_tool import BaseTool


class ATSTool(BaseTool):

    def execute(self, resume_text: str, job_description: str):
        prompt = f"""
{ATS_PROMPT}

Resume:
{resume_text}

Job Description:
{job_description}
"""

        response = llm.invoke([HumanMessage(content=prompt)])

        content = response.content

        if isinstance(content, list):
            content = content[0]["text"]

        content = (
            content.replace("```json", "")
            .replace("```", "")
            .strip()
        )

        return json.loads(content)