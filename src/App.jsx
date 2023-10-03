import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className=" selection:bg-purple-600 selection:text-white bg-currency-notes   bg-cover bg-no-repeat h-screen w-full overflow-hidden font-montserrat flex items-center justify-center">
        <div className="w-full max-w-md mx-auto border border-slate-800 rounded-md p-3 sm:p-8 backdrop-blur-xs bg-gray-500/70">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                className="absolute text-center border-2 border-gray-300 rounded-md bg-orange-400
                active:bg-orange-500  flex items-center justify-center text-white px-1 py-1 sm:px-6 sm:py-2 active:scale-95 transform transition-transform duration-200 hover:scale-105 ease-in-out focus:ring-2 sm:focus:ring-4 focus:outline-none focus:ring-purple-500"
                onClick={swap}
              >
                <span
                  className="font-semibold transform transition-transform active:-rotate-180 hover:rotate-90 duration-200
                material-symbols-outlined"
                >
                  swap_vert
                </span>
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-fit sm:w-full bg-purple-600 text-white sm:px-16 text-sm sm:text-base py-4 px-6 rounded-lg active:scale-95 transform transition-transform duration-200 hover:scale-105 ease-in-out focus:ring-4 focus:outline-none active:bg-purple-800 focus:ring-orange-400"
                onClick={convert}
              >
                Convert{" "}
                <span className="  font-semibold">{from.toUpperCase()}</span> to{" "}
                <span className=" font-semibold ">{to.toUpperCase()}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
