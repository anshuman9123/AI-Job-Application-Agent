from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet


def create_pdf(content: str, output_path: str):
    styles = getSampleStyleSheet()

    document = SimpleDocTemplate(output_path)

    elements = []

    for line in content.split("\n"):
        elements.append(Paragraph(line, styles["BodyText"]))

    document.build(elements)

    return output_path