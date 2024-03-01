import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  const addQuoteHander = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHander} />
  );
};
export default NewQuote;
