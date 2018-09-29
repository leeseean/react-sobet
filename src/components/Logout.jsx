import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@withRouter
@inject('loginStore')
@observer
class Logout extends React.Component {
  logout = () => {
    const { loginStore, history } = this.props;
    loginStore.logout();
    history.push('/login');
  }
  render() {
    const {
      className, style, text
    } = this.props;
    return (
      <span onClick={this.logout} className={className} style={style}>
        {text}
      </span>
    );
  }
}

export default Logout;