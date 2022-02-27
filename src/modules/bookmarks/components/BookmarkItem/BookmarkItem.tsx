import { Container } from "./bookmarkItem.style";
import { Bookmark } from "data";
import { memo } from "react";

interface BookmarkItemProps {
  bookmark: Bookmark;
}

const BookmarkItem = ({ bookmark }: BookmarkItemProps) => {
  let url = bookmark.url;
  if (!url.includes("http")) url = `https://${url}`;

  return (
    <Container title={url}>
      <a href={url} target="_blank" rel="noreferrer">
        <img
          src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`}
          alt={url}
          loading="lazy"
        />
      </a>
    </Container>
  );
};

export default memo(BookmarkItem);
