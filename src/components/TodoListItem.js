import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import CheckBox from 'react-native-check-box'

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    }
  }

  render() {
    return (
      <View style={styles.todo}>
        <CheckBox
          isChecked={this.props.complete}
          onClick={()=>this.onClick()}
        />
        <Text style={[styles.text, this.state.isChecked ? styles.isTextDisabled : null]}>
          {this.props.text}
        </Text>
      </View>
    );
  }

  onClick() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  text: {
    marginLeft: 10
  },
  isTextDisabled: {
    color: '#999999'
  }
});