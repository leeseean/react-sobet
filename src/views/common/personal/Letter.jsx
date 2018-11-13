import React from 'react'
import {withRouter} from 'react-router-dom';
@withRouter
class Letter extends React.Component{
    render(){
        return(
            <div>
                站内信{this.props.match.params.type}
            </div>
        )
    }
}

export default Letter