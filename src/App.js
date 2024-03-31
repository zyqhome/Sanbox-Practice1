import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Myself</h1>
      <h2>No Magic</h2>
      <div id="loading">loading</div>
      <div id="square1"> </div>
      <div id="spin-outer">
        <div id="spin-inner"></div>
      </div>

      <div id="pulse1">This is pulse one</div>
      <button onClick={alert("Hello")}>Click me</button>
    </div>
  );
}
