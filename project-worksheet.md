# Project Overview

![](https://media.giphy.com/media/3o6Mbad3dj18iunbyM/giphy.gif)

## Project Links

- [github repo link](https://github.com/damonpickett/react-booklistbuilder/blob/main/project-worksheet.md)
- [deployment link](https://damonpickett.github.io/react-booklistbuilder/)

## Project Description

I'm building an app called BookListBuilder. The purpose of this app is to allow a user to search for books and create a reading list which they can copy from the site and store on their device. I'll be using the Google Books API for my book search database. Selected books will appear on a card with a link to add the book to a list. There will also be a random quote generator so the user can build their reading list off of quotes they find compelling.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

[ZenQuotes API](https://premium.zenquotes.io/zenquotes-documentation/)
```
[{
	"q": "Lack of emotion causes lack of progress and lack of motivation.",
	"a": "Tony Robbins",
	"i": "https://zenquotes.io/img/tony-robbins.jpg",
	"c": "63",
	"h": "<blockquote>&ldquo;Lack of emotion causes lack of progress and lack of motivation.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
},
// ...MORE DATA... //
{
	"q": "The friend is the man who knows all about you, and still likes you.",
	"a": "Elbert Hubbard",
	"i": "https://zenquotes.io/img/elbert-hubbard.jpg",
	"c": "67",
	"h": "<blockquote>&ldquo;The friend is the man who knows all about you, and still likes you.&rdquo; &mdash; <footer>Elbert Hubbard</footer></blockquote>"
}]
```

[Google Books API](https://developers.google.com/books/docs/overview)
```
kind: "books#volume",
id: "_oG_iTxP1pIC",
etag: "HDJRb5hQEoQ",
selfLink: "https://www.googleapis.com/books/v1/volumes/_oG_iTxP1pIC",
volumeInfo: {
title: "Flowers for Algernon",
authors: [
"Daniel Keyes"
],
publisher: "Houghton Mifflin Harcourt",
publishedDate: "2007-12-01",
description: "Winner of both the Hugo and Nebula Awards, the powerful, classic story about a man who receives an operation that turns him into a genius...and introduces him to heartache. Charlie Gordon is about to embark upon an unprecedented journey. Born with an unusually low IQ, he has been chosen as the perfect subject for an experimental surgery that researchers hope will increase his intelligence-a procedure that has already been highly successful when tested on a lab mouse named Algernon. As the treatment takes effect, Charlie's intelligence expands until it surpasses that of the doctors who engineered his metamorphosis. The experiment appears to be a scientific breakthrough of paramount importance, until Algernon suddenly deteriorates. Will the same happen to Charlie?",
industryIdentifiers: [
{
type: "ISBN_13",
identifier: "9780547539638"
},
{
type: "ISBN_10",
identifier: "0547539630"
}
],
readingModes: {
text: true,
image: true
},
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframe](https://imgur.com/a/C4Foi8o)
- [React Architecture](https://lucid.app/lucidchart/5410928e-1608-4610-84b8-b8491527c5d8/edit?viewport_loc=-11%2C-121%2C1937%2C1365%2C0_0&invitationId=inv_8f9a5fb9-9a4b-40c8-89b1-e7fd0bb3d157)


### MVP/PostMVP - 5min

#### MVP
- Random quote generator
- Book search bar with multiple results
- Quote search bar with result
- Ability to compile a reading
- Ability to compile a quote list

#### PostMVP

- Ability to have reading and quote lists emailed to user.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Nav | This will show the links for the Home Page and the Lists page | 
| Random Quote Generator | This will generate a random quote |
| Instructions | This section will display text advising the user on how to interact with the site |
| Book Finder | A search bar which the user can use to find books |
| Quote Finder | A quote finder which the user can use to find quotes |
| Book List | A list of books the user has selected from their books search |
| Quote List | A list of quotes the user has selected from their books search |


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Initial app set up | H | 0.5hr | 0.5hr |
| Nav | H | 2hrs| 0.5hr |
| API: Random Quote Generator research | H | 2hr| 2hr |
| API: Random Quote Generator implementation | H | 2hr | 2hr |
| Instructions | H | 1hr | 0.25hr |
| API: Book Finder research | H | 3hr | 2hr |
| API: Book Finder implementation | H | 3hr | 2hr |
| API: Quote Finder research | H | 2hr | 2hr |
| API: Quote Finder implementation | H | 3hr | n/a |
| Book List | H | 3hr | 3hr |
| Quote List | H | 3hr | n/a |
| Footer | H | 0.5hr | 0.25 |
| Bootstrap CSS research | H | 3hr | 2hr |
| Bootstrap CSS implementation | H | 2hr | 3hr |
| Deployment/bug fixes | H | 3hr | 5hr |
| Total | H | 33hr | 24.5hr |

## Additional Libraries
 
 Bootstrap

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```javascript
return (
    <div className="App">
      <Navigation />
      <RandomQuote />
      <Route exact path='/' render={() => <Instructions />}/>
      <Route exact path='/' render={() => <BookFinder addBookToList={addBookToList} />}/>
      <Route exact path='/mylist' render={() => <BookList removeBook={removeBook} readingList={readingList} />}/>
      <Footer />
    </div>
  );
}
```
