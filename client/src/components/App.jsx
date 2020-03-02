import React, { Component } from 'react';
import ExpirationDate from './ExpirationDate.jsx';
import GrubList from './GrubList.jsx';
import ClippedDrawer from './ClippedDrawer.jsx';
import Bar from './Bar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        item: 'Chicken',
        quantity: 1,
        category: 'meat',
        expiration: 'Fri Sep 11 2020 11:45:00 GMT-0700 (Pacific Daylight Time)',
        location: 'fridge',
      },
      {
        item: 'Brocolli',
        quantity: 2,
        category: 'vegetable',
        expiration: 'Thu Sep 24 2020 11:45:00 GMT-0700 (Pacific Daylight Time)',
        location: 'fridge',
      },
      {
        item: 'Linguini',
        quantity: 10,
        category: 'other',
        expiration: 'Sat Oct 31 2020 11:45:00 GMT-0700 (Pacific Daylight Time)',
        location: 'pantry',
      },
    ];
  }
  render() {
    return (
      <div>
        <div>
          <Bar />
        </div>
        <div>
          <ClippedDrawer />
        </div>
        <div>
          <GrubList grubs={this.state} />
        </div>
      </div>
    );
  }
}

export default App;