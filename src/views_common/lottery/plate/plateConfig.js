export default {
    cqssc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    tjssc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    xjssc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    rdffc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    rdlfc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    rbssm: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    wbgmmc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    wbgffc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    wbg5fc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    xn5fc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    hn5fc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    qqssm: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    txffc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    tx1fc: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    tcp5: {
        wx_zx_fs: {
            name: '五星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 5,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            mathConfig: { type: 'zuhe', per: 1,  n: 5 },//组合C95
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            mathConfig: { type: 'zucheng', up: 1, down: 3 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            mathConfig: { type: 'zucheng', up: 2, down: 1 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            mathConfig: { type: 'kuadu', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            mathConfig: { type: 'baodan', n: 54 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_qkd: {
            name: '前二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_qbd: {
            name: '前二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        em_zx_hkd: {
            name: '后二直选跨度',
            mathConfig: { type: 'kuadu', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        em_zux_hbd: {
            name: '后二组选包胆',
            mathConfig: { type: 'baodan', n: 9 },
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z31: {
            name: '中三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_z32: {
            name: '中三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1: {
            name: '四星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x2: {
            name: '四星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x3: {
            name: '四星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1: {
            name: '五星一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x2: {
            name: '五星二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x3: {
            name: '五星三码不定胆',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['前三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_z3hz: {
            name: '中三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['中三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        zh_hzdxds_h3hz: {
            name: '后三总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['后三总和'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        qw_ts_yffs: {
            name: '一帆风顺',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            name: '后二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q2: {
            name: '前二大小单双',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_h3: {
            name: '后三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxds_q3: {
            name: '前三大小单双',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_wx: {
            name: '五星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_sx: {
            name: '四星大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_qs: {
            name: '前三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_zs: {
            name: '中三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dxgs_hs: {
            name: '后三大小个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_wx: {
            name: '五星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_sx: {
            name: '四星单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_qs: {
            name: '前三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_hs: {
            name: '后三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        dxds_dsgs_zs: {
            name: '中三单双个数',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        zh_hzdxds_5xhz: {
            name: '五星总和',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wq: {
            name: '万千龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wb: {
            name: '万百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_ws: {
            name: '万十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_wg: {
            name: '万个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qb: {
            name: '千百龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_qg: {
            name: '千个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_lhh_sg: {
            name: '十个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_q3: {
            name: '前三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_z3: {
            name: '中三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        qw_xt_h3: {
            name: '后三炸金花',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        nn_nn_nn: {
            name: '牛牛',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        sh_sh_wx: {
            name: '梭哈',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        bjl_bjl_bjl: {
            name: '百家乐',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            mathConfig: { type: 'zuhe', per: 1, r: 2, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 2,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            mathConfig: { type: 'rzxfs', r: 3 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 3,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            mathConfig: { type: 'zuhe', per: 2, n: 2, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, r: 3, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            mathConfig: { type: 'leijia', r: 3, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        rx4_zx_fs: {
            name: '任四直选复式',
            mathConfig: { type: 'rzxfs', r: 4 },
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            mathConfig: { type: 'leijia', r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
                numOfEach: 4,//没注要求的数字数量 如五星是每注选号有5个数字
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4, r: 4, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z12: {
            name: '任四组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            mathConfig: { type: 'zuhe', per: 1, r: 4, n: 2, needMultiplyPos: true  },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1, r: 4, needMultiplyPos: true },
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    },
    mck3: {
        dxds_dxds_dxds: {
            name: '大小单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        hz_hz_hz: {
            name: '和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        th3_th3_th3dx: {
            name: '三同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['111', '222', '333', '444', '555', '666'],
                filter: []
            }
        },
        th3_th3_th3tx: {
            name: '三同号通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['111|222|333|444|555|666'],
                filter: []
            }
        },
        bth3_bth3_ds: {
            name: '三不同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123', '124', '125', '126', '134', '135', '136', '145', '146', '156', '234', '235', '236', '245', '246', '256', '345', '346', '356', '456'],
                filter: []
            }
        },
        bth3_bth3_fs: {
            name: '三不同号复选',
            mathConfig: { type: 'zuhe', per: 1, n: 3 },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['复选'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
        bth3_lh3_dx: {
            name: '三连号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123', '234', '345', '456'],
                filter: []
            }
        },
        bth3_lh3_tx: {
            name: '三连号通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123|234|345|456'],
                filter: []
            }
        },
        bth3_bs_dx: {
            name: '半顺单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['124', '125', '126', '134', '145', '156', '235', '236', '245', '256', '346', '356'],
                filter: []
            }
        },
        bth3_bs_tx: {
            name: '半顺通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['通选'],
                num: ['124|125|126|134|145|156|235|236|245|256|346|356'],
                filter: []
            }
        },
        bth3_z6_dx: {
            name: '杂六单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['135', '136', '145', '146'],
                filter: []
            }
        },
        bth3_z6_tx: {
            name: '杂六通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['通选'],
                num: ['135|136|145|146'],
                filter: []
            }
        },
        th2_th2dx_fs: {
            name: '二同号单选复式',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['同号', '不同号'],
                num: { '同号': ['11', '22', '33', '44', '55', '66'], '不同号': ['1', '2', '3', '4', '5', '6'] },
                filter: []
            }
        },
        th2_th2dx_ds: {
            name: '二同号单选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['112', '113', '114', '115', '116', '221', '223', '224', '225', '226', '331', '332', '334', '335', '336', '441', '442', '443', '445', '446', '551', '552', '553', '554', '556', '661', '662', '663', '664', '665'],
                filter: []
            }
        },
        th2_th2fx_fx: {
            name: '二同号复选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['二同号复选'],
                num: ['11', '22', '33', '44', '55', '66'],
                filter: []
            }
        },
        bth2_bth2_fs: {
            name: '二不同号复选',
            mathConfig: { type: 'zuhe', per: 1,  n: 2 },//组合C95
            plate: {
                isChip: true,
                type: 'click',
                pos: ['复选'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
        bth2_bth2_ds: {
            name: '二不同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['12', '13', '14', '15', '16', '23', '24', '25', '26', '34', '35', '36', '45', '46', '56'],
                filter: []
            }
        },
        cygh_cygh_cygh: {
            name: '猜一个号',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['猜一个号'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
    },
    jsk3: {
        dxds_dxds_dxds: {
            name: '大小单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        hz_hz_hz: {
            name: '和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        th3_th3_th3dx: {
            name: '三同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['111', '222', '333', '444', '555', '666'],
                filter: []
            }
        },
        th3_th3_th3tx: {
            name: '三同号通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['111|222|333|444|555|666'],
                filter: []
            }
        },
        bth3_bth3_ds: {
            name: '三不同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123', '124', '125', '126', '134', '135', '136', '145', '146', '156', '234', '235', '236', '245', '246', '256', '345', '346', '356', '456'],
                filter: []
            }
        },
        bth3_bth3_fs: {
            name: '三不同号复选',
            mathConfig: { type: 'zuhe', per: 1, n: 3 },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['复选'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
        bth3_lh3_dx: {
            name: '三连号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123', '234', '345', '456'],
                filter: []
            }
        },
        bth3_lh3_tx: {
            name: '三连号通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123|234|345|456'],
                filter: []
            }
        },
        bth3_bs_dx: {
            name: '半顺单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['124', '125', '126', '134', '145', '156', '235', '236', '245', '256', '346', '356'],
                filter: []
            }
        },
        bth3_bs_tx: {
            name: '半顺通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['通选'],
                num: ['124|125|126|134|145|156|235|236|245|256|346|356'],
                filter: []
            }
        },
        bth3_z6_dx: {
            name: '杂六单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['135', '136', '145', '146'],
                filter: []
            }
        },
        bth3_z6_tx: {
            name: '杂六通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['通选'],
                num: ['135|136|145|146'],
                filter: []
            }
        },
        th2_th2dx_fs: {
            name: '二同号单选复式',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['同号', '不同号'],
                num: { '同号': ['11', '22', '33', '44', '55', '66'], '不同号': ['1', '2', '3', '4', '5', '6'] },
                filter: []
            }
        },
        th2_th2dx_ds: {
            name: '二同号单选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['112', '113', '114', '115', '116', '221', '223', '224', '225', '226', '331', '332', '334', '335', '336', '441', '442', '443', '445', '446', '551', '552', '553', '554', '556', '661', '662', '663', '664', '665'],
                filter: []
            }
        },
        th2_th2fx_fx: {
            name: '二同号复选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['二同号复选'],
                num: ['11', '22', '33', '44', '55', '66'],
                filter: []
            }
        },
        bth2_bth2_fs: {
            name: '二不同号复选',
            mathConfig: { type: 'zuhe', per: 1,  n: 2 },//组合C95
            plate: {
                isChip: true,
                type: 'click',
                pos: ['复选'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
        bth2_bth2_ds: {
            name: '二不同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['12', '13', '14', '15', '16', '23', '24', '25', '26', '34', '35', '36', '45', '46', '56'],
                filter: []
            }
        },
        cygh_cygh_cygh: {
            name: '猜一个号',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['猜一个号'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
    },
    hnk3: {
        dxds_dxds_dxds: {
            name: '大小单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        hz_hz_hz: {
            name: '和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        th3_th3_th3dx: {
            name: '三同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['111', '222', '333', '444', '555', '666'],
                filter: []
            }
        },
        th3_th3_th3tx: {
            name: '三同号通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['111|222|333|444|555|666'],
                filter: []
            }
        },
        bth3_bth3_ds: {
            name: '三不同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123', '124', '125', '126', '134', '135', '136', '145', '146', '156', '234', '235', '236', '245', '246', '256', '345', '346', '356', '456'],
                filter: []
            }
        },
        bth3_bth3_fs: {
            name: '三不同号复选',
            mathConfig: { type: 'zuhe', per: 1, n: 3 },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['复选'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
        bth3_lh3_dx: {
            name: '三连号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123', '234', '345', '456'],
                filter: []
            }
        },
        bth3_lh3_tx: {
            name: '三连号通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123|234|345|456'],
                filter: []
            }
        },
        bth3_bs_dx: {
            name: '半顺单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['124', '125', '126', '134', '145', '156', '235', '236', '245', '256', '346', '356'],
                filter: []
            }
        },
        bth3_bs_tx: {
            name: '半顺通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['通选'],
                num: ['124|125|126|134|145|156|235|236|245|256|346|356'],
                filter: []
            }
        },
        bth3_z6_dx: {
            name: '杂六单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['135', '136', '145', '146'],
                filter: []
            }
        },
        bth3_z6_tx: {
            name: '杂六通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['通选'],
                num: ['135|136|145|146'],
                filter: []
            }
        },
        th2_th2dx_fs: {
            name: '二同号单选复式',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['同号', '不同号'],
                num: { '同号': ['11', '22', '33', '44', '55', '66'], '不同号': ['1', '2', '3', '4', '5', '6'] },
                filter: []
            }
        },
        th2_th2dx_ds: {
            name: '二同号单选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['112', '113', '114', '115', '116', '221', '223', '224', '225', '226', '331', '332', '334', '335', '336', '441', '442', '443', '445', '446', '551', '552', '553', '554', '556', '661', '662', '663', '664', '665'],
                filter: []
            }
        },
        th2_th2fx_fx: {
            name: '二同号复选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['二同号复选'],
                num: ['11', '22', '33', '44', '55', '66'],
                filter: []
            }
        },
        bth2_bth2_fs: {
            name: '二不同号复选',
            mathConfig: { type: 'zuhe', per: 1,  n: 2 },//组合C95
            plate: {
                isChip: true,
                type: 'click',
                pos: ['复选'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
        bth2_bth2_ds: {
            name: '二不同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['12', '13', '14', '15', '16', '23', '24', '25', '26', '34', '35', '36', '45', '46', '56'],
                filter: []
            }
        },
        cygh_cygh_cygh: {
            name: '猜一个号',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['猜一个号'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
    },
    hbk3: {
        dxds_dxds_dxds: {
            name: '大小单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        hz_hz_hz: {
            name: '和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        th3_th3_th3dx: {
            name: '三同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['111', '222', '333', '444', '555', '666'],
                filter: []
            }
        },
        th3_th3_th3tx: {
            name: '三同号通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['111|222|333|444|555|666'],
                filter: []
            }
        },
        bth3_bth3_ds: {
            name: '三不同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123', '124', '125', '126', '134', '135', '136', '145', '146', '156', '234', '235', '236', '245', '246', '256', '345', '346', '356', '456'],
                filter: []
            }
        },
        bth3_bth3_fs: {
            name: '三不同号复选',
            mathConfig: { type: 'zuhe', per: 1, n: 3 },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['复选'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
        bth3_lh3_dx: {
            name: '三连号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123', '234', '345', '456'],
                filter: []
            }
        },
        bth3_lh3_tx: {
            name: '三连号通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123|234|345|456'],
                filter: []
            }
        },
        bth3_bs_dx: {
            name: '半顺单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['124', '125', '126', '134', '145', '156', '235', '236', '245', '256', '346', '356'],
                filter: []
            }
        },
        bth3_bs_tx: {
            name: '半顺通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['通选'],
                num: ['124|125|126|134|145|156|235|236|245|256|346|356'],
                filter: []
            }
        },
        bth3_z6_dx: {
            name: '杂六单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['135', '136', '145', '146'],
                filter: []
            }
        },
        bth3_z6_tx: {
            name: '杂六通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['通选'],
                num: ['135|136|145|146'],
                filter: []
            }
        },
        th2_th2dx_fs: {
            name: '二同号单选复式',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['同号', '不同号'],
                num: { '同号': ['11', '22', '33', '44', '55', '66'], '不同号': ['1', '2', '3', '4', '5', '6'] },
                filter: []
            }
        },
        th2_th2dx_ds: {
            name: '二同号单选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['112', '113', '114', '115', '116', '221', '223', '224', '225', '226', '331', '332', '334', '335', '336', '441', '442', '443', '445', '446', '551', '552', '553', '554', '556', '661', '662', '663', '664', '665'],
                filter: []
            }
        },
        th2_th2fx_fx: {
            name: '二同号复选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['二同号复选'],
                num: ['11', '22', '33', '44', '55', '66'],
                filter: []
            }
        },
        bth2_bth2_fs: {
            name: '二不同号复选',
            mathConfig: { type: 'zuhe', per: 1,  n: 2 },//组合C95
            plate: {
                isChip: true,
                type: 'click',
                pos: ['复选'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
        bth2_bth2_ds: {
            name: '二不同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['12', '13', '14', '15', '16', '23', '24', '25', '26', '34', '35', '36', '45', '46', '56'],
                filter: []
            }
        },
        cygh_cygh_cygh: {
            name: '猜一个号',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['猜一个号'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
    },
    ahk3: {
        dxds_dxds_dxds: {
            name: '大小单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        hz_hz_hz: {
            name: '和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        th3_th3_th3dx: {
            name: '三同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['111', '222', '333', '444', '555', '666'],
                filter: []
            }
        },
        th3_th3_th3tx: {
            name: '三同号通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['111|222|333|444|555|666'],
                filter: []
            }
        },
        bth3_bth3_ds: {
            name: '三不同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123', '124', '125', '126', '134', '135', '136', '145', '146', '156', '234', '235', '236', '245', '246', '256', '345', '346', '356', '456'],
                filter: []
            }
        },
        bth3_bth3_fs: {
            name: '三不同号复选',
            mathConfig: { type: 'zuhe', per: 1, n: 3 },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['复选'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
        bth3_lh3_dx: {
            name: '三连号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123', '234', '345', '456'],
                filter: []
            }
        },
        bth3_lh3_tx: {
            name: '三连号通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['123|234|345|456'],
                filter: []
            }
        },
        bth3_bs_dx: {
            name: '半顺单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['124', '125', '126', '134', '145', '156', '235', '236', '245', '256', '346', '356'],
                filter: []
            }
        },
        bth3_bs_tx: {
            name: '半顺通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['通选'],
                num: ['124|125|126|134|145|156|235|236|245|256|346|356'],
                filter: []
            }
        },
        bth3_z6_dx: {
            name: '杂六单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['135', '136', '145', '146'],
                filter: []
            }
        },
        bth3_z6_tx: {
            name: '杂六通选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['通选'],
                num: ['135|136|145|146'],
                filter: []
            }
        },
        th2_th2dx_fs: {
            name: '二同号单选复式',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['同号', '不同号'],
                num: { '同号': ['11', '22', '33', '44', '55', '66'], '不同号': ['1', '2', '3', '4', '5', '6'] },
                filter: []
            }
        },
        th2_th2dx_ds: {
            name: '二同号单选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['112', '113', '114', '115', '116', '221', '223', '224', '225', '226', '331', '332', '334', '335', '336', '441', '442', '443', '445', '446', '551', '552', '553', '554', '556', '661', '662', '663', '664', '665'],
                filter: []
            }
        },
        th2_th2fx_fx: {
            name: '二同号复选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['二同号复选'],
                num: ['11', '22', '33', '44', '55', '66'],
                filter: []
            }
        },
        bth2_bth2_fs: {
            name: '二不同号复选',
            mathConfig: { type: 'zuhe', per: 1,  n: 2 },//组合C95
            plate: {
                isChip: true,
                type: 'click',
                pos: ['复选'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
        bth2_bth2_ds: {
            name: '二不同号单选',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['单选'],
                num: ['12', '13', '14', '15', '16', '23', '24', '25', '26', '34', '35', '36', '45', '46', '56'],
                filter: []
            }
        },
        cygh_cygh_cygh: {
            name: '猜一个号',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                isChip: true,
                type: 'click',
                pos: ['猜一个号'],
                num: ['1', '2', '3', '4', '5', '6'],
                filter: []
            }
        },
    },
    shssl: {
        sm_zx_fs: {
            name: '三码直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zx_ds: {
            name: '三码直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        sm_zx_hz: {
            name: '三码直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: [...Array(28)].map((v, i) => i),
                filter: []
            }
        },
        sm_zux_z3: {
            name: '三码组选组3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zux_z6: {
            name: '三码组选组6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zux_hh: {
            name: '三码组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        sm_zux_hz: {
            name: '三码组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: [...Array(26)].map((v, i) => i + 1),
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['十位', '个位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['十位', '个位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['百位', '十位', '个位', '所有位置'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_bdd1: {
            name: '一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_bdd2: {
            name: '二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_lhh_sg: {
            name: '十十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_xt_xt: {
            name: '形态',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        }
    },
    '3dfc': {
        sm_zx_fs: {
            name: '三码直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zx_ds: {
            name: '三码直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        sm_zx_hz: {
            name: '三码直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: [...Array(28)].map((v, i) => i),
                filter: []
            }
        },
        sm_zux_z3: {
            name: '三码组选组3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zux_z6: {
            name: '三码组选组6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zux_hh: {
            name: '三码组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        sm_zux_hz: {
            name: '三码组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: [...Array(26)].map((v, i) => i + 1),
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['十位', '个位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['十位', '个位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['百位', '十位', '个位', '所有位置'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_bdd1: {
            name: '一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_bdd2: {
            name: '二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_lhh_sg: {
            name: '十十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_xt_xt: {
            name: '形态',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        }
    },
    tcp3: {
        sm_zx_fs: {
            name: '三码直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zx_ds: {
            name: '三码直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        sm_zx_hz: {
            name: '三码直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: [...Array(28)].map((v, i) => i),
                filter: []
            }
        },
        sm_zux_z3: {
            name: '三码组选组3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zux_z6: {
            name: '三码组选组6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zux_hh: {
            name: '三码组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        sm_zux_hz: {
            name: '三码组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: [...Array(26)].map((v, i) => i + 1),
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['十位', '个位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['十位', '个位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['百位', '十位', '个位', '所有位置'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_bdd1: {
            name: '一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_bdd2: {
            name: '二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_lhh_sg: {
            name: '十十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_xt_xt: {
            name: '形态',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        }
    },
    mc3d: {
        sm_zx_fs: {
            name: '三码直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zx_ds: {
            name: '三码直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        sm_zx_hz: {
            name: '三码直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: [...Array(28)].map((v, i) => i),
                filter: []
            }
        },
        sm_zux_z3: {
            name: '三码组选组3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zux_z6: {
            name: '三码组选组6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_zux_hh: {
            name: '三码组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        sm_zux_hz: {
            name: '三码组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['和值'],
                num: [...Array(26)].map((v, i) => i + 1),
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['十位', '个位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['十位', '个位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['百位', '十位'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['百位', '十位', '个位', '所有位置'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_bdd1: {
            name: '一码不定胆',
            mathConfig: { type: 'zuhe', n: 1, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_bdd2: {
            name: '二码不定胆',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [...Array(10)].map((v, i) => i),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_lhh_bs: {
            name: '百十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_lhh_bg: {
            name: '百个龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_lhh_sg: {
            name: '十十龙虎斗',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        },
        qw_xt_xt: {
            name: '形态',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse(),
            }
        }
    },
    mc11y: {
        sm_sm_zxfs: {
            name: '前三直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zxds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        sm_sm_zuxfs: {
            name: '前三组选复式',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['前三组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zuxds: {
            name: '前三组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zxfs: {
            name: '前二直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zxds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zuxfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['前二组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zuxds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        bdd_bdd_bdd11y: {
            name: '不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_dwd11y: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位', '所有位置'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_1z1: {
            name: '任选复式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['选1中1'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_2z2: {
            name: '任选复式二中二',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['选2中2'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_3z3: {
            name: '任选复式三中三',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['选3中3'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_4z4: {
            name: '任选复式四中四',
            mathConfig: { type: 'zuhe', n: 4, per: 1 },
            plate: {
                type: 'click',
                pos: ['选4中4'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_5z5: {
            name: '任选复式五中五',
            mathConfig: { type: 'zuhe', n: 5, per: 1 },
            plate: {
                type: 'click',
                pos: ['选5中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_6z5: {
            name: '任选复式六中五',
            mathConfig: { type: 'zuhe', n: 6, per: 1 },
            plate: {
                type: 'click',
                pos: ['选6中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_7z5: {
            name: '任选复式七中五',
            mathConfig: { type: 'zuhe', n: 7, per: 1 },
            plate: {
                type: 'click',
                pos: ['选7中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_8z5: {
            name: '任选复式八中五',
            mathConfig: { type: 'zuhe', n: 8, per: 1 },
            plate: {
                type: 'click',
                pos: ['选8中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxds_rxds_1z1: {
            name: '任选单式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_2z2: {
            name: '任选单式二中二',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_3z3: {
            name: '任选单式三中三',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_4z4: {
            name: '任选单式四中四',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_5z5: {
            name: '任选单式五中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_6z5: {
            name: '任选单式六中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_7z5: {
            name: '任选单式七中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_8z5: {
            name: '任选单式八中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxdt_rxdt_2z2: {
            name: '任选胆拖二中二',
            mathConfig: { type: '11x5rxdt', z: 2 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_3z3: {
            name: '任选胆拖三中三',
            mathConfig: { type: '11x5rxdt', z: 3 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_4z4: {
            name: '任选胆拖四中四',
            mathConfig: { type: '11x5rxdt', z: 4 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_5z5: {
            name: '任选胆拖五中五',
            mathConfig: { type: '11x5rxdt', z: 5 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_6z5: {
            name: '任选胆拖六中五',
            mathConfig: { type: '11x5rxdt', z: 6 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_7z5: {
            name: '任选胆拖七中五',
            mathConfig: { type: '11x5rxdt', z: 7 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_8z5: {
            name: '任选胆拖八中五',
            mathConfig: { type: '11x5rxdt', z: 8 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_qw_dds: {
            name: '定单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        qw_qw_czw: {
            name: '猜中位',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
    },
    gd11y: {
        sm_sm_zxfs: {
            name: '前三直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zxds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        sm_sm_zuxfs: {
            name: '前三组选复式',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['前三组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zuxds: {
            name: '前三组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zxfs: {
            name: '前二直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zxds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zuxfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['前二组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zuxds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        bdd_bdd_bdd11y: {
            name: '不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_dwd11y: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位', '所有位置'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_1z1: {
            name: '任选复式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['选1中1'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_2z2: {
            name: '任选复式二中二',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['选2中2'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_3z3: {
            name: '任选复式三中三',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['选3中3'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_4z4: {
            name: '任选复式四中四',
            mathConfig: { type: 'zuhe', n: 4, per: 1 },
            plate: {
                type: 'click',
                pos: ['选4中4'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_5z5: {
            name: '任选复式五中五',
            mathConfig: { type: 'zuhe', n: 5, per: 1 },
            plate: {
                type: 'click',
                pos: ['选5中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_6z5: {
            name: '任选复式六中五',
            mathConfig: { type: 'zuhe', n: 6, per: 1 },
            plate: {
                type: 'click',
                pos: ['选6中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_7z5: {
            name: '任选复式七中五',
            mathConfig: { type: 'zuhe', n: 7, per: 1 },
            plate: {
                type: 'click',
                pos: ['选7中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_8z5: {
            name: '任选复式八中五',
            mathConfig: { type: 'zuhe', n: 8, per: 1 },
            plate: {
                type: 'click',
                pos: ['选8中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxds_rxds_1z1: {
            name: '任选单式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_2z2: {
            name: '任选单式二中二',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_3z3: {
            name: '任选单式三中三',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_4z4: {
            name: '任选单式四中四',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_5z5: {
            name: '任选单式五中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_6z5: {
            name: '任选单式六中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_7z5: {
            name: '任选单式七中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_8z5: {
            name: '任选单式八中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxdt_rxdt_2z2: {
            name: '任选胆拖二中二',
            mathConfig: { type: '11x5rxdt', z: 2 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_3z3: {
            name: '任选胆拖三中三',
            mathConfig: { type: '11x5rxdt', z: 3 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_4z4: {
            name: '任选胆拖四中四',
            mathConfig: { type: '11x5rxdt', z: 4 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_5z5: {
            name: '任选胆拖五中五',
            mathConfig: { type: '11x5rxdt', z: 5 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_6z5: {
            name: '任选胆拖六中五',
            mathConfig: { type: '11x5rxdt', z: 6 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_7z5: {
            name: '任选胆拖七中五',
            mathConfig: { type: '11x5rxdt', z: 7 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_8z5: {
            name: '任选胆拖八中五',
            mathConfig: { type: '11x5rxdt', z: 8 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_qw_dds: {
            name: '定单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        qw_qw_czw: {
            name: '猜中位',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
    },
    sd11y: {
        sm_sm_zxfs: {
            name: '前三直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zxds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        sm_sm_zuxfs: {
            name: '前三组选复式',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['前三组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zuxds: {
            name: '前三组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zxfs: {
            name: '前二直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zxds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zuxfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['前二组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zuxds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        bdd_bdd_bdd11y: {
            name: '不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_dwd11y: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位', '所有位置'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_1z1: {
            name: '任选复式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['选1中1'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_2z2: {
            name: '任选复式二中二',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['选2中2'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_3z3: {
            name: '任选复式三中三',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['选3中3'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_4z4: {
            name: '任选复式四中四',
            mathConfig: { type: 'zuhe', n: 4, per: 1 },
            plate: {
                type: 'click',
                pos: ['选4中4'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_5z5: {
            name: '任选复式五中五',
            mathConfig: { type: 'zuhe', n: 5, per: 1 },
            plate: {
                type: 'click',
                pos: ['选5中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_6z5: {
            name: '任选复式六中五',
            mathConfig: { type: 'zuhe', n: 6, per: 1 },
            plate: {
                type: 'click',
                pos: ['选6中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_7z5: {
            name: '任选复式七中五',
            mathConfig: { type: 'zuhe', n: 7, per: 1 },
            plate: {
                type: 'click',
                pos: ['选7中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_8z5: {
            name: '任选复式八中五',
            mathConfig: { type: 'zuhe', n: 8, per: 1 },
            plate: {
                type: 'click',
                pos: ['选8中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxds_rxds_1z1: {
            name: '任选单式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_2z2: {
            name: '任选单式二中二',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_3z3: {
            name: '任选单式三中三',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_4z4: {
            name: '任选单式四中四',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_5z5: {
            name: '任选单式五中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_6z5: {
            name: '任选单式六中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_7z5: {
            name: '任选单式七中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_8z5: {
            name: '任选单式八中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxdt_rxdt_2z2: {
            name: '任选胆拖二中二',
            mathConfig: { type: '11x5rxdt', z: 2 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_3z3: {
            name: '任选胆拖三中三',
            mathConfig: { type: '11x5rxdt', z: 3 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_4z4: {
            name: '任选胆拖四中四',
            mathConfig: { type: '11x5rxdt', z: 4 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_5z5: {
            name: '任选胆拖五中五',
            mathConfig: { type: '11x5rxdt', z: 5 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_6z5: {
            name: '任选胆拖六中五',
            mathConfig: { type: '11x5rxdt', z: 6 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_7z5: {
            name: '任选胆拖七中五',
            mathConfig: { type: '11x5rxdt', z: 7 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_8z5: {
            name: '任选胆拖八中五',
            mathConfig: { type: '11x5rxdt', z: 8 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_qw_dds: {
            name: '定单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        qw_qw_czw: {
            name: '猜中位',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
    },
    jx11y: {
        sm_sm_zxfs: {
            name: '前三直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zxds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        sm_sm_zuxfs: {
            name: '前三组选复式',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['前三组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zuxds: {
            name: '前三组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zxfs: {
            name: '前二直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zxds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zuxfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['前二组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zuxds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        bdd_bdd_bdd11y: {
            name: '不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_dwd11y: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位', '所有位置'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_1z1: {
            name: '任选复式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['选1中1'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_2z2: {
            name: '任选复式二中二',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['选2中2'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_3z3: {
            name: '任选复式三中三',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['选3中3'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_4z4: {
            name: '任选复式四中四',
            mathConfig: { type: 'zuhe', n: 4, per: 1 },
            plate: {
                type: 'click',
                pos: ['选4中4'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_5z5: {
            name: '任选复式五中五',
            mathConfig: { type: 'zuhe', n: 5, per: 1 },
            plate: {
                type: 'click',
                pos: ['选5中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_6z5: {
            name: '任选复式六中五',
            mathConfig: { type: 'zuhe', n: 6, per: 1 },
            plate: {
                type: 'click',
                pos: ['选6中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_7z5: {
            name: '任选复式七中五',
            mathConfig: { type: 'zuhe', n: 7, per: 1 },
            plate: {
                type: 'click',
                pos: ['选7中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_8z5: {
            name: '任选复式八中五',
            mathConfig: { type: 'zuhe', n: 8, per: 1 },
            plate: {
                type: 'click',
                pos: ['选8中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxds_rxds_1z1: {
            name: '任选单式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_2z2: {
            name: '任选单式二中二',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_3z3: {
            name: '任选单式三中三',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_4z4: {
            name: '任选单式四中四',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_5z5: {
            name: '任选单式五中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_6z5: {
            name: '任选单式六中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_7z5: {
            name: '任选单式七中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_8z5: {
            name: '任选单式八中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxdt_rxdt_2z2: {
            name: '任选胆拖二中二',
            mathConfig: { type: '11x5rxdt', z: 2 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_3z3: {
            name: '任选胆拖三中三',
            mathConfig: { type: '11x5rxdt', z: 3 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_4z4: {
            name: '任选胆拖四中四',
            mathConfig: { type: '11x5rxdt', z: 4 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_5z5: {
            name: '任选胆拖五中五',
            mathConfig: { type: '11x5rxdt', z: 5 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_6z5: {
            name: '任选胆拖六中五',
            mathConfig: { type: '11x5rxdt', z: 6 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_7z5: {
            name: '任选胆拖七中五',
            mathConfig: { type: '11x5rxdt', z: 7 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_8z5: {
            name: '任选胆拖八中五',
            mathConfig: { type: '11x5rxdt', z: 8 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_qw_dds: {
            name: '定单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        qw_qw_czw: {
            name: '猜中位',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
    },
    sh11y: {
        sm_sm_zxfs: {
            name: '前三直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zxds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        sm_sm_zuxfs: {
            name: '前三组选复式',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['前三组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zuxds: {
            name: '前三组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zxfs: {
            name: '前二直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zxds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zuxfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['前二组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zuxds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        bdd_bdd_bdd11y: {
            name: '不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_dwd11y: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位', '所有位置'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_1z1: {
            name: '任选复式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['选1中1'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_2z2: {
            name: '任选复式二中二',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['选2中2'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_3z3: {
            name: '任选复式三中三',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['选3中3'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_4z4: {
            name: '任选复式四中四',
            mathConfig: { type: 'zuhe', n: 4, per: 1 },
            plate: {
                type: 'click',
                pos: ['选4中4'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_5z5: {
            name: '任选复式五中五',
            mathConfig: { type: 'zuhe', n: 5, per: 1 },
            plate: {
                type: 'click',
                pos: ['选5中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_6z5: {
            name: '任选复式六中五',
            mathConfig: { type: 'zuhe', n: 6, per: 1 },
            plate: {
                type: 'click',
                pos: ['选6中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_7z5: {
            name: '任选复式七中五',
            mathConfig: { type: 'zuhe', n: 7, per: 1 },
            plate: {
                type: 'click',
                pos: ['选7中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_8z5: {
            name: '任选复式八中五',
            mathConfig: { type: 'zuhe', n: 8, per: 1 },
            plate: {
                type: 'click',
                pos: ['选8中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxds_rxds_1z1: {
            name: '任选单式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_2z2: {
            name: '任选单式二中二',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_3z3: {
            name: '任选单式三中三',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_4z4: {
            name: '任选单式四中四',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_5z5: {
            name: '任选单式五中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_6z5: {
            name: '任选单式六中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_7z5: {
            name: '任选单式七中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_8z5: {
            name: '任选单式八中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxdt_rxdt_2z2: {
            name: '任选胆拖二中二',
            mathConfig: { type: '11x5rxdt', z: 2 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_3z3: {
            name: '任选胆拖三中三',
            mathConfig: { type: '11x5rxdt', z: 3 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_4z4: {
            name: '任选胆拖四中四',
            mathConfig: { type: '11x5rxdt', z: 4 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_5z5: {
            name: '任选胆拖五中五',
            mathConfig: { type: '11x5rxdt', z: 5 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_6z5: {
            name: '任选胆拖六中五',
            mathConfig: { type: '11x5rxdt', z: 6 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_7z5: {
            name: '任选胆拖七中五',
            mathConfig: { type: '11x5rxdt', z: 7 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_8z5: {
            name: '任选胆拖八中五',
            mathConfig: { type: '11x5rxdt', z: 8 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_qw_dds: {
            name: '定单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        qw_qw_czw: {
            name: '猜中位',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
    },
    ah11y: {
        sm_sm_zxfs: {
            name: '前三直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zxds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        sm_sm_zuxfs: {
            name: '前三组选复式',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['前三组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zuxds: {
            name: '前三组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zxfs: {
            name: '前二直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zxds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zuxfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['前二组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zuxds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        bdd_bdd_bdd11y: {
            name: '不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_dwd11y: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位', '所有位置'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_1z1: {
            name: '任选复式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['选1中1'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_2z2: {
            name: '任选复式二中二',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['选2中2'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_3z3: {
            name: '任选复式三中三',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['选3中3'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_4z4: {
            name: '任选复式四中四',
            mathConfig: { type: 'zuhe', n: 4, per: 1 },
            plate: {
                type: 'click',
                pos: ['选4中4'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_5z5: {
            name: '任选复式五中五',
            mathConfig: { type: 'zuhe', n: 5, per: 1 },
            plate: {
                type: 'click',
                pos: ['选5中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_6z5: {
            name: '任选复式六中五',
            mathConfig: { type: 'zuhe', n: 6, per: 1 },
            plate: {
                type: 'click',
                pos: ['选6中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_7z5: {
            name: '任选复式七中五',
            mathConfig: { type: 'zuhe', n: 7, per: 1 },
            plate: {
                type: 'click',
                pos: ['选7中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_8z5: {
            name: '任选复式八中五',
            mathConfig: { type: 'zuhe', n: 8, per: 1 },
            plate: {
                type: 'click',
                pos: ['选8中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxds_rxds_1z1: {
            name: '任选单式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_2z2: {
            name: '任选单式二中二',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_3z3: {
            name: '任选单式三中三',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_4z4: {
            name: '任选单式四中四',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_5z5: {
            name: '任选单式五中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_6z5: {
            name: '任选单式六中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_7z5: {
            name: '任选单式七中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_8z5: {
            name: '任选单式八中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxdt_rxdt_2z2: {
            name: '任选胆拖二中二',
            mathConfig: { type: '11x5rxdt', z: 2 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_3z3: {
            name: '任选胆拖三中三',
            mathConfig: { type: '11x5rxdt', z: 3 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_4z4: {
            name: '任选胆拖四中四',
            mathConfig: { type: '11x5rxdt', z: 4 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_5z5: {
            name: '任选胆拖五中五',
            mathConfig: { type: '11x5rxdt', z: 5 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_6z5: {
            name: '任选胆拖六中五',
            mathConfig: { type: '11x5rxdt', z: 6 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_7z5: {
            name: '任选胆拖七中五',
            mathConfig: { type: '11x5rxdt', z: 7 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_8z5: {
            name: '任选胆拖八中五',
            mathConfig: { type: '11x5rxdt', z: 8 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_qw_dds: {
            name: '定单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        qw_qw_czw: {
            name: '猜中位',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
    },
    hlj11y: {
        sm_sm_zxfs: {
            name: '前三直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zxds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        sm_sm_zuxfs: {
            name: '前三组选复式',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['前三组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zuxds: {
            name: '前三组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zxfs: {
            name: '前二直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zxds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zuxfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['前二组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zuxds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        bdd_bdd_bdd11y: {
            name: '不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_dwd11y: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位', '所有位置'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_1z1: {
            name: '任选复式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['选1中1'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_2z2: {
            name: '任选复式二中二',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['选2中2'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_3z3: {
            name: '任选复式三中三',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['选3中3'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_4z4: {
            name: '任选复式四中四',
            mathConfig: { type: 'zuhe', n: 4, per: 1 },
            plate: {
                type: 'click',
                pos: ['选4中4'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_5z5: {
            name: '任选复式五中五',
            mathConfig: { type: 'zuhe', n: 5, per: 1 },
            plate: {
                type: 'click',
                pos: ['选5中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_6z5: {
            name: '任选复式六中五',
            mathConfig: { type: 'zuhe', n: 6, per: 1 },
            plate: {
                type: 'click',
                pos: ['选6中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_7z5: {
            name: '任选复式七中五',
            mathConfig: { type: 'zuhe', n: 7, per: 1 },
            plate: {
                type: 'click',
                pos: ['选7中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_8z5: {
            name: '任选复式八中五',
            mathConfig: { type: 'zuhe', n: 8, per: 1 },
            plate: {
                type: 'click',
                pos: ['选8中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxds_rxds_1z1: {
            name: '任选单式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_2z2: {
            name: '任选单式二中二',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_3z3: {
            name: '任选单式三中三',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_4z4: {
            name: '任选单式四中四',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_5z5: {
            name: '任选单式五中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_6z5: {
            name: '任选单式六中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_7z5: {
            name: '任选单式七中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_8z5: {
            name: '任选单式八中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxdt_rxdt_2z2: {
            name: '任选胆拖二中二',
            mathConfig: { type: '11x5rxdt', z: 2 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_3z3: {
            name: '任选胆拖三中三',
            mathConfig: { type: '11x5rxdt', z: 3 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_4z4: {
            name: '任选胆拖四中四',
            mathConfig: { type: '11x5rxdt', z: 4 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_5z5: {
            name: '任选胆拖五中五',
            mathConfig: { type: '11x5rxdt', z: 5 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_6z5: {
            name: '任选胆拖六中五',
            mathConfig: { type: '11x5rxdt', z: 6 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_7z5: {
            name: '任选胆拖七中五',
            mathConfig: { type: '11x5rxdt', z: 7 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_8z5: {
            name: '任选胆拖八中五',
            mathConfig: { type: '11x5rxdt', z: 8 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_qw_dds: {
            name: '定单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        qw_qw_czw: {
            name: '猜中位',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
    },
    yn11y: {
        sm_sm_zxfs: {
            name: '前三直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zxds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        sm_sm_zuxfs: {
            name: '前三组选复式',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['前三组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zuxds: {
            name: '前三组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zxfs: {
            name: '前二直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zxds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zuxfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['前二组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zuxds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        bdd_bdd_bdd11y: {
            name: '不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_dwd11y: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位', '所有位置'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_1z1: {
            name: '任选复式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['选1中1'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_2z2: {
            name: '任选复式二中二',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['选2中2'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_3z3: {
            name: '任选复式三中三',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['选3中3'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_4z4: {
            name: '任选复式四中四',
            mathConfig: { type: 'zuhe', n: 4, per: 1 },
            plate: {
                type: 'click',
                pos: ['选4中4'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_5z5: {
            name: '任选复式五中五',
            mathConfig: { type: 'zuhe', n: 5, per: 1 },
            plate: {
                type: 'click',
                pos: ['选5中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_6z5: {
            name: '任选复式六中五',
            mathConfig: { type: 'zuhe', n: 6, per: 1 },
            plate: {
                type: 'click',
                pos: ['选6中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_7z5: {
            name: '任选复式七中五',
            mathConfig: { type: 'zuhe', n: 7, per: 1 },
            plate: {
                type: 'click',
                pos: ['选7中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_8z5: {
            name: '任选复式八中五',
            mathConfig: { type: 'zuhe', n: 8, per: 1 },
            plate: {
                type: 'click',
                pos: ['选8中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxds_rxds_1z1: {
            name: '任选单式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_2z2: {
            name: '任选单式二中二',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_3z3: {
            name: '任选单式三中三',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_4z4: {
            name: '任选单式四中四',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_5z5: {
            name: '任选单式五中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_6z5: {
            name: '任选单式六中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_7z5: {
            name: '任选单式七中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_8z5: {
            name: '任选单式八中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxdt_rxdt_2z2: {
            name: '任选胆拖二中二',
            mathConfig: { type: '11x5rxdt', z: 2 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_3z3: {
            name: '任选胆拖三中三',
            mathConfig: { type: '11x5rxdt', z: 3 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_4z4: {
            name: '任选胆拖四中四',
            mathConfig: { type: '11x5rxdt', z: 4 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_5z5: {
            name: '任选胆拖五中五',
            mathConfig: { type: '11x5rxdt', z: 5 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_6z5: {
            name: '任选胆拖六中五',
            mathConfig: { type: '11x5rxdt', z: 6 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_7z5: {
            name: '任选胆拖七中五',
            mathConfig: { type: '11x5rxdt', z: 7 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_8z5: {
            name: '任选胆拖八中五',
            mathConfig: { type: '11x5rxdt', z: 8 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_qw_dds: {
            name: '定单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        qw_qw_czw: {
            name: '猜中位',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
    },
    hub11y: {
        sm_sm_zxfs: {
            name: '前三直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zxds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        sm_sm_zuxfs: {
            name: '前三组选复式',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['前三组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zuxds: {
            name: '前三组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zxfs: {
            name: '前二直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zxds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zuxfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['前二组选'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zuxds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        bdd_bdd_bdd11y: {
            name: '不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前三位'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_dwd11y: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位', '所有位置'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_1z1: {
            name: '任选复式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['选1中1'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_2z2: {
            name: '任选复式二中二',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['选2中2'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_3z3: {
            name: '任选复式三中三',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['选3中3'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_4z4: {
            name: '任选复式四中四',
            mathConfig: { type: 'zuhe', n: 4, per: 1 },
            plate: {
                type: 'click',
                pos: ['选4中4'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_5z5: {
            name: '任选复式五中五',
            mathConfig: { type: 'zuhe', n: 5, per: 1 },
            plate: {
                type: 'click',
                pos: ['选5中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_6z5: {
            name: '任选复式六中五',
            mathConfig: { type: 'zuhe', n: 6, per: 1 },
            plate: {
                type: 'click',
                pos: ['选6中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_7z5: {
            name: '任选复式七中五',
            mathConfig: { type: 'zuhe', n: 7, per: 1 },
            plate: {
                type: 'click',
                pos: ['选7中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_8z5: {
            name: '任选复式八中五',
            mathConfig: { type: 'zuhe', n: 8, per: 1 },
            plate: {
                type: 'click',
                pos: ['选8中5'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxds_rxds_1z1: {
            name: '任选单式一中一',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_2z2: {
            name: '任选单式二中二',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_3z3: {
            name: '任选单式三中三',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_4z4: {
            name: '任选单式四中四',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_5z5: {
            name: '任选单式五中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_6z5: {
            name: '任选单式六中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_7z5: {
            name: '任选单式七中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_8z5: {
            name: '任选单式八中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxdt_rxdt_2z2: {
            name: '任选胆拖二中二',
            mathConfig: { type: '11x5rxdt', z: 2 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_3z3: {
            name: '任选胆拖三中三',
            mathConfig: { type: '11x5rxdt', z: 3 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_4z4: {
            name: '任选胆拖四中四',
            mathConfig: { type: '11x5rxdt', z: 4 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_5z5: {
            name: '任选胆拖五中五',
            mathConfig: { type: '11x5rxdt', z: 5 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_6z5: {
            name: '任选胆拖六中五',
            mathConfig: { type: '11x5rxdt', z: 6 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_7z5: {
            name: '任选胆拖七中五',
            mathConfig: { type: '11x5rxdt', z: 7 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxdt_rxdt_8z5: {
            name: '任选胆拖八中五',
            mathConfig: { type: '11x5rxdt', z: 8 },
            plate: {
                type: 'click',
                pos: ['胆码', '拖码'],
                num: [...Array(11)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_qw_dds: {
            name: '定单双',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        qw_qw_czw: {
            name: '猜中位',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
    },
    sckl12: {
        sm_sm_zxfs: {
            name: '前三直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zxds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        sm_sm_zuxfs: {
            name: '前三组选复式',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['前三组选'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sm_sm_zuxds: {
            name: '前三组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zxfs: {
            name: '前二直选复式',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zxds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        em_em_zuxfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['前二组选'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_em_zuxds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,//是否机选
            plate: {
                type: 'input',
            }
        },
        bdd_bdd_3x1m: {
            name: '前三一码不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前三位'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd4_4x1m: {
            name: '前四一码不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['前四位'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd5_5x1m: {
            name: '五星一码不定胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['五位'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_dwd11y: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第一位', '第二位', '第三位', '第四位', '第五位', '所有位置'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_2z2: {
            name: '任选复式二中二',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['选2中2'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_3z3: {
            name: '任选复式三中三',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['选3中3'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_4z4: {
            name: '任选复式四中四',
            mathConfig: { type: 'zuhe', n: 4, per: 1 },
            plate: {
                type: 'click',
                pos: ['选4中4'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_5z5: {
            name: '任选复式五中五',
            mathConfig: { type: 'zuhe', n: 5, per: 1 },
            plate: {
                type: 'click',
                pos: ['选5中5'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_6z5: {
            name: '任选复式六中五',
            mathConfig: { type: 'zuhe', n: 6, per: 1 },
            plate: {
                type: 'click',
                pos: ['选6中5'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_7z5: {
            name: '任选复式七中五',
            mathConfig: { type: 'zuhe', n: 7, per: 1 },
            plate: {
                type: 'click',
                pos: ['选7中5'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxfs_rxfs_8z5: {
            name: '任选复式八中五',
            mathConfig: { type: 'zuhe', n: 8, per: 1 },
            plate: {
                type: 'click',
                pos: ['选8中5'],
                num: [...Array(12)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rxds_rxds_2z2: {
            name: '任选单式二中二',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_3z3: {
            name: '任选单式三中三',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_4z4: {
            name: '任选单式四中四',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_5z5: {
            name: '任选单式五中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_6z5: {
            name: '任选单式六中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_7z5: {
            name: '任选单式七中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
        rxds_rxds_8z5: {
            name: '任选单式八中五',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            isRandom: true,
            plate: {
                type: 'input',
            }
        },
    },
    bjpk10: {
        cq1_cq1_cq1: {
            name: '猜冠军',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq2_cq2_cq2: {
            name: '猜前二',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq2_cq2_ds: {
            name: '猜前二单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        cq3_cq3_cq3: {
            name: '猜前三',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq3_cq3_ds: {
            name: '猜前三单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        cq4_cq4_cq4: {
            name: '猜前四',
            mathConfig: { type: '11x5zxfs', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名', '第四名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq4_cq4_ds: {
            name: '猜前四单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        cq5_cq5_cq5: {
            name: '猜前五',
            mathConfig: { type: '11x5zxfs', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名', '第四名', '第五名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq5_cq5_ds: {
            name: '猜前五单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        dwd_dwd_q5: {
            name: '前五定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名', '第四名', '第五名', '所有位置'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_h5: {
            name: '后五定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第六名', '第七名', '第八名', '第九名', '第十名', '所有位置'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dx_dx_d1: {
            name: '大小冠军',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d2: {
            name: '大小第二名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第二名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d3: {
            name: '大小第三名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第三名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d4: {
            name: '大小第四名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第四名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d5: {
            name: '大小第五名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第五名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_q2: {
            name: '冠亚和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        hz_hz_q2: {
            name: '冠亚和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        hz_hz_q3: {
            name: '前三和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        ds_ds_d1: {
            name: '单双冠军',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d2: {
            name: '单双第二名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第二名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d3: {
            name: '单双第三名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第三名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d4: {
            name: '单双第四名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第四名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d5: {
            name: '单双第五名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第五名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_q2: {
            name: '冠亚和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_1v10: {
            name: '龙虎1v10',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_2v9: {
            name: '龙虎2v9',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_3v8: {
            name: '龙虎3v8',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_4v7: {
            name: '龙虎4v7',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_5v6: {
            name: '龙虎5v6',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        }
    },
    mcpk10: {
        cq1_cq1_cq1: {
            name: '猜冠军',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq2_cq2_cq2: {
            name: '猜前二',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq2_cq2_ds: {
            name: '猜前二单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        cq3_cq3_cq3: {
            name: '猜前三',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq3_cq3_ds: {
            name: '猜前三单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        cq4_cq4_cq4: {
            name: '猜前四',
            mathConfig: { type: '11x5zxfs', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名', '第四名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq4_cq4_ds: {
            name: '猜前四单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        cq5_cq5_cq5: {
            name: '猜前五',
            mathConfig: { type: '11x5zxfs', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名', '第四名', '第五名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq5_cq5_ds: {
            name: '猜前五单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        dwd_dwd_q5: {
            name: '前五定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名', '第四名', '第五名', '所有位置'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_h5: {
            name: '后五定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第六名', '第七名', '第八名', '第九名', '第十名', '所有位置'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dx_dx_d1: {
            name: '大小冠军',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d2: {
            name: '大小第二名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第二名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d3: {
            name: '大小第三名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第三名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d4: {
            name: '大小第四名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第四名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d5: {
            name: '大小第五名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第五名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_q2: {
            name: '冠亚和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        hz_hz_q2: {
            name: '冠亚和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        hz_hz_q3: {
            name: '前三和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        ds_ds_d1: {
            name: '单双冠军',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d2: {
            name: '单双第二名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第二名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d3: {
            name: '单双第三名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第三名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d4: {
            name: '单双第四名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第四名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d5: {
            name: '单双第五名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第五名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_q2: {
            name: '冠亚和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_1v10: {
            name: '龙虎1v10',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_2v9: {
            name: '龙虎2v9',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_3v8: {
            name: '龙虎3v8',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_4v7: {
            name: '龙虎4v7',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_5v6: {
            name: '龙虎5v6',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        }
    },
    xgpk10: {
        cq1_cq1_cq1: {
            name: '猜冠军',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq2_cq2_cq2: {
            name: '猜前二',
            mathConfig: { type: '11x5zxfs', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq2_cq2_ds: {
            name: '猜前二单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        cq3_cq3_cq3: {
            name: '猜前三',
            mathConfig: { type: '11x5zxfs', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq3_cq3_ds: {
            name: '猜前三单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        cq4_cq4_cq4: {
            name: '猜前四',
            mathConfig: { type: '11x5zxfs', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名', '第四名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq4_cq4_ds: {
            name: '猜前四单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        cq5_cq5_cq5: {
            name: '猜前五',
            mathConfig: { type: '11x5zxfs', posCount: 5 },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名', '第四名', '第五名'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        cq5_cq5_ds: {
            name: '猜前五单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input'
            }
        },
        dwd_dwd_q5: {
            name: '前五定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军', '第二名', '第三名', '第四名', '第五名', '所有位置'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dwd_dwd_h5: {
            name: '后五定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第六名', '第七名', '第八名', '第九名', '第十名', '所有位置'],
                num: [...Array(10)].map((v, i) => ('0' + String(i + 1)).slice(-2)),
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dx_dx_d1: {
            name: '大小冠军',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d2: {
            name: '大小第二名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第二名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d3: {
            name: '大小第三名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第三名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d4: {
            name: '大小第四名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第四名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_d5: {
            name: '大小第五名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第五名'],
                num: ['大', '小'],
                filter: ['全', '清'].reverse()
            }
        },
        dx_dx_q2: {
            name: '冠亚和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        hz_hz_q2: {
            name: '冠亚和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        hz_hz_q3: {
            name: '前三和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: []
            }
        },
        ds_ds_d1: {
            name: '单双冠军',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['冠军'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d2: {
            name: '单双第二名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第二名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d3: {
            name: '单双第三名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第三名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d4: {
            name: '单双第四名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第四名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_d5: {
            name: '单双第五名',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['第五名'],
                num: ['单', '双'],
                filter: ['全', '清'].reverse()
            }
        },
        ds_ds_q2: {
            name: '冠亚和值',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_1v10: {
            name: '龙虎1v10',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_2v9: {
            name: '龙虎2v9',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_3v8: {
            name: '龙虎3v8',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_4v7: {
            name: '龙虎4v7',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        },
        lh_lh_5v6: {
            name: '龙虎5v6',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                filter: ['全', '清'].reverse()
            }
        }
    },
    hnky481: {
        sx_zx_fs: {
            name: '四星直选复式',
            mathConfig: { type: 'jiecheng', posCount: 4 },
            plate: {
                type: 'click',
                pos: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            mathConfig: { type: 'zuhe', per: 1, n: 4 },
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            mathConfig: { type: 'zucheng', up: 1, down: 2 },
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 2 },
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            mathConfig: { type: 'zucheng', up: 1, down: 1 },
            plate: {
                type: 'click',
                pos: ['三重号'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['自由泳', '仰泳', '蛙泳'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['自由泳', '仰泳', '蛙泳'],
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [1, 2, 3, 4, 5, 6, 7, 8] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                filter: []
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            mathConfig: { type: 'zuhe', per: 1, n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            mathConfig: { type: 'zuhe', per: 1, n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['自由泳', '仰泳', '蛙泳']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [1, 2, 3, 4, 5, 6, 7, 8] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            mathConfig: { type: 'jiecheng', posCount: 3 },
            plate: {
                type: 'click',
                pos: ['自由泳', '仰泳', '蛙泳'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['自由泳', '仰泳', '蛙泳'],
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            mathConfig: { type: 'hezhi', size: 3, nums: [1, 2, 3, 4, 5, 6, 7, 8] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                filter: []
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            mathConfig: { type: 'zuhe', n: 2, per: 2 },
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            mathConfig: { type: 'zuhe', n: 3, per: 1 },
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['自由泳', '仰泳', '蛙泳']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            mathConfig: { type: 'zuxhezhi', size: 3, nums: [1, 2, 3, 4, 5, 6, 7, 8] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                filter: []
            }
        },
        em_zx_qfs: {
            name: '前二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['自由泳', '仰泳'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_qds: {
            name: '前二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['自由泳', '仰泳'],
            }
        },
        em_zx_qhz: {
            name: '前二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [1, 2, 3, 4, 5, 6, 7, 8] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                filter: []
            }
        },
        em_zux_qfs: {
            name: '前二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['自由泳', '仰泳'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_qds: {
            name: '前二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['自由泳', '仰泳'],
            }
        },
        em_zux_qhz: {
            name: '前二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                filter: []
            }
        },
        em_zx_hfs: {
            name: '后二直选复式',
            mathConfig: { type: 'jiecheng', posCount: 2 },
            plate: {
                type: 'click',
                pos: ['自由泳', '仰泳'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zx_hds: {
            name: '后二直选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['自由泳', '仰泳'],
            }
        },
        em_zx_hhz: {
            name: '后二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [1, 2, 3, 4, 5, 6, 7, 8] },
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                filter: []
            }
        },
        em_zux_hfs: {
            name: '后二组选复式',
            mathConfig: { type: 'zuhe', n: 2, per: 1 },
            plate: {
                type: 'click',
                pos: ['自由泳', '仰泳'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        em_zux_hds: {
            name: '后二组选单式',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'input',
                pos: ['自由泳', '仰泳'],
            }
        },
        em_zux_hhz: {
            name: '后二组选和值',
            mathConfig: { type: 'zuxhezhi', size: 2, nums: [1, 2, 3, 4, 5, 6, 7, 8] },
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            mathConfig: { type: 'leijia', needMultiplyPos: false },
            plate: {
                type: 'click',
                pos: ['自由泳', '仰泳', '蛙泳', '蝶泳', '所有位置'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            mathConfig: { type: 'rzxfs', r: 2 },
            plate: {
                type: 'click',
                pos: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            mathConfig: { type: 'leijia', r: 2, needMultiplyPos: true },
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'input',
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
            mathConfig: { type: 'hezhi', size: 2, nums: [1, 2, 3, 4, 5, 6, 7, 8], needMultiplyPos: true },
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                filter: []
            }
        },
        rx2_zux_fs: {
            name: '任二组选复式',
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'click',
                pos: ['组选复式'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zux_ds: {
            name: '任二组选单式',
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'input',
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                filter: []
            }
        },
        rx3_zx_fs: {
            name: '任三直选复式',
            plate: {
                type: 'click',
                pos: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'input',
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_z6: {
            name: '任三组选6',
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [1, 2, 3, 4, 5, 6, 7, 8],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zux_hh: {
            name: '任三组选混合',
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
            posSelect: ['自由泳', '仰泳', '蛙泳', '蝶泳'],
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                filter: []
            }
        }
    },
};