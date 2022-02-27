import { Container } from "./bookmarkListItem.style";
import { getIcon } from "icons";
import { useData, Bookmark } from "data";
import { shortenTextLength } from "utils";
import { memo } from "react";

interface BookmarkListItemProps {
  bookmark: Bookmark;
}

const DeleteIcon = getIcon("close");

const BookmarkListItem = ({ bookmark }: BookmarkListItemProps) => {
  const removeBookmark = useData((state) => state.removeBookmark);

  let url = bookmark.url;
  if (!url.includes("http")) url = `https://${url}`;

  const handleRemoveBookmark = () => removeBookmark(bookmark.id);

  const handleBookmarkClick = () => window.open(url);

  return (
    <Container>
      <div className="bookmark" onClick={handleBookmarkClick} title={url}>
        <div className="bookmark__icon">
          <img
            src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`}
            alt={url}
            loading="lazy"
          />
        </div>
        <p className="bookmark__url">{shortenTextLength(url, 24, true)}</p>
      </div>
      <div className="cta-delete" title="Remove bookmark">
        <button
          aria-label={`remove ${url}`}
          className="flex-center-col"
          onClick={handleRemoveBookmark}
        >
          <DeleteIcon />
        </button>
      </div>
    </Container>
  );
};

export default memo(BookmarkListItem);
