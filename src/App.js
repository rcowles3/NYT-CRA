import React, { Component } from 'react';
import logo from './logo.svg';
import { Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';
import Footer from './components/Footer';
// import helpers from '../../../FitRep-v2.0/client/src/utils/helpers'
import Search from './components/Search';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      searchTerm: "",
      results: ""
    };

    this.setTerm = this.setTerm.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {

  //   if (prevState.searchTerm !== this.state.searchTerm) {
  //     console.log("UPDATED");

  //     helpers.runQuery(this.state.searchTerm).then((data) => {
  //       if (data !== this.state.results) {
  //         console.log(data);

  //         this.setState({ results: data });
  //       }
  //     });
  //   }
  // }

  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  render() {

    return (

      <div className="container">
        <Jumbotron>
          <h1>New York Times Article Database</h1>
          <p>Through the use of this applicatino, you can search for the latest news from the New York Times, as well as save articles for later reading.</p>
          <ButtonToolbar>            
            <Button bsSize="large">View Saved</Button>
          </ButtonToolbar>
        </Jumbotron>
        <Search setTerm={this.setTerm} />

        <Footer />

      </div>
    );
  }
}

export default App;


