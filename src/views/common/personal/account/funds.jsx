import React from 'react'
import { inject, observer } from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
class Funds extends React.Component{
    state = {
       
    }

    render() {

        return (
            <div>
               Funds
            </div>
        )
    }
}

export default Funds