import React, { Component } from 'react';
import '../../style/studentList.scss';

class StudentList extends Component {
    render() {
        const {students:{id, name}} = this.props;
        return (
            <div className="studentList">
                <h1>学员列表</h1>
                <tr>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                </tr>
                <tr>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                </tr>
                <tr>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                </tr>
                <tr>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                </tr>
                <tr>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <td>1.沈乐棋</td>
                    <td>2.徐慧慧</td>
                    <input type="text" placeholder="+添加学员"/>
                </tr>
            </div>
        );
    }
}

export default StudentList;