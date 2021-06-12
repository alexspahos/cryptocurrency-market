import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <Nav/>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Footer/>
            </Router>
        </div>
    );
}

function Home() {
    return <>home</>;
}
  
function About() {
    return <>about</>;
}

export default App;
