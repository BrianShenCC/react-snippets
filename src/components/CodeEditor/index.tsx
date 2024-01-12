"use client";

import { Editor, Monaco } from "@monaco-editor/react";
import { FC } from "react";
import { CodeDetail } from "../../types/common";

export const CodeEditor: FC<CodeDetail> = ({ path, code }) => {
  function handleEditorWillMount(monaco: Monaco) {
    // Client-side-only code
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ESNext,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.ESNext,
      allowNonTsExtensions: true,
      allowJs: true,
      jsx: monaco.languages.typescript.JsxEmit.React,
      experimentalDecorators: true,
      noEmit: true,
      typeRoots: ["node_modules/@types"],
    });
  }

  return (
    <Editor
      height="70vh"
      defaultLanguage={path.endsWith(".css") ? "css" : "typescript"}
      defaultValue={code}
      options={{ readOnly: true }}
      beforeMount={handleEditorWillMount}
    />
  );
};
