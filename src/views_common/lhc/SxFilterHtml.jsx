import React from 'react';
import { inject, observer } from 'mobx-react';
import { calcSxArr } from '../../utils/algorithm';

@inject('xglhcStore')
@observer
class SxFilterHtml extends React.Component {
    render() {
        const { method, filterNum, filterArr, cnBmnsx } = this.props.xglhcStore;
        switch (method) {
            case 'tm_tm_zx':
            case 'zt1m_zt1m_zt1m':
            case 'lm_lm_2z2':
            case 'lm_lm_3z2':
            case 'lm_lm_3z3':
                const filterSxArr = calcSxArr(cnBmnsx);
                return (
                    <div className="filter-num-zodiac clearfix">
                        {
                            filterSxArr.map((item, index) => {
                                return <div key={index} className={`fl filter-num-zodiac-${item['en']} ${filterArr.includes(item['cn']) ? 'on' : ''}`} onClick={(event) => filterNum(item['cn'], event)} filter={item['code']}>{item['cn']}</div>
                            })
                        }
                    </div>
                );
            default:
                return null;
        }
    }
}

export default SxFilterHtml;