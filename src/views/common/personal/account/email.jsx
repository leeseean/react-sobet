import React from 'react'
import { inject, observer } from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
class Email extends React.Component{
    state = {
       
    }

    render() {

        return (
            <div>
               Email
            </div>
        )
    }
}

export default Email