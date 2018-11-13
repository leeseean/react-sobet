import React,{ Component } from 'react';
import './index.styl';
import "./iconfont.css";

class Agent extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "关于我们",
            content:[

            ],
            activeArr:[],
        }
    };

    render(){
        return(
            <div className={"helper-agent-box"}>
                <h2>{this.state.title}</h2>
                <div className="helper-agent-content">

                </div>
            </div>
        )
    };
}
export default Agent;