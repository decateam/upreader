import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <h1> Hello Decateam!</h1>;
  }
}

render(<App/>, document.getElementById('app'));
