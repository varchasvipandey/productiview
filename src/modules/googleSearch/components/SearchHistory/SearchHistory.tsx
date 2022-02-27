import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useCache } from 'cache';
import { Container } from './searchHistory.style';

interface SearchHistoryProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleToggleShowHistory: () => void;
  handleSearch: (focusedTerm?: string) => void;
}

const SearchHistory = ({
  searchTerm,
  setSearchTerm,
  handleToggleShowHistory,
  handleSearch
}: SearchHistoryProps) => {
  const historyDiv = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(true);
  const [focusedTerm, setFocusedTerm] = useState('');

  const searches = useCache((state) => state.searches);

  const handleSearchItemFocus = (search: string) => setFocusedTerm(search);

  const handleSearchItemClick = () => {
    handleToggleShowHistory();
    handleSearch();
  };

  const handleOutSideClick = (e: MouseEvent) => {
    const elem = historyDiv.current;
    if (!elem || !e) return;
    // @ts-ignore - assigned event to node type
    if (!elem.contains(e.target)) {
      setExpanded(false);
      handleToggleShowHistory();
    }
  };

  const handleFocusedChild = useCallback((e: KeyboardEvent) => {
    // const elem = historyDiv.current;
    // if (!elem || !e) return
    // console.log(e.key);
    if (e.key === 'Enter' && focusedTerm) {
      // console.log('Search');
      handleSearch(focusedTerm);
    }
  }, []);

  useEffect(() => {
    const addListeners = () => {
      document.addEventListener('click', handleOutSideClick);
      document.addEventListener('keypress', handleFocusedChild);
    };

    const removeListeners = () => {
      document.removeEventListener('click', handleOutSideClick);
      document.removeEventListener('keypress', handleFocusedChild);
    };

    if (expanded) addListeners();
    else removeListeners();
    return () => removeListeners();
  }, [expanded]);

  if (!expanded) return null;
  if (!searchTerm?.length || !searches?.length) return null;
  return (
    <Container ref={historyDiv}>
      {searches.map(
        (searchItem, index) =>
          index <= 4 && (
            <div
              className="search-item"
              key={searchItem.id}
              onFocus={() => handleSearchItemFocus(searchItem.searchTerm)}
              onClick={handleSearchItemClick}
            >
              <div className="search-item__info">
                <div className="search-item__info__time"></div>
                <p className="search-item__info__term">{searchItem.searchTerm}</p>
              </div>
              <div className="search-item__cta-delete"></div>
            </div>
          )
      )}
    </Container>
  );
};

export default SearchHistory;
