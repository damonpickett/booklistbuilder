import { Container } from "react-bootstrap";

function BookList(props) {

  let myListHTML = props.readingList.map((book, index) => {
    console.log(index)
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

  console.log(myListHTML)

  return (
    <>
      <Container>
        {myListHTML}
      </Container>
    </>
  );
}

export default BookList;

// () => {
//   return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
//     children: "copyList is working"
//   }, void 0, false, {
//     fileName: _jsxFileName,
//     lineNumber: 32,
//     columnNumber: 7
//   }, this);
// }