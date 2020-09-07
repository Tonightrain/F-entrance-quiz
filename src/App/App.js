import React, { Component } from 'react';
import './App.scss';
import Head from "./components/Head";
import StudentList from "./components/StudentList";
import GroupList from "./components/GroupList";

class App extends Component {
  state={
    students: [
            { id: 1, name: '沈乐棋'},
            { id: 2, name: '徐慧慧'},
            { id: 3, name: '陈思聪'},
            { id: 4, name: '王江林'},
            { id: 5, name: '王登宇'},
            { id: 6, name: '杨思雨'},
            { id: 7, name: '江雨舟'},
            { id: 8, name: '廖燊'},
            { id: 9, name: '胡晓'},
            { id: 10, name: '但杰'},
            { id: 11, name: '盖迈达'},
            { id: 12, name: '肖美琦'},
            { id: 13, name: '黄云洁'},
            { id: 14, name: '齐瑾浩'},
            { id: 15, name: '刘亮亮'},
            { id: 16, name: '肖逸凡'},
            { id: 17, name: '王作文'},
            { id: 18, name: '郭瑞凌'},
            { id: 19, name: '李明豪'},
            { id: 20, name: '党泽'},
            { id: 21, name: '肖伊佐'},
            { id: 22, name: '贠晨曦'},
            { id: 23, name: '李康宁'},
            { id: 24, name: '马庆'},
            { id: 25, name: '商婕'},
            { id: 26, name: '余榕'},
            { id: 27, name: '谌哲'},
            { id: 28, name: '董翔锐'},
            { id: 29, name: '陈泰宇'},
            { id: 30, name: '赵允齐'},
            { id: 31, name: '张柯'},
            { id: 32, name: '廖文强'},
            { id: 33, name: '刘轲'},
            { id: 34, name: '廖浚斌'},
            { id: 35, name: '凌凤仪'},
          ],
  }

  // onButton = () => {
  //     this.props.history.push('/group');
  // }

  render() {
    return (
      <div data-testid="app" className="App">
        <Head />
        <GroupList />
        <StudentList students={this.state.students}/>
      </div>
    );
  }
}

export default App;
