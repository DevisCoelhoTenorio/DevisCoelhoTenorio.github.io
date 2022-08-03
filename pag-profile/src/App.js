import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from '../pages/home'

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
      <Home />
      </Router>
    </div>
  );
}

export default App;
