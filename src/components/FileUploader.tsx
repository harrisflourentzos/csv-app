import React, { useEffect, useRef } from "react";
import classes from "./FileUploader.module.css";

type Props = {};

function FileUploader({}: Props) {
  const inputFileRef = useRef<HTMLInputElement>(null);

  function onFileChangeCapture(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
  }

  function onBtnClick() {
    inputFileRef.current!.click();
  }

  return (
    <div className={classes.container}>
      <h1>Upload a CSV file below!</h1>
      <input
        type="file"
        ref={inputFileRef}
        onChange={onFileChangeCapture}
        hidden
      />
      <button onClick={onBtnClick}>Select CSV</button>
    </div>
  );
}

export default FileUploader;
