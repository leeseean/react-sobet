import React from 'react';
import "./breadcrumb.styl";

class Breadcrumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    handleClick(name) {
        this.props.onHandleClick(name);
    }
    render() {
        return (
             <div className="breadcrumb-view">
                {this.state.data.map((item, i) => {
                    return (
                        <React.Fragment key={i}>
                        <a href="javascript:void(0)" onClick={this.handleClick.bind(this, item.name)} >{item.name}</a>
                        {this.state.data.length > 1 && i < this.state.data.length - 1  &&
                            <span className="icon-gt">&gt;</span>
                        }
                        </React.Fragment>
                    );
                })}
             </div>
        )
    }
}

export default Breadcrumb;