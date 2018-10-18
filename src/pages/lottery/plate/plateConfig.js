export default {
    cqssc: {
        wx_zx_fs: {
            name: '五星直选复式',
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zx_ds: {
            name: '五星直选单式',
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位', '十位', '个位'],
            }
        },
        wx_zux_z120: {
            name: '五星组选120',
            plate: {
                type: 'click',
                pos: ['组120'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z60: {
            name: '五星组选60',
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z30: {
            name: '五星组选30',
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z20: {
            name: '五星组选20',
            plate: {
                type: 'click',
                pos: ['三重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z10: {
            name: '五星组选10',
            plate: {
                type: 'click',
                pos: ['三重号', '二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        wx_zux_z5: {
            name: '五星组选5',
            plate: {
                type: 'click',
                pos: ['四重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_fs: {
            name: '四星直选复式',
            plate: {
                type: 'click',
                pos: ['千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zx_ds: {
            name: '四星直选单式',
            plate: {
                type: 'input',
                pos: ['千位', '百位', '十位', '个位'],
            }
        },
        sx_zux_z24: {
            name: '四星组选24',
            plate: {
                type: 'click',
                pos: ['组24'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z12: {
            name: '四星组选12',
            plate: {
                type: 'click',
                pos: ['二重号', '单号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z6: {
            name: '四星组选6',
            plate: {
                type: 'click',
                pos: ['二重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        sx_zux_z4: {
            name: '四星组选4',
            plate: {
                type: 'click',
                pos: ['三重号'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_fs: {
            name: '前三直选复式',
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zx_ds: {
            name: '前三直选单式',
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位'],
            }
        },
        qsm_zx_hz: {
            name: '前三直选和值',
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        qsm_zx_kd: {
            name: '前三直选跨度',
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z3: {
            name: '前三组选3',
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_z6: {
            name: '前三组选6',
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qsm_zux_hh: {
            name: '前三组选混合',
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        qsm_zux_hz: {
            name: '前三组选和值',
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        qsm_zux_bd: {
            name: '前三组选包胆',
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        zsm_zx_fs: {
            name: '中三直选复式',
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zx_ds: {
            name: '中三直选单式',
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位'],
            }
        },
        zsm_zx_hz: {
            name: '中三直选和值',
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        zsm_zx_kd: {
            name: '中三直选跨度',
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z3: {
            name: '中三组选3',
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_z6: {
            name: '中三组选6',
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zsm_zux_hh: {
            name: '中三组选混合',
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        zsm_zux_hz: {
            name: '中三组选和值',
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        zsm_zux_bd: {
            name: '中三组选包胆',
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hsm_zx_fs: {
            name: '后三直选复式',
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zx_ds: {
            name: '后三直选单式',
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位'],
            }
        },
        hsm_zx_hz: {
            name: '后三直选和值',
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        hsm_zx_kd: {
            name: '后三直选跨度',
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z3: {
            name: '后三组选3',
            plate: {
                type: 'click',
                pos: ['组3'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_z6: {
            name: '后三组选6',
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hsm_zux_hh: {
            name: '后三组选混合',
            plate: {
                type: 'input',
                pos: ['万位', '千位', '百位']
            }
        },
        hsm_zux_hz: {
            name: '后三组选和值',
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                filter: []
            }
        },
        hsm_zux_bd: {
            name: '后三组选包胆',
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        qem_zx_fs: {
            name: '前二直选复式',
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qem_zx_ds: {
            name: '前二直选单式',
            plate: {
                type: 'input',
                pos: ['万位', '千位'],
            }
        },
        qem_zx_hz: {
            name: '前二直选和值',
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        qem_zx_kd: {
            name: '前二直选跨度',
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qem_zux_fs: {
            name: '前二组选复式',
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qem_zux_ds: {
            name: '前二组选单式',
            plate: {
                type: 'input',
                pos: ['万位', '千位'],
            }
        },
        qem_zux_hz: {
            name: '前二组选和值',
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        qem_zux_bd: {
            name: '前二组选包胆',
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        hem_zx_fs: {
            name: '后二直选复式',
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hem_zx_ds: {
            name: '后二直选单式',
            plate: {
                type: 'input',
                pos: ['万位', '千位'],
            }
        },
        hem_zx_hz: {
            name: '后二直选和值',
            plate: {
                type: 'click',
                pos: ['直选和值'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                filter: []
            }
        },
        hem_zx_kd: {
            name: '后二直选跨度',
            plate: {
                type: 'click',
                pos: ['跨度'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hem_zux_fs: {
            name: '后二组选复式',
            plate: {
                type: 'click',
                pos: ['万位', '千位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        hem_zux_ds: {
            name: '后二组选单式',
            plate: {
                type: 'input',
                pos: ['万位', '千位'],
            }
        },
        hem_zux_hz: {
            name: '后二组选和值',
            plate: {
                type: 'click',
                pos: ['组选和值'],
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                filter: []
            }
        },
        hem_zux_bd: {
            name: '后二组选包胆',
            plate: {
                type: 'click',
                pos: ['组选包胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: []
            }
        },
        dwd_dwd_dwd: {
            name: '定位胆',
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs1: {
            name: '前三一码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_qs2: {
            name: '前三二码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_zs1: {
            name: '中三一码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_zs2: {
            name: '中三二码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs1: {
            name: '后三一码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_hs2: {
            name: '后三二码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_4x1: {
            name: '四星一码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_4x2: {
            name: '四星二码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_4x3: {
            name: '四星三码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_5x1: {
            name: '五星一码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_5x2: {
            name: '五星二码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        bdd_bdd_5x3: {
            name: '五星三码不定胆',
            plate: {
                type: 'click',
                pos: ['不定胆'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        zh_hzdxds_q3hz: {
            name: '前三总和',
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
            plate: {
                type: 'click',
                pos: ['一帆风顺'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        qw_ts_hscs: {
            name: '好事成双',
            plate: {
                type: 'click',
                pos: ['好事成双'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        dxds_dxds_h2: {
            plate: {
                isQw: true,
                type: 'click',
                pos: ['十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
            name: '后二大小单双'
        },
        dxds_dxds_q2: {
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
            name: '前二大小单双'
        },
        dxds_dxds_h3: {
            plate: {
                isQw: true,
                type: 'click',
                pos: ['百位', '十位', '个位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
            name: '后三大小单双'
        },
        dxds_dxds_q3: {
            plate: {
                isQw: true,
                type: 'click',
                pos: ['万位', '千位', '百位'],
                num: ['大', '小', '单', '双'],
                filter: ['全', '清'].reverse(),
            },
            name: '前三大小单双'
        },
        dxds_dxgs_wx: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '五星大小个数'
        },
        dxds_dxgs_sx: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '四星大小个数'
        },
        dxds_dxgs_qs: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '前三大小个数'
        },
        dxds_dxgs_zs: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '中三大小个数'
        },
        dxds_dxgs_hs: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '后三大小个数'
        },
        dxds_dsgs_wx: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '五星单双个数'
        },
        dxds_dsgs_sx: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '四星单双个数'
        },
        dxds_dsgs_qs: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '前三单双个数'
        },
        dxds_dsgs_hs: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '后三单双个数'
        },
        dxds_dsgs_zs: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '中三单双个数'
        },
        zh_hzdxds_5xhz: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '五星总和'
        },
        qw_lhh_wq: {
            plate: {
                area: [0, 1],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '万千龙虎斗'
        },
        qw_lhh_wb: {
            plate: {
                area: [0, 2],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '万百龙虎斗'
        },
        qw_lhh_ws: {
            plate: {
                area: [0, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '万十龙虎斗'
        },
        qw_lhh_wg: {
            plate: {
                area: [0, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '万个龙虎斗'
        },
        qw_lhh_qb: {
            plate: {
                area: [1, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '千百龙虎斗'
        },
        qw_lhh_qg: {
            plate: {
                area: [1, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '千个龙虎斗'
        },
        qw_lhh_bs: {
            plate: {
                area: [2, 3],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '百十龙虎斗'
        },
        qw_lhh_bg: {
            plate: {
                area: [2, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '百个龙虎斗'
        },
        qw_lhh_sg: {
            plate: {
                area: [3, 4],
                isLonghu: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '十个龙虎斗'
        },
        qw_xt_q3: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '前三炸金花'
        },
        qw_xt_z3: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '中三炸金花'
        },
        qw_xt_h3: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '后三炸金花'
        },
        nn_nn_nn: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '牛牛'
        },
        sh_sh_wx: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '梭哈'
        },
        bjl_bjl_bjl: {
            plate: {
                isQw: true,
                type: 'click',
                filter: ['全', '清'].reverse(),
            },
            name: '百家乐'
        },
        rx2_zx_fs: {
            name: '任二直选复式',
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx2_zx_ds: {
            name: '任二直选单式',
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx2_zx_hz: {
            name: '任二直选和值',
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
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx2_zux_hz: {
            name: '任二组选和值',
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
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx3_zx_ds: {
            name: '任三直选单式',
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zx_hz: {
            name: '任三直选和值',
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                filter: []
            }
        },
        rx3_zux_z3: {
            name: '任三组选3',
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
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx3_zux_hz: {
            name: '任三组选和值',
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
            plate: {
                type: 'click',
                pos: ['万位', '千位', '百位', '十位', '个位'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zx_ds: {
            name: '任四直选单式',
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'input',
            }
        },
        rx4_zux_z24: {
            name: '任四组选24',
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
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组12'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z6: {
            name: '任四组选6',
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组6'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        },
        rx4_zux_z4: {
            name: '任四组选4',
            posSelect: ['万', '千', '百', '十', '个'],
            plate: {
                type: 'click',
                pos: ['组4'],
                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                filter: ['全', '大', '小', '奇', '偶', '清'].reverse()
            }
        }
    }
};