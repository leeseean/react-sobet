/**
 * Created by Conrad on 2018-10-24.
 */
import React from 'react'
import './globalFootLogo.styl'
class GlobalFootLogo extends React.Component{
    render(){
        return(
            <div className="footer-img-wrap" style={this.props.styl}>
                <div className="footer-img"></div>
            </div>
        )
    }
}

export default GlobalFootLogo