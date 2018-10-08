export default {
    CQSSC: {
        normal: [{
            tab: '五星',
            subTabConfig: [{
                    title: '五星直选',
                    playWay: [{
                            cn: '复式',
                            en: 'wx_zx_fs',
                            name: '五星直选复式',
                            plate: {
                                type: 'click',
                                pos: ['万位', '千位', '百位', '十位', '个位'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }

                        },
                        {
                            cn: '单式',
                            en: 'wx_zx_ds',
                            name: '五星直选单式',
                            plate: {
                                type: 'input',
                                pos: ['万位', '千位', '百位', '十位', '个位'],
                            }

                        }
                    ]
                },
                {
                    title: '五星组选',
                    playWay: [{
                            cn: '组选120',
                            en: 'wx_zux_z120',
                            name: '五星组选120',
                            plate: {
                                type: 'click',
                                pos: ['组120'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        },
                        {
                            cn: '组选60',
                            en: 'wx_zux_z60',
                            name: '五星组选60',
                            plate: {
                                type: 'click',
                                pos: ['二重号', '单号'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        },
                        {
                            cn: '组选30',
                            en: 'wx_zux_z30',
                            name: '五星组选30',
                            plate: {
                                type: 'click',
                                pos: ['二重号', '单号'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        }, {
                            cn: '组选20',
                            en: 'wx_zux_z20',
                            name: '五星组选20',
                            plate: {
                                type: 'click',
                                pos: ['三重号', '单号'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        }, {
                            cn: '组选10',
                            en: 'wx_zux_z10',
                            name: '五星组选10',
                            plate: {
                                type: 'click',
                                pos: ['三重号', '二重号'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        }, {
                            cn: '组选5',
                            en: 'wx_zux_z5',
                            name: '五星组选5',
                            plate: {
                                type: 'click',
                                pos: ['四重号', '单号'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        },
                    ]
                }
            ]
        }, {
            tab: '四星',
            subTabConfig: [{
                    title: '四星直选',
                    playWay: [{
                            cn: '复式',
                            en: 'sx_zx_fs',
                            name: '四星直选复式',
                            plate: {
                                type: 'click',
                                pos: ['千位', '百位', '十位', '个位'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }

                        },
                        {
                            cn: '单式',
                            en: 'sx_zx_ds',
                            name: '四星直选单式',
                            plate: {
                                type: 'input',
                                pos: ['千位', '百位', '十位', '个位'],
                            }

                        }
                    ]
                },
                {
                    title: '四星组选',
                    playWay: [{
                            cn: '组选24',
                            en: 'sx_zux_z24',
                            name: '四星组选24',
                            plate: {
                                type: 'click',
                                pos: ['组24'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        },
                        {
                            cn: '组选12',
                            en: 'sx_zux_z12',
                            name: '四星组选12',
                            plate: {
                                type: 'click',
                                pos: ['二重号', '单号'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        },
                        {
                            cn: '组选6',
                            en: 'sx_zux_z6',
                            name: '四星组选6',
                            plate: {
                                type: 'click',
                                pos: ['二重号'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        }, {
                            cn: '组选4',
                            en: 'sx_zux_z4',
                            name: '四星组选4',
                            plate: {
                                type: 'click',
                                pos: ['三重号'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        }
                    ]
                }
            ]
        }, {
            tab: '前三',
            subTabConfig: [{
                    title: '前三直选',
                    playWay: [{
                            cn: '复式',
                            en: 'qsm_zx_fs',
                            name: '前三直选复式',
                            plate: {
                                type: 'click',
                                pos: ['万位', '千位', '百位'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }

                        },
                        {
                            cn: '单式',
                            en: 'qsm_zx_ds',
                            name: '前三直选单式',
                            plate: {
                                type: 'input',
                                pos: ['万位', '千位', '百位'],
                            }

                        },
                        {
                            cn: '和值',
                            en: 'qsm_zx_hz',
                            name: '前三直选和值',
                            plate: {
                                type: 'click',
                                pos: ['直选和值'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                                filter: []
                            }

                        },
                        {
                            cn: '跨度',
                            en: 'qsm_zx_kd',
                            name: '前三直选跨度',
                            plate: {
                                type: 'click',
                                pos: ['跨度'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }

                        }
                    ]
                },
                {
                    title: '前三组选',
                    playWay: [{
                            cn: '组三',
                            en: 'qsm_zux_z3',
                            name: '前三组选3',
                            plate: {
                                type: 'click',
                                pos: ['组3'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        },
                        {
                            cn: '组六',
                            en: 'qsm_zux_z6',
                            name: '前三组选6',
                            plate: {
                                type: 'click',
                                pos: ['组6'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        }, {
                            cn: '混合',
                            en: 'qsm_zux_hh',
                            name: '前三组选混合',
                            plate: {
                                type: 'input',
                                pos: ['万位', '千位', '百位']
                            }
                        }, {
                            cn: '和值',
                            en: 'qsm_zux_hz',
                            name: '前三组选和值',
                            plate: {
                                type: 'click',
                                pos: ['组选和值'],
                                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                                filter: []
                            }
                        }, {
                            cn: '包胆',
                            en: 'qsm_zux_bd',
                            name: '前三组选包胆',
                            plate: {
                                type: 'click',
                                pos: ['组选包胆'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: []
                            }
                        }
                    ]
                }
            ]
        }, {
            tab: '中三',
            subTabConfig: [{
                    title: '中三直选',
                    playWay: [{
                            cn: '复式',
                            en: 'zsm_zx_fs',
                            name: '中三直选复式',
                            plate: {
                                type: 'click',
                                pos: ['万位', '千位', '百位'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }

                        },
                        {
                            cn: '单式',
                            en: 'zsm_zx_ds',
                            name: '中三直选单式',
                            plate: {
                                type: 'input',
                                pos: ['万位', '千位', '百位'],
                            }

                        },
                        {
                            cn: '和值',
                            en: 'zsm_zx_hz',
                            name: '中三直选和值',
                            plate: {
                                type: 'click',
                                pos: ['直选和值'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                                filter: []
                            }

                        },
                        {
                            cn: '跨度',
                            en: 'zsm_zx_kd',
                            name: '中三直选跨度',
                            plate: {
                                type: 'click',
                                pos: ['跨度'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }

                        }
                    ]
                },
                {
                    title: '中三组选',
                    playWay: [{
                            cn: '组三',
                            en: 'zsm_zux_z3',
                            name: '中三组选3',
                            plate: {
                                type: 'click',
                                pos: ['组3'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        },
                        {
                            cn: '组六',
                            en: 'zsm_zux_z6',
                            name: '中三组选6',
                            plate: {
                                type: 'click',
                                pos: ['组6'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        }, {
                            cn: '混合',
                            en: 'zsm_zux_hh',
                            name: '中三组选混合',
                            plate: {
                                type: 'input',
                                pos: ['万位', '千位', '百位']
                            }
                        }, {
                            cn: '和值',
                            en: 'zsm_zux_hz',
                            name: '中三组选和值',
                            plate: {
                                type: 'click',
                                pos: ['组选和值'],
                                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                                filter: []
                            }
                        }, {
                            cn: '包胆',
                            en: 'zsm_zux_bd',
                            name: '中三组选包胆',
                            plate: {
                                type: 'click',
                                pos: ['组选包胆'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: []
                            }
                        }
                    ]
                }
            ]
        }, {
            tab: '后三',
            subTabConfig: [{
                    title: '后三直选',
                    playWay: [{
                            cn: '复式',
                            en: 'hsm_zx_fs',
                            name: '后三直选复式',
                            plate: {
                                type: 'click',
                                pos: ['万位', '千位', '百位'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }

                        },
                        {
                            cn: '单式',
                            en: 'hsm_zx_ds',
                            name: '后三直选单式',
                            plate: {
                                type: 'input',
                                pos: ['万位', '千位', '百位'],
                            }

                        },
                        {
                            cn: '和值',
                            en: 'hsm_zx_hz',
                            name: '后三直选和值',
                            plate: {
                                type: 'click',
                                pos: ['直选和值'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                                filter: []
                            }

                        },
                        {
                            cn: '跨度',
                            en: 'hsm_zx_kd',
                            name: '后三直选跨度',
                            plate: {
                                type: 'click',
                                pos: ['跨度'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }

                        }
                    ]
                },
                {
                    title: '后三组选',
                    playWay: [{
                            cn: '组三',
                            en: 'hsm_zux_z3',
                            name: '后三组选3',
                            plate: {
                                type: 'click',
                                pos: ['组3'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        },
                        {
                            cn: '组六',
                            en: 'hsm_zux_z6',
                            name: '后三组选6',
                            plate: {
                                type: 'click',
                                pos: ['组6'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        }, {
                            cn: '混合',
                            en: 'hsm_zux_hh',
                            name: '后三组选混合',
                            plate: {
                                type: 'input',
                                pos: ['万位', '千位', '百位']
                            }
                        }, {
                            cn: '和值',
                            en: 'hsm_zux_hz',
                            name: '后三组选和值',
                            plate: {
                                type: 'click',
                                pos: ['组选和值'],
                                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                                filter: []
                            }
                        }, {
                            cn: '包胆',
                            en: 'hsm_zux_bd',
                            name: '后三组选包胆',
                            plate: {
                                type: 'click',
                                pos: ['组选包胆'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: []
                            }
                        }
                    ]
                }
            ]
        }, {
            tab: '前二',
            subTabConfig: [{
                    title: '前二直选',
                    playWay: [{
                            cn: '复式',
                            en: 'qem_zx_fs',
                            name: '前二直选复式',
                            plate: {
                                type: 'click',
                                pos: ['万位', '千位'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }

                        },
                        {
                            cn: '单式',
                            en: 'qem_zx_ds',
                            name: '前二直选单式',
                            plate: {
                                type: 'input',
                                pos: ['万位', '千位'],
                            }

                        },
                        {
                            cn: '和值',
                            en: 'qem_zx_hz',
                            name: '前二直选和值',
                            plate: {
                                type: 'click',
                                pos: ['直选和值'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                                filter: []
                            }

                        },
                        {
                            cn: '跨度',
                            en: 'qem_zx_kd',
                            name: '前二直选跨度',
                            plate: {
                                type: 'click',
                                pos: ['跨度'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }

                        }
                    ]
                },
                {
                    title: '前二组选',
                    playWay: [{
                            cn: '复式',
                            en: 'qem_zux_fs',
                            name: '前二组选复式',
                            plate: {
                                type: 'click',
                                pos: ['万位', '千位'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: ['全', '大', '小', '奇', '偶', '清']
                            }
                        },
                        {
                            cn: '单式',
                            en: 'qem_zux_ds',
                            name: '前二组选单式',
                            plate: {
                                type: 'input',
                                pos: ['万位', '千位'],
                            }
                        }, {
                            cn: '和值',
                            en: 'qem_zux_hz',
                            name: '前二组选和值',
                            plate: {
                                type: 'click',
                                pos: ['组选和值'],
                                num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                                filter: []
                            }
                        }, {
                            cn: '包胆',
                            en: 'qem_zux_bd',
                            name: '前二组选包胆',
                            plate: {
                                type: 'click',
                                pos: ['组选包胆'],
                                num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                filter: []
                            }
                        }
                    ]
                }
            ]
        }, {
            tab: '定位胆',
            subTabConfig: [{
                title: '定位胆',
                playWay: [{
                    cn: '定位胆',
                    en: 'dwd_dwd_dwd',
                    name: '定位胆',
                    plate: {
                        type: 'click',
                        pos: ['万位', '千位', '百位', '十位', '个位', '所有位置'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }, ]
            }]
        }, {
            tab: '不定胆',
            subTabConfig: [{
                title: '三星不定胆',
                playWay: [{
                    cn: '前三一码',
                    en: 'bdd_bdd_qs1',
                    name: '前三一码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }, {
                    cn: '前三二码',
                    en: 'bdd_bdd_qs2',
                    name: '前三二码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }, {
                    cn: '中三一码',
                    en: 'bdd_bdd_zs1',
                    name: '中三一码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }, {
                    cn: '中三二码',
                    en: 'bdd_bdd_zs2',
                    name: '中三二码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }, {
                    cn: '后三一码',
                    en: 'bdd_bdd_hs1',
                    name: '后三一码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }, {
                    cn: '后三二码',
                    en: 'bdd_bdd_hs2',
                    name: '后三二码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }]
            }, {
                title: '四星不定胆',
                playWay: [{
                    cn: '四星一码',
                    en: 'bdd_bdd_4x1',
                    name: '四星一码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }, {
                    cn: '四星二码',
                    en: 'bdd_bdd_4x2',
                    name: '四星二码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }, {
                    cn: '四星三码',
                    en: 'bdd_bdd_4x3',
                    name: '四星三码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }]
            }, {
                title: '五星不定胆',
                playWay: [{
                    cn: '五星一码',
                    en: 'bdd_bdd_5x1',
                    name: '五星一码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }, {
                    cn: '五星二码',
                    en: 'bdd_bdd_5x2',
                    name: '五星二码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }

                }, {
                    cn: '五星三码',
                    en: 'bdd_bdd_5x3',
                    name: '五星三码不定胆',
                    plate: {
                        type: 'click',
                        pos: ['不定胆'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }]
            }]
        }, {
            tab: '大小单双',
            subTabConfig: [{
                title: '大小单双组合',
                playWay: [{
                        isChaidan: true,
                        cn: '后二大小单双',
                        en: 'dxds_dxgs_h2',
                        name: '后二大小单双',
                        plate: {
                            type: 'click',
                            pos: ['十位', '个位'],
                            num: [{
                                cn: '大',
                                en: 'dxds_dxgs_h2_da'
                            }, {
                                cn: '小',
                                en: 'dxds_dxgs_h2_xiao'
                            }, {
                                cn: '单',
                                en: 'dxds_dxgs_h2_dan'
                            }, {
                                cn: '双',
                                en: 'dxds_dxgs_h2_shuang'
                            }],
                            filter: ['全', '清']
                        }

                    },
                    {
                        isChaidan: true,
                        cn: '前二大小单双',
                        en: 'dxds_dxgs_q2',
                        name: '前二大小单双',
                        plate: {
                            type: 'click',
                            pos: ['万位', '千位'],
                            num: [{
                                cn: '大',
                                en: 'dxds_dxgs_q2_da'
                            }, {
                                cn: '小',
                                en: 'dxds_dxgs_q2_xiao'
                            }, {
                                cn: '单',
                                en: 'dxds_dxgs_q2_dan'
                            }, {
                                cn: '双',
                                en: 'dxds_dxgs_q2_shuang'
                            }],
                            filter: ['全', '清']
                        }

                    },
                    {
                        isChaidan: true,
                        cn: '后三大小单双',
                        en: 'dxds_dxgs_h3',
                        name: '后三大小单双',
                        plate: {
                            type: 'click',
                            pos: ['百位', '十位', '个位'],
                            num: [{
                                cn: '大',
                                en: 'dxds_dxgs_h3_da'
                            }, {
                                cn: '小',
                                en: 'dxds_dxgs_h3_xiao'
                            }, {
                                cn: '单',
                                en: 'dxds_dxgs_h3_dan'
                            }, {
                                cn: '双',
                                en: 'dxds_dxgs_h3_shuang'
                            }],
                            filter: ['全', '清']
                        }

                    },
                    {
                        isChaidan: true,
                        cn: '前三大小单双',
                        en: 'dxds_dxgs_q3',
                        name: '前三大小单双',
                        plate: {
                            type: 'click',
                            pos: ['万位', '千位', '百位'],
                            num: [{
                                cn: '大',
                                en: 'dxds_dxgs_q3_da'
                            }, {
                                cn: '小',
                                en: 'dxds_dxgs_q3_xiao'
                            }, {
                                cn: '单',
                                en: 'dxds_dxgs_q3_dan'
                            }, {
                                cn: '双',
                                en: 'dxds_dxgs_q3_shuang'
                            }],
                            filter: ['全', '清']
                        }

                    },
                ]
            }, {
                title: '大小个数',
                playWay: [{
                    isChaidan: true,
                    cn: '五星大小个数',
                    en: 'dxds_dxgs_wx',
                    name: '五星大小个数',
                    plate: {
                        type: 'click',
                        pos: ['五星'],
                        num: [{
                            cn: '全大',
                            en: 'dxds_dxgs_wx_qd_qx'
                        }, {
                            cn: '4大1小',
                            en: 'dxds_dxgs_wx_41_14'
                        }, {
                            cn: '3大2小',
                            en: 'dxds_dxgs_wx_32_23'
                        }, {
                            cn: '2大3小',
                            en: 'dxds_dxgs_wx_32_23'
                        }, {
                            cn: '1大4小',
                            en: 'dxds_dxgs_wx_41_14'
                        }, {
                            cn: '全小',
                            en: 'dxds_dxgs_wx_qd_qx'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '四星大小个数',
                    en: 'dxds_dxgs_sx',
                    name: '四星大小个数',
                    plate: {
                        type: 'click',
                        pos: ['四星'],
                        num: [{
                            cn: '全大',
                            en: 'dxds_dxgs_sx_qd_qx'
                        }, {
                            cn: '3大1小',
                            en: 'dxds_dxgs_sx_31_13'
                        }, {
                            cn: '2大2小',
                            en: 'dxds_dxgs_sx_2d2x'
                        }, {
                            cn: '1大3小',
                            en: 'dxds_dxgs_sx_31_13'
                        }, {
                            cn: '全小',
                            en: 'dxds_dxgs_sx_qd_qx'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '前三大小个数',
                    en: 'dxds_dxgs_qs',
                    name: '前三大小个数',
                    plate: {
                        type: 'click',
                        pos: ['前三'],
                        num: [{
                            cn: '全大',
                            en: 'dxds_dxgs_qs_qd_qx'
                        }, {
                            cn: '2大1小',
                            en: 'dxds_dxgs_qs_21_12'
                        }, {
                            cn: '1大2小',
                            en: 'dxds_dxgs_qs_21_12'
                        }, {
                            cn: '全小',
                            en: 'dxds_dxgs_qs_qd_qx'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '中三大小个数',
                    en: 'dxds_dxgs_zs',
                    name: '中三大小个数',
                    plate: {
                        type: 'click',
                        pos: ['中三'],
                        num: [{
                            cn: '全大',
                            en: 'dxds_dxgs_qs_qd_qx'
                        }, {
                            cn: '2大1小',
                            en: 'dxds_dxgs_qs_21_12'
                        }, {
                            cn: '1大2小',
                            en: 'dxds_dxgs_qs_21_12'
                        }, {
                            cn: '全小',
                            en: 'dxds_dxgs_qs_qd_qx'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '后三大小个数',
                    en: 'dxds_dxgs_hs',
                    name: '后三大小个数',
                    plate: {
                        type: 'click',
                        pos: ['后三'],
                        num: [{
                            cn: '全大',
                            en: 'dxds_dxgs_qs_qd_qx'
                        }, {
                            cn: '2大1小',
                            en: 'dxds_dxgs_qs_21_12'
                        }, {
                            cn: '1大2小',
                            en: 'dxds_dxgs_qs_21_12'
                        }, {
                            cn: '全小',
                            en: 'dxds_dxgs_qs_qd_qx'
                        }],
                        filter: ['全', '清']
                    }
                }],
            }, {
                title: '单双个数',
                playWay: [{
                    isChaidan: true,
                    cn: '五星单双个数',
                    en: 'dxds_dsgs_wx',
                    name: '五星单双个数',
                    plate: {
                        type: 'click',
                        pos: ['五星'],
                        num: [{
                            cn: '全单',
                            en: 'dxds_dsgs_wx_qd_qx'
                        }, {
                            cn: '4单1双',
                            en: 'dxds_dsgs_wx_41_14'
                        }, {
                            cn: '3单2双',
                            en: 'dxds_dsgs_wx_32_23'
                        }, {
                            cn: '2单3双',
                            en: 'dxds_dsgs_wx_32_23'
                        }, {
                            cn: '1单4双',
                            en: 'dxds_dsgs_wx_41_14'
                        }, {
                            cn: '全双',
                            en: 'dxds_dsgs_wx_qd_qx'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '四星单双个数',
                    en: 'dxds_dsgs_sx',
                    name: '四星单双个数',
                    plate: {
                        type: 'click',
                        pos: ['四星'],
                        num: [{
                            cn: '全单',
                            en: 'dxds_dsgs_sx_qd_qx'
                        }, {
                            cn: '3单1双',
                            en: 'dxds_dsgs_sx_31_13'
                        }, {
                            cn: '2单2双',
                            en: 'dxds_dsgs_sx_2d2x'
                        }, {
                            cn: '1单3双',
                            en: 'dxds_dsgs_sx_31_13'
                        }, {
                            cn: '全双',
                            en: 'dxds_dsgs_sx_qd_qx'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '前三单双个数',
                    en: 'dxds_dsgs_qs',
                    name: '前三单双个数',
                    plate: {
                        type: 'click',
                        pos: ['前三'],
                        num: [{
                            cn: '全单',
                            en: 'dxds_dsgs_qs_qd_qx'
                        }, {
                            cn: '2单1双',
                            en: 'dxds_dsgs_qs_21_12'
                        }, {
                            cn: '1单2双',
                            en: 'dxds_dsgs_qs_21_12'
                        }, {
                            cn: '全双',
                            en: 'dxds_dsgs_qs_qd_qx'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '中三单双个数',
                    en: 'dxds_dsgs_zs',
                    name: '中三单双个数',
                    plate: {
                        type: 'click',
                        pos: ['中三'],
                        num: [{
                            cn: '全单',
                            en: 'dxds_dsgs_qs_qd_qx'
                        }, {
                            cn: '2单1双',
                            en: 'dxds_dsgs_qs_21_12'
                        }, {
                            cn: '1单2双',
                            en: 'dxds_dsgs_qs_21_12'
                        }, {
                            cn: '全双',
                            en: 'dxds_dsgs_qs_qd_qx'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '后三单双个数',
                    en: 'dxds_dsgs_hs',
                    name: '后三单双个数',
                    plate: {
                        type: 'click',
                        pos: ['后三'],
                        num: [{
                            cn: '全单',
                            en: 'dxds_dsgs_qs_qd_qx'
                        }, {
                            cn: '2单1双',
                            en: 'dxds_dsgs_qs_21_12'
                        }, {
                            cn: '1单2双',
                            en: 'dxds_dsgs_qs_21_12'
                        }, {
                            cn: '全双',
                            en: 'dxds_dsgs_qs_qd_qx'
                        }],
                        filter: ['全', '清']
                    }
                }],
            }]
        }, {
            tab: '总和',
            subTabConfig: [{
                title: '总和大小单双',
                playWay: [{
                    isChaidan: true,
                    cn: '五星总和',
                    en: 'zh_hzdxds_5xhz',
                    name: '五星总和',
                    plate: {
                        type: 'click',
                        pos: ['五星总和'],
                        num: [{
                            cn: '大',
                            en: 'zh_hzdxds_5xhz'
                        }, {
                            cn: '小',
                            en: 'zh_hzdxds_5xhz'
                        }, {
                            cn: '单',
                            en: 'zh_hzdxds_5xhz'
                        }, {
                            cn: '双',
                            en: 'zh_hzdxds_5xhz'
                        }, {
                            cn: '大单',
                            en: 'zh_hzdxds_5xhz_dd'
                        }, {
                            cn: '大双',
                            en: 'zh_hzdxds_5xhz_ds'
                        }, {
                            cn: '小单',
                            en: 'zh_hzdxds_5xhz_xd'
                        }, {
                            cn: '小双',
                            en: 'zh_hzdxds_5xhz_xs'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    cn: '前三总和',
                    en: 'zh_hzdxds_q3hz',
                    name: '前三总和',
                    plate: {
                        type: 'click',
                        pos: ['前三总和'],
                        num: ['大', '小', '单', '双'],
                        filter: ['全', '清']
                    }
                }, {
                    cn: '中三总和',
                    en: 'zh_hzdxds_z3hz',
                    name: '中三总和',
                    plate: {
                        type: 'click',
                        pos: ['中三总和'],
                        num: ['大', '小', '单', '双'],
                        filter: ['全', '清']
                    }
                }, {
                    cn: '后三总和',
                    en: 'zh_hzdxds_h3hz',
                    name: '后三总和',
                    plate: {
                        type: 'click',
                        pos: ['后三总和'],
                        num: ['大', '小', '单', '双'],
                        filter: ['全', '清']
                    }
                }]
            }]
        }, {
            tab: '趣味',
            subTabConfig: [{
                title: '龙虎斗',
                playWay: [{
                    isChaidan: true,
                    cn: '万千',
                    en: 'qw_lhh_wq',
                    name: '万千龙虎斗',
                    plate: {
                        type: 'click',
                        pos: ['万千'],
                        num: [{
                            cn: '龙',
                            en: 'qw_lhh_wq_long'
                        }, {
                            cn: '虎',
                            en: 'qw_lhh_wq_hu'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '万百',
                    en: 'qw_lhh_wb',
                    name: '万百龙虎斗',
                    plate: {
                        type: 'click',
                        pos: ['万百'],
                        num: [{
                            cn: '龙',
                            en: 'qw_lhh_wb_long'
                        }, {
                            cn: '虎',
                            en: 'qw_lhh_wb_hu'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '万十',
                    en: 'qw_lhh_ws',
                    name: '万十龙虎斗',
                    plate: {
                        type: 'click',
                        pos: ['万十'],
                        num: [{
                            cn: '龙',
                            en: 'qw_lhh_ws_long'
                        }, {
                            cn: '虎',
                            en: 'qw_lhh_ws_hu'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '万个',
                    en: 'qw_lhh_wg',
                    name: '万个龙虎斗',
                    plate: {
                        type: 'click',
                        pos: ['万个'],
                        num: [{
                            cn: '龙',
                            en: 'qw_lhh_wg_long'
                        }, {
                            cn: '虎',
                            en: 'qw_lhh_wg_hu'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '千百',
                    en: 'qw_lhh_qb',
                    name: '千百龙虎斗',
                    plate: {
                        type: 'click',
                        pos: ['千百'],
                        num: [{
                            cn: '龙',
                            en: 'qw_lhh_qb_long'
                        }, {
                            cn: '虎',
                            en: 'qw_lhh_qb_hu'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '千个',
                    en: 'qw_lhh_qg',
                    name: '千个龙虎斗',
                    plate: {
                        type: 'click',
                        pos: ['千个'],
                        num: [{
                            cn: '龙',
                            en: 'qw_lhh_qg_long'
                        }, {
                            cn: '虎',
                            en: 'qw_lhh_qg_hu'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '百十',
                    en: 'qw_lhh_bs',
                    name: '百十龙虎斗',
                    plate: {
                        type: 'click',
                        pos: ['百十'],
                        num: [{
                            cn: '龙',
                            en: 'qw_lhh_bs_long'
                        }, {
                            cn: '虎',
                            en: 'qw_lhh_bs_hu'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '百个',
                    en: 'qw_lhh_bg',
                    name: '百个龙虎斗',
                    plate: {
                        type: 'click',
                        pos: ['百个'],
                        num: [{
                            cn: '龙',
                            en: 'qw_lhh_bg_long'
                        }, {
                            cn: '虎',
                            en: 'qw_lhh_bg_hu'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '十个',
                    en: 'qw_lhh_sg',
                    name: '十个龙虎斗',
                    plate: {
                        type: 'click',
                        pos: ['十个'],
                        num: [{
                            cn: '龙',
                            en: 'qw_lhh_sg_long'
                        }, {
                            cn: '虎',
                            en: 'qw_lhh_sg_hu'
                        }],
                        filter: ['全', '清']
                    }
                }]
            }, {
                title: '炸金花',
                playWay: [{
                    isChaidan: true,
                    cn: '前三',
                    en: 'qw_xt_q3',
                    name: '前三炸金花',
                    plate: {
                        type: 'click',
                        pos: ['前三炸金花'],
                        num: [{
                            cn: '顺子',
                            en: 'qw_xt_q3_sz'
                        }, {
                            cn: '对子',
                            en: 'qw_xt_q3_dz'
                        }, {
                            cn: '半顺',
                            en: 'qw_xt_q3_bs'
                        }, {
                            cn: '杂六',
                            en: 'qw_xt_q3_z6'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '中三',
                    en: 'qw_xt_z3',
                    name: '中三炸金花',
                    plate: {
                        type: 'click',
                        pos: ['中三炸金花'],
                        num: [{
                            cn: '顺子',
                            en: 'qw_xt_z3_sz'
                        }, {
                            cn: '对子',
                            en: 'qw_xt_z3_dz'
                        }, {
                            cn: '半顺',
                            en: 'qw_xt_z3_bs'
                        }, {
                            cn: '杂六',
                            en: 'qw_xt_z3_z6'
                        }],
                        filter: ['全', '清']
                    }
                }, {
                    isChaidan: true,
                    cn: '后三',
                    en: 'qw_xt_h3',
                    name: '后三炸金花',
                    plate: {
                        type: 'click',
                        pos: ['后三炸金花'],
                        num: [{
                            cn: '顺子',
                            en: 'qw_xt_h3_sz'
                        }, {
                            cn: '对子',
                            en: 'qw_xt_h3_dz'
                        }, {
                            cn: '半顺',
                            en: 'qw_xt_h3_bs'
                        }, {
                            cn: '杂六',
                            en: 'qw_xt_h3_z6'
                        }],
                        filter: ['全', '清']
                    }
                }]
            }, {
                title: '特殊',
                playWay: [{
                    cn: '一帆风顺',
                    en: 'qw_ts_yffs',
                    name: '一帆风顺',
                    plate: {
                        type: 'click',
                        pos: ['一帆风顺'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }, {
                    cn: '好事成双',
                    en: 'qw_ts_hscs',
                    name: '好事成双',
                    plate: {
                        type: 'click',
                        pos: ['好事成双'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }]
            }]
        }, {
            tab: '牛牛',
            subTabConfig: [{
                title: '牛牛',
                playWay: [{
                    isChaidan: true,
                    cn: '牛牛',
                    en: 'nn_nn_nn',
                    name: '牛牛',
                    plate: {
                        type: 'click',
                        pos: '牛牛',
                        num: [{
                            cn: '牛大',
                            en: 'nn_nn_nn_nda'
                        }, {
                            cn: '牛小',
                            en: 'nn_nn_nn_nx'
                        }, {
                            cn: '牛单',
                            en: 'nn_nn_nn_ndan'
                        }, {
                            cn: '牛双',
                            en: 'nn_nn_nn_ns'
                        }, {
                            cn: '无牛',
                            en: 'nn_nn_nn_wn'
                        }, {
                            cn: '牛1',
                            en: 'nn_nn_nn_n1'
                        }, {
                            cn: '牛2',
                            en: 'nn_nn_nn_n2'
                        }, {
                            cn: '牛3',
                            en: 'nn_nn_nn_n3'
                        }, {
                            cn: '牛4',
                            en: 'nn_nn_nn_n4'
                        }, {
                            cn: '牛5',
                            en: 'nn_nn_nn_n5'
                        }, {
                            cn: '牛6',
                            en: 'nn_nn_nn_n6'
                        }, {
                            cn: '牛7',
                            en: 'nn_nn_nn_n7'
                        }, {
                            cn: '牛8',
                            en: 'nn_nn_nn_n8'
                        }, {
                            cn: '牛9',
                            en: 'nn_nn_nn_n9'
                        }, {
                            cn: '牛牛',
                            en: 'nn_nn_nn_nn'
                        }],
                        filter: []
                    }
                }]
            }]
        }, {
            tab: '梭哈',
            subTabConfig: [{
                title: '梭哈',
                playWay: [{
                    isChaidan: true,
                    cn: '梭哈',
                    en: 'sh_sh_wx',
                    name: '梭哈',
                    plate: {
                        type: 'click',
                        pos: '梭哈',
                        num: [{
                            cn: '顺子',
                            en: 'sh_sh_wx_sz'
                        }, {
                            cn: '三条',
                            en: 'sh_sh_wx_santiao'
                        }, {
                            cn: '两对',
                            en: 'sh_sh_wx_ld'
                        }, {
                            cn: '一对',
                            en: 'sh_sh_wx_yd'
                        }, {
                            cn: '单牌',
                            en: 'sh_sh_wx_dp'
                        }],
                        filter: ['全', '清']
                    }
                }]
            }]
        }, {
            tab: '百家乐',
            subTabConfig: [{
                title: '百家乐',
                playWay: [{
                    isChaidan: true,
                    cn: '百家乐',
                    en: 'bjl_bjl_bjl',
                    name: '百家乐',
                    plate: {
                        type: 'click',
                        pos: '百家乐',
                        num: [{
                            cn: '庄',
                            en: 'bjl_bjl_bjl_zhuang'
                        }, {
                            cn: '闲',
                            en: 'bjl_bjl_bjl_xian'
                        }, {
                            cn: '和',
                            en: 'bjl_bjl_bjl_he'
                        }, {
                            cn: '庄对',
                            en: 'bjl_bjl_bjl_zhuangdui'
                        }, {
                            cn: '闲对',
                            en: 'bjl_bjl_bjl_xiandui'
                        }, {
                            cn: 'S6',
                            en: 'bjl_bjl_bjl_super6'
                        }],
                        filter: ['全', '清']
                    }
                }]
            }]
        }],
        unlimited: [{
            tab: '任选二',
            subTabConfig: [{
                title: '任二直选',
                playWay: [{
                    cn: '复式',
                    en: 'rx2_zx_fs',
                    name: '任二直选复式',
                    plate: {
                        type: 'click',
                        pos: ['万位', '千位', '百位', '十位', '个位'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }, {
                    cn: '单式',
                    en: 'rx2_zx_ds',
                    name: '任二直选单式',
                    plate: {
                        type: 'input',
                        pos: ['万位', '千位', '百位', '十位', '个位']
                    }
                }, {
                    cn: '和值',
                    en: 'rx2_zx_hz',
                    name: '任二直选和值',
                    plate: {
                        type: 'click',
                        pos: ['万位', '千位', '百位', '十位', '个位'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                        filter: []
                    }
                }]
            }, {
                title: '任二组选',
                playWay: [{
                    cn: '复式',
                    en: 'rx2_zux_fs',
                    name: '任二组选复式',
                    plate: {
                        type: 'click',
                        pos: ['组选复式'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }, {
                    cn: '单式',
                    en: 'rx2_zux_ds',
                    name: '任二组选单式',
                    plate: {
                        type: 'input',
                        pos: ['万位', '千位', '百位', '十位', '个位']
                    }
                }, {
                    cn: '和值',
                    en: 'rx2_zux_hz',
                    name: '任二组选和值',
                    plate: {
                        type: 'click',
                        pos: ['组选和值'],
                        num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                        filter: []
                    }
                }]
            }]
        }, {
            tab: '任选三',
            subTabConfig: [{
                title: '任三直选',
                playWay: [{
                    cn: '复式',
                    en: 'rx3_zx_fs',
                    name: '任三直选复式',
                    plate: {
                        type: 'click',
                        pos: ['万位', '千位', '百位', '十位', '个位'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }, {
                    cn: '单式',
                    en: 'rx3_zx_ds',
                    name: '任三直选单式',
                    plate: {
                        type: 'input',
                        pos: ['万位', '千位', '百位', '十位', '个位']
                    }
                }, {
                    cn: '和值',
                    en: 'rx3_zx_hz',
                    name: '任三直选和值',
                    plate: {
                        type: 'click',
                        pos: ['万位', '千位', '百位', '十位', '个位'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                        filter: []
                    }
                }]
            }, {
                title: '任三组选',
                playWay: [{
                    cn: '组三',
                    en: 'rx3_zux_z3',
                    name: '任三组选3',
                    plate: {
                        type: 'click',
                        pos: ['组3'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }, {
                    cn: '组六',
                    en: 'rx3_zux_z6',
                    name: '任三组选6',
                    plate: {
                        type: 'click',
                        pos: ['组6'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }, {
                    cn: '混合',
                    en: 'rx3_zux_hh',
                    name: '任三组选混合',
                    plate: {
                        type: 'input',
                        pos: ['万位', '千位', '百位', '十位', '个位']
                    }
                }, {
                    cn: '和值',
                    en: 'rx3_zux_hz',
                    name: '任三组选和值',
                    plate: {
                        type: 'click',
                        pos: ['组选和值'],
                        num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                        filter: []
                    }
                }]
            }]
        }, {
            tab: '任选四',
            subTabConfig: [{
                title: '任四直选',
                playWay: [{
                    cn: '复式',
                    en: 'rx4_zx_fs',
                    name: '任四直选复式',
                    plate: {
                        type: 'click',
                        pos: ['万位', '千位', '百位', '十位', '个位'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }, {
                    cn: '单式',
                    en: 'rx4_zx_ds',
                    name: '任四直选单式',
                    plate: {
                        type: 'input',
                        pos: ['万位', '千位', '百位', '十位', '个位']
                    }
                }]
            }, {
                title: '任四组选',
                playWay: [{
                    cn: '组24',
                    en: 'rx4_zux_z24',
                    name: '任四组选24',
                    plate: {
                        type: 'click',
                        pos: ['组24'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }, {
                    cn: '组12',
                    en: 'rx4_zux_z12',
                    name: '任四组选12',
                    plate: {
                        type: 'click',
                        pos: ['组12'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }, {
                    cn: '组6',
                    en: 'rx4_zux_z6',
                    name: '任四组选6',
                    plate: {
                        type: 'click',
                        pos: ['组6'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }, {
                    cn: '组4',
                    en: 'rx4_zux_z4',
                    name: '任四组选4',
                    plate: {
                        type: 'click',
                        pos: ['组4'],
                        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        filter: ['全', '大', '小', '奇', '偶', '清']
                    }
                }]
            }]
        }]
    }
};