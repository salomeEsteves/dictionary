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
        <p className="byline">🧑🏻‍💻 Coded by <a href="https://www.linkedin.com/in/salome-esteves/" target="_blank" rel="noreferrer" className="link-dark">Salomé Esteves</a>, open-sourced in <a href="https://github.com/salomeEsteves/dictionary/tree/main/src" target="_blank" rel="noreferrer" className="link-dark">Github</a> and hosted on <a href="https://monumental-tapioca-f1c1ef.netlify.app/" target="_blank" rel="noreferrer" className="link-dark">Netlify</a></p>
      </footer>
      </div>
    </div>
  );
}

export default App;
