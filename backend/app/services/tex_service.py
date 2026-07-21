def create_tex(content: str, output_path: str):
    latex = f"""
\\documentclass{{article}}

\\usepackage[margin=1in]{{geometry}}

\\begin{{document}}

{content}

\\end{{document}}
"""

    with open(output_path, "w", encoding="utf-8") as file:
        file.write(latex)

    return output_path