from app.tools.ats_tool import ATSTool
from app.tools.rewrite_tool import RewriteTool
from app.tools.cover_letter_tool import CoverLetterTool
from app.tools.export_tool import ExportTool


class ResumeAgent:
    ats_tool = ATSTool()
    rewrite_tool = RewriteTool()
    cover_letter_tool = CoverLetterTool()
    export_tool = ExportTool()



    @staticmethod
    def ats(resume_text: str, job_description: str):
        return ResumeAgent.ats_tool.execute(
            resume_text,
            job_description,
        )
    

    @staticmethod
    def rewrite(resume_text: str, job_description: str):
        return ResumeAgent.rewrite_tool.execute(
            resume_text,
            job_description,
        )


    @staticmethod
    def cover_letter(resume_text: str, job_description: str):
        return ResumeAgent.cover_letter_tool.execute(
            resume_text,
            job_description,
        )


    @staticmethod
    def export(resume_text: str):
        return ResumeAgent.export_tool.execute(resume_text)



    @staticmethod
    def generate_everything(resume_text: str, job_description: str):
        return {
            "ats": ResumeAgent.ats(
                resume_text,
                job_description,
            ),
            "rewrite": ResumeAgent.rewrite(
                resume_text,
                job_description,
            ),
            "cover_letter": ResumeAgent.cover_letter(
                resume_text,
                job_description,
            ),
        }