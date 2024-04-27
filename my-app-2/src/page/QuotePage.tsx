import { useState } from "react";
interface QuoteRandom {
  text: string;
  author: string;
}
const URL = "https://library-crud-sample.vercel.app/api/user/login";

function QuotePage() {
  const [quote, setQuote] = useState<QuoteRandom>({ text: "", author: "" });
  return (
    <>
      <h1>
        Allah never created something without any reason, ask Allah everything,
        and Allah will answer, united yourself with the universe, pay attention
        with the vibration and frequencies
      </h1>
    </>
  );
}
export default QuotePage;
