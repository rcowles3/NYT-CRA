import axios from 'axios';
require('dotenv').config({ path: '../../.env' });

const localDB = 'http://localhost:4200';
const herokuENV = 'mongodb://heroku_nxxvbp21:608lqu5e9q41ul62gk4lmnsdv3@ds125555.mlab.com:25555/heroku_nxxvbp21';

class helpers {
    saveArticles(data) {
        // console.log("Request recieved from react component, to the backend: \n", data);


        console.log(herokuENV);

        axios.post(`${localDB}/api/save`, {
            SaveArticle: data
        })
            .then(res => this.setState({
                saveArticle: res.data
            })
                .catch(err => console.log(err)));
    }

    showArticles(data) {
        console.log(data);

        return axios.post(`${localDB}/api/saved-articles`, {
            ArticlesSaved: data
        })
            .then(res => this.setState({
                articlesSaved: res.data
            }))
            .catch(err => console.log(err))
    }

    deleteArticles(data) {
        // console.log(data);
        return axios.post(`${localDB}/api/delete`, {
            deleteArticle: data
        })
            .then(res => this.setState({
                articlesSaved: res.data
            }))
            .catch(err => console.log(err))
    }

}

export default helpers;