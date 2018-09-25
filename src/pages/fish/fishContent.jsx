import React from 'react';
import {Tabs} from 'antd';

class FishContent extends React.PureComponent {
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <Tabs defaultActiveKey="1" onChange={this.tabChange}>
                <TabPane tab="打鱼流程" key="1">
                    <article className="tab-content">
                        <h3 className="tab-content-title">打鱼流程</h3>
                        <p className="tab-content-detail">客人在大厅选择桌子，入桌后选择空的位置进入到单独的捕鱼场景，4
                            位玩家共享一个大型捕鱼场景，鱼群会在4个场景中穿梭。客人点击鼠标左键（或键盘空格）发炮，炮弹会射向鼠标所在位置。当炮弹命中鱼，会有明显的打中效果，打中墙壁会反弹。客人每发出一发子弹，余额扣除发射子弹费用，当子弹没有成功打中鱼（场景中没有鱼或者鱼已经死亡），返还子弹费用给客人。如果打中鱼，鱼死亡有明显的金币效果，客人立刻获得鱼的价值；如果打中的是大鱼，会有更加明显的获奖提示并有全服的推送通知。
                        </p>
                        <div className="fish-img-wrapper">
                            <img className="fl" src={require("../../images/fish/flshliu.jpg")} alt="打鱼流程"/>
                            <img className="fr" src={require("../../images/fish/flishliub.jpg")} alt="打鱼流程"/>
                        </div>
                    </article>
                </TabPane>
                <TabPane tab="捕鱼王玩法" key="2">
                    <article className="tab-content">
                        <h3 className="tab-content-title">捕鱼王玩法</h3>
                        <p className="tab-content-detail">客人每局结束后，系统会评选出本局的捕鱼王，该场景子弹有效额度最高的即为捕鱼王, 若该场景未发射任何子弹,
                            则不产生捕鱼王。而捕鱼王奖励为本局所有玩家子弹支出的 0.2%。</p>
                        <div className="clearfix fish-img-wrapper"><img className="fl" src={require("../../images/fish/flshking.jpg")} alt="捕鱼王玩法"/>
                            <img className="fr" src={require("../../images/fish/flshkingb.jpg")} alt="捕鱼王玩法"/></div>
                    </article>
                </TabPane>
                <TabPane tab="累积奖金和场景宝箱" key="3">
                    <article className="tab-content">
                        <h3 className="tab-content-title">累积奖金和场景宝箱</h3>
                        <p className="tab-content-detail">累积奖金初始值为20万，我们从客人每次消费中都会抽取大部分投入累积奖金中，抽水和投入规则在下面会详细说明。当累积奖金达到某个额度，我们就会放出其中的一部分作为大奖反馈给客人，中奖方式为大转盘方式；场景宝箱根据本场景中玩家贡献度，不断的累积张开，打中带宝石的鱼累积更快。宝箱一直都有可能放出奖励，打开幅度越大发放几率越大。宝箱打开幅度就是开奖概率，幅度越大，开奖概率越大。宝箱的奖励是五等奖，奖励最少，中奖概率最大。</p>
                        <div className="clearfix fish-img-wrapper"><img className="fl" src={require("../../images/fish/flshscene.jpg")} alt="累积奖金和场景宝箱"/>
                            <img className="fr" src={require("../../images/fish/flshsceneb.jpg")} alt="累积奖金和场景宝箱"/></div>
                    </article>
                </TabPane>
                <TabPane tab="小地图说明" key="4">
                    <article className="tab-content">
                        <h3 className="tab-content-title">小地图说明</h3>
                        <p className="tab-content-detail">在游戏中，左上角有小地图的展示，游戏中的鱼分为低分、中分、高分，小地图这里会展示高分(15-19
                            號)魚，场景还剩下多少时间，玩家可以方便看到这些大鱼的位置、场景中其他玩家的收入状况、玩家的数量，同时还可以方便切换到没有人的位置。如果觉得挡住了打鱼，可以点击右上角的小箭头缩回去</p>
                        <div className="clearfix fish-img-wrapper"><img className="fl" src={require("../../images/fish/smallmap.jpg")} alt="小地图说明"/>
                            <img className="fr" src={require("../../images/fish/smallmapb.jpg")} alt="小地图说明"/></div>
                    </article>
                </TabPane>
                <TabPane tab="快速打鱼" key="5">
                    <article className="tab-content">
                        <h3 className="tab-content-title">快速打鱼</h3>
                        <p className="tab-content-detail">我们设计5种不同倍数的炮供客人选择，每种炮消耗的价值不一样，倍数越高击杀率越高，同时每个倍数的炮台能够打到的鱼也不一样，
                            高倍数的炮只能打中大鱼而忽略小鱼，比如 100 块钱的炮只能打中 100 块钱以上的鱼，不会产生 100 块钱的炮打中 50
                            的鱼，让客人击杀了鱼，实际还亏本的情况发生。同时客人也可以利用这一点打大鱼而不用担心被小鱼阻挡。当切换炮弹的时候，界面也会清晰的把不能打的鱼变为灰色。</p>
                        <div className="clearfix fish-img-wrapper"><img className="fl" src={require("../../images/fish/kplayflsh.jpg")} alt="快速打鱼"/>
                            <img className="fr" src={require("../../images/fish/kplayflshb.jpg")} alt="快速打鱼"/></div>
                    </article>
                </TabPane>
                <TabPane tab="放鱼抽水明细说明" key="6">
                    <article className="tab-content">
                        <h3 className="tab-content-title">放鱼抽水明细说明</h3>
                        <p className="tab-content-detail">放鱼规则：我们每局游戏是放出5条大鱼，当全部大鱼被打死后会重新刷新出5条，其他小鱼没有固定刷新模式，目前是按随机的方式刷新。</p>
                        <p className="tab-content-detail">打鱼抽水规则：我们游戏规则完全依据概率学去设计， 关于本游戏的RTP返奖率，是 98%（不包括jackpot的内容）。</p>
                        <div className="clearfix fish-img-wrapper"><img className="fl" src={require("../../images/fish/flshkingofstat.jpg")} alt="放鱼抽水明细说明"/>
                            <img className="fr" src={require("../../images/fish/flshkingofstatb.jpg")} alt="放鱼抽水明细说明"/></div>
                    </article>
                </TabPane>
            </Tabs>
        )
    }
}

export default FishContent;