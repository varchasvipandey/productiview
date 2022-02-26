import { useState, useCallback } from 'react';
import { TextField, Container } from './googleSearch.style';
import googleIcon from 'assets/images/google-icon.svg';
import { isURL } from './utils';
// import { useCache } from 'cache';
import { SearchHistory } from './components';

const GoogleSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  // const addSearchTerm = useCache((state) => state.addSearchTerm);

  const handleSearch = useCallback(
    (focusedTerm?: string) => {
      if (!searchTerm && !focusedTerm) return;

      const term = focusedTerm || searchTerm;

      // add to cache
      // addSearchTerm(term);

      // Check if the search term is a URL
      let isTermUrl = isURL(term);

      if (!isTermUrl) window.location.href = `https://www.google.com/search?q=${term}`;
      else {
        if (term.includes('http')) window.location.href = term;
        else window.location.href = `https://${term}`;
      }
    },
    [searchTerm]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSearch();
    },
    [handleSearch]
  );

  const handleToggleShowHistory = () => setShowHistory((prev) => !prev);

  return (
    <Container className="appear-slow">
      <form onSubmit={handleSubmit}>
        {/* // TODO: Work on this feature accessiblity */}
        {false && showHistory && (
          <SearchHistory
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleToggleShowHistory={handleToggleShowHistory}
            handleSearch={handleSearch}
          />
        )}
        <TextField
          placeholder="Search Google or type a URL"
          className="glass-inverted"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          tabIndex={1}
          onClick={() => setShowHistory(true)}
          autoFocus
        />
      </form>
      <img src={googleIcon} alt="Google.com" className="google-icon" />
    </Container>
  );
};

export default GoogleSearch;
