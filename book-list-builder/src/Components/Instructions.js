import { Container } from 'react-bootstrap'

function Instructions() {
    return (
      <Container>
        <div className="instructions">
          <h2>Welcome</h2>
          <p>Use BookListBuilder to mad books and create a reading list. Not sure what you're looking for? Generate a random quote above and see if anyone's famous words leave you curious for more.</p>
        </div>
      </Container>
    );
  }
  
  export default Instructions;

  // git remote add origin https://github.com/damonpickett/react-booklistbuilder.git
  // git branch -M main
  // git push -u origin main