import { Outlet } from "react-router-dom";
import "./App.css";

import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <b>Welcome, Developer 👋</b>
        <Navigation />
      </header>
      <main className="App-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
