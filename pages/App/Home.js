import React, { Component } from 'react';
import Note from "../components/note";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state= {
      noteText: '',
      notes: [],
    }
  }

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }
  
  addNote() {
    if (this.state.noteText === '') {return}
    let noteArr = this.state.notes;
    noteArr.push(this.state.noteText);
    this.setState({ noteText: ''});
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if(event.key === "Enter"){
      let noteArr = this.state.notes;
      noteArr.push(this.state.noteText);
      this.setState({ noteText: ''});
    }
  }

  deleteNote (index){
    let noteArr = this.state.notes;
    noteArr.splice(index, 1);
    this.setState({ notes: noteArr })
  }

  render() {

    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
      deleteMethod={ () => this.deleteNote(key) }
       />
    })

    return (
      <div className="container">
        <div className="header">Todo App</div>
        <div>
            {notes}
            <button onClick={this.deleteNote.bind(this)}>DELETE</button>
        </div>
        <input placeholder="Enter Notes" type="text" className="input"
        ref={((input) => {this.textInput = input})}
        value={this.state.noteText}
        onChange={noteText => this.updateNoteText(noteText)}
        onKeyPress={this.handleKeyPress.bind(this)}
        />
        <button onClick={this.addNote.bind(this)}>ADD</button>
      </div>
    );
  }
}

export default Home;