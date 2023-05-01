import React from "react";
import Header from "./components/Header";
import FileUploader from "./components/FileUploader";
import FileViewer from "./components/FileViewer";

function App() {
  return (
    <>
      <Header />
      <main>
        <FileUploader />
        <FileViewer />
      </main>
    </>
  );
}

export default App;
