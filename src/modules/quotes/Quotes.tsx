import { useEffect, useState, useRef } from "react";
import { Container } from "./quotes.style";

const Quotes = () => {
  const quoteFetchInterval = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstRender = useRef(true);

  const [quote, setQuote] = useState({ content: "", author: "" });

  const fetchQuotes = async () => {
    const response = await fetch(
      "https://api.quotable.io/random?tags=inspirational"
    );
    const data = await response.json();
    setQuote({ author: data.author, content: data.content });
  };

  useEffect(() => {
    const timeInterval = 60000 * 60; // 60 minutes

    // if first render, fetch first quote immediately
    if (firstRender.current) {
      fetchQuotes();
      firstRender.current = false;
    }

    quoteFetchInterval.current = setInterval(() => fetchQuotes(), timeInterval);

    return () => {
      if (quoteFetchInterval.current) {
        clearInterval(quoteFetchInterval.current);
      }
    };
  }, []);

  if (!quote.content) return null;

  return (
    <Container className="appear-slow">
      <p className="text quote">{quote.content}</p>
      {quote.author && <p className="text author">- {quote.author}</p>}
    </Container>
  );
};

export default Quotes;
