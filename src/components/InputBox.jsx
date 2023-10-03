import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const handleFocus = (event) => {
    event.target.select();
  };
  const amountInputId = useId();
  return (
    <div
      className={` bg-gray-800  text-white p-5 sm:py-4 rounded-lg text-sm flex ${className}`}
    >
      <div className="w-1/2 flex flex-col">
        <label
          htmlFor={amountInputId}
          className="text-white mb-2 inline-block font-semibold"
        >
          {label}
        </label>
        <input
          onFocus={handleFocus}
          id={amountInputId}
          type="number"
          className="outline-none bg-transparent py-2 px-1 rounded-sm"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2  flex flex-wrap justify-end text-right">
        <p className="text-white mb-4 sm:mb-2 text-center  w-full">
          Currency Type
        </p>
        <select
          name="Currency Options"
          className="w-16 sm:w-[60%] rounded-lg sm:py-0 px-1 py-1 bg-gray-600 cursor-pointer outline-none no-scrollbar overflow-y-auto "
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option className="" key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
