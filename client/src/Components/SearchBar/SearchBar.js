import React, { Component } from "react";
import "./SearchBar.css";
// import Book from '../../Components/Book/Book';

class SearchBar extends Component {
  render() {
    return (
      <div className="container">
        <form >
          <div className="form-group">
            <h1>Find a Book to Explore!</h1>
            <hr />
            <label htmlFor="searchBar" >
              Search Books by Title
            </label>
            <input 
            type="text" 
            className="form-control" 
            id="searchBar"  
            placeholder="Type here, click button, get search results"
            >
            </input>
          </div>
          <button type="submit" className="btn btn-dark">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
