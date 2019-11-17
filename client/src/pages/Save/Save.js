import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Results from '../../components/Results'
import API from '../../utils/API';

class Save extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.loadBooks();
  }


  loadBooks = () => {

    API.getBooks()
      .then(res => {
        this.setState({ books: res.data, search: "" })
      })
      .catch(err => console.log(err));
  };



  render() {
    return (
      <>
        <Row>
          <Col s={12} className="pageTitle center">

            <h1>Saved Books</h1>

          </Col>
        </Row>
        <Row className="center">
          <Results books={this.state.books} loadBooks={this.loadBooks}></Results>
        </Row>
      </>
    )
  }
}

export default Save