import logo from './logo.svg';
import './App.css';
import { simulateCalculations } from "./helpers/simulateCalcuations"

function App() {
  simulateCalculations()
  return (
    <div>
      hello world
    </div>
  );
}

export default App;
