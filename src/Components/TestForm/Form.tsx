// @src/components/Form.tsx

import React, { ChangeEvent, FormEvent } from "react";

type SubmitEvent = FormEvent<HTMLFormElement>;
type InputEvent = ChangeEvent<HTMLInputElement>;

type Props = {
  state: string;
  setState: (val: string) => void;
  handleOnSubmit: (e: SubmitEvent) => void;
  placeholder: string;
};

const FileForm: React.FC<Props> = ({
  state,
  setState,
  handleOnSubmit,
  placeholder,
}) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={state}
        onChange={(e: InputEvent) => setState(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileForm;
