// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (<main>
  <div>
        <div className="navbar">
            <a href='/' className='logo'>Recipe</a>
            <a className="nav" href="home.html">Home</a>
            <a  className="nav" href="planvisit.html">Recipe</a>
            <a  className="nav" href="hotels.html">Add Recipes</a>
            <a  className="nav" href="loginorsignin.html">My Recipe</a>
            <a  className="nav" href="contactus.html">Profile</a>
            <div>
            <input type="text" id="search" placeholder="    Search......"/>
            <input class="btn btn-primary" type="submit" value="Submit"/>
            </div>
        </div>
    </div>
  </main>
  );
}

export default App;
