import React, { Component } from "react";
import axios from "axios";
import AddForm from "./components/AddForm";
import NotesList from "./components/NotesList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    };

    this.dataURL = "https://ra-6-2.herokuapp.com/notes";
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    axios
      .get(this.dataURL)
      .then(response => this.setState({ notes: response.data }));
  };

  handleAdd = note => {
    axios.post(this.dataURL, note).then(() => this.loadData());
  };

  handleDelete = id => {
    axios.delete(`${this.dataURL}/${id}`).then(() => this.loadData());
  };

  render() {
    console.log(this.state.notes);
    return (
      <div className="App">
        <div className="ui text container segment">
          <AddForm handleAdd={this.handleAdd} loadData={this.loadData} />
          <NotesList
            notes={this.state.notes}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
