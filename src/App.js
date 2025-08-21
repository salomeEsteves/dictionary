import './App.css';
import Dictionary from "./Dictionary.js"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1 className="question">So you're looking for the meaning of...?</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="life"/>
      </main>
      <footer>
        <p className="byline">Coded by Salomé Esteves</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
