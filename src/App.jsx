import InputBox from "./components/InputBox";

const App = () => {
  return (
    <>
      <div className="bg-currency-notes  bg-cover h-screen w-full overflow-hidden font-montserrat flex items-center justify-center">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-xs bg-white/30">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full mb-1">
              <InputBox />
            </div>
            <div>
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
