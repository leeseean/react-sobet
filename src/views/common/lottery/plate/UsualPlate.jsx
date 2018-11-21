
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Input } from 'antd';
import DwdAllPos from './DwdAllPos.jsx';

const { TextArea } = Input;

@inject('lotteryStore')
@observer
class UsualPlate extends React.Component {
    render() {
        const { plateConfig, method, lotteryCode, lotteryType, hotShowFlag, missShowFlag, hitFrequency, skipFrequency, selectNum, selectedNums, filterNum, inputedNums, deleteInputItem, clearInputNums, uploadFile, inputNum } = this.props.lotteryStore;
        if (!plateConfig[lotteryCode][method]) {
            return null;
        }
        const { isDwdAllPosFlag } = plateConfig[lotteryCode][method];
        const { type, pos, num, isQw, isLonghu, area, numOfEach, filter = [] } = plateConfig[lotteryCode][method]['plate'];
        let extraClass = '';
        if (isQw) {
            extraClass = 'qw';
        } else if (isLonghu) {
            extraClass = 'longhu';
        }
        const ClickPlate = ({ pos = [], num, filter, hitFrequency, skipFrequency }) => {
            // const pos = pos ? pos : [];
            const hitToPos = pos.length - hitFrequency.length;
            const skipToPos = pos.length - skipFrequency.length;
            const HitSkipNums = ({ arr, type }) => {
                return arr.map(n => {
                    const max = Math.max(...arr);
                    const min = Math.min(...arr);
                    if (n === max) {
                        return <div key={n} className="fl hot-skip-num max" type={type}>{n}</div>;
                    }
                    if (n === min) {
                        return <div key={n} className="fl hot-skip-num min" type={type}>{n}</div>;
                    }
                    return <div key={n} className="fl hot-skip-num" type={type}>{n}</div>;
                });
            };
            return pos.map((val, idx) => {
                return (
                    <React.Fragment key={val}>
                        <div className="clearfix plate-item" lottery-type={lotteryType} lottery-code={lotteryCode}>
                            <div className={`fl plate-item-pos ${extraClass}`}>{val}</div>
                            <div className="fl clearfix plate-item-nums" method={method}>
                                {num.map(v => {
                                    let content = null;
                                    let className = '';
                                    if (isQw) {
                                        content = ([<div key="1" className="qw-text" value={v}></div>, <div key="2" className="qw-odd">1中3.67</div>]);
                                        className = 'plate-item-num-qw';
                                    } else if (isLonghu) {
                                        const LonghuDots = ({ area }) => {
                                            return [...Array(5)].map((a, b) => {
                                                if (area.includes(b)) {
                                                    return <b className="longhu-pos active"></b>;
                                                }
                                                return <b className="longhu-pos"></b>;
                                            });
                                        };
                                        content = (<div className="num-longhu-inner"><div className="longhu-pos-wrapper"><LonghuDots area={area} /></div><div className="longhu-text" value={v}></div><div className="longhu-odd">1中3.67</div></div>);
                                        className = 'plate-item-num-longhu';
                                        return <div key={v} className={`fl ${className} ${(selectedNums[idx] && selectedNums[idx].includes(v)) ? 'active' : ''}`} value={v} onClick={() => selectNum(val, idx, v, pos)}>{content}</div>;
                                    } else {
                                        content = v;
                                        className = 'plate-item-num';
                                    }
                                    return <div key={v} className={`fl ${className} ${(selectedNums[idx] && selectedNums[idx].includes(v)) ? 'active' : ''}`} onClick={() => selectNum(val, idx, v, pos)}>{content}</div>;
                                })}
                            </div>
                            <div className={`fr clearfix plate-item-filters ${extraClass}`}>
                                {filter.map(v => <div key={v} className={`fr plate-item-filter`} onClick={() => filterNum(val, idx, v, num)}>{v}</div>)}
                            </div>
                        </div>
                        {
                            (missShowFlag && skipFrequency && skipFrequency.length > 0) ? (<div className="clearfix hot-skip-item">
                                <div className="fl hot-skip-title"><span className="title">遗漏</span></div>
                                <div className="fl clearfix hot-skip-nums">
                                    <HitSkipNums arr={skipFrequency[skipToPos + idx]} type="skip" />
                                </div>
                            </div>) : null
                        }
                        {
                            (hotShowFlag && hitFrequency && hitFrequency.length > 0) ? (
                                <div className="clearfix hot-skip-item">
                                    <div className="fl hot-skip-title"><span className="title">冷热</span></div>
                                    <div className="fl clearfix hot-skip-nums">
                                        <HitSkipNums arr={hitFrequency[hitToPos + idx]} type="skip" />
                                    </div>
                                </div>
                            ) : null
                        }
                    </React.Fragment>
                );
            });
        };
        const InputPlate = () => {
            return (
                <React.Fragment>
                    <div className="input-plate-wrapper">
                        <ul className="clearfix input-value-list">
                            {
                                inputedNums.slice().map((value, index) => {
                                    return (
                                        <li key={index} className="input-value-item">
                                            <span className="text">{value}</span>
                                            <i className="close" onClick={() => deleteInputItem(index)}>x</i>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <TextArea onPressEnter={event => inputNum(numOfEach, event)} placeholder="请输入投注号码，按回车键确认选号" autosize={{ minRows: 3, maxRows: 6 }} />
                    </div>
                    <div className="clearfix input-plate-buttons">
                        <label htmlFor="txt-upload" className="fl upload" title="只接受txt后缀文件，每注号码之间请用一个 空格[ ]、逗号[,] 或者 分号[;] 隔开"></label>
                        <input onChange={event => uploadFile(numOfEach, event)} type="file" id="txt-upload" name="txt-upload" accept=".txt" multiple style={{ visibility: 'hidden' }} />
                        <div onClick={clearInputNums} className={`fl clear ${inputedNums.length > 0 ? '' : 'disabled'}`}>清空</div>
                    </div>
                </React.Fragment>
            );
        };
        const reflectConfig = {
            click: <React.Fragment key="click">
                <ClickPlate {...{ pos, num, filter, hitFrequency, skipFrequency }} />
                {isDwdAllPosFlag ? <DwdAllPos {...{ pos, num, filter }} /> : null}
            </React.Fragment>,
            input: <InputPlate key="input" />
        };
        return reflectConfig[type];
    }
}

export default UsualPlate;