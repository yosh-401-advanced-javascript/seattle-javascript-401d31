![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: Context and Hooks
===========================================================================
<a name="top"></a>

## Preparation
This lessson hits on 2 major points
* React Context API
* React Hooks API

## Lecture Main Topics & Overall Flow
How many ways do we currently know of to manage state?
  1. Local State (a component carries its own state)
  2. Managed or Shared State (a component passes state/props/methods) down
  3. Redux Global State (pub/sub)

**Context**
Context provides a means of passing state down the component tree through a Provider/Consumer relationship.

At as high a level as makes sense, a "provider" can make it's state available, along with means of altering it (methods). 

```
import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeTitleTo: this.changeTitleTo,
      title: 'My Amazing Website',
    };
  }

  changeTitleTo = title => {
    this.setState({ title });
  };

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;

```

At the app level ...
```
      <SettingsContext>
        <Content />
      </SettingsContext>
``` 

At the lower levels any component can "opt-in" and become a "consumer" and receive state and potentially methods through it.  Note the wrapping of context in a component, and the requirement of using a function to "get" the context object itself, which is `this.state` from the provider component.
```
      <SettingsContext.Consumer>
        {context => {
          console.log(context);
          return (
            <div>
              <h1>{context.title}</h1>
              <button onClick={() => context.changeTitleTo('Your Website')}>
                Change Title
              </button>
            </div>
          );
        }}
      </SettingsContext.Consumer>
```


## What bugs, issues, or surprises have come up in the past for this class?
* Be prepared for students to struggle with a 3rd way to handle state
* This will also be the first time the students will be dealing with webpack...

## General Comments and Notes
*
