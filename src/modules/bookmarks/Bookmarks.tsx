import { useState, useRef, useEffect } from 'react';
import { BookmarkItem, BookmarkListItem, NewBookmarkField } from './components';
import { Container } from './bookmark.style';
import { useData } from 'data';
import { getIcon } from 'icons';
import { useEffectOnOutsideClick } from 'hooks/useEffectOnOutsideClick';

const ArrowIcon = getIcon('downCircularArror');

const Bookmarks = () => {
  const expandedMenu = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const bookmarks = useData((state) => state.bookmarks);

  const handleExpand = () => setExpanded((prev) => !prev);

  const handleOutSideClick = (e: MouseEvent) => {
    const elem = expandedMenu.current;
    if (!elem || !e) return;
    // @ts-ignore - assigned event to node type
    if (!elem.contains(e.target)) setExpanded(false);
  };

  useEffect(() => {
    if (expanded) document.addEventListener('click', handleOutSideClick);
    else document.removeEventListener('click', handleOutSideClick);
    return () => document.removeEventListener('click', handleOutSideClick);
  }, [expanded]);

  return (
    <Container expanded={expanded}>
      <>
        <div className="tray">
          {!!bookmarks?.length ? (
            <div className="tray__bookmark-list">
              {bookmarks.map((bookmark, index) =>
                index <= 2 ? <BookmarkItem key={bookmark.id} bookmark={bookmark} /> : null
              )}
            </div>
          ) : (
            <p className="tray__empty-text" onClick={handleExpand}>
              Bookmarks
            </p>
          )}

          <div className="tray__cta-more" onMouseEnter={() => setExpanded(true)}>
            <button aria-label="bookmark options" onClick={handleExpand}>
              <ArrowIcon />
            </button>
          </div>
        </div>

        {expanded && (
          <div
            className="menu glass-inverted"
            ref={expandedMenu}
            onMouseLeave={() => setExpanded(false)}>
            {!!bookmarks?.length && (
              <div className="menu__bookmark-list">
                {bookmarks.map((bookmark) => (
                  <BookmarkListItem key={bookmark.id} bookmark={bookmark} />
                ))}
              </div>
            )}

            <div className="menu__add">
              <NewBookmarkField />
            </div>
          </div>
        )}
      </>
    </Container>
  );
};

export default Bookmarks;
