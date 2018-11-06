/**
 * Created by Orange on 2018-10-16 14:46:33.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';
import ChaidanPlate from './ChaidanPlate';
import UsualPlate from './UsualPlate';
import K3Plate from './K3Plate';

@inject(stores => ({
    chaidanConfig: stores.lotteryStore.chaidanConfig,
    lotteryType: stores.lotteryStore.lotteryType,
}))
@observer
class Plate extends React.Component {
    render() {
        const { chaidanConfig, lotteryType } = this.props;
        let plate;
        if (lotteryType === 'k3') {
            plate = <K3Plate />;
        } else {
            if (chaidanConfig.chaidan) {
                plate = <ChaidanPlate />;
            } else {
                plate = <UsualPlate />;
            }
        }
        return (
            <div className="plate-wrapper">
                <div className="plate-wrapper-inner">
                    {plate}
                </div>
            </div>
        );
    }
}

export default Plate;