import React from 'react';
import { inject, observer } from 'mobx-react';

@inject(stores => ({
    activeTab: stores.plateStore.activeTab,
    isChaidan: stores.plateStore.isChaidan,
    tabConfig: stores.plateStore.tabConfig,
    plateConfig: stores.plateStore.plateConfig,
    method: stores.plateStore.method,
    lotteryCode: stores.lotteryStore.lotteryCode,
    lotteryType: stores.lotteryStore.lotteryType,
}))
@observer
class ChaidanPlate extends React.Component {
    render() {
        const { plateConfig, lotteryCode, activeTab, method } = this.props;
        const itemObj = activeTab['subTabConfig'].find(item => {
            return item['playWay'].some(({ en }) => en === method);
        });
        const plateObj = itemObj['playWay'].find(({ en }) => en === method);
        const pos = itemObj['pos'];
        const num = plateObj['plate'];
        const filter = plateConfig[lotteryCode][method]['plate']['filter'];
        return (
            <div className="plate-wrapper">
                <div className="plate-wrapper-inner">
                    {
                        pos.map(val => {
                            return (
                                <div key={val} className="clearfix plate-item">
                                    <div className="fl plate-item-pos">{val}</div>
                                    <div className="fl clearfix plate-item-nums">
                                        {num.map((en, cn) => <div className="fl plate-item-num" m-method={en}>{cn}</div>)}
                                    </div>
                                    <div className="fr clearfix plate-item-filters">
                                        {filter.map(v => <div className="fr plate-item-filter">{v}</div>)}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ChaidanPlate;