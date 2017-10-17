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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.articleData = new helpers();
    }

    // handleChange(event) {

    //     console.log(event);
    //     let newState = {};
    //     newState[event.target.id] = event.target.value;
    //     this.setState(newState);
    //     console.log(newState);
    // }

    handleSubmit(event) {

        event.preventDefault();
        // let articleSaved = {
        //     articleTitle: this.state.title,
        //     snippet: this.state.webSnippet,
        //     date: this.state.date,
        //     url: this.state.webURL
        // }

        const articleInfo = event.target.value;
        console.log(articleInfo);

        this.articleData.saveArticles(articleInfo);

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
                                            onClick={this.handleSubmit}
                                            className='btn btn-default'
                                            value={_id}> Save Article
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