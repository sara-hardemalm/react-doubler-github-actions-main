import { useState } from "react";
import { doubleNumber } from "./doubleNumber.js";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (number === "") {
      setResult(null);
      return;
    }

    setResult(doubleNumber(Number(number)));
  }

  function handleChange(event) {
    setNumber(event.target.value);
    setResult(null);
  }

  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">En enkel React-app</p>
        <h1>Dubbleraren</h1>
        <p>Skriv ett tal så multiplicerar appen det med två.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Skriv ett tal</label>
          <input
            id="number"
            type="number"
            step="any"
            value={number}
            onChange={handleChange}
          />
          <button type="submit">Dubblera</button>
        </form>

        <div className="result" aria-live="polite">
          <span>Resultat</span>
          <strong>{result ?? "-"}</strong>
        </div>
      </section>
    </main>
  );
}

export default App;

