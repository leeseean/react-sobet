import React from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
@inject('loginStore')
@observer
class Logout extends React.Component {
  logout = () => {
    const {loginStore, history} = this.props;
    loginStore.logout();
    history.push('/login');
  }
  render() {
    return (
      <button onClick={this.logout} style={{cursor: 'pointer'}}>
        登出
      </button>
    );
  }
}

export default Logout;