import React from 'react';
import { inject, observer } from 'mobx-react';
import PlateTabs from './PlateTabs';

@inject('xglhcStore')
@observer
class LhcPlate extends React.Component {
    componentDidMount() {
        const { getOddsObj } = this.props.xglhcStore;
        getOddsObj();
    }
    render() {
        return (
            <div className="lhc-plate-wrapper">
                <div className="lhc-plate-tabs">
                    <PlateTabs />
                </div>
            </div>
        );
    }
}

export default LhcPlate;