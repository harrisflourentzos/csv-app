import React from "react";
import "./App.css";
import Header from "./components/Header";
import FileUploader from "./components/FileUploader";
import FileCollection from "./components/FileCollection";
import FileViewer from "./components/FileViewer";

function App() {
  return (
    <div className="App">
      <Header />
      <FileUploader />
      <FileCollection />
      <FileViewer />
    </div>
  );
}

export default App;
