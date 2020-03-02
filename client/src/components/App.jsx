import React, { Component } from 'react';
import ExpirationDate from './ExpirationDate.jsx';
import GrubList from './GrubList.jsx';
import ClippedDrawer from './ClippedDrawer.jsx';
import Bar from './Bar.jsx';
import { withStyles } from '@material-ui/core/styles';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <div>
          <Bar />
        </div> */}
        <div>
          <ClippedDrawer />
        </div>
        {/* <div>
          <GrubList grubs={this.state} />
        </div> */}
      </div>
    );
  }
}

export default App;