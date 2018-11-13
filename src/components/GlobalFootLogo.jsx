/**
 * Created by Conrad on 2018-10-24.
 */
import React from 'react'
import './globalFootLogo.styl'
class GlobalFootLogo extends React.Component{

    render(){
        let login_footer =this.props.page==='login' ? 'login_footer':'';

        return(
            <div className={"footer-img-wrap "+login_footer} style={this.props.styl}>
                <div className="footer-img"></div>
            </div>
        )
    }
}

export default GlobalFootLogo