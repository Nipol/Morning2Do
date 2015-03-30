'use strict';

var React = require('react-native');
var TodoItem = require('./TodoItem');
var TodoInputBtn = require('./TodoInputBtn');

var {
  Component,
  View,
  Text,
  ListView,
  StyleSheet,
} = React;

// 더미 데이터
var dummy_Todos = {'todos':[
  {
    'id':1,
    'title': '굿모닝',
    'iscomplete': false
  },
  {
    'id':2,
    'title': '8시 30분 까지 출근하기',
    'iscomplete': false
  },
  {
    'id':3,
    'title': '출근해서 커피 마시기',
    'iscomplete': false
  },
  {
    'id':4,
    'title': '커피마시며 웹서핑 하기',
    'iscomplete': false
  },
  {
    'id':5,
    'title': '점심먹기',
    'iscomplete': false
  },
  {
    'id':6,
    'title': '커피마시기',
    'iscomplete': false
  },
  {
    'id':7,
    'title': 'IDE 켜기',
    'iscomplete': false
  },
  {
    'id':8,
    'title': '일하는 척 하기',
    'iscomplete': false
  },
  {
    'id':9,
    'title': '칼 퇴근 하기',
    'iscomplete': false
  },
  {
    'id':10,
    'title': '친구들 만나서 저녁 먹기',
    'iscomplete': false
  },
  {
    'id':11,
    'title': '집에가기',
    'iscomplete': false
  },
  {
    'id':12,
    'title': '잠자기',
    'iscomplete': false
  }
]};

// Todo handler
class TodoHandler extends Component {

  // 콤포넌트 생성자
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  // 콤포넌트 마운트 실행함수
  componentDidMount() {
    this.loadTodos();
  }

  // Todos 읽어오기
  loadTodos() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(dummy_Todos.todos),
      loaded: true,
    });
  }

  // 할 일 하나의 렌더링 오브젝트
  renderRow(todo: Object) {
    return (
      <TodoItem
        todo={todo}
      />
    );
  }

  // View의 로드
  render() {
    if( !this.state.loaded ) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={styles.listview}
        />
        <TodoInputBtn/>
      </View>
    );
  }

  // 로딩 View
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading todos...
        </Text>
      </View>
    );
  }
};


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6EE',
  },
});

module.exports = TodoHandler;
