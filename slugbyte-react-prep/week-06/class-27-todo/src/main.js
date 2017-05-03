'use strict';

require('./style/main.scss');

// React must be imported in every file that uses jsx
import React from 'react';

// ReactDOM is typicaly only impored in the entry file and is used
// to tell react where to render on the page
import ReactDOM from 'react-dom';

class NoteUpdateForm extends React.Component {
  constructor(props){
    super(props);
    let {note} = this.props;

    this.state = {
      title: note.title,
      completed: note.completed,
    };

    // bind methods to component
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this is a handle change function that will work for 
  // more than one input
  handleChange(e){
    let change = {};
    if(e.target.type === 'checkbox')
      change[e.target.name] = e.target.checked;
    else 
      change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.noteUpdate({
      id: this.props.note.id,
      title: this.state.title, 
      completed: this.state.completed,
      editing: false,
    });
  }

  render(){
    return (
      <form className="note-update-form" onSubmit={this.handleSubmit}>
        <input  
          onChange={this.handleChange}
          value={this.state.title}
          name="title"
          placeholder="title"
          /> 

        <input 
          onChange={this.handleChange}
          checked={this.state.completed}
          type="checkbox"
          name="completed"
          />

        <button 
          className="btn-edit"
          disabled={!this.state.title} type="submit"> update note </button>
       </form>
    );
  }
}

const NoteItem = (props) => {
  let className = 'note-item';
  if(props.note.completed)
    className += ' completed';
  return (
    <div className={className}>
      <h2> {props.note.title} </h2>
      <button 
        className="btn-delete"
        onClick={() => props.noteDelete(props.note)}> delete </button>
      <button 
        className="btn-edit"
        onClick={() => props.noteEdit(props.note)}> edit </button>
    </div>
  );
};

// a stateless component is just a function that returns jsx
const NoteList = (props) => {
  let noteEdit = (note) => {
    note.editing = true;
    props.noteUpdate(note);
  };

  return (
    // you can use map insde a {template} 
    // to create repating dom elements with diffent values 
    // however react requires that you set the top level 
    // node to have a key property set to a unique value
    // somehow this helps react's render engine be faster
    //

    <ul className="note-list">
      {props.notes.map(item => {
        return (
          <li key={item.id}>
            {item.editing ? 
              <NoteUpdateForm noteUpdate={props.noteUpdate} note={item} /> : 
              <NoteItem note={item} noteDelete={props.noteDelete} noteEdit={noteEdit} />}
          </li>
        );
      })}
    </ul>
  );
};


// all form components must use the class syntax because
// by default react <input> tags depened on a react state. These
// are called controlled inputs. It is possible to force react to
// have uncontrolled inputs, but its not recomended.
class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    };

    this.titleUpdate = this.titleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  titleUpdate(e){
    this.setState({title: e.target.value});
  }

  handleSubmit(e){
    // react submit events require that you invoke preventDefault 
    e.preventDefault();

    // after invoking super(props) in the constructor
    // props is accessable everwhere using this.props
    this.props.noteCreate({title: this.state.title});

    // clear the component's state to clear the forms inputs
    this.setState({title: ''});
  }

  render(){
    return (
      // controlled inputs require that you bind there value to a state
      // because of this you must also implement an onChange method to update
      // the state when the userchanges the input
      <form className="note-create-form" onSubmit={this.handleSubmit}>
        <input 
          onChange={this.titleUpdate} 
          value={this.state.title}  
          name="title" 
          autoComplete="off"
          placeholder="title" />

        <button disabled={!this.state.title} type="submit"> Create Note </button>
      </form>
    );
  }
}

// app root
// this component will be incharge of the entire application state
class App extends React.Component {
  constructor(props){
    super(props);
    // this state is the "single source of truth" for the entire app
    // all canges to the app state mus be defined in this component
    this.state = {
      notes: [],
    };

    // bind all methods to the state
    this.noteCreate = this.noteCreate.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
    this.noteDelete = this.noteDelete.bind(this);
  }


  noteCreate(note){
    console.log('noteCreate', note);
    // add an id hash to the note so that we can find it later on updates and deletes
    note.id = window.btoa(Math.random());
    note.completed = false;
    note.editing = false;
    this.setState({notes: [note].concat(this.state.notes)});
  }

  noteUpdate(note){
    console.log('noteUpdate', note);
    var notes = this.state.notes;
    this.setState({
      notes: notes.map(item => item.id === note.id ? note : item ),
    });
  }

  noteDelete(note){
    console.log('noteDelete', note);
    var notes = this.state.notes;
    this.setState({
      notes: notes.filter(item => item.id !== note.id),
    });
  }

  render() {
    return (
      <div className="app">
        <NoteCreateForm noteCreate={this.noteCreate}/>
        <NoteList notes={this.state.notes} noteDelete={this.noteDelete} noteUpdate={this.noteUpdate}/>
      </div>
    );
  }
}

// create a root node to render the app to
var root = document.createElement('div');
document.body.appendChild(root);

// tell react dom to render the app to the dom 
// reactDOM will render view changes to the dom
// whenever the App's state changes
ReactDOM.render(<App />, root);
