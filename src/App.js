import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Map from './components/Map'
import Header from './components/Header'
import Manager from './components/Manager';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Map />
          </Route>
          <Route path="/manage">
            <Manager />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
