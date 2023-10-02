import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response[currency]));
    console.log(data);
  }, [currency]);
};

export default useCurrencyInfo;
