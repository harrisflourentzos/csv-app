import React from "react";
import Header from "./components/Header";
import FileUploader from "./components/FileUploader";
import FileCollection from "./components/FileCollection";
import FileViewer from "./components/FileViewer";

function App() {
  return (
    <>
      <Header />
      <main>
        <FileUploader />
        <FileCollection />
        <FileViewer />
      </main>
    </>
  );
}

export default App;
