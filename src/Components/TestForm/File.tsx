// @src/FileApp.tsx

import React, { useState } from "react";
import FileForm from "./Form";

type FormEvent = React.FormEvent<HTMLFormElement>;

const FileApp: React.FC = () => {
  const [state, setState] = useState("");
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ state });
  };
  return (
    // Hidden for simplicity
    <FileForm
      state={state}
      setState={setState}
      handleOnSubmit={handleOnSubmit}
      placeholder="Type some letters"
    />
  );
};

export default FileApp;
