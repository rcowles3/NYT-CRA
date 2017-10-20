import axios from 'axios';

class helpers {
    saveArticles(data) {
        // console.log("Request recieved from react component, to the backend: \n", data);

        axios.post('http://localhost:4200/api/save', {
            SaveArticle: data
        })
            .then(res => this.setState({
            saveArticle: res.data
            })
                .catch(err => console.log(err)));
    }

    showArticles(data) {
        
    }

    deleteArticles(data) {
        
    }

}

export default helpers;