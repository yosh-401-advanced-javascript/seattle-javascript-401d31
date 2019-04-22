import React from 'react';
import { SettingsContext } from '../settings/context.js';

class Content extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Content;
