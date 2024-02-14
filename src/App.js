import './App.css';
import Loginpage from './molecules/Loginpage'; // Corrected import statement with capital "L" in "Loginpage"
import waves from "./images/waves.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loginpage /> {/* Rendering the Loginpage component */}
      </header>
    </div>
  );
}

export default App;

