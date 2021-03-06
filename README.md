# CKEditor 5 iframe feature &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/iframe/ckeditor5-iframe/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/ckeditor5-iframe.svg?style=flat)](https://www.npmjs.com/package/ckeditor5-iframe)

ckeditor5-iframe is based on CKEditor 5's [HTML
embed](https://ckeditor.com/docs/ckeditor5/latest/features/iframe-embed.html)
[Plugin](https://ckeditor.com/docs/ckeditor5/latest/api/module_iframe-embed_iframeembed-IframeEmbed.html) ([NPM](https://www.npmjs.com/package/@ckeditor/ckeditor5-iframe-embed))

Renders links to `<iframe src="...">`

![ckeditor5-iframe in a classic build.](/screenshots/1.png?raw=true "ckeditor5-iframe in a classic build")

## Table of contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Input format](#input-format)
- [Development](#development)
- [Credits](#credits)

## Installation

via npm:

`npm install ckeditor5-iframe --save-dev`

via yarn:

`yarn install ckeditor5-iframe --dev`

## Configuration

In your editor build / configuration:

```js
import IframeEmbed from "ckeditor5-iframe/src/iframeembed";

ClassicEditor.create(document.querySelector("#editor"), {
  plugins: [Essentials, Paragraph, Bold, Italic, IframeEmbed],
  toolbar: ["bold", "italic", "iframeEmbed"],
});
```

### Show previews

![Preview option](/screenshots/preview.png?raw=true "Screenshot of the in-editor
preview")

Passing `true` to `iframeEmbed.showPreviews` will enable previewing.

```js
import IframeEmbed from "ckeditor5-iframe/src/iframeembed";

ClassicEditor.create(document.querySelector("#editor"), {
  plugins: [Essentials, Paragraph, Bold, Italic, IframeEmbed],
  toolbar: ["bold", "italic", "iframeEmbed"],
  iframeEmbed: {
    showPreviews: true,
  },
});
```

The minimum dimensions are tweakable via [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) `--ck-iframe-embed-content-min-height` and `--ck-iframe-embed-content-min-width`.

## Input format

```html
<figure class="iframe-embed">
  <iframe src="https://www.google.com">
</figure>
```

## Development

To boot up a development loop, clone the repo, install the packages via `yarn`, `yarn start` and go to http://localhost:8080

![Dev environment](/screenshots/dev.png?raw=true "Screenshot of dev environment")

From here, you can customize `demo/`'s `app.js` and `index.html` as well as
files inside `src/` (the plugin code itself) and files will be automatically
rebuilt. You still may need to refresh.

The `window.editor` can access the
[`ClassicEditor`](https://ckeditor.com/docs/ckeditor5/latest/api/module_editor-classic_classiceditor-ClassicEditor.html) object, e.g. `editor.getData()` can retrieve the output HTML.

### Credits

Icon: https://iconify.design/icon-sets/mdi/iframe.html, Open Font License
