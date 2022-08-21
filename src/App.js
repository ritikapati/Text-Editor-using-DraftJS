import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";




const App = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  return (
    <div className="App">
      <header className="App-header">
        Rich Text Editor Example
      </header>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  )
}
export default App;