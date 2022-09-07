import './App.css';
import Dogs from "./components/Dogs/Dogs";
import { Route, Router, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
        <Route path="/" exact component={Dogs} />
    </div>
  );
}

export default App;
