import "./App.css";

import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <b>Welcome, Developer 👋</b>
        <Navigation />
      </header>
      <main className="App-content">This is the Home page 🪐</main>
    </div>
  );
}

export default App;
