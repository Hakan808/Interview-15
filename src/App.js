import React, { useState, useEffect } from "react";

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  // KODUNUZ BURAYA GELECEK
  const [text, setText] = useState("");
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    setDisplayed([]);

    if (!text) return;

    const words = text.split(" ");

    const interval = setInterval(() => {
      setDisplayed((prev) => [...prev, words[prev.length]]);
    }, 500);

    if (displayed.length + 1 >= words.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [text]);
  return (
    <div className="flex flex-col gap-6 w-screen h-screen justify-center items-center ">
      <div className="p-3 bg-red-500 border border-2  shadow-xl bo " >
        <div className="flex flex-col justify-center items-center gap-6 shadow shadow-red-500 p-5 border border-black  bg-red-500 text-white font-semibold">
          <form>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border border-black border-2 px-2 py-1 shadow shadow-red-500 text-black"
            />
          </form>
          <div>{displayed.join(" ")}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
