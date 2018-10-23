import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@withRouter
@inject('globalStore')
@observer
class Logout extends React.Component {
  logout = () => {
    const { globalStore, history } = this.props;
    globalStore.logout().then((res) => {
      if (res.code === 0) {
        history.push('/login');
        //window.location.href='/login'
      }
    });
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