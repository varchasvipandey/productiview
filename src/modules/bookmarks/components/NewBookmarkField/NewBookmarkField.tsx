import { useRef } from 'react';
import { TextField } from 'components';
import { useData } from 'data';
import shallow from 'zustand/shallow';

const NewBookmarkField = () => {
  const inputValue = useRef<HTMLInputElement | null>(null);
  const [addBookmark, bookmarks] = useData(
    (state) => [state.addBookmark, state.bookmarks],
    shallow
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBookmark = inputValue.current?.value;
    if (newBookmark && inputValue?.current) {
      addBookmark(newBookmark);
      inputValue.current.value = '';
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextField
        aria-label="input new bookmark"
        placeholder="Enter bookmark link"
        ref={inputValue}
        autoFocus
      />
    </form>
  );
};

export default NewBookmarkField;
