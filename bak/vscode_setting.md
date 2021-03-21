eslint对应1.9.1
```json
{
  "workbench.colorTheme": "Default Light+",
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "liveServer.settings.donotShowInfoMsg": true,
  "terminal.integrated.shell.osx": "/bin/zsh",
  "editor.fontSize": 14,
  "window.zoomLevel": 0,
  "editor.renderIndentGuides": true,
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.wrappingIndent": "indent",
  "editor.autoIndent": "none",
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "javascript.preferences.quoteStyle": "single",
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "printWidth": 160,
      "tabWidth": 2,
      "semi": false,
      "singleQuote": true
    }
  },
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false, //格式化后函数后面不需要空格
  "eslint.autoFixOnSave": true,
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "md",
      "autoFix": true
    }
  ],
  "workbench.startupEditor": "welcomePage",
  "terminal.integrated.rendererType": "dom",
  "workbench.sideBar.location": "left",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.minimap.enabled": false,
  "leetcode.endpoint": "leetcode-cn",
  "leetcode.workspaceFolder": "/Users/liujianwei/Documents/personal_code/algorithm/src",
  "typescript.updateImportsOnFileMove.enabled": "never",
  "leetcode.defaultLanguage": "javascript",
  "leetcode.hint.configWebviewMarkdown": false,
  "leetcode.hint.commentDescription": false,
  "breadcrumbs.enabled": true,
  "editor.renderWhitespace": "none",
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "emmet.includeLanguages": {
    "wxml": "html",
    "javascript": "javascriptreact"
  },
  "minapp-vscode.disableAutoConfig": true,
  "javascript.format.semicolons": "remove",
  "typescript.format.semicolons": "remove",
  "eslint.migration.2_x": "off",
  "leetcode.hint.commandShortcut": false
}
```
