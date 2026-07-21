from langchain_core.messages import HumanMessage

from app.prompts.rewrite_prompt import REWRITE_PROMPT
from app.services.llm_service import llm
from app.tools.base_tool import BaseTool


class RewriteTool(BaseTool):

    def execute(self, resume_text: str, job_description: str):
        prompt = f"""
{REWRITE_PROMPT}

Resume:
{resume_text}

Job Description:
{job_description}
"""

        response = llm.invoke([HumanMessage(content=prompt)])

        print("FULL RESPONSE:", response)
        print("CONTENT:", response.content)
        print("TYPE:", type(response.content))

        return response

        return response.content