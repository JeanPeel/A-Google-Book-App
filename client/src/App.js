import React from "react";
import Jumbotron from './Components/Jumbotron/Jumbotron';
import BookSearch from './Pages/BookSearch/BookSearch';
import SavedBooks from './Pages/SavedBooks/SavedBooks';
import "./Components/AppStyle/AppStyle.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>

      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg navstyle">
          <span className="navbar-brand mb-0 h1">Google Books</span>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          ></button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/">
                  <button
                    className="nav-item btn btn-outline-light mb-0 mr-3"
                  >

                    Search <span className="sr-only">(current)</span>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/saved">
                  <button
                    className="nav-item btn btn-outline-light mb-0 text-white"
                  >
                    Saved
              </button>
                </Link>
              </li>
            </ul>

          </div>
        </nav>
      </div>

      <div class='centered'>
        <Jumbotron />

      </div>


      <div class='centered'>
        <Switch>
          <Route exact path="/">
            <BookSearch />

          </Route>
          <Route path="/saved">
            <SavedBooks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
