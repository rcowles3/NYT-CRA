import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import helpers from '../utils/helpers';

class Results extends Component {  
    constructor(props) {
        super(props);

        this.state = {
            attr: '',
            title: '',
            webURL: '',
            webSnippet: '',
            date: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.articleData = new helpers();
    }

    
    handleSubmit(event) {
        event.preventDefault();
        console.log(event);

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
                                        <br/>
                                        
                                        <Button type='submit' className='btn btn-default'
                                                onClick={this.handleSubmit}>
                                            Save Article
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