import React from "react";
import { useEffect, useState} from "react";

function Quote(props) {
  
  let today = new Date();
  let todayDay = today.toLocaleString("default", { weekday: "long" })
  let todayDate = today.getDate();
  let todayMonth = today.getMonth() + 1 ;   // For API Call
  let todayMonthWords = today.toLocaleString('default', { month: 'long' });
  let todayYear= today.getFullYear();

  let [quote, setQuote] = useState({})

  useEffect (() => { getQuote() }, [])

  // Gets Quote
  const getQuote = async () => {
    const response = await fetch(`https://api.goprogram.ai/inspiration`, { method: "GET"})
    let quoteFound = await response.json()
    setQuote(quoteFound)
  }

  return (
    <div className='daily-quote' >
      <h4>{todayDay}, {todayDate} {todayMonthWords} {todayYear}</h4>
      <hr />
      <p id="quote">{quote.quote}</p>
      <p id="author"> <em>{quote.author} </em> </p>
    </div>
  );
}

export default Quote;
