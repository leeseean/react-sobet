import React from 'react'
import { inject, observer } from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
class Bankcard extends React.Component{
    state = {
       
    }

    render() {

        return (
            <div>
               Bankcard
            </div>
        )
    }
}

export default Bankcard