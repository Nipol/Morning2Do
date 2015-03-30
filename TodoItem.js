'use strict';

var React = require('react-native');

var {
  Component,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} = React;

// 리스트에 나타날 개별 할 일 아이템
class TodoItem extends Component {

  // 콤포넌트 생성자
  constructor(props) {
    super(props);
  }

  // view
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.todoText}>
            {this.props.todo.title}
          </Text>
          <TouchableHighlight style={styles.btn} underlayColor='#dddddd'>
            <Text style={styles.btnText}>
              ☆
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  todoText: {
    height: 36,
    padding: 6,
    marginTop: 10,
    marginRight: 9,
    marginLeft: 6,
    flex: 11,
    fontSize: 18,
    color: '#EF4089',
  },
  btn: {
    height: 36,
    flex: 2,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnText: {
    marginTop: 9,
    fontSize: 18,
    alignSelf: 'center',
    color: '#19BDC4',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
});

module.exports = TodoItem;
