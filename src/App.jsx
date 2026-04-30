import { useState, useEffect } from "react"

function App() {
  const [input, setInput] = useState("")

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;

      if
      ("0123456789+-*/=.".includes(key)) {
        setInput((prev) => prev + key);
      }

      if (key === "Enter") {
        calculate();
      }

      if (key === "Backspace") {
        deleteOne();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

      return () => {

        window.removeEventListener("keydown", handleKeyPress);
      };
  }, []);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {

      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput ("");
  };

  const deleteOne = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
      }}
    >
      <h1>ADETOLA</h1>
      <div
        style={{
          background: "#222",
          padding: "20px",
          borderRadius: "10px",
          width: "250px",
      }}
      >
        <input 
          type="text" 
          value={input}
          readOnly
          style={{
            width: "100%",
            height: "50px",
            marginBottom: "10px",
            fontSize: "20px",
            textAlign: "right",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("00")}>00</button>
          <button onClick={() => handleClick("-")}>-</button>       
          

          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("*")}>X</button>

          <button onClick={deleteOne}>DEL</button>
          <button type="button" onClick={clear}>C</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  )
}

export default App