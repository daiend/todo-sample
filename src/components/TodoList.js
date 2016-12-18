import React, {Component} from 'react';
import {
  StyleSheet,
  ListView,
  View
} from 'react-native';

import TodoListItem from 'Todo/src/components/TodoListItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource.cloneWithRows(this.props.todos)}
        renderRow={(todo) => <TodoListItem {...todo} />}
        renderSeparator={this.renderSeparator}
      />
    );
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={styles.separator}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E1E8ED'
  },
});