import { useRef } from "react";
import { TextField } from "components";
import { useData } from "data";
import shallow from "zustand/shallow";
import { Container } from "./newBookmarkField.style";

const NewBookmarkField = () => {
  const inputLinkValue = useRef<HTMLInputElement | null>(null);
  const inputLabelValue = useRef<HTMLInputElement | null>(null);
  const [addBookmark] = useData((state) => [state.addBookmark], shallow);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBookmark = inputLinkValue.current?.value;
    if (newBookmark && inputLinkValue?.current) {
      const newBookmarkLabel = inputLabelValue.current?.value;
      console.log({ newBookmark, newBookmarkLabel });
      addBookmark(newBookmark, newBookmarkLabel);
      inputLinkValue.current.value = "";
      if (inputLabelValue.current) inputLabelValue.current.value = "";
    }
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
      <div className="field">
        <TextField
          aria-label="input new bookmark"
          placeholder="Enter bookmark link"
          ref={inputLinkValue}
          autoFocus
        />
      </div>

      <div className="field">
        <TextField
          aria-label="input bookmark title"
          placeholder="Enter bookmark title"
          ref={inputLabelValue}
        />
      </div>

      <button type="submit"></button>
    </Container>
  );
};

export default NewBookmarkField;
