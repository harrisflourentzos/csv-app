import React, { useRef, useState } from "react";
import classes from "./FileUploader.module.css";
import { CsvMetadata } from "../model/CsvMetadata";
import { saveCsv } from "../api/DotNetApi";

type Props = { onFileUpdloaded: (metadata: CsvMetadata) => void };

function FileUploader({ onFileUpdloaded }: Props) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>();
  const [fileContent, setFileContent] = useState<string>();

  const [error, setError] = useState<string>();

  function onFileChangeCapture(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);

      const reader = new FileReader();
      reader.readAsText(e.target.files[0], "UTF-8");

      reader.onloadend = (readerEvent: ProgressEvent<FileReader>) => {
        if (readerEvent?.target?.result) {
          setFileContent(readerEvent.target.result.toString());
        }
      };
    }
  }

  function onSelectFile() {
    inputFileRef.current!.click();
  }

  function onCancelUpload() {
    resetStates();
  }

  function resetStates() {
    setFileName("");
    setFileContent("");
    setError("");
  }

  async function onUploadFile() {
    try {
      if (fileName && fileContent) {
        const response = await saveCsv(fileName, fileContent);
        onFileUpdloaded(response);
        resetStates();
      }
    } catch (e) {
      setError((e as Error).message);
    }
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
      {!(fileName && fileContent) && (
        <button className={classes.actionButton} onClick={onSelectFile}>
          Select CSV
        </button>
      )}
      {fileName && fileContent && (
        <div>
          <button className={classes.actionButton} onClick={onUploadFile}>
            Upload {fileName}
          </button>
          <button className={classes.cancelButton} onClick={onCancelUpload}>
            Cancel
          </button>
        </div>
      )}
      {error && <p className={classes.errorText}>{error}</p>}
    </div>
  );
}

export default FileUploader;
