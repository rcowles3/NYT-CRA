import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import helpers from '../utils/helpers';

class Results extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     // attr: '',
        //     title: '',
        //     webURL: '',
        //     webSnippet: '',
        //     date: '',
        // }

        // this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.articleData = new helpers();
    }

    // handleChange(event) {

    //     console.log(event);
    //     let newState = {};
    //     newState[event.target.id] = event.target.value;
    //     this.setState(newState);
    //     console.log(newState);
    // }

    handleClick(article) {
        // console.log("clicked");
        // console.log(article);
        // event.preventDefault();

        let articleSaved = {
            title: article.headline.main,
            description: article.snippet,
            datePosted: article.pub_date,
            webUrl: article.web_url
        }

        console.log(articleSaved);

        // const articleInfo = event.target.value;
        // console.log(articleInfo);

        this.articleData.saveArticles(articleSaved);

    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <br />
                    <div className="card">
                        <div className="card-heading text-center">
                            <h3 className="card-title card-header">
                                <strong>Articles</strong>
                            </h3>
                        </div>
                        <div className="card-body">
                            {this.props.items.map((item, index) => {
                                let { main } = item.headline;
                                let { snippet, web_url, pub_date, _id } = item;
                                return (
                                    <div key={index} attr={_id}>
                                        <h4>
                                            {main}
                                        </h4>
                                        <p>
                                            {snippet}
                                        </p>
                                        <h6>
                                            Date Published: {pub_date}
                                        </h6>
                                        <a href={web_url}>Link to full article</a>
                                        <br />

                                        <Button
                                            type='submit'
                                            onClick={() => this.handleClick(item)}
                                            className='btn btn-default'
                                        > Save Article
                                        </Button>

                                        <hr className="featurette-divider" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;