import React, { Component } from "react";
import Book from "./Book";
import Spinner from "./Spinner";

class Booklist extends Component {
  constructor() {
    super();
    this.state = {
      llibres: [],
      loader: true,
      search: ""
    };
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  async componentDidMount() {
    const url = "https://api.myjson.com/bins/1h3vb3";

    const resp = await fetch(url);
    const data = await resp.json();

    this.setState({
      llibres: data.books,
      loader: false
    });
  }

  render() {
    let filteredBooks = this.state.llibres.filter(llibr => {
      return (
        llibr.titulo.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    console.table(filteredBooks);

    return (
      <div>
        <section className="search">
          <input
            type="search"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            className="searchBox"
            placeholder="Buscar..."
          />
        </section>
        <Book filteredBooks={filteredBooks} />
        <Spinner loader={this.state.loader} />
      </div>
    );
  }
}

export default Booklist;
