import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import CKEditorInspector from "@ckeditor/ckeditor5-inspector";

import IframeEmbed from "../src/iframeembed";

ClassicEditor.create(document.querySelector("#editor"), {
  plugins: [Essentials, Paragraph, Bold, Italic, IframeEmbed],
  toolbar: ["bold", "italic", "iframeEmbed"],
  iframeEmbed: {
    showPreviews: true
  }
})
  .then((editor) => {
    console.log("Editor was initialized", editor);
    window.editor = editor;
    CKEditorInspector.attach(editor);
  })
  .catch((error) => {
    console.error(error);
    console.error(error.stack);
  });
