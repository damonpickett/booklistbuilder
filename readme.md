# BookListBuilder

BookList builder is an app which allows the user to search for books and create a reading list. The app also features a random quote generator to help inpsire the user's search.

## Motivation

The world is built with words. From The Bible, The Koran, The Tao Te Ching, The Wealth of Nations, The Origin of Species, The Art of War, and many others. The pen is not mightier than the sword, the pen *wields* the sword. But before books shape the world, they shape individuals. I wanted to build an app which would assist individuals in discovering the ideas which will inform their lives.

## Build Status

The site features the baseline functionality outlined above. The site has mobile first CSS with many minor touches still needed. The CSS for larger screens has not been completed.

## Code Style

Standard

## Tech/Framework Used

React.js, Bootstrap

## Features

Random quote generator, searchable book database, the ability to compile a list of books.

## Code Example

```javascript
            function handleSubmit(event) {
                event.preventDefault();
                fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=20`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data.items)
                    setResult(data.items)
                })
            }

            const searchResultsHTML = result.map(book => {
                return(
                <Card className='search-results-cards' key={book.id}>
                    {book.volumeInfo.imageLinks ? <Card.Img className='search-results-img' src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/> : <p>No image available<br />{book.volumeInfo.title} by {book.volumeInfo.authors}</p>}
                    <Button variant='dark' className='search-results-button' onClick={() => props.addBookToList(book)}>Add to Reading List</Button>
                    {/* <p key={book.id}>{book.volumeInfo.description}</p> */}
                </Card>
                )
            })

            

            return (
                <Container className='book-finder'>
                <Row>
                    <Col>
                    <div className="book-finder">
                        {/* create a form with input and button */}
                        <Form className='book-search-form' onSubmit={handleSubmit}>
                        <Form.Control className='book-search-input' onChange={handleChange} type="text" placeholder="Search for books" />
                        <Button variant='success' className='book-search-button'type="submit">Search</Button>
                        </Form>
                        {searchResultsHTML}
                    </div>
                    </Col>
                </Row>
                </Container>
            );
```

## Installation 



## API Reference

[Quote Free API](https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373)

[Google Books API](https://developers.google.com/books)

## Tests



## How to Use

1. Enter a book title or author in the search bar. Click the search button or hit 'enter'.
2. Add books to your list by clicking the 'Add to reading list' button
3. Display your list by clicking the 'My List' link at header or footer of the app.
4. Navigate to Google Books to purchase the book by clicking 'Buy' in your reading list, or remove the book from your list by clicking the 'Remove from list' button

## Contribute



## Credits

Thank you to Coding Shiksha on YouTube for his [tutorial](https://www.youtube.com/watch?v=LGcgChoD_qY&t=740s) on creating a search feature with Google Books API.

Thank you to Nathaniel Stack, instructor at [General Assembly](https://generalassemb.ly/?topic=&mkt_account_id=1056949875&mkt_campaign_id=1649389396&mkt_ad_group_id=64743638833&mkt_device_type=c&mkt_keyword=general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=524364733192&mkt_network=g&mkt_target_id=aud-387824918555:kwd-300765785657&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:CAREM:BR:GeneralAssembly&utm_content=campus-lead-lander&utm_term=general%20assembly&gclid=CjwKCAjwiY6MBhBqEiwARFSCPpCNSyaJsG17HTn6OE3TeIi_Jf3E--TT_7tpBw13UrY5orLWNz6kdxoCYIoQAvD_BwE) for his lesson on building a [Pokemon Podedex](https://git.generalassemb.ly/sei927/pokemon-pokedex/tree/master/pokemon/src). The lesson proved very helpful in building BookListBuilder as the structures of these apps are similar.
