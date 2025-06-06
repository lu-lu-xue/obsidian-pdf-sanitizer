/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => PdfSanitizerPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var PdfSanitizerPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.addCommand({
      id: "sanitize-pdf-text",
      name: "Sanitize PDF Text",
      editorCallback: (editor, view) => {
        const text = editor.getSelection();
        const cleaned = sanitizePdfText(text);
        editor.replaceSelection(cleaned);
      }
    });
  }
};
function sanitizePdfText(text) {
  return text.replace(/[•‣]/g, "-").replace(/\t/g, "  ").replace(/([^\n])\n([^\n•‣\-\*\d])/g, "$1 $2").replace(/[ \t]+$/gm, "").replace(/\n{3,}/g, "\n\n");
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZGZTYW5pdGl6ZXJQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc2FuaXRpemUtcGRmLXRleHQnLFxuICAgICAgbmFtZTogJ1Nhbml0aXplIFBERiBUZXh0JyxcbiAgICAgIGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yLCB2aWV3KSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWQgPSBzYW5pdGl6ZVBkZlRleHQodGV4dCk7XG4gICAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGNsZWFuZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplUGRmVGV4dCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdGV4dFxuICAgIC5yZXBsYWNlKC9bXHUyMDIyXHUyMDIzXS9nLCAnLScpICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgZmFuY3kgYnVsbGV0c1xuICAgIC5yZXBsYWNlKC9cXHQvZywgJyAgJykgICAgICAgICAgICAgICAgICAgICAgICAvLyBUYWJzIFx1MjE5MiAyIHNwYWNlc1xuICAgIC5yZXBsYWNlKC8oW15cXG5dKVxcbihbXlxcblx1MjAyMlx1MjAyM1xcLVxcKlxcZF0pL2csICckMSAkMicpIC8vIExpbmUgYnJlYWtzIGluIG1pZC1zZW50ZW5jZSBcdTIxOTIgc3BhY2VcbiAgICAucmVwbGFjZSgvWyBcXHRdKyQvZ20sICcnKSAgICAgICAgICAgICAgICAgICAgLy8gVHJhaWxpbmcgc3BhY2VzXG4gICAgLnJlcGxhY2UoL1xcbnszLH0vZywgJ1xcblxcbicpOyAgICAgICAgICAgICAgICAgLy8gQ29sbGFwc2UgZXhjZXNzaXZlIGVtcHR5IGxpbmVzXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUF1QjtBQUV2QixJQUFxQixxQkFBckIsY0FBZ0QsdUJBQU87QUFBQSxFQUNyRCxNQUFNLFNBQVM7QUFDYixTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGdCQUFnQixDQUFDLFFBQVEsU0FBUztBQUNoQyxjQUFNLE9BQU8sT0FBTyxhQUFhO0FBQ2pDLGNBQU0sVUFBVSxnQkFBZ0IsSUFBSTtBQUNwQyxlQUFPLGlCQUFpQixPQUFPO0FBQUEsTUFDakM7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0Y7QUFFQSxTQUFTLGdCQUFnQixNQUFzQjtBQUM3QyxTQUFPLEtBQ0osUUFBUSxTQUFTLEdBQUcsRUFDcEIsUUFBUSxPQUFPLElBQUksRUFDbkIsUUFBUSw2QkFBNkIsT0FBTyxFQUM1QyxRQUFRLGFBQWEsRUFBRSxFQUN2QixRQUFRLFdBQVcsTUFBTTtBQUM5QjsiLAogICJuYW1lcyI6IFtdCn0K
