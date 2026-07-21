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
        print("Response:", response)
        print("Content:", repr(response.content))
        print("Content type:", type(response.content))



        if isinstance(response.content, list):
            return response.content[0]["text"]


        return response.content