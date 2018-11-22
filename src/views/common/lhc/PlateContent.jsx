import React from 'react';
import { inject, observer } from 'mobx-react';
import PlateHtml from './PlateHtml.jsx';
import FilterHtml from './FilterHtml.jsx';

@inject('lhcStore')
@observer
class PlateContent extends React.Component {
    render() {
        const { method } = this.props.lhcStore;
        return (
            <div className="clearfix plate-list-wrapper" method={method}>
                <PlateHtml />
                <FilterHtml />
            </div>
        );
    }
}

export default PlateContent;