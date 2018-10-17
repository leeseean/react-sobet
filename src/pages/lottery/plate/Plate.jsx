/**
 * Created by Orange on 2018-10-16 14:46:33.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';
import ChaidanPlate from './ChaidanPlate';
import UsualPlate from './UsualPlate';

@inject(stores => ({
    chaidanConfig: stores.plateStore.chaidanConfig,
}))
@observer
class Plate extends React.Component {
    render() {
        const { chaidanConfig } = this.props;
        if (chaidanConfig.isChaidan) {
            return <ChaidanPlate />;
        } else {
            return <UsualPlate />;
        }
    }
}

export default Plate;