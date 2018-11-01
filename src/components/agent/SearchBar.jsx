import React from 'react';
import { 
    DatePicker, 
    Input, 
    Button
} from 'antd';
import "./searchBar.styl";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    handleDate() {

    }
    handleQuery = () => {

    }
    render() {
        return (<div className="search-bar-wp">
            <div>
                <span className="search-date-wp">日期: <DatePicker onChange={this.handleDate} className="width-190" /> <span className="pd-l-25 pd-r-25">至</span> <DatePicker onChange={this.handleDate} className="width-190" /> </span>
                <span className="search-name-wp">用户名：<Input className="ipt-name" /> </span>
                <span className="search-btn-wp"><Button type="primary" onClick={this.handleQuery} >立即查询</Button></span>
            </div>
        </div>)
    }
}

export default SearchBar;