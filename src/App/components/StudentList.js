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
                    <td>3.陈思聪</td>
                    <td>4.王江林</td>
                    <td>5.王登宇</td>
                    <td>6.杨思雨</td>
                    <td>7.江雨舟</td>
                    <td>8.廖燊</td>
                </tr>
                <tr>
                    <td>9.胡晓</td>
                    <td>10.但杰</td>
                    <td>11.盖迈达</td>
                    <td>12.肖美琦</td>
                    <td>13.黄云洁</td>
                    <td>14.齐瑾浩</td>
                    <td>15.刘亮亮</td>
                    <td>16.肖逸凡</td>
                </tr>
                <tr>
                    <td>17.王作文</td>
                    <td>18.郭瑞凌</td>
                    <td>19.李明豪</td>
                    <td>20.党泽</td>
                    <td>21.肖伊佐</td>
                    <td>22.贠晨曦</td>
                    <td>23.李康宁</td>
                    <td>24.马庆</td>
                </tr>
                <tr>
                    <td>25.商婕</td>
                    <td>26.余榕</td>
                    <td>27.谌哲</td>
                    <td>28.董翔锐</td>
                    <td>29.陈泰宇</td>
                    <td>30.赵允齐</td>
                    <td>31.张柯</td>
                    <td>32.廖文强</td>
                </tr>
                <tr>
                    <td>33.刘轲</td>
                    <td>34.廖浚斌</td>
                    <td>35.凌凤仪</td>
                    <input type="text" placeholder="+添加学员"/>
                </tr>
            </div>
        );
    }
}

export default StudentList;