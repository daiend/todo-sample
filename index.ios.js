import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import TodoListContainer from 'Todo/src/TodoListContainer';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoListContainer />
    );
  }
}

AppRegistry.registerComponent('Todo', () => Todo);