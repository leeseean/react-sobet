import React from 'react';
import $http from '../../utils/ajax';
import {message} from 'antd';

class GameList extends React.Component {
    idnListsData = [
        {
            param: 'TXH',
            imgSrc: require('../../images/poker/dezhoupuke.png'),
            title: '德州扑克',
            type: 'idn'
        }, {
            param: 'LPK',
            imgSrc: require('../../images/poker/zhenrendezhou.png'),
            title: '真人德州',
            type: 'idn'
        }, {
            param: 'EBN',
            imgSrc: require('../../images/poker/duominuo9.png'),
            title: '多米诺9',
            type: 'idn'
        }, {
            param: 'DMM',
            imgSrc: require('../../images/poker/duominuo99.png'),
            title: '多米诺99',
            type: 'idn'
        }, {
            param: 'BTM',
            imgSrc: require('../../images/poker/duominuo.png'),
            title: '多米诺',
            type: 'idn'
        }, {
            param: 'CAP',
            imgSrc: require('../../images/poker/shisanzhang.png'),
            title: '十三张',
            type: 'idn'
        }
    ]
    kgameListsData = [
        {
            param: '1234567890abcdef',
            imgSrc: require('../../images/poker/caijindezhou.png'),
            title: '彩金德州',
            type: 'kgame'
        }, {
            param: '904ad648d161251c4ac195f339269c44',
            imgSrc: require('../../images/poker/2majiang.png'),
            title: '新二人麻将',
            type: 'kgame'
        }, {
            param: '3e137d9e63d5a8e34fefb8bfd1aab357',
            imgSrc: require('../../images/poker/duojinbuyu.png'),
            title: '夺金捕鱼',
            type: 'kgame'
        }, {
            param: 'c13bb7f1fd87361a1521d94d56eaa492',
            imgSrc: require('../../images/poker/wukongnaohai.png'),
            title: '悟空闹海',
            type: 'kgame'
        }, {
            param: 'dcb2c811292efb7216748802d91e731c',
            imgSrc: require('../../images/poker/senlinwuhui.png'),
            title: '森林舞会',
            type: 'kgame'
        }, {
            param: '7b577d729ce1a9959f326b0ed8fa7460',
            imgSrc: require('../../images/poker/shuiguoji.png'),
            title: '幸运水果机',
            type: 'kgame'
        }, {
            param: '4126d6e9e679c9574dc799e06fc70e6a',
            imgSrc: require('../../images/poker/benchibaoma.png'),
            title: '奔驰宝马',
            type: 'kgame'
        }, {
            param: '0a636149fdf36c98e47e7b4e62fdbc7a',
            imgSrc: require('../../images/poker/bairenniuniu.png'),
            title: '百人牛牛',
            type: 'kgame'
        }, {
            param: '8354e40811382019262acc7531c87c5b',
            imgSrc: require('../../images/poker/28gang.png'),
            title: '二八杠',
            type: 'kgame'
        }, {
            param: 'fab61991dd952f155e430b82d9537e77',
            imgSrc: require('../../images/poker/dezhouniuzai.png'),
            title: '德州牛仔',
            type: 'kgame'
        }, {
            param: '1aa39cb263960aca4e491e7206b92cd0',
            imgSrc: require('../../images/poker/wawa.png'),
            title: '中国娃娃',
            type: 'kgame'
        }, {
            param: 'abaa8a9ffc7a5afb37473a99653ca44d',
            imgSrc: require('../../images/poker/baijiale.png'),
            title: '百家乐',
            type: 'kgame'
        }
    ]
    componentDidMount() {
        this.register();
    }
    register() { //先调接口注册下。不然一开始转账的时候会报错
        $http({url: "/api/sobet/idn/getIdnUrl", method: 'GET'}).then((res) => {}).catch((res) => {});
        $http({url: "/api/sobet/KG/getKGAccessToken", method: 'GET'}).then((res) => {
            //获取accessToken
            const accessToken = res.accessToken;
            $http({
                url: "/api/sobet/KG/getKGGameUrl",
                method: 'GET',
                params: {
                    appId: '1234567890abcdef',
                    accessToken
                },
                dataType: 'json'
            }).then((res) => {}).catch((res) => {});
        }).catch((res) => {
            this.register();
        });
    }
    playGame({
        param,
        type
    }, event) {
        const proxyElem = event.target.nextElementSibling;
        event.persist();//如果您想以异步的方式访问事件的属性值，你必须在事件回调中调用event.persist()方法，这样会在池中删除合成事件，并且在用户代码中保留对事件的引用。
        message.config({
            top: '40%',
            duration: 2,
            maxCount: 3,
        });
        switch (type) {
            case 'idn':
                $http({url: "/api/sobet/idn/getIdnUrl", method: 'GET'}).then((res) => {
                    const url = res.url;
                    if (!url) {
                        message.error('服务异常');
                        return;
                    }
                    proxyElem.setAttribute('href', `${url}&game=${param}`);
                    proxyElem.click();
                }).catch((res) => {
                    message.error('服务异常');
                });
                break;
            case 'kgame':
                $http({url: "/api/sobet/KG/getKGAccessToken", method: 'GET'}).then((res) => {
                    //获取accessToken
                    const accessToken = res.accessToken;
                    if (!accessToken) {
                        message.error('服务异常');
                        return;
                    }
                    $http({
                        url: "/api/sobet/KG/getKGGameUrl",
                        method: 'GET',
                        params: {
                            appId: param,
                            accessToken
                        }
                    }).then((res) => {
                        const url = res.gameUrl;
                        if (!url) {
                            message.error('服务异常');
                            return;
                        }
                        proxyElem.setAttribute('href', url);
                        proxyElem.click();
                    }).catch((res) => {
                        message.error('服务异常');
                    });
                }).catch((res) => {
                    message.error('服务异常');
                });
                break;
            default:
                break;
        }
        message.destroy();
    }
    renderList(listsData) {
        return listsData.map((item, index) => {
            const {imgSrc, param, title, type} = item;
            return (
                <li className="qipai-item" key={index}>
                    <img alt="" src={imgSrc} width="373" height="160"/>
                    <a
                        className="play-btn"
                        href="javascript:void(0)"
                        game={param}
                        type={type}
                        onClick={(event) => this.playGame({
                        param,
                        type
                    }, event)}>开始游戏</a>
                    <a
                        className="hide-btn"
                        href="javascript:void(0)"
                        rel="noopener noreferrer"
                        style={{
                        display: 'none'
                    }}
                        target="_blank"></a>
                    <div className="qipai-item-bottom">
                        <i className={`mini-icon mini-${type}-icon`}></i>
                        <span className="qipai-title">{title}</span>
                    </div>
                </li>
            );
        });
    }
    render() {
        switch (this.props.gameType) {
            case 'all':
                return this.renderList([
                    ...this.idnListsData,
                    ...this.kgameListsData
                ]);
            case 'idn':
                return this.renderList(this.idnListsData);
            case 'kgame':
                return this.renderList(this.kgameListsData);
            default:
                return this.renderList([
                    ...this.idnListsData,
                    ...this.kgameListsData
                ]);
        }
    }
}

export default GameList;