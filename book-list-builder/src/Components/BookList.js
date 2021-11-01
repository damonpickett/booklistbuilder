function BookList(props) {

  let myListHTML = props.readingList.map((book) => {
    return (
      <div>
        <h3>{book.volumeInfo.title}</h3>
        <p>By {book.volumeInfo.authors}</p>
        <p><a href={book.infoLink} target='_blank' {book.selfLink}</a></p>
      </div>
    )
  })

  return (
    <div className="book-list">
      <h2>My Reading List</h2>
      {myListHTML}
    </div>
  );
}

export default BookList;