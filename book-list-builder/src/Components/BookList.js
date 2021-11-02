function BookList(props) {

  let myListHTML = props.readingList.map((book, index) => {
    // console.log(index)
    return (
      <div className="book-list">
        <h2>My Reading List</h2>
        <h3>{book.volumeInfo.title}</h3>
        <p>By {book.volumeInfo.authors}</p>
        <p><a href={book.volumeInfo.infoLink} rel='noreferrer' target='_blank'>Buy</a></p>
        <button onClick={() => props.removeBook(index)}>Remove book from list</button>
      </div>
    )
  })

  return (
    <>
      {myListHTML}
    </>
  );
}

export default BookList;