import { Plugin } from 'obsidian';

export default class PdfSanitizerPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: 'sanitize-pdf-text',
      name: 'Sanitize PDF Text',
      editorCallback: (editor, view) => {
        const text = editor.getSelection();
        const cleaned = sanitizePdfText(text);
        editor.replaceSelection(cleaned);
      }
    });
  }
}

function sanitizePdfText(text: string): string {
  return text
    .replace(/[•‣]/g, '-')                      // Replace fancy bullets
    .replace(/\t/g, '  ')                        // Tabs → 2 spaces
    .replace(/([^\n])\n([^\n•‣\-\*\d])/g, '$1 $2') // Line breaks in mid-sentence → space
    .replace(/[ \t]+$/gm, '')                    // Trailing spaces
    .replace(/\n{3,}/g, '\n\n');                 // Collapse excessive empty lines
}