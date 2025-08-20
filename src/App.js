import './App.css';
import Dictionary from "./Dictionary.js"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1 className="question">What's the world you're looking for?</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <p className="byline">Coded by Salomé Esteves</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
