import React from 'react';

import SettingsContext from './components/settings/context.js';
import Content from './components/content';

export default class App extends React.Component {
  render() {
    return (
      <SettingsContext>
        <Content />
      </SettingsContext>
    );
  }
}
