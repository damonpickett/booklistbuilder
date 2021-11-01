function BookList(props) {

  let myListHTML = props.readingList.map((book) => {
    // console.log(book.volumeInfo.infoLink)
    return (
      <div className="book-list">
        <h3>{book.volumeInfo.title}</h3>
        <p>By {book.volumeInfo.authors}</p>
        <p><a href={book.volumeInfo.infoLink} rel='noreferrer' target='_blank'>Buy</a></p>
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