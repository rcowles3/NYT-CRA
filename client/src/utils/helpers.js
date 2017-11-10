import axios from "axios";

class helpers {
  saveArticles(data) {
    console.log(
      "Request recieved from react component, to the backend: \n",
      data
    );

    axios
      .post("/api/save", {
        SaveArticle: data
      })
      .then(res =>
        this.setState({
          saveArticle: res.data
        }).catch(err => console.log(err))
      );
  }

  showArticles(data) {
    console.log(data);

    return axios
      .post("/api/saved-articles", {
        ArticlesSaved: data
      })
      .then(res =>
        this.setState({
          articlesSaved: res.data
        })
      )
      .catch(err => console.log(err));
  }

  deleteArticles(data) {
    // console.log(data);
    return axios
      .post("/api/delete", {
        deleteArticle: data
      })
      .then(res =>
        this.setState({
          articlesSaved: res.data
        })
      )
      .catch(err => console.log(err));
  }
}

export default helpers;
