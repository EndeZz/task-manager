import React, { Component } from 'react';
import '../../styles/App.scss';

class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return pug`
      .item
        h1.item__title Element1
        h3.item__quote Element2
        h4.item__quote Element3
    `
  }
}

export default ListItem;

// export const App = props => pug`
//   .wrapper
//     if props.shouldShowGreeting
//       p.greeting Hello World!
// `;
