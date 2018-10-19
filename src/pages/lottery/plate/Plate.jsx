/**
 * Created by Orange on 2018-10-16 14:46:33.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';
import ChaidanPlate from './ChaidanPlate';
import UsualPlate from './UsualPlate';
import K3Plate from './K3Plate';

@inject(stores => ({
    chaidanConfig: stores.plateStore.chaidanConfig,
    lotteryType: stores.lotteryStore.lotteryType,
}))
@observer
class Plate extends React.Component {
    render() {
        const { chaidanConfig, lotteryType } = this.props;
        if (lotteryType === 'k3') {
            return <K3Plate />;
        } else {
            if (chaidanConfig.isChaidan) {
                return <ChaidanPlate />;
            } else {
                return <UsualPlate />;
            }
        }
    }
}

export default Plate;