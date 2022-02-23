import { useRef } from 'react';
import { TextField, Container } from './googleSearch.style';
import googleIcon from 'assets/images/google-icon.svg';
import { isURL } from './utils';
import { useCache } from 'cache';
import shallow from 'zustand/shallow';
import { SearchHistory } from './components';

const GoogleSearch = () => {
  const inputValue = useRef<HTMLInputElement | null>(null);
  const [addSearchTerm] = useCache((state) => [state.addSearchTerm], shallow);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = inputValue.current?.value;
    if (!searchTerm) return;

    // add to cache
    addSearchTerm(searchTerm);

    // Check if the search term is a URL
    let isTermUrl = isURL(searchTerm);

    if (!isTermUrl) window.location.href = `https://www.google.com/search?q=${searchTerm}`;
    else window.location.href = searchTerm;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Search Google or type a URL"
          className="glass-inverted"
          ref={inputValue}
          autoFocus
        />
      </form>
      <SearchHistory />
      <img src={googleIcon} alt="Google.com" className="google-icon" />
    </Container>
  );
};

export default GoogleSearch;
