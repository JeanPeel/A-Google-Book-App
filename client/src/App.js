import React from "react";
// import Book from './Components/Book/Book';
import Jumbotron from './Components/Jumbotron/Jumbotron';
// import Navbar from './Components/Navbar/Navbar.js';
// import SearchBar from './Components/SearchBar/SearchBar';
import BookSearch from './Pages/BookSearch/BookSearch';
import SavedBooks from './Pages/SavedBooks/SavedBooks';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
    

      <ul>
        <li><Link to="/index.js">Back to Book Search</Link></li>
        <li><Link to="/saved.js">Saved Books</Link></li>
      </ul>

      <Jumbotron />

      <div>
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
