import React, { Component } from 'react';

export default class Navigation extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="Navigation">
          <nav>
            <ul>
              <li>Browse</li>
              <li>My list</li>
              <li>Top picks</li>
              <li>Recent</li>
            </ul>
          </nav>
      </div>
    );
  }
}
