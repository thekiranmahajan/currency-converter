const InputBox = () => {
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex ">
      <div className="w-1/2 flex flex-col">
        <label
          htmlFor="currencyName"
          className="text-black/40 mb-2 inline-block"
        >
          label
        </label>
        <input
          type="number"
          className="outline-none bg-transparent py-1.5
          "
          placeholder="Amount"
          min={0}
         
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          name="Currency Options"
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          <option value="usd">usd</option>
        </select>
      </div>
    </div>
  );
};

export default InputBox;
