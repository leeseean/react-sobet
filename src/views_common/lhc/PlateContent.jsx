import React from 'react';
import { inject, observer } from 'mobx-react';
import PlateHtml from './PlateHtml';
import FilterHtml from './FilterHtml';

@inject('xglhcStore')
@observer
class PlateContent extends React.Component {
    render() {
        const { method } = this.props.xglhcStore;
        return (
            <div className="clearfix plate-list-wrapper" method={method}>
                <PlateHtml />
                <FilterHtml />
            </div>
        );
    }
}

export default PlateContent;