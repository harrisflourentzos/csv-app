import React, { useState } from "react";
import Header from "./components/Header";
import FileUploader from "./components/FileUploader";
import FileViewer from "./components/FileViewer";
import { CsvMetadata } from "./model/CsvMetadata";

function App() {
  const [metadata, setMetadata] = useState<CsvMetadata>();

  function onFileUploadedHandler(metadata: CsvMetadata) {
    setMetadata(metadata);
  }

  return (
    <>
      <Header />
      <main>
        <FileUploader onFileUpdloaded={onFileUploadedHandler} />
        {metadata && <FileViewer csvId={metadata.id} />}
      </main>
    </>
  );
}

export default App;
