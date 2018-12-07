/**
 * Created by Orange on 2018-11-27 18:09:17.
 **/

import React from 'react';
import { Provider } from 'mobx-react';
import lhcStore from '../../../../stores/lhcStore';
import Jslhc from './Jslhc.jsx';

class Index extends React.Component {
  render() {
    return (
      <Provider {...{ lhcStore }}>
        <Jslhc />
      </Provider>
    );
  }
}

export default Index;