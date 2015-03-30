'use strict';

var React = require('react-native');

var {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} = React;

// 할일 입력 박스
// TODO 입력 버튼으로 교체.
class TodoInputBtn extends Component {
  // 콤포넌트 생성자
  constructor(props) {
    super(props);
  }

  // View
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.todoInput}
          underlayColor='#18709C'
          onPress={this._onPressBtn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }

  onPressBtn() {
    console.log('asdf');
  }
};

var styles = StyleSheet.create({
  container: {
    bottom: 28,
    right: 28,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  todoInput: {
    width: 50,
    height: 50,
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#19BDC4',
    borderColor: '#19BDC4',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 36,
    color: 'white',
  },
});

module.exports = TodoInputBtn;
