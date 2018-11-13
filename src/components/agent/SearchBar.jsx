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
        this.state = {
            startDatePlaceHolder: this.props.startDatePlaceHolder || '开始时间',
            endDatePlaceHolder: this.props.endDatePlaceHolder || '结束时间',
            showTimeCycle: false,
            fields: {
                timeCycle: false,
                startAndEndTime: true,
                startTime: true,
                endTime: true
            },
            fieldsValue: {

            }
        }
    }
    handleDate() {

    }
    handleQuery = () => {
        if (typeof this.props.handleQuery == 'function') {
            this.props.handleQuery();
        }
    }
    render() {
        return (<div className="search-bar-wp">
            <div>
                {this.state.fields.timeCycle &&
                <span>
                    周期:<select></select>
                </span>
                }
                <span className="search-date-wp">
                    日期: <DatePicker onChange={this.handleDate} className="width-190" placeholder={this.state.startDatePlaceHolder} /> 
                    <span className="pd-l-25 pd-r-25">至</span> 
                    <DatePicker onChange={this.handleDate} className="width-190" placeholder={this.state.endDatePlaceHolder} /> 
                </span>
                <span className="search-name-wp">用户名：<Input className="ipt-name" /> </span>
                <span>

                </span>
                <span className="search-btn-wp"><Button type="primary" onClick={this.handleQuery} >立即查询</Button></span>
            </div>
        </div>)
    }
}

export default SearchBar;