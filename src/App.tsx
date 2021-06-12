import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Coin } from './pages/Coin';

function App() {
    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route exact path="/" component = { Home } />
                    <Route path="/home" component = { Home } />
                    <Route path="/coin" component = { Coin } />
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}
  
export default App;