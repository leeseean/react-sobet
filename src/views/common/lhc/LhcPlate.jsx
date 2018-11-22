import React from 'react';
import { inject, observer } from 'mobx-react';
import PlateTabs from './PlateTabs.jsx';

@inject('lhcStore')
@observer
class LhcPlate extends React.Component {
    componentDidMount() {
        const { getOddsObj } = this.props.lhcStore;
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