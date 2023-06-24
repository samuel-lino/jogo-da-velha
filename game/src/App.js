import "./style.css"

function App() {
  return (
    <div className="App">
      <div className="interface">
        <h3 className="jogador J1">Jogador 1</h3>
        <h3 className="jogador J2">Jogador 2</h3>
        <h2>De quem é a vez:</h2>
        <h1 className="vez"> jogador 1</h1>
        <div className="matriz">
        <button className="btn id1"></button>
        <button className="btn id2"></button>
        <button className="btn id3"></button>
        <button className="btn id4"></button>
        <button className="btn id5"></button>
        <button className="btn id6"></button>
        <button className="btn id7"></button>
        <button className="btn id8"></button>
        <button className="btn id9"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
