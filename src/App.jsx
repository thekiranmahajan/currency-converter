import { InputBox } from "./components";

const App = () => {
  return (
    <>
      <div className="bg-currency-notes  bg-cover h-screen w-full overflow-hidden font-montserrat flex items-center justify-center">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-xs bg-white/30">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full mb-1">
              <InputBox label="From" />
            </div>
            <div>
              <button
                type="button"
                className="absolute text-center left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 flex items-center justify-center text-white px-2 py-2"
              >
                <span className="material-symbols-outlined">swap_vert</span>
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-4 rounded-lg"
            >
              Convert to
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
