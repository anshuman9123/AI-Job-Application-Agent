from docx import Document


def create_docx(content: str, output_path: str):
    document = Document()

    for line in content.split("\n"):
        document.add_paragraph(line)

    document.save(output_path)

    return output_path