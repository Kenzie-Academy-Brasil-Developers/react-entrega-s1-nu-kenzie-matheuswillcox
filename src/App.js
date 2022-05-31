import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";


function App() {
  
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {isLogged ? <Dashboard/> : <Home setIsLogged={setIsLogged} />}
      </header>
    </div>
  );
}

export default App;
