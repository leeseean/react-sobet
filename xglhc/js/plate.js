
/* 
    渲染dom的代码放在最前面，避免dom很晚才渲染出来造成页面卡顿的假象
*/
const genPlate = (lotteryCode) => {
    const userName = localStorage.getItem('userName');    
    return {
        plateType: '',//input 输入型选号盘 click点击型选号盘
        method: '',//玩法code 如tm_tm_zx
        rateType: 'A',//奖金模式 A面B面
        odds: {},
        bmnsx: '',
        init() {
            const me = this;
            me.getBnsx();
            me.switchTabEvent();
            me.switchSubtabEvent();
            me.switchOddsEvent();
            me.renderTab(); //渲染  
        },
        getBnsx() {
            const me = this;
            if (me.bmnsx) {
                return Promise.resolve(me.bmnsx);
            }
            return new Promise((resolve, reject) => {
                me.ajaxIssue({
                    'lottery': lotteryCode,
                }, res => {
                    if (res.result) {
                        const issue = res.result.issue;
                        me.ajaxZobiac({
                            'lottery': lotteryCode,
                            'issue': issue
                        }, resp => {
                            const bmnsx = resp.result;
                            me.bmnsx = bmnsx;
                            resolve(bmnsx);
                        });
                    }
                });
            });
        },
        renderTab() {
            let tabHtml = '';
            const ltTabObj = LotteryConfig[lotteryCode]['ltTab'];
            for (let key in ltTabObj) {
                tabHtml += `<span data-type="${key}">${ltTabObj[key]}</span>`;
            }
            $('#lottery .tab').html(tabHtml);
            const tabType = localStorage.getItem(`${userName}-tabType`);
            if (tabType) {
                $('#lottery .tab').find(`span[data-type="${tabType}"]`).trigger('click');
            } else {
                $('#lottery .tab').find('span').eq(0).trigger('click');
            }
        },
        renderSubTab(subTabObj) {
            const tabType = $('#lottery .tab').find('span.on').attr('data-type');
            let subTabHtml = '';
            for (let k in subTabObj) {
                subTabHtml += `<dl><dt>${subTabObj[k].title}</dt>`;
                const methodObj = subTabObj[k].method;
                for (let m in methodObj) {
                    subTabHtml += `<dd data-type="${k}_${m}" class="js-subTab"><i></i>${methodObj[m].desc}</dd>`;
                }
            }
            subTabHtml += `</dl>`;
            $('#lottery .subtab').html(subTabHtml);
    
            const method = localStorage.getItem(`method`);
            const arrMethod = method ? method.split('_') : [];
            if (arrMethod[0] === tabType) {
                $('#lottery .subtab').find(`dl dd[data-type="${arrMethod[1]}_${arrMethod[2]}"]`).trigger('click');
            } else {
                $('#lottery .subtab').find('dl dd').eq(0).trigger('click');
            }
        },
        switchTabEvent() {
            const me = this;
            //点击tab切换
            $('#lottery .tab').off('click').on('click', 'span', function () {
                $(this).addClass('on').siblings().removeClass('on');
                const tabType = $(this).attr('data-type');
                localStorage.setItem(`${userName}-tabType`, tabType);
                me.renderSubTab(LotteryConfig[lotteryCode]['ltMethod'][tabType]);
            });
        },
        switchSubtabEvent() {
            const me = this;
             //点击subtab切换
            $('#lottery .subtab').off('click').on('click', 'dd', function () {
                if ($(this).hasClass('on')) {//防止频繁点击
                    return;
                }
                $(this).addClass('on').siblings('dd').removeClass('on');
                const tabType = $('#lottery .tab').find('span.on').attr('data-type');
                const subtabType = $(this).attr('data-type');
                const method = `${tabType}_${subtabType}`;
                $('.js-plate').attr('method', method);
                me.method = method;
                me.reset();
                me.renderPlate(method, $('.js-plate'));
                me.renderTips(method);
                localStorage.setItem('method', method);
            });
        },
        renderPlate(method, jqElement) {
            const me = this;
            let html;
            switch (method) {
                case 'tm_tm_zx':
                case 'zt1m_zt1m_zt1m':                
                    let zxArr = Array(49).fill(0).map((value, index) => {
                        return {
                            'cn': `0${index+1}`.slice(-2),
                            'en': `0${index+1}`.slice(-2)
                        };
                    });
                    zxArr = [
                        zxArr.slice(0,10),
                        zxArr.slice(10,20),
                        zxArr.slice(20,30),
                        zxArr.slice(30,40),
                        zxArr.slice(40,49)                      
                    ];
                    html = me.getInputPlateHtml(method, zxArr);
                    jqElement.html(html);
                    me.getBnsx().then(bmnsx => {
                        sessionStorage.setItem('bmnsx', bmnsx);
                               
                        const filterSxArr = calcSxArr(bmnsx);
                        const filterSxHtml = filterSxArr.map(item => {
                            return `
                                <div class="js-filter-num filter-num-zodiac-${item['en']} fl" filter="${item['code'].toString()}">${item['cn']}</div>
                            `;
                        }).join('');
                        const zxFilterHtml = `
                            <div class="filter-num-wrap-${method} fr">
                                <div class="filter-num-title-${method}">快速筛号</div>
                                <div class="filter-num-red clearfix">
                                    <div class="js-filter-num filter-num-red-da fl" filter="29,30,34,35,40,45,46">红大</div>
                                    <div class="js-filter-num filter-num-red-xiao fl" filter="01,02,07,08,12,13,18,19,23,24">红小</div>
                                    <div class="js-filter-num filter-num-red-dan fl" filter="01,07,13,19,23,29,35,45">红单</div>
                                    <div class="js-filter-num filter-num-red-shuang fl" filter="02,08,12,18,24,30,34,40,46">红双</div>
                                </div>
                                <div class="filter-num-blue clearfix">
                                    <div class="js-filter-num filter-num-blue-da fl" filter="25,26,31,36,37,41,42,47,48">蓝大</div>
                                    <div class="js-filter-num filter-num-blue-xiao fl" filter="03,04,09,10,14,15,20">蓝小</div>
                                    <div class="js-filter-num filter-num-blue-dan fl" filter="03,09,15,25,31,37,41,47">蓝单</div>
                                    <div class="js-filter-num filter-num-blue-shuang fl" filter="04,10,14,20,26,36,42,48">蓝双</div>    
                                </div>
                                <div class="filter-num-green clearfix">
                                    <div class="js-filter-num filter-num-green-da fl" filter="27,28,32,33,38,39,43,44,49">绿大</div>
                                    <div class="js-filter-num filter-num-green-xiao fl" filter="05,06,11,16,17,21,22">绿小</div>
                                    <div class="js-filter-num filter-num-green-dan fl" filter="05,11,17,21,27,33,39,43,49">绿单</div>
                                    <div class="js-filter-num filter-num-green-shuang fl" filter="06,16,22,28,32,38,44">绿双</div>    
                                </div>
                                <div class="filter-num-zodiac clearfix">
                                    ${filterSxHtml}   
                                </div>
                                <div class="filter-num-input-wrap">
                                    <div class="filter-num-input-title">单注金额：</div>
                                    <input class="filter-num-input" type="number" min="1" max="999999">   
                                </div>
                                <div class="filter-num-reset">
                                    <i class="filter-num-reset-icon"></i>重置
                                </div>
                            </div>
                        `;
                        if ($('.js-subTab.on').data('type') === 'tm_zx' || $('.js-subTab.on').data('type') === 'zt1m_zt1m') {//防止切换的时候网络延迟别的玩法append这个进去
                            jqElement.append(zxFilterHtml);
                        }
                        me.registerEvent();
                        me.updateOdds(); 
                    });
                    break;
                case 'tm_tm_sx':
                case 'zt1x_zt1x_zt1x':
                    me.getBnsx().then(bmnsx => {
                        sessionStorage.setItem('bmnsx', bmnsx);
                        const sxArr = [calcSxArr(bmnsx).slice(0, 6), calcSxArr(bmnsx).slice(6, 12)];
                        const sxFilterHtml = `
                            <div class="filter-num-wrap fl clearfix" method="${method}">
                                <div class="fl js-filter-num filter-zodiac-tab filter-poultry-zodiac" filter="niu,ma,yang,ji,gou,zhu">家禽家畜</div>
                                <div class="fl js-filter-num filter-zodiac-tab filter-wild-zodiac" filter="shu,hu,tu,long,she,hou">野外兽类</div>
                                <div class="fl filter-num-input-title">单注金额：</div>
                                <input class="fl filter-num-input" type="number" min="1" max="999999">   
                            </div>
                        `;
                        html = me.getInputPlateHtml(method, sxArr, sxFilterHtml);
                        if ($('.js-subTab.on').data('type') === 'tm_sx' || $('.js-subTab.on').data('type') === 'zt1x_zt1x') {
                            jqElement.html(html);//防止渲染到别的tab下                            
                        }
                        me.updateOdds();                            
                        me.registerEvent();
                    });
                    break;
                case 'tm_tm_sb':
                    const sbArr = [
                        [{
                            'cn': '红',
                            'en': 'hong',
                            'type': '色波选号'
                        }],
                        [{
                            'cn': '蓝',
                            'en': 'lan',
                            'type': '色波选号'
                        }],
                        [{
                            'cn': '绿',
                            'en': 'lv',
                            'type': '色波选号'
                        }]
                    ];
                    const bsbArr = [
                        [{
                                'cn': '红大',
                                'en': 'hongda',
                                'code': ['29', '30', '34', '35', '40', '45', '46'],
                                'type': '半波选号'
                            },
                            {
                                'cn': '红小',
                                'en': 'hongxiao',
                                'code': ['01', '02', '07', '08', '12', '13', '18', '19', '23', '24']
                            },
                            {
                                'cn': '红单',
                                'en': 'hongdan',
                                'code': ['01', '07', '13', '19', '23', '29', '35', '45']
                            },
                            {
                                'cn': '红双',
                                'en': 'hongshuang',
                                'code': ['02', '08', '12', '18', '24', '30', '34', '40', '46']
                            },
                            {
                                'cn': '蓝大',
                                'en': 'landa',
                                'code': ['25', '26', '31', '36', '37', '41', '42', '47', '48']
                            },
                            {
                                'cn': '蓝小',
                                'en': 'lanxiao',
                                'code': ['03', '04', '09', '10', '14', '15', '20']
                            }
                        ],
                        [{
                                'cn': '蓝单',
                                'en': 'landan',
                                'code': ['03', '09', '15', '25', '31', '37', '41', '47']
                            },
                            {
                                'cn': '蓝双',
                                'en': 'lanshuang',
                                'code': ['04', '10', '14', '20', '26', '36', '42', '48']
                            },
                            {
                                'cn': '绿大',
                                'en': 'lvda',
                                'code': ['27', '28', '32', '33', '38', '39', '43', '44', '49']
                            },
                            {
                                'cn': '绿小',
                                'en': 'lvxiao',
                                'code': ['05', '06', '11', '16', '17', '21', '22']
                            },
                            {
                                'cn': '绿单',
                                'en': 'lvdan',
                                'code': ['05', '11', '17', '21', '27', '33', '39', '43', '49']
                            },
                            {
                                'cn': '绿双',
                                'en': 'lvshuang',
                                'code': ['06', '16', '22', '28', '32', '38', '44']
                            }
                        ]
                    ];
                    html = me.getInputPlateHtml(method, sbArr) + me.getInputPlateHtml(method, bsbArr);
                    jqElement.html(html);
                    me.updateOdds();                
                    me.registerEvent();
                    break;
                case 'tm_tm_dxds':
                    const dxdsArr = [
                        [{
                            'cn': '大',
                            'en': 'da',
                            'hint': '(25-49为大)'
                        }, {
                            'cn': '小',
                            'en': 'xiao',
                            'hint': '(01-24为小)'
                        }],
                        [{
                            'cn': '单',
                            'en': 'dan'
                        }, {
                            'cn': '双',
                            'en': 'shuang'
                        }]
                    ];
                    html = me.getInputPlateHtml(method, dxdsArr);
                    jqElement.html(html);
                    me.updateOdds();                
                    me.registerEvent();
                    break;
                case 'tm_tm_ws':
                case 'ztws_ztws_ztws':
                    const wsArr = [
                        [{
                                'cn': '0尾',
                                'en': '0w',
                                'code': ['10', '20', '30', '40']
                            },
                            {
                                'cn': '1尾',
                                'en': '1w',
                                'code': ['01', '11', '21', '31', '41']
                            },
                            {
                                'cn': '2尾',
                                'en': '2w',
                                'code': ['02', '12', '22', '32', '42']
                            },
                            {
                                'cn': '3尾',
                                'en': '3w',
                                'code': ['03', '13', '23', '33', '43']
                            },
                            {
                                'cn': '4尾',
                                'en': '4w',
                                'code': ['04', '14', '24', '34', '44']
                            }
                        ],
                        [{
                                'cn': '5尾',
                                'en': '5w',
                                'code': ['05', '15', '25', '35', '45']
                            },
                            {
                                'cn': '6尾',
                                'en': '6w',
                                'code': ['06', '16', '26', '36', '46']
                            },
                            {
                                'cn': '7尾',
                                'en': '7w',
                                'code': ['07', '17', '27', '37', '47']
                            },
                            {
                                'cn': '8尾',
                                'en': '8w',
                                'code': ['08', '18', '28', '38', '48']
                            },
                            {
                                'cn': '9尾',
                                'en': '9w',
                                'code': ['09', '19', '29', '39', '49']
                            }
                        ]
                    ];
                    html = me.getInputPlateHtml(method, wsArr);
                    jqElement.html(html);
                    me.updateOdds();                
                    me.registerEvent();
                    break;
                case 'lx_lx_2lx':
                case 'lx_lx_3lx':
                case 'lx_lx_4lx':
                    me.getBnsx().then(bmnsx => {
                        sessionStorage.setItem('bmnsx', bmnsx);
                        const lxArr = calcSxArr(bmnsx);
                        html = me.getNoInputPlateHtml(method, lxArr);
                        if (['lx_2lx', 'lx_3lx', 'lx_4lx'].indexOf($('.js-subTab.on').data('type')) !== -1) {
                            jqElement.html(html);//防止渲染到别的tab下                            
                        }
                        me.updateOdds();                            
                        me.registerEvent();
                    });
                    break;
                case 'lm_lm_2z2':
                case 'lm_lm_3z2':
                case 'lm_lm_3z3':
                    const lmArr = Array(49).fill(0).map((value, index) => {
                        return {
                            'cn': `0${index+1}`.slice(-2),
                            'en': `0${index+1}`.slice(-2)
                        };
                    });
                    html = me.getNoInputPlateHtml(method, lmArr);
                    jqElement.html(html);
                    me.getBnsx().then(bmnsx => {
                        sessionStorage.setItem('bmnsx', bmnsx);
                        const filterSxArr = calcSxArr(bmnsx);
                        const filterSxHtml = filterSxArr.map(item => {
                            return `
                                <div class="js-filter-num filter-num-zodiac-${item['en']} fl" filter="${item['code'].toString()}">${item['cn']}</div>
                            `;
                        }).join('');
                        const lmFilterHtml = `
                            <div class="filter-num-wrap-${method} fr">
                                <div class="filter-num-title-${method}">快速筛号</div>
                                <div class="filter-num-red clearfix">
                                    <div class="js-filter-num filter-num-red-da fl" filter="29,30,34,35,40,45,46">红大</div>
                                    <div class="js-filter-num filter-num-red-xiao fl" filter="01,02,07,08,12,13,18,19,23,24">红小</div>
                                    <div class="js-filter-num filter-num-red-dan fl" filter="01,07,13,19,23,29,35,45">红单</div>
                                    <div class="js-filter-num filter-num-red-shuang fl" filter="02,08,12,18,24,30,34,40,46">红双</div>
                                </div>
                                <div class="filter-num-blue clearfix">
                                    <div class="js-filter-num filter-num-blue-da fl" filter="25,26,31,36,37,41,42,47,48">蓝大</div>
                                    <div class="js-filter-num filter-num-blue-xiao fl" filter="03,04,09,10,14,15,20">蓝小</div>
                                    <div class="js-filter-num filter-num-blue-dan fl" filter="03,09,15,25,31,37,41,47">蓝单</div>
                                    <div class="js-filter-num filter-num-blue-shuang fl" filter="04,10,14,20,26,36,42,48">蓝双</div>    
                                </div>
                                <div class="filter-num-green clearfix">
                                    <div class="js-filter-num filter-num-green-da fl" filter="27,28,32,33,38,39,43,44,49">绿大</div>
                                    <div class="js-filter-num filter-num-green-xiao fl" filter="05,06,11,16,17,21,22">绿小</div>
                                    <div class="js-filter-num filter-num-green-dan fl" filter="05,11,17,21,27,33,39,43,49">绿单</div>
                                    <div class="js-filter-num filter-num-green-shuang fl" filter="06,16,22,28,32,38,44">绿双</div>    
                                </div>
                                <div class="filter-num-zodiac clearfix">
                                    ${filterSxHtml}   
                                </div>
                                <div class="filter-num-reset">
                                    <i class="filter-num-reset-icon"></i>重置
                                </div>
                            </div>
                        `;
                        if (['lm_2z2', 'lm_3z2', 'lm_3z3'].indexOf($('.js-subTab.on').data('type')) !== -1) {//防止切换的时候网络延迟别的玩法append这个进去
                            jqElement.append(lmFilterHtml);
                        }
                        me.registerEvent();
                        me.updateOdds(); 
                    });
                    break;
                case 'hzdxds_hzdxds_hzdxds':
                    const hzdxdsArr = [{
                            'cn': '大',
                            'en': 'da',
                        }, {
                            'cn': '小',
                            'en': 'xiao',
                        },
                        {
                            'cn': '单',
                            'en': 'dan'
                        }, {
                            'cn': '双',
                            'en': 'shuang'
                        }
                    ];
                    html = me.getNoInputPlateHtml(method, hzdxdsArr);
                    jqElement.html(html);
                    me.updateOdds();                
                    me.registerEvent();
                    break;
                default:
                    break;
            }       
        },
        getNoInputPlateHtml(method, configArr, filterHtml = '') { //点击类型的选号盘，没有输入框
            const me = this;
            me.plateType = 'click';
            let plateHtml;
            $('.js-clickType-per').removeClass('hide');
            if (/^lm_lm/.test(method)) {
                configArr = [configArr.slice(0, 10), configArr.slice(10, 20), configArr.slice(20, 30), configArr.slice(30, 40), configArr.slice(40, 49)];
                plateHtml = configArr.map(numArr => {
                    const itemHtml = numArr.map(numObj => {
                        const {
                            en,
                            cn,
                        } = numObj;
                        return `
                            <div class="js-click-num-item click-num-item" method="${method}" en="${en}" cn="${cn}">
                                <span class="click-num-item-text plate-item-num-${en}">${cn}</span>
                            </div>
                        `;
                    }).join('');
                    return `
                        <div class="plate-wrap-item fl" method="${method}">
                            ${itemHtml}
                        </div>
                    `;
                }).join('');
                return (plateHtml + filterHtml);
            }
            plateHtml = configArr.map((item, index) => {
                const {
                    en,
                    cn,
                    code 
                } = item;

                const numHtml = code ? code.map(num => {
                    return `<span class="plate-rel-num plate-item-num-${num}">${num}</span>`;
                }).join('') : '';
                return `
                    <div class="fl js-click-num-item click-num-item" method="${method}" m_method="${method}_${en}" en="${en}" cn="${cn}" ${code?`code="${code.join(',')}`:''}">
                        <span class="click-num-item-text plate-item-num-${en}">${cn}</span>
                        ${numHtml}
                    </div>
                `;
            }).join('');
            return (plateHtml + filterHtml);            
        },
        getInputPlateHtml(method, configArr, filterHtml = '') {//获取输入框模式选号盘html
            const me = this;
            me.plateType = 'input';
            $('.js-clickType-per').addClass('hide');
            const plateHtml = configArr.map((numArr, idx) => {
                const itemHtml = numArr.map((numObj, index) => {
                    const numHtml = numObj.code ? numObj.code.map(num => {
                        return `<div class="fl plate-rel-num plate-item-num-${num}">${num}</div>`;
                    }).join('') : '';
                    return `
                        <div class="js-plate-item plate-item clearfix">
                            <div class="fl js-plate-item-num plate-item-num plate-item-num-${numObj['en']}" code="${numObj['cn']}">${numObj['cn']}</div>
                            <div class="fl js-odds plate-item-odd plate-item-odd-${numObj['en']}" cn="${numObj['cn']}" num="${numObj['en']}">x&nbsp;</div>
                            ${numObj['hint'] ? `<div class="fl plate-item-hint">${numObj['hint']}</div>` : ''}
                            ${numHtml}
                            <input class="fr js-plate-item-input plate-item-input plate-item-input-${numObj['en']}" type="number" min="1" max="999999">
                        </div>
                    `;
                }).join('');
                return `
                    <div class="plate-wrap-item fl" method="${method}">
                        <div class="plate-item-title clearfix">
                            <div class="plate-item-title-left fl">${method === 'tm_tm_sb' ? (numArr[0]['type'] === '色波选号' ? '色波选号' : '半波选号') : '选号'}</div>
                            <div class="plate-item-title-right fr">投注金额</div>
                        </div>
                        ${itemHtml}
                    </div>  
                `;
            }).join('');
            return (plateHtml + filterHtml);
        },
        updateOdds() {//更新赔率
            const me = this;
            let Odds;
            let oddsTab;
            let point;
            const method = $('.plate-wrap-item').attr('method');
            if (localStorage.getItem(`${userName}-oddsTab`)) {
                oddsTab = localStorage.getItem(`${userName}-oddsTab`);
                !$(`.js-oddsTab[switch="${oddsTab}"]`).hasClass('on') && $(`.js-oddsTab[switch="${oddsTab}"]`).addClass('on');
            } else {
                oddsTab = 'A';
                !$(`.js-oddsTab[switch="${oddsTab}"]`).hasClass('on') && $(`.js-oddsTab[switch="${oddsTab}"]`).addClass('on');
            }
            me.rateType = oddsTab;
            function renderOdds() {
                switch (me.plateType) {
                    case 'input':
                        if (method === 'tm_tm_sx' || method === 'zt1x_zt1x_zt1x') { //生肖的要算本命年生肖                      
                            me.getBnsx().then(bmnsx => {
                                $('.js-odds').each((index, item) => {
                                    const num = $(item).attr('num');
                                    const cn = $(item).attr('cn');
                                    if (cn === bmnsx) {
                                        point = Odds[`${method}_bnsx`][`rate${oddsTab}`];
                                        $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}_bnsx`][`rate${oddsTab}`]}" m_method="${method}_bnsx" odd="${Odds[`${method}_bnsx`][`bonus${oddsTab}`]}">${Odds[`${method}_bnsx`][`bonus${oddsTab}`]}</em>`);
                                    } else {
                                        if (method === 'zt1x_zt1x_zt1x') {
                                            point = Odds[`${method}`][`rate${oddsTab}`];
                                            $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}`][`rate${oddsTab}`]}" m_method="${method}" odd="${Odds[`${method}`][`bonus${oddsTab}`]}">${Odds[`${method}`][`bonus${oddsTab}`]}</em>`);                                            
                                        }
                                        if (method === 'tm_tm_sx') {
                                            point = Odds[`${method}_fbnsx`][`rate${oddsTab}`];
                                            $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}_fbnsx`][`rate${oddsTab}`]}" m_method="${method}_fbnsx" odd="${Odds[`${method}_fbnsx`][`bonus${oddsTab}`]}">${Odds[`${method}_fbnsx`][`bonus${oddsTab}`]}</em>`);
                                        }
                                    }
                                });
                                $('.js-oddsTip').html(`(A面：高奖金，低返点；B面：正常奖金，高返点)`);
                            });
                        } else {
                            $('.js-odds').each((index, item) => {
                                const num = $(item).attr('num');
                                const cn = $(item).attr('cn');
                                switch (method) {
                                    case 'tm_tm_zx':
                                    case 'zt1m_zt1m_zt1m':                            
                                        $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[method][`rate${oddsTab}`]}" m_method="${method}" odd="${Odds[method][`bonus${oddsTab}`]}">${Odds[method][`bonus${oddsTab}`]}</em>`);
                                        point = Odds[method][`rate${oddsTab}`];
                                        $('.js-oddsTip').html(`(A面：高奖金，投注返点${Odds[method]['rateA']*100}%；B面：正常奖金，投注返点${Odds[method]['rateB']*100}%)`);
                                        break;
                                    case 'tm_tm_sb':
                                    case 'tm_tm_dxds':
                                        $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}_${num}`][`rate${oddsTab}`]}" m_method="${method}_${num}" odd="${Odds[`${method}_${num}`][`bonus${oddsTab}`]}">${Odds[`${method}_${num}`][`bonus${oddsTab}`]}</em>`);
                                        point = Odds[`${method}_${num}`][`rate${oddsTab}`];
                                        $('.js-oddsTip').html(`(A面：高奖金，低返点；B面：正常奖金，高返点)`);
                                        break;
                                    case 'tm_tm_ws':
                                    case 'ztws_ztws_ztws':                            
                                        if (num === '0w') {
                                            $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}_0w`][`rate${oddsTab}`]}" m_method="${method}_0w" odd="${Odds[`${method}_0w`][`bonus${oddsTab}`]}">${Odds[`${method}_0w`][`bonus${oddsTab}`]}</em>`);
                                            point = Odds[`${method}_0w`][`rate${oddsTab}`];
                                        } else {
                                            $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}_f0w`][`rate${oddsTab}`]}" m_method="${method}_f0w" odd="${Odds[`${method}_f0w`][`bonus${oddsTab}`]}">${Odds[`${method}_f0w`][`bonus${oddsTab}`]}</em>`);
                                            point = Odds[`${method}_f0w`][`rate${oddsTab}`];
                                        }
                                        $('.js-oddsTip').html(`(A面：高奖金，低返点；B面：正常奖金，高返点)`);
                                        break;
                                    default:
                                        break;
                                }
                            });                   
                        }
                        break;
                    case 'click':
                        switch (me.method) {
                            case 'lx_lx_2lx':
                            case 'lx_lx_3lx':
                            case 'lx_lx_4lx':
                                me.getBnsx().then(bmnsx => {
                                    $('.js-oddsTip').html(`(${oddsTab}面：注单包含${bmnsx}，奖金赔率${Odds[me.method + '_bnsx'][`bonus${oddsTab}`]}~${(Odds[me.method + '_bnsx'][`rate${oddsTab}`]*100).toFixed(2)}%；注单不包含${bmnsx}，奖金赔率${Odds[me.method][`bonus${oddsTab}`]}~${(Odds[me.method][`rate${oddsTab}`]*100).toFixed(2)}%)`);
                                    $(`.js-click-num-item[cn="${bmnsx}"]`).attr('bnsx', 'yes');
                                });
                                break;
                            case 'lm_lm_2z2':
                            case 'lm_lm_3z3':                            
                                $('.js-oddsTip').html(`(A面：奖金赔率${Odds[me.method]['bonusA']}~${(Odds[me.method]['rateA']*100).toFixed(2)}%；B面：奖金赔率${Odds[me.method]['bonusB']}~${(Odds[me.method]['rateB']*100).toFixed(2)}%)`);
                                break;
                            case 'lm_lm_3z2':
                                $('.js-oddsTip').html(`(${oddsTab}面：中2个号码奖金赔率${Odds[me.method + '_z2'][`bonus${oddsTab}`]}~${(Odds[me.method + '_z2'][`rate${oddsTab}`]*100).toFixed(2)}%；中3个号码奖金赔率${Odds[me.method][`bonus${oddsTab}`]}~${(Odds[me.method][`rate${oddsTab}`]*100).toFixed(2)}%)`);
                                break;
                            case 'hzdxds_hzdxds_hzdxds':
                                const genText = (arr, AOrB) => {
                                    return arr.map((obj) => {
                                        const {
                                            cn,
                                            m_method
                                        } = obj;
                                        return `${cn}${Odds[m_method][`bonus${AOrB}`]}~${(Odds[m_method][`rate${AOrB}`]*100).toFixed(2)}%`;
                                    }).join('，');
                                }
                                const _config = [
                                    {
                                        cn: '大',
                                        m_method: 'hzdxds_hzdxds_hzdxds_da'
                                    },
                                    {
                                        cn: '小',
                                        m_method: 'hzdxds_hzdxds_hzdxds_xiao'
                                    },
                                    {
                                        cn: '单',
                                        m_method: 'hzdxds_hzdxds_hzdxds_dan'
                                    },
                                    {
                                        cn: '双',
                                        m_method: 'hzdxds_hzdxds_hzdxds_shuang'
                                    },
                                ];
                                $('.js-oddsTip').html(`(A面：${genText(_config, 'A')}；B面：${genText(_config, 'B')})`);
                                break;
                            default:
                                $('.js-oddsTip').html(`(A面：高奖金，低返点；B面：正常奖金，高返点)`);                                
                                break;
                        }
                        break;                        
                    default:
                        break;
                }
            }
    
            if (sessionStorage.getItem('Odds')) {
                Odds = JSON.parse(sessionStorage.getItem('Odds'));
                me.odds = Odds;
                renderOdds();
                return;
            }
            me.ajaxOdds({
                lottery: lotteryCode
            }, res => {
                if (!res.result) {
                    return;
                }
                Odds = res.result[lotteryCode];
                me.odds = Odds;
                sessionStorage.setItem('Odds', JSON.stringify(Odds));
                renderOdds();
            });
        },
        switchOddsEvent() {
            const me = this;
            //切换A面B面赔率
            $('.js-oddsTab').off('click').on('click', function () {
                $(this).addClass('on').siblings('.js-oddsTab').removeClass('on');
                const oddsTab = $('.js-oddsTab.on').attr('switch');
                localStorage.setItem(`${userName}-oddsTab`, oddsTab);
                me.updateOdds();
            });
        },
        renderTips(method) {//玩法说明提示语
            $('.direction .hint').text(LotteryTips['lhc'][method].title);
            $('.direction .paraphrase').text(LotteryTips['lhc'][method].paraphrase);
        },
        registerEvent() {//选号盘的一些点击事件
            const me = this;
            // 输入金额至少1元。至多两个小数点
            $('.plate-item-input,.filter-num-input,.js-clickType-per-input').on('change input keyup', function (event) {
                const value = $(this).val();
                const valueToArr = value.split('.');
                if (valueToArr[0] < 1) {
                    $(this).val('');
                } else if (valueToArr[0] > 999999) {
                    $(this).val('999999');
                }
                if (valueToArr[1]) {
                    valueToArr[1] = valueToArr[1].slice(0, 2);
                    $(this).val(`${valueToArr[0]}.${valueToArr[1]}`);
                }
    
            });
            //计算注数和总金额
            $('.plate-item-input,.js-clickType-per-input').on('change input keyup', function (event) {
                me.renderTotalNumAndMoney();
            });
            $('.js-click-num-item').off('click').on('click', function(event) {
                $(this).toggleClass('on');
                me.renderTotalNumAndMoney();                
            });
            //    智能滤号 
            $('.js-filter-num').off('click').on('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
                const filterNumArr = $(this).attr('filter').split(',');
                const filterInputValue = $('.filter-num-input').val();
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    if (me.plateType === 'input') {
                        //取消选中对应输入框的input值清空
                        debounce(() => {
                            filterNumArr.forEach(item => {
                                filterInputValue === $(`.plate-item-input-${item}`).val() && $(`.plate-item-input-${item}`).val('');
                            });
                        })();
                    }
                } else {
                    $(this).addClass('on');
                }
                debounce(me.filterNum.bind(me))();
            });
            $('.filter-num-input').on('change input keyup', function (event) {
                debounce(me.filterNum.bind(me))();
            });
    
            //    重置
            $('.filter-num-reset').off('click').on('click', function (event) {
                $(this).find('.filter-num-reset-icon').addClass('rotate360');
                setTimeout(() => {
                    $(this).find('.filter-num-reset-icon').removeClass('rotate360');
                }, 1000);
                me.reset();
            });
        },
        reset() {
            $('.js-count-num').html(0);
            $('.js-total-money').html(0);
            $('.js-filter-num').each((index, item) => {
                $(item).hasClass('on') && $(item).removeClass('on');
            });
            $('.plate-item-input,.filter-num-input,.js-clickType-per-input').val('');
            $('.plate-item').each((index, item) => {
                $(item).hasClass('on') && $(item).removeClass('on');
            });
            $('.js-click-num-item').each((index, item) => {
                $(item).hasClass('on') && $(item).removeClass('on');
            });
            !$('.js-quickSubmit').hasClass('disabled')&&$('.js-quickSubmit').addClass('disabled');
            !$('.js-confirm').hasClass('disabled')&&$('.js-confirm').addClass('disabled');
        },
        calcTotalNum(jqElement) {//计算总注数--
            const me = this;
            let count = 0;
            if (me.plateType === 'input') {
                jqElement.each((index, item) => {
                    $(item).val() && count++;
                });
            }
            if (me.plateType === 'click') {
                jqElement.each((index, item) => {
                    $(item).hasClass('on') && count++;
                });
                switch (me.method) {
                    case 'lx_lx_2lx':
                        count = Math.combination(count, 2);
                        break;
                    case 'lx_lx_3lx':
                        count = Math.combination(count, 3);
                        break;
                    case 'lx_lx_4lx':
                        count = Math.combination(count, 4);
                        break;
                    case 'lm_lm_2z2':
                        count = Math.combination(count, 2);
                        break;
                    case 'lm_lm_3z2':
                        count = Math.combination(count, 3);
                        break;
                    case 'lm_lm_3z3':
                        count = Math.combination(count, 3);
                    case 'hzdxds_hzdxds_hzdxds':
                        count = count;
                        break;
                    default:
                        break;
                }
            }
            return parseInt(count);
        },
        calcTotalMoney(jqElement) { //计算总金额
            const me = this;
            let money = 0;
            if (me.plateType === 'input') {
                jqElement.each((index, item) => {
                    if ($(item).val()) {
                        money += Number($(item).val());
                    }
                });
                const moneyStr = String(money);
                //bug计算出1.9800000002的问题
                if (moneyStr.split('.')[1] && moneyStr.split('.')[1].length > 2) {
                    money = money.toFixed(2);
                }
            }
            if (me.plateType === 'click') {
                const perMoney = Number($('.js-clickType-per-input').val());
                const count = me.calcTotalNum(jqElement);
                money = (perMoney * count).toFixed(2);
            }
            me.controlBetBtnDisable(money);
            return money;
        },
        controlBetBtnDisable(money) {
            if (money > 0) { //有注单则解放按钮
                $('.js-confirm').removeClass('disabled');
                $('.js-quickSubmit').removeClass('disabled');
            } else {
                !$('.js-confirm').hasClass('disabled') && $('.js-confirm').addClass('disabled');
                !$('.js-quickSubmit').hasClass('disabled') && $('.js-quickSubmit').addClass('disabled');
            }
        },
        renderTotalNumAndMoney() {//显示总注数和金额
            const me = this;
            debounce(() => {
                if (me.plateType === 'input') {
                    $('.js-count-num').html(me.calcTotalNum($('.plate-item-input')));
                    $('.js-total-money').html(me.calcTotalMoney($('.plate-item-input')));
                }
                if (me.plateType === 'click') {
                    $('.js-count-num').html(me.calcTotalNum($('.js-click-num-item')));
                    $('.js-total-money').html(me.calcTotalMoney($('.js-click-num-item')));
                }
            })();
        },
        filterNum() {//滤号
            const me = this;
            let filterTotalNumArr = [];
            $('.js-filter-num').each((index, item) => {
                if ($(item).hasClass('on')) {
                    const filterNumArr = $(item).attr('filter').split(',');
                    filterTotalNumArr.push(...filterNumArr);
                }
            });
            filterTotalNumArr = [...new Set(filterTotalNumArr)];//去重
            const filterInputValue = $('.filter-num-input').val();
            if (me.plateType === 'input') {
                $('.plate-item').removeClass('on');
                filterTotalNumArr.forEach(item => {
                    //过滤的号码选框添加背景色
                    !$(`.plate-item-input-${item}`).parent('.plate-item').hasClass('on') && $(`.plate-item-input-${item}`).parent('.plate-item').addClass('on');
                    $(`.plate-item-input-${item}`).val(filterInputValue);
                });
            }
            if (me.plateType === 'click') {
                $('.js-click-num-item').removeClass('on');
                $('.js-click-num-item').each((index, item) => {
                    const en = $(item).attr('en');
                    if (filterTotalNumArr.indexOf(en) !== -1) {
                        $(item).addClass('on');
                    }
                });
            }
            me.renderTotalNumAndMoney();
        },
        ajaxOdds(data, cb) {
            $.ajax({
                url: '/lottery/api/anon/v1/lottery/odds_lhc',
                type: 'GET',
                cache: false,
                dataType: 'json',
                data
            }).done(res => cb(res)).fail(res => cb(res));
        },
        ajaxIssue(data, cb) {
            $.ajax({
                url: '/lottery/api/anon/v1/lottery/issue_info',
                type: 'GET',
                cache: false,
                dataType: 'json',
                data
            }).done(res => cb(res)).fail(res => cb(res));
        },
        ajaxZobiac(data, cb) {
            $.ajax({
                url: '/lottery/api/u/v1/lottery/queryZobiac',
                type: 'GET',
                cache: false,
                dataType: 'json',
                data
            }).done(res => cb(res)).fail(res => cb(res));
        }
    };

    //延时函数
    function debounce(fn, delay = 320) {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn(...arguments);
            }, delay);
        }
    }
    /* 
        根据本命年生肖判断每个生肖对应的数字,获取生肖的号码盘数字
        规则：本命年生肖为1，累加12；逆生肖序号递增。比如本命年是马为1，则蛇为2.
        参数：bmnsx 本命年生肖 String如'牛'
    */
    function calcSxArr(bmnsx) {
        const sxArr = ['猪','狗','鸡','猴','羊','马','蛇','龙','兔','虎', '牛', '鼠'];
        const cnToEn = {
            '猪': 'zhu',
            '狗': 'gou',
            '鸡': 'ji',
            '猴': 'hou',
            '羊': 'yang',
            '马': 'ma',
            '蛇': 'she',
            '龙': 'long',
            '兔': 'tu',
            '虎': 'hu',
            '牛': 'niu',
            '鼠': 'shu'
        };
        //生肖原本的序号，号码盘展示还是按传统的次序展示
        const normalIndexArr = {
            '猪': '11',
            '狗': '10',
            '鸡': '9',
            '猴': '8',
            '羊': '7',
            '马': '6',
            '蛇': '5',
            '龙': '4',
            '兔': '3',
            '虎': '2',
            '牛': '1',
            '鼠': '0'
        };
        const bmnsxIndex = sxArr.indexOf(bmnsx);
        const newArr = [...sxArr.slice(bmnsxIndex,12),...sxArr.slice(0,bmnsxIndex)];//按本命年的生肖排序
        //生成渲染号码盘的数组
        let plateArr = newArr.map((value,index,arr)=>{
            return {
                'cn': value,
                'en': cnToEn[value],
                'normalIndex': normalIndexArr[value],
                'code': Array(index === 0 ? 5 : 4).fill(0).map((v, i) => {//本命年有5个数字。递增12
                    return `0${index + 1 + i * 12}`.slice(-2);
                })
            };
        });
        plateArr = plateArr.sort((a, b) => {//按传统次序排回来
            return a.normalIndex - b.normalIndex;
        });
        return plateArr;
    }
};
const Plate = genPlate('XGLHC');
Plate.init();
// 数学公式
// 阶乘 n!=n*(n-1)!
Math.factorial = function (n) {
    return n <= 0 ? 1 : n * Math.factorial(n - 1);
};
// 组合combination: m个数中取出n个不同的数
Math.combination = function (m, n) {
    var f = Math.factorial;
    return m < n ? 0 : f(m) / (f(n) * f(m - n));
};
if (!Array.prototype.fill) {
    Object.defineProperty(Array.prototype, 'fill', {
        value: function (value) {

            // Steps 1-2.
            if (this == null) {
                throw new TypeError('this is null or not defined');
            }

            var O = Object(this);

            // Steps 3-5.
            var len = O.length >>> 0;

            // Steps 6-7.
            var start = arguments[1];
            var relativeStart = start >> 0;

            // Step 8.
            var k = relativeStart < 0 ?
                Math.max(len + relativeStart, 0) :
                Math.min(relativeStart, len);

            // Steps 9-10.
            var end = arguments[2];
            var relativeEnd = end === undefined ?
                len : end >> 0;

            // Step 11.
            var final = relativeEnd < 0 ?
                Math.max(len + relativeEnd, 0) :
                Math.min(relativeEnd, len);

            // Step 12.
            while (k < final) {
                O[k] = value;
                k++;
            }

            // Step 13.
            return O;
        }
    });
}
