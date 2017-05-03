'use strict';

require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const getRandomArrayItem = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const generateIpsum = (vocab, count) => {
  let items = [];
  for(let i=0; i<count; i++){
    items.push(getRandomArrayItem(vocab));
  }
  return items.join(' ');
};

const IpsumDisplay = ({state}) => {
  let vocab = state.languages[state.selectedLanguage];
  let ipsum = generateIpsum(vocab, state.limit);
  let lines = [];
  for(let i=0; i<state.count; i++){
    lines.push(generateIpsum(vocab, state.limit));
  }

  return (
    <div className="ipsum-display">
      {lines.map((line, i) => <p key={i}> {line} </p> )}
    </div>
  );
};

class IpsumSettingsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      limit: props.state.limit,
      count: props.state.count,
      limitByWord: props.state.limitByWord,
      selectedLanguage: props.state.selectedLanguage,
    };

    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    var changes = {};
    let type = e.target.type;
    if(type === 'checkbox') {
      changes[e.target.name] = e.target.checked;
    } else if (type === 'radio') {
      if(e.target.checked)
        changes[e.target.name] = e.target.value;
    } else {
      changes[e.target.name] = e.target.value;
    }
    this.setState(changes);
  }

  handleSumbit(e){
    e.preventDefault();
    this.props.settingsUpdate({
      limit: this.state.limit,
      count: this.state.count,
      limitByWord: this.state.limitByWord,
      selectedLanguage: this.state.selectedLanguage,
    });
  }

  render(){
    return (
      <form 
        onSubmit={this.handleSumbit}
        className="ipsum-settings-form">

        <fieldset className="options">

        <div className="slide-checkbox ">
          <input 
            onChange={this.handleChange}
            id="limitByWord"
            name="limitByWord"
            type="checkbox"
            checked={this.state.limitByWord}
            />
            <label htmlFor="limitByWord"> <div></div> </label>
            <span> limit by word </span>

        </div>

        <label> {this.state.limitByWord ? 'word ' : 'character '} limit </label>
        <input 
          onChange={this.handleChange}
          name="limit"
          type="number"
          value={this.state.limit}
          />

        <label> line count </label>
        <input 
          onChange={this.handleChange}
          name="count"
          type="number"
          value={this.state.count}
          />
        </fieldset>
        
        <fieldset className="selected-language">
        <input 
          onChange={this.handleChange}
          name="selectedLanguage"
          id="radio-javascript"
          value="javascript"
          type="radio"
          checked={this.state.selectedLanguage === 'javascript'}
          />
          <label htmlFor="radio-javascript"> javascript </label>

        <input 
          onChange={this.handleChange}
          id="slug"
          name="selectedLanguage"
          value="slug"
          type="radio"
          checked={this.state.selectedLanguage === 'slug'}
          />
          <label htmlFor="slug"> slug </label>

        <input 
          onChange={this.handleChange}
          name="selectedLanguage"
          id="radio-html"
          value="html"
          type="radio"
          checked={this.state.selectedLanguage === 'html'}
          />
        <label htmlFor="radio-html"> html </label>

        <input 
          onChange={this.handleChange}
          name="selectedLanguage"
          id="radio-css"
          value="css"
          type="radio"
          checked={this.state.selectedLanguage === 'css'}
          />
        <label htmlFor="radio-css"> css </label>
        </fieldset >

        <button type="submit"> Genorate </button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      limit: 30,
      count: 4,
      limitByWord: true,
      selectedLanguage: 'slug', 
      languages: {
        javascript: ['function', 'var', 'const', 'let', 'class', 'extends', 'if', 'for'],
        html: ['div', 'p', 'html', 'h1', 'blockquote', 'pre', 'span', 'main'],
        css: ['background', 'font-familty', 'color', 'padding', 'margin', 'width', 'float', 'display'],
        slug: ['slime', 'ooze', 'mud', 'muck', 'slipery', 'slug', 'soggy', 'slush'],
      },
    };

    this.settingsUpdate = this.settingsUpdate.bind(this)
  }

  settingsUpdate(update){
    this.setState(update);
  }

  render() {
    return (
      <div className="app">
        <IpsumSettingsForm state={this.state} settingsUpdate={this.settingsUpdate}/>
        <IpsumDisplay state={this.state} />
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
