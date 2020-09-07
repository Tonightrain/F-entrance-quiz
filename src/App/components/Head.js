import React, { Component } from 'react';
import '../../style/head.scss';
import { Link } from "react-router-dom";

class Head extends Component {
    render() {
        return (
            <div className="head">
                <h1>分组列表</h1>
                <button>分组学员</button>
            </div>
        );
    }
}

export default Head;
