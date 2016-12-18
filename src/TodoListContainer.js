import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import TodoList from 'Todo/src/components/TodoList';
import Footer from 'Todo/src/components/Footer';

export default class TodoListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {text: 'Learn react native'},
        {text: 'Make a to-do app'}
      ]
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={styles.base}
        >
          <TodoList
            todos={this.state.todos}
          />
        </ScrollView>
        <Footer
          addTodo={this.addTodo.bind(this)}
        />
      </View>
    );
  }

  addTodo(text) {
    this.setState({
      todos: this.state.todos.concat([{text: text}])
    });
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#EEEEEE',
    marginTop: 20
  }
});