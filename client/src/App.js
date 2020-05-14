import React from "react";
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
        <li><Link to="/">Back to Book Search</Link></li>
        <li><Link to="/saved">Saved Books</Link></li>
      </ul>
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
