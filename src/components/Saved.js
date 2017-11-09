import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import helpers from "../utils/helpers";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.articleData = new helpers();
  }

  componentDidMount() {
    console.log("mounted, data loaded.");
    // const localDB = "http://localhost:4200";

    let articlesSaved = {
      articlesSaved: this.state
    };

    // this.articleData.showArticles();
    axios
      .post("/saved-articles", {
        articlesSaved: articlesSaved
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          articles: res.data
        });
        console.log(this.state.articles);
      })
      .catch(err => console.log(err));
  }

  handleClick(article) {
    // console.log("delete");
    this.articleData.deleteArticles(article);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <br />
              <div className="card">
                <div className="card-heading text-center">
                  <h3 className="card-title card-header">
                    <strong>Saved Articles</strong>
                  </h3>
                </div>
                <div className="card-body">
                  {this.state.articles.map((article, index) => {
                    let { description, pubDate, title, webUrl, _id } = article;
                    return (
                      <div key={index} attr={_id}>
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <h6>Date Published: {pubDate}</h6>
                        <a href={webUrl}>Link to full article</a>
                        <br />

                        <Button
                          type="submit"
                          onClick={() => this.handleClick(article)}
                          className="btn btn-default"
                        >
                          {" "}
                          Delete Article
                        </Button>

                        <hr className="featurette-divider" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Saved;
