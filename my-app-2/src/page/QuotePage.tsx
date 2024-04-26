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
      <h1>INI QUOTE PAGE</h1>
    </>
  );
}
export default QuotePage;
