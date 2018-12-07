/**
 * Created by Orange on 2018-11-27 17:57:17.
 **/

import React from 'react';
import { Provider } from 'mobx-react';
import lotteryStore from '../../../stores/lotteryStore';
import favoriteStore from '../../../stores/favoriteStore';
import Lottery from './Lottery.jsx';

class Index extends React.Component {
  render() {
    return (
      <Provider {...{ favoriteStore, lotteryStore }}>
        <Lottery />
      </Provider>
    );
  }
}

export default Index;