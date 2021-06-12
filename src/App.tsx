import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Footer/>
        </div>
    );
}

export default App;
