import React, { Component } from 'react';
import logo from './logo.svg';
import { Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';
import Footer from './components/Footer';
import Search from './components/Search';
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      searchTerm: "",
      results: ""
    };

    this.setTerm = this.setTerm.bind(this);
  }

  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  render() {

    return (
      <div>
        <Navbar />
        <div className="container">
          <Jumbotron className="text-center">
            <h1>New York Times Article Search</h1>
            <p>Through the use of this application, you can search for the latest news from the New York Times, as well as save articles for later reading.</p>
          </Jumbotron>
          <Search setTerm={this.setTerm} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;


