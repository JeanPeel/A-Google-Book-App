# Google Book Search
A full stack React app to search the Google Books Api, and save links to ones you are interested in. 

## About this project

This App uses an AJAX call to pull in Google Books based on the search terms typed in.  Once the books are pullled in they can be saved to a database.  These saved books are pulled from the database and displayed on the Saved Books section of the App.

## Table of Contents
* Application Use
* Tech Used
* Details of App and Challenges
* Link to the Live Project

## Application Use
The app is a single page React Application. The user lands on a simple search page, with base level instructions, and a search bar with a submit button. The user enters in book info they wish to search for and utilizing the Google Books API, we query the Google Books app for info, and render the results on the screen for the user to peruse.

The results also have a save button in them, allowing the user to save books they are interested in, which are saved to the MongoDB for retrieval. By using the navigation bar, the user can move to the Saved page, which displays all saved books from the database. They have an option to delete books from the database from this page.

## Tech Used
* React.js
* Bootstrap
* Google Fonts
* Javascript
* CSS
* Mongoose
* MongoDB
* React-Router-Dom
* React-Alert

## Details of App and Challenges
When the final push of coding was made the App was saving to the database on my computer.  The Teachers Aid grading this app reported that the app did not save books on his computer.  The app would need to be trouble shooted to resolve this.

The app has some extra pages and components, that did not end up geting used in the app.  The app could use some clean up of extra items.

## Authors

* **Jean Peel** - *Initial work on React Webpage* - [Jean Peel](https://github.com/JeanPeel)

## Acknowledgments

### Hat tips tp...

* Brian Allen -  *He made a similar App that I modeled this project after.* - [DarkThistle982](https://github.com/Darkthistle982)

### Thanks go to the Teacher and Teachers Aids of our bootcamp in helping us trouble shoot the different callenges we faced.

* Chris Stead -  *Trouble Shooting Help* - [CMStead](https://github.com/cmstead)
* Kurt Lehnardt -  *Trouble Shooting Help* - [KurtLehnardt](https://github.com/KurtLehnardt)
* Mike Rivera -  *Trouble Shooting Help* - [DevMike42](https://github.com/DevMike42)

### Prerequisites

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
examples...

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
