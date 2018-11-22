import React from 'react'
import { inject, observer } from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
class Password extends React.Component{
    state = {
       
    }

    render() {
        return (
            <div>
               Password
            </div>
        )
    }
}

export default Password