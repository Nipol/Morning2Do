'use strict';

var React = require('react-native');
var {
  Component,
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

var TodoHandler = require('./TodoHandler');

// main view
/*
 * 처음에 Navigator에 Component를 걸지 않아서 왠 에러가
 * 이렇게 생기는 걸까. 했는데, 빈 콤포넌트를 걸기만 해도 되더
 * 라구요
 *
 *
 */
class Morning2Do extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Morning2Do',
          component: TodoHandler,
        }}
      />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('Morning2Do', () => Morning2Do);

module.exports = Morning2Do;
