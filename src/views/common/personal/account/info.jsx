import React from 'react'
import { inject, observer } from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
class Info extends React.Component{
    state = {
       
    }
    render() {
        return (
            <div>
               个人资料
            </div>
        )
    }
}

export default Info