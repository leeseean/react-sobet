/* jshint devel:true */

/* 所有代码都是以玩法的拼音首字母为组合 */
/* zx: 直选  zux:组选 */
var LotteryClass = LotteryClass || {};
var LotteryTips = LotteryTips || {};
LotteryClass = {
    "names": {
        "WBG5FC": "WBG5分彩",
        "WBGFFC": "WBG分分彩",
        "WBGMMC": "WBG秒秒彩",
        "TJSSC": "天津时时彩",
        "XN5FC": "悉尼5分彩",
        // 'BJ5FC': "北京5分彩",
        // 'TW5FC': "台湾5分彩",
        'HN5FC': "河内5分彩",
        'RDFFC': "瑞典1分彩",
        'RDLFC': "瑞典2分彩",
        "CQSSC": "重庆时时彩",
        "XJSSC": "新疆时时彩",
        "TXFFC": "腾讯分分彩",
        "QQSSM": "QQ30秒彩",
        "RBSSM": "日本30秒彩",
        "TX1FC": "腾讯1分彩",
        "GD11Y": "广东11选5",
        "CQ11Y": "重庆11选5",
        "SD11Y": "山东11选5",
        "JX11Y": "江西11选5",
        "HLJ11Y": "黑龙江11选5",
        "MC11Y": "摩臣11选5",
        'SH11Y': "上海11选5",
        'AH11Y': "安徽11选5",
        'YN11Y': "云南11选5",
        'HUB11Y': "湖北11选5",
        "3DFC": "3D福彩",
        "MC3D": "摩臣3D",
        "SHSSL": "上海时时乐",
        "TCP3": "排列3",
        "TCP5": "排列5",
        "BJPK10": "北京PK10",
        "XGPK10": "香港PK10",
        "MCPK10": "摩臣PK10",
        'JSK3': "江苏快3",
        'HNK3': "河南快3",
        'MCK3': "摩臣快3",
        'HBK3': "湖北快3",
        // 'JLK3': "吉林快3",
        'AHK3': "安徽快3",
        'SCKL12': "四川快乐12",
        'HNKY481': "河南快赢481",
        "XGLHC": "香港六合彩",
        "JSLHC": "极速六合彩"
    },

    "WBG5FC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    "WBGFFC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    "WBGMMC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            }
        }
    },
    "XN5FC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    "HN5FC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    // "BJ5FC": {
    //     "ltTab": {
    //         "wx": "五星",
    //         "sx": "四星",
    //         "qsm": "前三",
    //         "zsm": "中三",
    //         "hsm": "后三",
    //         "em": "二星",
    //         "dwd": "定位胆",
    //         "bdd": "不定胆",
    //         "dxds": "大小单双",
    //         "zh": "总和",
    //         "qw": "趣味",
    //         "nn": "牛牛",
    //         "sh": "梭哈",
    //         "bjl": "百家乐",
    //         "rx": "任选",
    //         "rx2": "任选二",
    //         "rx3": "任选三",
    //         "rx4": "任选四"
    //     },
    //     "ltMethod": {
    //         "wx": {
    //             "zx": {
    //                 "title": "五星直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位,百位,十位,个位|0-9|all",
    //                         "name": "五星直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|5",
    //                         "name": "五星直选单式"
    //                     },
    //                     /*"zh": {
    //                         "desc": "组合",
    //                         "num": "万位,千位,百位,十位,个位|0-9|all",
    //                         "name": "五星直选组合"
    //                     }*/
    //                 }
    //             },
    //             "zux": {
    //                 "title": "五星组选",
    //                 "method": {
    //                     "z120": {
    //                         "desc": "组选120",
    //                         "num": "组选120|0-9|all",
    //                         "name": "五星组选120"
    //                     },
    //                     "z60": {
    //                         "desc": "组选60",
    //                         "num": "二重号,单号|0-9|all",
    //                         "name": "五星组选60"
    //                     },
    //                     "z30": {
    //                         "desc": "组选30",
    //                         "num": "二重号,单号|0-9|all",
    //                         "name": "五星组选30"
    //                     },
    //                     "z20": {
    //                         "desc": "组选20",
    //                         "num": "三重号,单号|0-9|all",
    //                         "name": "五星组选20"
    //                     },
    //                     "z10": {
    //                         "desc": "组选10",
    //                         "num": "三重号,二重号|0-9|all",
    //                         "name": "五星组选10"
    //                     },
    //                     "z5": {
    //                         "desc": "组选5",
    //                         "num": "四重号,单号|0-9|all",
    //                         "name": "五星组选5"
    //                     }
    //                 }
    //             }
    //         },
    //         "sx": {
    //             "zx": {
    //                 "title": "四星直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "千位,百位,十位,个位|0-9|all",
    //                         "name": "四星直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|4",
    //                         "name": "四星直选单式"
    //                     },
    //                     /*"zh": {
    //                         "desc": "组合",
    //                         "num": "千位,百位,十位,个位|0-9|all",
    //                         "name": "四星直选组合"
    //                     }*/
    //                 }
    //             },
    //             "zux": {
    //                 "title": "四星组选",
    //                 "method": {
    //                     "z24": {
    //                         "desc": "组选24",
    //                         "num": "组24|0-9|all",
    //                         "name": "四星组选24"
    //                     },
    //                     "z12": {
    //                         "desc": "组选12",
    //                         "num": "二重号,单号|0-9|all",
    //                         "name": "四星组选12"
    //                     },
    //                     "z6": {
    //                         "desc": "组选6",
    //                         "num": "二重号|0-9|all",
    //                         "name": "四星组选6"
    //                     },
    //                     "z4": {
    //                         "desc": "组选4",
    //                         "num": "三重号,单号|0-9|all",
    //                         "name": "四星组选4"
    //                     }
    //                 }
    //             }
    //         },
    //         "hsm": {
    //             "zx": {
    //                 "title": "后三直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "百位,十位,个位|0-9|all",
    //                         "name": "后三直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|3",
    //                         "name": "后三直选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "直选和值|0-27|",
    //                         "name": "后三直选和值"
    //                     },
    //                     "kd": {
    //                         "desc": "跨度",
    //                         "num": "跨度|0-9|all",
    //                         "name": "后三直选跨度"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "后三组选",
    //                 "method": {
    //                     "z3": {
    //                         "desc": "组三",
    //                         "num": "组三|0-9|all",
    //                         "name": "后三组选三"
    //                     },
    //                     "z6": {
    //                         "desc": "组六",
    //                         "num": "组六|0-9|all",
    //                         "name": "后三组选六"
    //                     },
    //                     "hh": {
    //                         "desc": "混合",
    //                         "num": "input|hh|3",
    //                         "name": "后三混合组选"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "组选和值|1-26|",
    //                         "name": "后三组选和值"
    //                     },
    //                     "bd": {
    //                         "desc": "包胆",
    //                         "num": "包胆|0-9|",
    //                         "name": "后三组选包胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "qsm": {
    //             "zx": {
    //                 "title": "前三直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位,百位|0-9|all",
    //                         "name": "前三直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|3",
    //                         "name": "前三直选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "直选和值|0-27|",
    //                         "name": "前三直选和值"
    //                     },
    //                     "kd": {
    //                         "desc": "跨度",
    //                         "num": "跨度|0-9|all",
    //                         "name": "前三直选跨度"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "前三组选",
    //                 "method": {
    //                     "z3": {
    //                         "desc": "组三",
    //                         "num": "组三|0-9|all",
    //                         "name": "前三组选三"
    //                     },
    //                     "z6": {
    //                         "desc": "组六",
    //                         "num": "组六|0-9|all",
    //                         "name": "前三组选六"
    //                     },
    //                     "hh": {
    //                         "desc": "混合",
    //                         "num": "input|hh|3",
    //                         "name": "前三混合组选"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "组选和值|1-26|",
    //                         "name": "前三组选和值"
    //                     },
    //                     "bd": {
    //                         "desc": "包胆",
    //                         "num": "包胆|0-9|",
    //                         "name": "前三组选包胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "zsm": {
    //             "zx": {
    //                 "title": "中三直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "千位,百位,十位|0-9|all",
    //                         "name": "中三直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|3",
    //                         "name": "中三直选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "直选和值|0-27|",
    //                         "name": "中三直选和值"
    //                     },
    //                     "kd": {
    //                         "desc": "跨度",
    //                         "num": "跨度|0-9|all",
    //                         "name": "中三直选跨度"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "中三组选",
    //                 "method": {
    //                     "z3": {
    //                         "desc": "组三",
    //                         "num": "组三|0-9|all",
    //                         "name": "中三组选三"
    //                     },
    //                     "z6": {
    //                         "desc": "组六",
    //                         "num": "组六|0-9|all",
    //                         "name": "中三组选六"
    //                     },
    //                     "hh": {
    //                         "desc": "混合",
    //                         "num": "input|hh|3",
    //                         "name": "中三混合组选"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "组选和值|1-26|",
    //                         "name": "中三组选和值"
    //                     },
    //                     "bd": {
    //                         "desc": "包胆",
    //                         "num": "包胆|0-9|",
    //                         "name": "中三组选包胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "em": {
    //             "zx": {
    //                 "title": "直选",
    //                 "method": {
    //                     "qfs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位|0-9|all",
    //                         "name": "前二直选复式"
    //                     },
    //                     "qds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|2",
    //                         "name": "前二直选单式"
    //                     },
    //                     "qhz": {
    //                         "desc": "和值",
    //                         "num": "和值|0-18|",
    //                         "name": "前二直选和值"
    //                     },
    //                     "qkd": {
    //                         "desc": "跨度",
    //                         "num": "跨度|0-9|all",
    //                         "name": "前二直选跨度"
    //                     },
    //                     "hfs": {
    //                         "desc": "复式",
    //                         "num": "十位,个位|0-9|all",
    //                         "name": "后二直选复式"
    //                     },
    //                     "hds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|2",
    //                         "name": "后二直选单式"
    //                     },
    //                     "hhz": {
    //                         "desc": "和值",
    //                         "num": "和值|0-18|",
    //                         "name": "后二直选和值"
    //                     },
    //                     "hkd": {
    //                         "desc": "跨度",
    //                         "num": "跨度|0-9|all",
    //                         "name": "后二直选跨度"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "组选",
    //                 "method": {
    //                     "qfs": {
    //                         "desc": "复式",
    //                         "num": "组选|0-9|all",
    //                         "name": "前二组选复式"
    //                     },
    //                     "qds": {
    //                         "desc": "单式",
    //                         "num": "input|zux|2",
    //                         "name": "前二组选单式"
    //                     },
    //                     "qhz": {
    //                         "desc": "和值",
    //                         "num": "和值|1-17|",
    //                         "name": "前二组选和值"
    //                     },
    //                     "qbd": {
    //                         "desc": "包胆",
    //                         "num": "包胆|0-9|",
    //                         "name": "前二组选包胆"
    //                     },
    //                     "hfs": {
    //                         "desc": "复式",
    //                         "num": "组选|0-9|all",
    //                         "name": "后二组选复式"
    //                     },
    //                     "hds": {
    //                         "desc": "单式",
    //                         "num": "input|zux|2",
    //                         "name": "后二组选单式"
    //                     },
    //                     "hhz": {
    //                         "desc": "和值",
    //                         "num": "和值|1-17|",
    //                         "name": "后二组选和值"
    //                     },
    //                     "hbd": {
    //                         "desc": "包胆",
    //                         "num": "包胆|0-9|",
    //                         "name": "后二组选包胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "dwd": {
    //             "dwd": {
    //                 "title": "定位胆",
    //                 "method": {
    //                     "dwd": {
    //                         "desc": "定位胆",
    //                         "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
    //                         "name": "定位胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "bdd": {
    //             "bdd": {
    //                 "title": "三星不定胆",
    //                 "method": {
    //                     "qs1": {
    //                         "desc": "前三一码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "前三一码不定胆"
    //                     },
    //                     "qs2": {
    //                         "desc": "前三二码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "前三二码不定胆"
    //                     },
    //                     "z31": {
    //                         "desc": "中三一码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "中三一码不定胆"
    //                     },
    //                     "z32": {
    //                         "desc": "中三二码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "中三二码不定胆"
    //                     },
    //                     "hs1": {
    //                         "desc": "后三一码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "后三一码不定胆"
    //                     },
    //                     "hs2": {
    //                         "desc": "后三二码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "后三二码不定胆"
    //                     }
    //                 }
    //             },
    //             "bdd4": {
    //                 "title": "四星不定胆",
    //                 "method": {
    //                     "4x1": {
    //                         "desc": "四星一码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "四星一码不定胆"
    //                     },
    //                     "4x2": {
    //                         "desc": "四星二码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "四星二码不定胆"
    //                     },
    //                     "4x3": {
    //                         "desc": "四星三码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "四星三码不定胆"
    //                     }
    //                 }
    //             },
    //             "bdd5": {
    //                 "title": "五星不定胆",
    //                 "method": {
    //                     "5x1": {
    //                         "desc": "五星一码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "五星一码不定胆"
    //                     },
    //                     "5x2": {
    //                         "desc": "五星二码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "五星二码不定胆"
    //                     },
    //                     "5x3": {
    //                         "desc": "五星三码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "五星三码不定胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "dxds": {
    //             "dxds": {
    //                 "title": "大小单双组合",
    //                 "method": {
    //                     "h2": {
    //                         "desc": "后二大小单双",
    //                         "num": "十位,个位|0-3|two",
    //                         "name": "后二大小单双"
    //                     },
    //                     "q2": {
    //                         "desc": "前二大小单双",
    //                         "num": "万位,千位|0-3|two",
    //                         "name": "前二大小单双"
    //                     },
    //                     "h3": {
    //                         "desc": "后三大小单双",
    //                         "num": "百位,十位,个位|0-3|two",
    //                         "name": "后三大小单双"
    //                     },
    //                     "q3": {
    //                         "desc": "前三大小单双",
    //                         "num": "万位,千位,百位|0-3|two",
    //                         "name": "前三大小单双"
    //                     }
    //                 }
    //             },
    //             "dxgs": {
    //                 "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    //                 "method": {
    //                     "wx": {
    //                         "desc": "五星大小个数",
    //                         "num": "五星|0-5|two",
    //                         "name": "五星大小个数"
    //                     },
    //                     "sx": {
    //                         "desc": "四星大小个数",
    //                         "num": "四星|0-4|two",
    //                         "name": "四星大小个数"
    //                     },
    //                     "qs": {
    //                         "desc": "前三大小个数",
    //                         "num": "前三|0-3|two",
    //                         "name": "前三大小个数"
    //                     },
    //                     "zs": {
    //                         "desc": "中三大小个数",
    //                         "num": "中三|0-3|two",
    //                         "name": "中三大小个数"
    //                     },
    //                     "hs": {
    //                         "desc": "后三大小个数",
    //                         "num": "后三|0-3|two",
    //                         "name": "后三大小个数"
    //                     }
    //                 }
    //             },
    //             "dsgs": {
    //                 "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    //                 "method": {
    //                     "wx": {
    //                         "desc": "五星单双个数",
    //                         "num": "五星|0-5|two",
    //                         "name": "五星单双个数"
    //                     },
    //                     "sx": {
    //                         "desc": "四星单双个数",
    //                         "num": "四星|0-4|two",
    //                         "name": "四星单双个数"
    //                     },
    //                     "qs": {
    //                         "desc": "前三单双个数",
    //                         "num": "前三|0-3|two",
    //                         "name": "前三单双个数"
    //                     },
    //                     "zs": {
    //                         "desc": "中三单双个数",
    //                         "num": "中三|0-3|two",
    //                         "name": "中三单双个数"
    //                     },
    //                     "hs": {
    //                         "desc": "后三单双个数",
    //                         "num": "后三|0-3|two",
    //                         "name": "后三单双个数"
    //                     }
    //                 }
    //             }
    //         },
    //         "zh": {
    //             "hzdxds": {
    //                 "title": "总和大小单双",
    //                 "method": {
    //                     "5xhz": {
    //                         "desc": "五星总和",
    //                         "num": "五星总和|0-7|two",
    //                         "name": "五星总和"
    //                     },
    //                     "q3hz": {
    //                         "desc": "前三总和",
    //                         "num": "前三总和|0-3|two",
    //                         "name": "前三总和"
    //                     },
    //                     "z3hz": {
    //                         "desc": "中三总和",
    //                         "num": "中三总和|0-3|two",
    //                         "name": "中三总和"
    //                     },
    //                     "h3hz": {
    //                         "desc": "后三总和",
    //                         "num": "后三总和|0-3|two",
    //                         "name": "后三总和"
    //                     },
    //                 }
    //             }
    //         },
    //         "qw": {
    //             "lhh": {
    //                 "title": "龙虎斗",
    //                 "method": {
    //                     "wq": {
    //                         "desc": "万千",
    //                         "num": "万千|5-6|two",
    //                         "name": "万千龙虎斗"
    //                     },
    //                     "wb": {
    //                         "desc": "万百",
    //                         "num": "万百|5-6|two",
    //                         "name": "万百龙虎斗"
    //                     },
    //                     "ws": {
    //                         "desc": "万十",
    //                         "num": "万十|5-6|two",
    //                         "name": "万十龙虎斗"
    //                     },
    //                     "wg": {
    //                         "desc": "万个",
    //                         "num": "万个|5-6|two",
    //                         "name": "万个龙虎斗"
    //                     },
    //                     "qb": {
    //                         "desc": "千百",
    //                         "num": "千百|5-6|two",
    //                         "name": "千百龙虎斗"
    //                     },
    //                     "qs": {
    //                         "desc": "千十",
    //                         "num": "千十|5-6|two",
    //                         "name": "千十龙虎斗"
    //                     },
    //                     "qg": {
    //                         "desc": "千个",
    //                         "num": "千个|5-6|two",
    //                         "name": "千个龙虎斗"
    //                     },
    //                     "bs": {
    //                         "desc": "百十",
    //                         "num": "百十|5-6|two",
    //                         "name": "百十龙虎斗"
    //                     },
    //                     "bg": {
    //                         "desc": "百个",
    //                         "num": "百个|5-6|two",
    //                         "name": "百个龙虎斗"
    //                     },
    //                     "sg": {
    //                         "desc": "十个",
    //                         "num": "十个|5-6|two",
    //                         "name": "十个龙虎斗"
    //                     }
    //                 }
    //             },
    //             "xt": {
    //                 "title": "炸金花",
    //                 "method": {
    //                     "q3": {
    //                         "desc": "前三",
    //                         "num": "前三炸金花|9-12|two",
    //                         "name": "前三炸金花"
    //                     },
    //                     "z3": {
    //                         "desc": "中三",
    //                         "num": "中三炸金花|9-12|two",
    //                         "name": "中三炸金花"
    //                     },
    //                     "h3": {
    //                         "desc": "后三",
    //                         "num": "后三炸金花|9-12|two",
    //                         "name": "后三炸金花"
    //                     }
    //                 }
    //             },
    //             "ts": {
    //                 "title": "特殊",
    //                 "method": {
    //                     "yffs": {
    //                         "desc": "一帆风顺",
    //                         "num": "一帆风顺|0-9|all",
    //                         "name": "一帆风顺"
    //                     },
    //                     "hscs": {
    //                         "desc": "好事成双",
    //                         "num": "好事成双|0-9|all",
    //                         "name": "好事成双"
    //                     },
    //                     "sxbx": {
    //                         "desc": "三星报喜",
    //                         "num": "三星报喜|0-9|all",
    //                         "name": "三星报喜"
    //                     },
    //                     "sjfc": {
    //                         "desc": "四季发财",
    //                         "num": "四季发财|0-9|all",
    //                         "name": "四季发财"
    //                     }
    //                 }
    //             }
    //         },
    //         "nn": {
    //             "nn": {
    //                 "title": "牛牛",
    //                 "method": {
    //                     "nn": {
    //                         "desc": "牛牛",
    //                         "num": "牛牛|0-14|",
    //                         "name": "牛牛"
    //                     }
    //                 }
    //             }
    //         },
    //         "sh": {
    //             "sh": {
    //                 "title": "梭哈",
    //                 "method": {
    //                     "wx": {
    //                         "desc": "梭哈",
    //                         "num": "梭哈|13-19|two",
    //                         "name": "梭哈"
    //                     }
    //                 }
    //             }
    //         },
    //         "bjl": {
    //             "bjl": {
    //                 "title": "百家乐",
    //                 "method": {
    //                     "bjl": {
    //                         "desc": "百家乐",
    //                         "num": "百家乐|20-25|two",
    //                         "name": "百家乐"
    //                     }
    //                 }
    //             }
    //         },
    //         "rx2": {
    //             "zx": {
    //                 "title": "任二直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位,百位,十位,个位|0-9|all",
    //                         "name": "任二直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|2",
    //                         "name": "任二直选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "直选和值|0-18|",
    //                         "name": "任二直选和值"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "任二组选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "组选复式|0-9|all",
    //                         "name": "任二组选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zux|2",
    //                         "name": "任二组选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "组选和值|1-17|",
    //                         "name": "任二组选和值"
    //                     }
    //                 }
    //             }
    //         },
    //         "rx3": {
    //             "zx": {
    //                 "title": "任三直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位,百位,十位,个位|0-9|all",
    //                         "name": "任三直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|3",
    //                         "name": "任三直选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "直选和值|0-27|",
    //                         "name": "任三直选和值"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "任三组选",
    //                 "method": {
    //                     "z3": {
    //                         "desc": "组三",
    //                         "num": "组三|0-9|all",
    //                         "name": "任三组选三"
    //                     },
    //                     "z6": {
    //                         "desc": "组六",
    //                         "num": "组六|0-9|all",
    //                         "name": "任三组选六"
    //                     },
    //                     "hh": {
    //                         "desc": "混合",
    //                         "num": "input|hh|3",
    //                         "name": "任三混合组选"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "组选和值|1-26|",
    //                         "name": "任三组选和值"
    //                     }
    //                 }
    //             }
    //         },
    //         "rx4": {
    //             "zx": {
    //                 "title": "任四直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位,百位,十位,个位|0-9|all",
    //                         "name": "任四直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|4",
    //                         "name": "任四直选单式"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "任四组选",
    //                 "method": {
    //                     "z24": {
    //                         "desc": "组选24",
    //                         "num": "组24|0-9|all",
    //                         "name": "任四组选24"
    //                     },
    //                     "z12": {
    //                         "desc": "组选12",
    //                         "num": "二重号,单号|0-9|all",
    //                         "name": "任四组选12"
    //                     },
    //                     "z6": {
    //                         "desc": "组选6",
    //                         "num": "二重号|0-9|all",
    //                         "name": "任四组选6"
    //                     },
    //                     "z4": {
    //                         "desc": "组选4",
    //                         "num": "三重号,单号|0-9|all",
    //                         "name": "任四组选4"
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // },
    // "TW5FC": {
    //     "ltTab": {
    //         "wx": "五星",
    //         "sx": "四星",
    //         "qsm": "前三",
    //         "zsm": "中三",
    //         "hsm": "后三",
    //         "em": "二星",
    //         "dwd": "定位胆",
    //         "bdd": "不定胆",
    //         "dxds": "大小单双",
    //         "zh": "总和",
    //         "qw": "趣味",
    //         "nn": "牛牛",
    //         "sh": "梭哈",
    //         "bjl": "百家乐",
    //         "rx": "任选",
    //         "rx2": "任选二",
    //         "rx3": "任选三",
    //         "rx4": "任选四"
    //     },
    //     "ltMethod": {
    //         "wx": {
    //             "zx": {
    //                 "title": "五星直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位,百位,十位,个位|0-9|all",
    //                         "name": "五星直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|5",
    //                         "name": "五星直选单式"
    //                     },
    //                     /*"zh": {
    //                         "desc": "组合",
    //                         "num": "万位,千位,百位,十位,个位|0-9|all",
    //                         "name": "五星直选组合"
    //                     }*/
    //                 }
    //             },
    //             "zux": {
    //                 "title": "五星组选",
    //                 "method": {
    //                     "z120": {
    //                         "desc": "组选120",
    //                         "num": "组选120|0-9|all",
    //                         "name": "五星组选120"
    //                     },
    //                     "z60": {
    //                         "desc": "组选60",
    //                         "num": "二重号,单号|0-9|all",
    //                         "name": "五星组选60"
    //                     },
    //                     "z30": {
    //                         "desc": "组选30",
    //                         "num": "二重号,单号|0-9|all",
    //                         "name": "五星组选30"
    //                     },
    //                     "z20": {
    //                         "desc": "组选20",
    //                         "num": "三重号,单号|0-9|all",
    //                         "name": "五星组选20"
    //                     },
    //                     "z10": {
    //                         "desc": "组选10",
    //                         "num": "三重号,二重号|0-9|all",
    //                         "name": "五星组选10"
    //                     },
    //                     "z5": {
    //                         "desc": "组选5",
    //                         "num": "四重号,单号|0-9|all",
    //                         "name": "五星组选5"
    //                     }
    //                 }
    //             }
    //         },
    //         "sx": {
    //             "zx": {
    //                 "title": "四星直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "千位,百位,十位,个位|0-9|all",
    //                         "name": "四星直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|4",
    //                         "name": "四星直选单式"
    //                     },
    //                     /*"zh": {
    //                         "desc": "组合",
    //                         "num": "千位,百位,十位,个位|0-9|all",
    //                         "name": "四星直选组合"
    //                     }*/
    //                 }
    //             },
    //             "zux": {
    //                 "title": "四星组选",
    //                 "method": {
    //                     "z24": {
    //                         "desc": "组选24",
    //                         "num": "组24|0-9|all",
    //                         "name": "四星组选24"
    //                     },
    //                     "z12": {
    //                         "desc": "组选12",
    //                         "num": "二重号,单号|0-9|all",
    //                         "name": "四星组选12"
    //                     },
    //                     "z6": {
    //                         "desc": "组选6",
    //                         "num": "二重号|0-9|all",
    //                         "name": "四星组选6"
    //                     },
    //                     "z4": {
    //                         "desc": "组选4",
    //                         "num": "三重号,单号|0-9|all",
    //                         "name": "四星组选4"
    //                     }
    //                 }
    //             }
    //         },
    //         "hsm": {
    //             "zx": {
    //                 "title": "后三直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "百位,十位,个位|0-9|all",
    //                         "name": "后三直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|3",
    //                         "name": "后三直选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "直选和值|0-27|",
    //                         "name": "后三直选和值"
    //                     },
    //                     "kd": {
    //                         "desc": "跨度",
    //                         "num": "跨度|0-9|all",
    //                         "name": "后三直选跨度"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "后三组选",
    //                 "method": {
    //                     "z3": {
    //                         "desc": "组三",
    //                         "num": "组三|0-9|all",
    //                         "name": "后三组选三"
    //                     },
    //                     "z6": {
    //                         "desc": "组六",
    //                         "num": "组六|0-9|all",
    //                         "name": "后三组选六"
    //                     },
    //                     "hh": {
    //                         "desc": "混合",
    //                         "num": "input|hh|3",
    //                         "name": "后三混合组选"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "组选和值|1-26|",
    //                         "name": "后三组选和值"
    //                     },
    //                     "bd": {
    //                         "desc": "包胆",
    //                         "num": "包胆|0-9|",
    //                         "name": "后三组选包胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "qsm": {
    //             "zx": {
    //                 "title": "前三直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位,百位|0-9|all",
    //                         "name": "前三直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|3",
    //                         "name": "前三直选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "直选和值|0-27|",
    //                         "name": "前三直选和值"
    //                     },
    //                     "kd": {
    //                         "desc": "跨度",
    //                         "num": "跨度|0-9|all",
    //                         "name": "前三直选跨度"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "前三组选",
    //                 "method": {
    //                     "z3": {
    //                         "desc": "组三",
    //                         "num": "组三|0-9|all",
    //                         "name": "前三组选三"
    //                     },
    //                     "z6": {
    //                         "desc": "组六",
    //                         "num": "组六|0-9|all",
    //                         "name": "前三组选六"
    //                     },
    //                     "hh": {
    //                         "desc": "混合",
    //                         "num": "input|hh|3",
    //                         "name": "前三混合组选"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "组选和值|1-26|",
    //                         "name": "前三组选和值"
    //                     },
    //                     "bd": {
    //                         "desc": "包胆",
    //                         "num": "包胆|0-9|",
    //                         "name": "前三组选包胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "zsm": {
    //             "zx": {
    //                 "title": "中三直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "千位,百位,十位|0-9|all",
    //                         "name": "中三直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|3",
    //                         "name": "中三直选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "直选和值|0-27|",
    //                         "name": "中三直选和值"
    //                     },
    //                     "kd": {
    //                         "desc": "跨度",
    //                         "num": "跨度|0-9|all",
    //                         "name": "中三直选跨度"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "中三组选",
    //                 "method": {
    //                     "z3": {
    //                         "desc": "组三",
    //                         "num": "组三|0-9|all",
    //                         "name": "中三组选三"
    //                     },
    //                     "z6": {
    //                         "desc": "组六",
    //                         "num": "组六|0-9|all",
    //                         "name": "中三组选六"
    //                     },
    //                     "hh": {
    //                         "desc": "混合",
    //                         "num": "input|hh|3",
    //                         "name": "中三混合组选"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "组选和值|1-26|",
    //                         "name": "中三组选和值"
    //                     },
    //                     "bd": {
    //                         "desc": "包胆",
    //                         "num": "包胆|0-9|",
    //                         "name": "中三组选包胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "em": {
    //             "zx": {
    //                 "title": "直选",
    //                 "method": {
    //                     "qfs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位|0-9|all",
    //                         "name": "前二直选复式"
    //                     },
    //                     "qds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|2",
    //                         "name": "前二直选单式"
    //                     },
    //                     "qhz": {
    //                         "desc": "和值",
    //                         "num": "和值|0-18|",
    //                         "name": "前二直选和值"
    //                     },
    //                     "qkd": {
    //                         "desc": "跨度",
    //                         "num": "跨度|0-9|all",
    //                         "name": "前二直选跨度"
    //                     },
    //                     "hfs": {
    //                         "desc": "复式",
    //                         "num": "十位,个位|0-9|all",
    //                         "name": "后二直选复式"
    //                     },
    //                     "hds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|2",
    //                         "name": "后二直选单式"
    //                     },
    //                     "hhz": {
    //                         "desc": "和值",
    //                         "num": "和值|0-18|",
    //                         "name": "后二直选和值"
    //                     },
    //                     "hkd": {
    //                         "desc": "跨度",
    //                         "num": "跨度|0-9|all",
    //                         "name": "后二直选跨度"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "组选",
    //                 "method": {
    //                     "qfs": {
    //                         "desc": "复式",
    //                         "num": "组选|0-9|all",
    //                         "name": "前二组选复式"
    //                     },
    //                     "qds": {
    //                         "desc": "单式",
    //                         "num": "input|zux|2",
    //                         "name": "前二组选单式"
    //                     },
    //                     "qhz": {
    //                         "desc": "和值",
    //                         "num": "和值|1-17|",
    //                         "name": "前二组选和值"
    //                     },
    //                     "qbd": {
    //                         "desc": "包胆",
    //                         "num": "包胆|0-9|",
    //                         "name": "前二组选包胆"
    //                     },
    //                     "hfs": {
    //                         "desc": "复式",
    //                         "num": "组选|0-9|all",
    //                         "name": "后二组选复式"
    //                     },
    //                     "hds": {
    //                         "desc": "单式",
    //                         "num": "input|zux|2",
    //                         "name": "后二组选单式"
    //                     },
    //                     "hhz": {
    //                         "desc": "和值",
    //                         "num": "和值|1-17|",
    //                         "name": "后二组选和值"
    //                     },
    //                     "hbd": {
    //                         "desc": "包胆",
    //                         "num": "包胆|0-9|",
    //                         "name": "后二组选包胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "dwd": {
    //             "dwd": {
    //                 "title": "定位胆",
    //                 "method": {
    //                     "dwd": {
    //                         "desc": "定位胆",
    //                         "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
    //                         "name": "定位胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "bdd": {
    //             "bdd": {
    //                 "title": "三星不定胆",
    //                 "method": {
    //                     "qs1": {
    //                         "desc": "前三一码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "前三一码不定胆"
    //                     },
    //                     "qs2": {
    //                         "desc": "前三二码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "前三二码不定胆"
    //                     },
    //                     "z31": {
    //                         "desc": "中三一码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "中三一码不定胆"
    //                     },
    //                     "z32": {
    //                         "desc": "中三二码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "中三二码不定胆"
    //                     },
    //                     "hs1": {
    //                         "desc": "后三一码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "后三一码不定胆"
    //                     },
    //                     "hs2": {
    //                         "desc": "后三二码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "后三二码不定胆"
    //                     }
    //                 }
    //             },
    //             "bdd4": {
    //                 "title": "四星不定胆",
    //                 "method": {
    //                     "4x1": {
    //                         "desc": "四星一码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "四星一码不定胆"
    //                     },
    //                     "4x2": {
    //                         "desc": "四星二码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "四星二码不定胆"
    //                     },
    //                     "4x3": {
    //                         "desc": "四星三码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "四星三码不定胆"
    //                     }
    //                 }
    //             },
    //             "bdd5": {
    //                 "title": "五星不定胆",
    //                 "method": {
    //                     "5x1": {
    //                         "desc": "五星一码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "五星一码不定胆"
    //                     },
    //                     "5x2": {
    //                         "desc": "五星二码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "五星二码不定胆"
    //                     },
    //                     "5x3": {
    //                         "desc": "五星三码",
    //                         "num": "不定胆|0-9|all",
    //                         "name": "五星三码不定胆"
    //                     }
    //                 }
    //             }
    //         },
    //         "dxds": {
    //             "dxds": {
    //                 "title": "大小单双组合",
    //                 "method": {
    //                     "h2": {
    //                         "desc": "后二大小单双",
    //                         "num": "十位,个位|0-3|two",
    //                         "name": "后二大小单双"
    //                     },
    //                     "q2": {
    //                         "desc": "前二大小单双",
    //                         "num": "万位,千位|0-3|two",
    //                         "name": "前二大小单双"
    //                     },
    //                     "h3": {
    //                         "desc": "后三大小单双",
    //                         "num": "百位,十位,个位|0-3|two",
    //                         "name": "后三大小单双"
    //                     },
    //                     "q3": {
    //                         "desc": "前三大小单双",
    //                         "num": "万位,千位,百位|0-3|two",
    //                         "name": "前三大小单双"
    //                     }
    //                 }
    //             },
    //             "dxgs": {
    //                 "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    //                 "method": {
    //                     "wx": {
    //                         "desc": "五星大小个数",
    //                         "num": "五星|0-5|two",
    //                         "name": "五星大小个数"
    //                     },
    //                     "sx": {
    //                         "desc": "四星大小个数",
    //                         "num": "四星|0-4|two",
    //                         "name": "四星大小个数"
    //                     },
    //                     "qs": {
    //                         "desc": "前三大小个数",
    //                         "num": "前三|0-3|two",
    //                         "name": "前三大小个数"
    //                     },
    //                     "zs": {
    //                         "desc": "中三大小个数",
    //                         "num": "中三|0-3|two",
    //                         "name": "中三大小个数"
    //                     },
    //                     "hs": {
    //                         "desc": "后三大小个数",
    //                         "num": "后三|0-3|two",
    //                         "name": "后三大小个数"
    //                     }
    //                 }
    //             },
    //             "dsgs": {
    //                 "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    //                 "method": {
    //                     "wx": {
    //                         "desc": "五星单双个数",
    //                         "num": "五星|0-5|two",
    //                         "name": "五星单双个数"
    //                     },
    //                     "sx": {
    //                         "desc": "四星单双个数",
    //                         "num": "四星|0-4|two",
    //                         "name": "四星单双个数"
    //                     },
    //                     "qs": {
    //                         "desc": "前三单双个数",
    //                         "num": "前三|0-3|two",
    //                         "name": "前三单双个数"
    //                     },
    //                     "zs": {
    //                         "desc": "中三单双个数",
    //                         "num": "中三|0-3|two",
    //                         "name": "中三单双个数"
    //                     },
    //                     "hs": {
    //                         "desc": "后三单双个数",
    //                         "num": "后三|0-3|two",
    //                         "name": "后三单双个数"
    //                     }
    //                 }
    //             }
    //         },
    //         "zh": {
    //             "hzdxds": {
    //                 "title": "总和大小单双",
    //                 "method": {
    //                     "5xhz": {
    //                         "desc": "五星总和",
    //                         "num": "五星总和|0-7|two",
    //                         "name": "五星总和"
    //                     },
    //                     "q3hz": {
    //                         "desc": "前三总和",
    //                         "num": "前三总和|0-3|two",
    //                         "name": "前三总和"
    //                     },
    //                     "z3hz": {
    //                         "desc": "中三总和",
    //                         "num": "中三总和|0-3|two",
    //                         "name": "中三总和"
    //                     },
    //                     "h3hz": {
    //                         "desc": "后三总和",
    //                         "num": "后三总和|0-3|two",
    //                         "name": "后三总和"
    //                     },
    //                 }
    //             }
    //         },
    //         "qw": {
    //             "lhh": {
    //                 "title": "龙虎斗",
    //                 "method": {
    //                     "wq": {
    //                         "desc": "万千",
    //                         "num": "万千|5-6|two",
    //                         "name": "万千龙虎斗"
    //                     },
    //                     "wb": {
    //                         "desc": "万百",
    //                         "num": "万百|5-6|two",
    //                         "name": "万百龙虎斗"
    //                     },
    //                     "ws": {
    //                         "desc": "万十",
    //                         "num": "万十|5-6|two",
    //                         "name": "万十龙虎斗"
    //                     },
    //                     "wg": {
    //                         "desc": "万个",
    //                         "num": "万个|5-6|two",
    //                         "name": "万个龙虎斗"
    //                     },
    //                     "qb": {
    //                         "desc": "千百",
    //                         "num": "千百|5-6|two",
    //                         "name": "千百龙虎斗"
    //                     },
    //                     "qs": {
    //                         "desc": "千十",
    //                         "num": "千十|5-6|two",
    //                         "name": "千十龙虎斗"
    //                     },
    //                     "qg": {
    //                         "desc": "千个",
    //                         "num": "千个|5-6|two",
    //                         "name": "千个龙虎斗"
    //                     },
    //                     "bs": {
    //                         "desc": "百十",
    //                         "num": "百十|5-6|two",
    //                         "name": "百十龙虎斗"
    //                     },
    //                     "bg": {
    //                         "desc": "百个",
    //                         "num": "百个|5-6|two",
    //                         "name": "百个龙虎斗"
    //                     },
    //                     "sg": {
    //                         "desc": "十个",
    //                         "num": "十个|5-6|two",
    //                         "name": "十个龙虎斗"
    //                     }
    //                 }
    //             },
    //             "xt": {
    //                 "title": "炸金花",
    //                 "method": {
    //                     "q3": {
    //                         "desc": "前三",
    //                         "num": "前三炸金花|9-12|two",
    //                         "name": "前三炸金花"
    //                     },
    //                     "z3": {
    //                         "desc": "中三",
    //                         "num": "中三炸金花|9-12|two",
    //                         "name": "中三炸金花"
    //                     },
    //                     "h3": {
    //                         "desc": "后三",
    //                         "num": "后三炸金花|9-12|two",
    //                         "name": "后三炸金花"
    //                     }
    //                 }
    //             },
    //             "ts": {
    //                 "title": "特殊",
    //                 "method": {
    //                     "yffs": {
    //                         "desc": "一帆风顺",
    //                         "num": "一帆风顺|0-9|all",
    //                         "name": "一帆风顺"
    //                     },
    //                     "hscs": {
    //                         "desc": "好事成双",
    //                         "num": "好事成双|0-9|all",
    //                         "name": "好事成双"
    //                     },
    //                     "sxbx": {
    //                         "desc": "三星报喜",
    //                         "num": "三星报喜|0-9|all",
    //                         "name": "三星报喜"
    //                     },
    //                     "sjfc": {
    //                         "desc": "四季发财",
    //                         "num": "四季发财|0-9|all",
    //                         "name": "四季发财"
    //                     }
    //                 }
    //             }
    //         },
    //         "nn": {
    //             "nn": {
    //                 "title": "牛牛",
    //                 "method": {
    //                     "nn": {
    //                         "desc": "牛牛",
    //                         "num": "牛牛|0-14|",
    //                         "name": "牛牛"
    //                     }
    //                 }
    //             }
    //         },
    //         "sh": {
    //             "sh": {
    //                 "title": "梭哈",
    //                 "method": {
    //                     "wx": {
    //                         "desc": "梭哈",
    //                         "num": "梭哈|13-19|two",
    //                         "name": "梭哈"
    //                     }
    //                 }
    //             }
    //         },
    //         "bjl": {
    //             "bjl": {
    //                 "title": "百家乐",
    //                 "method": {
    //                     "bjl": {
    //                         "desc": "百家乐",
    //                         "num": "百家乐|20-25|two",
    //                         "name": "百家乐"
    //                     }
    //                 }
    //             }
    //         },
    //         "rx2": {
    //             "zx": {
    //                 "title": "任二直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位,百位,十位,个位|0-9|all",
    //                         "name": "任二直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|2",
    //                         "name": "任二直选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "直选和值|0-18|",
    //                         "name": "任二直选和值"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "任二组选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "组选复式|0-9|all",
    //                         "name": "任二组选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zux|2",
    //                         "name": "任二组选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "组选和值|1-17|",
    //                         "name": "任二组选和值"
    //                     }
    //                 }
    //             }
    //         },
    //         "rx3": {
    //             "zx": {
    //                 "title": "任三直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位,百位,十位,个位|0-9|all",
    //                         "name": "任三直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|3",
    //                         "name": "任三直选单式"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "直选和值|0-27|",
    //                         "name": "任三直选和值"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "任三组选",
    //                 "method": {
    //                     "z3": {
    //                         "desc": "组三",
    //                         "num": "组三|0-9|all",
    //                         "name": "任三组选三"
    //                     },
    //                     "z6": {
    //                         "desc": "组六",
    //                         "num": "组六|0-9|all",
    //                         "name": "任三组选六"
    //                     },
    //                     "hh": {
    //                         "desc": "混合",
    //                         "num": "input|hh|3",
    //                         "name": "任三混合组选"
    //                     },
    //                     "hz": {
    //                         "desc": "和值",
    //                         "num": "组选和值|1-26|",
    //                         "name": "任三组选和值"
    //                     }
    //                 }
    //             }
    //         },
    //         "rx4": {
    //             "zx": {
    //                 "title": "任四直选",
    //                 "method": {
    //                     "fs": {
    //                         "desc": "复式",
    //                         "num": "万位,千位,百位,十位,个位|0-9|all",
    //                         "name": "任四直选复式"
    //                     },
    //                     "ds": {
    //                         "desc": "单式",
    //                         "num": "input|zx|4",
    //                         "name": "任四直选单式"
    //                     }
    //                 }
    //             },
    //             "zux": {
    //                 "title": "任四组选",
    //                 "method": {
    //                     "z24": {
    //                         "desc": "组选24",
    //                         "num": "组24|0-9|all",
    //                         "name": "任四组选24"
    //                     },
    //                     "z12": {
    //                         "desc": "组选12",
    //                         "num": "二重号,单号|0-9|all",
    //                         "name": "任四组选12"
    //                     },
    //                     "z6": {
    //                         "desc": "组选6",
    //                         "num": "二重号|0-9|all",
    //                         "name": "任四组选6"
    //                     },
    //                     "z4": {
    //                         "desc": "组选4",
    //                         "num": "三重号,单号|0-9|all",
    //                         "name": "任四组选4"
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // },
    "CQSSC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    "RBSSM": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    "TJSSC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    "RDFFC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    "RDLFC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    "XJSSC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    "TXFFC": {
        "ltTab": {
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三"
        },
        "ltMethod": {
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            }
        }
    },
    "QQSSM": {
        "ltTab": {
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三"
        },
        "ltMethod": {
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            }
        }
    },
    "TX1FC": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "nn": "牛牛",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-7|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "nn": {
                "nn": {
                    "title": "牛牛",
                    "method": {
                        "nn": {
                            "desc": "牛牛",
                            "num": "牛牛|0-14|",
                            "name": "牛牛"
                        }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },
    "TCP5": {
        "ltTab": {
            "wx": "五星",
            "sx": "四星",
            "qsm": "前三",
            "zsm": "中三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "dxds": "大小单双",
            "zh": "总和",
            "qw": "趣味",
            "sh": "梭哈",
            "bjl": "百家乐",
            "rx": "任选",
            "rx2": "任选二",
            "rx3": "任选三",
            "rx4": "任选四"
        },
        "ltMethod": {
            "wx": {
                "zx": {
                    "title": "五星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|5",
                            "name": "五星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "五星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "五星组选",
                    "method": {
                        "z120": {
                            "desc": "组选120",
                            "num": "组选120|0-9|all",
                            "name": "五星组选120"
                        },
                        "z60": {
                            "desc": "组选60",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选60"
                        },
                        "z30": {
                            "desc": "组选30",
                            "num": "二重号,单号|0-9|all",
                            "name": "五星组选30"
                        },
                        "z20": {
                            "desc": "组选20",
                            "num": "三重号,单号|0-9|all",
                            "name": "五星组选20"
                        },
                        "z10": {
                            "desc": "组选10",
                            "num": "三重号,二重号|0-9|all",
                            "name": "五星组选10"
                        },
                        "z5": {
                            "desc": "组选5",
                            "num": "四重号,单号|0-9|all",
                            "name": "五星组选5"
                        }
                    }
                }
            },
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                        /*"zh": {
                            "desc": "组合",
                            "num": "千位,百位,十位,个位|0-9|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "后三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "后三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后三组选包胆"
                        }
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位|0-9|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "前三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "前三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前三组选包胆"
                        }
                    }
                }
            },
            "zsm": {
                "zx": {
                    "title": "中三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "千位,百位,十位|0-9|all",
                            "name": "中三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "中三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "中三直选和值"
                        },
                        "kd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "中三直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "中三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "中三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "中三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "中三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "中三组选和值"
                        },
                        "bd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "中三组选包胆"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "万位,千位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "前二直选和值"
                        },
                        "qkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "前二直选跨度"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|0-18|",
                            "name": "后二直选和值"
                        },
                        "hkd": {
                            "desc": "跨度",
                            "num": "跨度|0-9|all",
                            "name": "后二直选跨度"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "前二组选和值"
                        },
                        "qbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "前二组选包胆"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|1-17|",
                            "name": "后二组选和值"
                        },
                        "hbd": {
                            "desc": "包胆",
                            "num": "包胆|0-9|",
                            "name": "后二组选包胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "万位,千位,百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "三星不定胆",
                    "method": {
                        "qs1": {
                            "desc": "前三一码",
                            "num": "不定胆|0-9|all",
                            "name": "前三一码不定胆"
                        },
                        "qs2": {
                            "desc": "前三二码",
                            "num": "不定胆|0-9|all",
                            "name": "前三二码不定胆"
                        },
                        "z31": {
                            "desc": "中三一码",
                            "num": "不定胆|0-9|all",
                            "name": "中三一码不定胆"
                        },
                        "z32": {
                            "desc": "中三二码",
                            "num": "不定胆|0-9|all",
                            "name": "中三二码不定胆"
                        },
                        "hs1": {
                            "desc": "后三一码",
                            "num": "不定胆|0-9|all",
                            "name": "后三一码不定胆"
                        },
                        "hs2": {
                            "desc": "后三二码",
                            "num": "不定胆|0-9|all",
                            "name": "后三二码不定胆"
                        }
                    }
                },
                "bdd4": {
                    "title": "四星不定胆",
                    "method": {
                        "4x1": {
                            "desc": "四星一码",
                            "num": "不定胆|0-9|all",
                            "name": "四星一码不定胆"
                        },
                        "4x2": {
                            "desc": "四星二码",
                            "num": "不定胆|0-9|all",
                            "name": "四星二码不定胆"
                        },
                        "4x3": {
                            "desc": "四星三码",
                            "num": "不定胆|0-9|all",
                            "name": "四星三码不定胆"
                        }
                    }
                },
                "bdd5": {
                    "title": "五星不定胆",
                    "method": {
                        "5x1": {
                            "desc": "五星一码",
                            "num": "不定胆|0-9|all",
                            "name": "五星一码不定胆"
                        },
                        "5x2": {
                            "desc": "五星二码",
                            "num": "不定胆|0-9|all",
                            "name": "五星二码不定胆"
                        },
                        "5x3": {
                            "desc": "五星三码",
                            "num": "不定胆|0-9|all",
                            "name": "五星三码不定胆"
                        }
                    }
                }
            },
            "dxds": {
                "dxds": {
                    "title": "大小单双组合",
                    "method": {
                        "h2": {
                            "desc": "后二大小单双",
                            "num": "十位,个位|0-3|two",
                            "name": "后二大小单双"
                        },
                        "q2": {
                            "desc": "前二大小单双",
                            "num": "万位,千位|0-3|two",
                            "name": "前二大小单双"
                        },
                        "h3": {
                            "desc": "后三大小单双",
                            "num": "百位,十位,个位|0-3|two",
                            "name": "后三大小单双"
                        },
                        "q3": {
                            "desc": "前三大小单双",
                            "num": "万位,千位,百位|0-3|two",
                            "name": "前三大小单双"
                        }
                    }
                },
                "dxgs": {
                    "title": "大小个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星大小个数",
                            "num": "五星|0-5|two",
                            "name": "五星大小个数"
                        },
                        "sx": {
                            "desc": "四星大小个数",
                            "num": "四星|0-4|two",
                            "name": "四星大小个数"
                        },
                        "qs": {
                            "desc": "前三大小个数",
                            "num": "前三|0-3|two",
                            "name": "前三大小个数"
                        },
                        "zs": {
                            "desc": "中三大小个数",
                            "num": "中三|0-3|two",
                            "name": "中三大小个数"
                        },
                        "hs": {
                            "desc": "后三大小个数",
                            "num": "后三|0-3|two",
                            "name": "后三大小个数"
                        }
                    }
                },
                "dsgs": {
                    "title": "单双个数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "wx": {
                            "desc": "五星单双个数",
                            "num": "五星|0-5|two",
                            "name": "五星单双个数"
                        },
                        "sx": {
                            "desc": "四星单双个数",
                            "num": "四星|0-4|two",
                            "name": "四星单双个数"
                        },
                        "qs": {
                            "desc": "前三单双个数",
                            "num": "前三|0-3|two",
                            "name": "前三单双个数"
                        },
                        "zs": {
                            "desc": "中三单双个数",
                            "num": "中三|0-3|two",
                            "name": "中三单双个数"
                        },
                        "hs": {
                            "desc": "后三单双个数",
                            "num": "后三|0-3|two",
                            "name": "后三单双个数"
                        }
                    }
                }
            },
            "zh": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "5xhz": {
                            "desc": "五星总和",
                            "num": "五星总和|0-3|two",
                            "name": "五星总和"
                        },
                        "q3hz": {
                            "desc": "前三总和",
                            "num": "前三总和|0-3|two",
                            "name": "前三总和"
                        },
                        "z3hz": {
                            "desc": "中三总和",
                            "num": "中三总和|0-3|two",
                            "name": "中三总和"
                        },
                        "h3hz": {
                            "desc": "后三总和",
                            "num": "后三总和|0-3|two",
                            "name": "后三总和"
                        },
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "wq": {
                            "desc": "万千",
                            "num": "万千|5-6|two",
                            "name": "万千龙虎斗"
                        },
                        "wb": {
                            "desc": "万百",
                            "num": "万百|5-6|two",
                            "name": "万百龙虎斗"
                        },
                        "ws": {
                            "desc": "万十",
                            "num": "万十|5-6|two",
                            "name": "万十龙虎斗"
                        },
                        "wg": {
                            "desc": "万个",
                            "num": "万个|5-6|two",
                            "name": "万个龙虎斗"
                        },
                        "qb": {
                            "desc": "千百",
                            "num": "千百|5-6|two",
                            "name": "千百龙虎斗"
                        },
                        "qs": {
                            "desc": "千十",
                            "num": "千十|5-6|two",
                            "name": "千十龙虎斗"
                        },
                        "qg": {
                            "desc": "千个",
                            "num": "千个|5-6|two",
                            "name": "千个龙虎斗"
                        },
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "炸金花",
                    "method": {
                        "q3": {
                            "desc": "前三",
                            "num": "前三炸金花|9-12|two",
                            "name": "前三炸金花"
                        },
                        "z3": {
                            "desc": "中三",
                            "num": "中三炸金花|9-12|two",
                            "name": "中三炸金花"
                        },
                        "h3": {
                            "desc": "后三",
                            "num": "后三炸金花|9-12|two",
                            "name": "后三炸金花"
                        }
                    }
                },
                "ts": {
                    "title": "特殊",
                    "method": {
                        "yffs": {
                            "desc": "一帆风顺",
                            "num": "一帆风顺|0-9|all",
                            "name": "一帆风顺"
                        },
                        "hscs": {
                            "desc": "好事成双",
                            "num": "好事成双|0-9|all",
                            "name": "好事成双"
                        },
                        // "sxbx": {
                        //     "desc": "三星报喜",
                        //     "num": "三星报喜|0-9|all",
                        //     "name": "三星报喜"
                        // },
                        // "sjfc": {
                        //     "desc": "四季发财",
                        //     "num": "四季发财|0-9|all",
                        //     "name": "四季发财"
                        // }
                    }
                }
            },
            "sh": {
                "sh": {
                    "title": "梭哈",
                    "method": {
                        "wx": {
                            "desc": "梭哈",
                            "num": "梭哈|13-19|two",
                            "name": "梭哈"
                        }
                    }
                }
            },
            "bjl": {
                "bjl": {
                    "title": "百家乐",
                    "method": {
                        "bjl": {
                            "desc": "百家乐",
                            "num": "百家乐|20-25|two",
                            "name": "百家乐"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-18|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|0-9|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-17|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx4": {
                "zx": {
                    "title": "任四直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "万位,千位,百位,十位,个位|0-9|all",
                            "name": "任四直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "任四直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "任四组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|0-9|all",
                            "name": "任四组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|0-9|all",
                            "name": "任四组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|0-9|all",
                            "name": "任四组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|0-9|all",
                            "name": "任四组选4"
                        }
                    }
                }
            }
        }
    },

    "HNKY481": {
        "ltTab": {
            "sx": "四星",
            "qsm": "前三",
            "hsm": "后三",
            "em": "二星",
            "dwd": "定位胆",
            "rx": "任选",
            "rx3": "任选三",
            "rx2": "任选二",
        },
        "ltMethod": {
            "sx": {
                "zx": {
                    "title": "四星直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "自由泳,仰泳,蛙泳,蝶泳|1-8|all",
                            "name": "四星直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|4",
                            "name": "四星直选单式"
                        },
                       /* "zh": {
                            "desc": "组合",
                            "num": "自由泳,仰泳,蛙泳,蝶泳|1-8|all",
                            "name": "四星直选组合"
                        }*/
                    }
                },
                "zux": {
                    "title": "四星组选",
                    "method": {
                        "z24": {
                            "desc": "组选24",
                            "num": "组24|1-8|all",
                            "name": "四星组选24"
                        },
                        "z12": {
                            "desc": "组选12",
                            "num": "二重号,单号|1-8|all",
                            "name": "四星组选12"
                        },
                        "z6": {
                            "desc": "组选6",
                            "num": "二重号|1-8|all",
                            "name": "四星组选6"
                        },
                        "z4": {
                            "desc": "组选4",
                            "num": "三重号,单号|1-8|all",
                            "name": "四星组选4"
                        }
                    }
                }
            },
            "hsm": {
                "zx": {
                    "title": "后三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "仰泳,蛙泳,蝶泳|1-8|all",
                            "name": "后三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "后三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|3-24|",
                            "name": "后三直选和值"
                        },
                    }
                },
                "zux": {
                    "title": "后三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|1-8|all",
                            "name": "后三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|1-8|all",
                            "name": "后三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "后三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|4-23|",
                            "name": "后三组选和值"
                        },
                    }
                }
            },
            "qsm": {
                "zx": {
                    "title": "前三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "自由泳,仰泳,蛙泳|1-8|all",
                            "name": "前三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "前三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|3-24|",
                            "name": "前三直选和值"
                        },
                    }
                },
                "zux": {
                    "title": "前三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|1-8|all",
                            "name": "前三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|1-8|all",
                            "name": "前三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "前三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|4-23|",
                            "name": "前三组选和值"
                        },
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "自由泳,仰泳|1-8|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|2-16|",
                            "name": "前二直选和值"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "蛙泳,蝶泳|1-8|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|2-16|",
                            "name": "后二直选和值"
                        },
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "qfs": {
                            "desc": "复式",
                            "num": "组选|1-8|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        },
                        "qhz": {
                            "desc": "和值",
                            "num": "和值|3-15|",
                            "name": "前二组选和值"
                        },
                        "hfs": {
                            "desc": "复式",
                            "num": "组选|1-8|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "hhz": {
                            "desc": "和值",
                            "num": "和值|3-15|",
                            "name": "后二组选和值"
                        },
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "自由泳,仰泳,蛙泳,蝶泳,所有位置|1-8|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rx3": {
                "zx": {
                    "title": "任三直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "自由泳,仰泳,蛙泳,蝶泳|1-8|all",
                            "name": "任三直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "任三直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|3-24|",
                            "name": "任三直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任三组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|1-8|all",
                            "name": "任三组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|1-8|all",
                            "name": "任三组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "任三混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|4-23|",
                            "name": "任三组选和值"
                        }
                    }
                }
            },
            "rx2": {
                "zx": {
                    "title": "任二直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "自由泳,仰泳,蛙泳,蝶泳|1-8|all",
                            "name": "任二直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|2",
                            "name": "任二直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|2-16|",
                            "name": "任二直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "任二组选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "组选复式|1-8|all",
                            "name": "任二组选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zux|2",
                            "name": "任二组选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|3-15|",
                            "name": "任二组选和值"
                        }
                    }
                }
            },
        }
    },
    "SCKL12": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-12|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx12|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-12|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux12|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-12|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx12|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-12|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux12|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "3x1m": {
                            "desc": "前三一码",
                            "num": "前三位|1-12|all",
                            "name": "前三一码不定胆"
                        },
                        "4x1m": {
                            "desc": "前四一码",
                            "num": "前四位|1-12|all",
                            "name": "前四一码不定胆"
                        },
                        "5x1m": {
                            "desc": "五星一码",
                            "num": "五位|1-12|all",
                            "name": "五星一码不定胆"
                        },
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位,第四位,第五位,所有位置|1-12|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-12|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-12|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-12|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-12|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-12|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-12|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-12|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
        }
    },

    "GD11Y": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
            "rxdt": "任选胆拖",
            "qw": "趣味"
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx11|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-11|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux11|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-11|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx11|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-11|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux11|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd11y": {
                            "desc": "前三位",
                            "num": "前三位|1-11|all",
                            "name": "前三位不定胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位,所有位置|1-11|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "选一中1|1-11|all",
                            "name": "任选复式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-11|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-11|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-11|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-11|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-11|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-11|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-11|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "input|rx|1",
                            "name": "任选单式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
            "rxdt": {
                "rxdt": {
                    "title": "任选胆拖",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖八中五"
                        },
                    }
                }
            },
            "qw": {
                "qw": {
                    "title": "定单双",
                    "method": {
                        "dds": {
                            "desc": "定单双",
                            "num": "定单双|0-5|two",
                            "name": "定单双"
                        },
                        "czw": {
                            "desc": "猜中位",
                            "num": "猜中位|3-9|two",
                            "name": "猜中位"
                        }
                    }
                }
            }
        }
    },
    "SH11Y": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
            "rxdt": "任选胆拖",
            "qw": "趣味"
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx11|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-11|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux11|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-11|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx11|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-11|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux11|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd11y": {
                            "desc": "前三位",
                            "num": "前三位|1-11|all",
                            "name": "前三位不定胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位,所有位置|1-11|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "选一中1|1-11|all",
                            "name": "任选复式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-11|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-11|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-11|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-11|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-11|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-11|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-11|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "input|rx|1",
                            "name": "任选单式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
            "rxdt": {
                "rxdt": {
                    "title": "任选胆拖",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖八中五"
                        },
                    }
                }
            },
            "qw": {
                "qw": {
                    "title": "定单双",
                    "method": {
                        "dds": {
                            "desc": "定单双",
                            "num": "定单双|0-5|two",
                            "name": "定单双"
                        },
                        "czw": {
                            "desc": "猜中位",
                            "num": "猜中位|3-9|two",
                            "name": "猜中位"
                        }
                    }
                }
            }
        }
    },
    'AH11Y': {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
            "rxdt": "任选胆拖",
            "qw": "趣味"
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx11|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-11|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux11|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-11|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx11|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-11|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux11|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd11y": {
                            "desc": "前三位",
                            "num": "前三位|1-11|all",
                            "name": "前三位不定胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位,所有位置|1-11|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "选一中1|1-11|all",
                            "name": "任选复式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-11|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-11|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-11|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-11|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-11|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-11|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-11|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "input|rx|1",
                            "name": "任选单式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
            "rxdt": {
                "rxdt": {
                    "title": "任选胆拖",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖八中五"
                        },
                    }
                }
            },
            "qw": {
                "qw": {
                    "title": "定单双",
                    "method": {
                        "dds": {
                            "desc": "定单双",
                            "num": "定单双|0-5|two",
                            "name": "定单双"
                        },
                        "czw": {
                            "desc": "猜中位",
                            "num": "猜中位|3-9|two",
                            "name": "猜中位"
                        }
                    }
                }
            }
        }
    },
    'YN11Y': {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
            "rxdt": "任选胆拖",
            "qw": "趣味"
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx11|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-11|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux11|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-11|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx11|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-11|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux11|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd11y": {
                            "desc": "前三位",
                            "num": "前三位|1-11|all",
                            "name": "前三位不定胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位,所有位置|1-11|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "选一中1|1-11|all",
                            "name": "任选复式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-11|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-11|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-11|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-11|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-11|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-11|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-11|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "input|rx|1",
                            "name": "任选单式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
            "rxdt": {
                "rxdt": {
                    "title": "任选胆拖",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖八中五"
                        },
                    }
                }
            },
            "qw": {
                "qw": {
                    "title": "定单双",
                    "method": {
                        "dds": {
                            "desc": "定单双",
                            "num": "定单双|0-5|two",
                            "name": "定单双"
                        },
                        "czw": {
                            "desc": "猜中位",
                            "num": "猜中位|3-9|two",
                            "name": "猜中位"
                        }
                    }
                }
            }
        }
    },
    "CQ11Y": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
            "rxdt": "任选胆拖",
            "qw": "趣味"
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx11|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-11|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux11|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-11|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx11|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-11|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux11|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd11y": {
                            "desc": "前三位",
                            "num": "前三位|1-11|all",
                            "name": "前三位不定胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "选一中1|1-11|all",
                            "name": "任选复式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-11|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-11|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-11|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-11|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-11|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-11|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-11|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "input|rx|1",
                            "name": "任选单式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
            "rxdt": {
                "rxdt": {
                    "title": "任选胆拖",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖八中五"
                        },
                    }
                }
            },
            "qw": {
                "qw": {
                    "title": "定单双",
                    "method": {
                        "dds": {
                            "desc": "定单双",
                            "num": "定单双|0-5|two",
                            "name": "定单双"
                        },
                        "czw": {
                            "desc": "猜中位",
                            "num": "猜中位|3-9|two",
                            "name": "猜中位"
                        }
                    }
                }
            }
        }
    },
    "SD11Y": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
            "rxdt": "任选胆拖",
            "qw": "趣味"
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx11|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-11|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux11|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-11|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx11|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-11|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux11|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd11y": {
                            "desc": "前三位",
                            "num": "前三位|1-11|all",
                            "name": "前三位不定胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位,所有位置|1-11|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "选一中1|1-11|all",
                            "name": "任选复式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-11|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-11|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-11|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-11|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-11|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-11|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-11|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "input|rx|1",
                            "name": "任选单式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
            "rxdt": {
                "rxdt": {
                    "title": "任选胆拖",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖八中五"
                        },
                    }
                }
            },
            "qw": {
                "qw": {
                    "title": "定单双",
                    "method": {
                        "dds": {
                            "desc": "定单双",
                            "num": "定单双|0-5|two",
                            "name": "定单双"
                        },
                        "czw": {
                            "desc": "猜中位",
                            "num": "猜中位|3-9|two",
                            "name": "猜中位"
                        }
                    }
                }
            }
        }
    },
    "JX11Y": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
            "rxdt": "任选胆拖",
            "qw": "趣味"
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx11|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-11|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux11|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-11|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx11|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-11|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux11|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd11y": {
                            "desc": "前三位",
                            "num": "前三位|1-11|all",
                            "name": "前三位不定胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位,所有位置|1-11|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "选一中1|1-11|all",
                            "name": "任选复式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-11|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-11|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-11|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-11|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-11|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-11|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-11|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "input|rx|1",
                            "name": "任选单式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
            "rxdt": {
                "rxdt": {
                    "title": "任选胆拖",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖八中五"
                        },
                    }
                }
            },
            "qw": {
                "qw": {
                    "title": "定单双",
                    "method": {
                        "dds": {
                            "desc": "定单双",
                            "num": "定单双|0-5|two",
                            "name": "定单双"
                        },
                        "czw": {
                            "desc": "猜中位",
                            "num": "猜中位|3-9|two",
                            "name": "猜中位"
                        }
                    }
                }
            }
        }
    },
    "HLJ11Y": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
            "rxdt": "任选胆拖",
            "qw": "趣味"
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx11|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-11|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux11|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-11|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx11|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-11|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux11|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd11y": {
                            "desc": "前三位",
                            "num": "前三位|1-11|all",
                            "name": "前三位不定胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位,所有位置|1-11|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "选一中1|1-11|all",
                            "name": "任选复式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-11|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-11|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-11|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-11|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-11|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-11|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-11|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "input|rx|1",
                            "name": "任选单式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
            "rxdt": {
                "rxdt": {
                    "title": "任选胆拖",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖八中五"
                        },
                    }
                }
            },
            "qw": {
                "qw": {
                    "title": "定单双",
                    "method": {
                        "dds": {
                            "desc": "定单双",
                            "num": "定单双|0-5|two",
                            "name": "定单双"
                        },
                        "czw": {
                            "desc": "猜中位",
                            "num": "猜中位|3-9|two",
                            "name": "猜中位"
                        }
                    }
                }
            }
        }
    },
    "MC11Y": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
            "rxdt": "任选胆拖",
            "qw": "趣味"
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx11|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-11|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux11|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-11|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx11|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-11|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux11|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd11y": {
                            "desc": "前三位",
                            "num": "前三位|1-11|all",
                            "name": "前三位不定胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位,所有位置|1-11|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "选一中1|1-11|all",
                            "name": "任选复式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-11|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-11|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-11|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-11|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-11|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-11|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-11|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "input|rx|1",
                            "name": "任选单式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
            "rxdt": {
                "rxdt": {
                    "title": "任选胆拖",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖八中五"
                        },
                    }
                }
            },
            "qw": {
                "qw": {
                    "title": "定单双",
                    "method": {
                        "dds": {
                            "desc": "定单双",
                            "num": "定单双|0-5|two",
                            "name": "定单双"
                        },
                        "czw": {
                            "desc": "猜中位",
                            "num": "猜中位|3-9|two",
                            "name": "猜中位"
                        }
                    }
                }
            }
        }
    },
    "HUB11Y": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "bdd": "不定胆",
            "dwd": "定位胆",
            "rxfs": "任选复式",
            "rxds": "任选单式",
            "rxdt": "任选胆拖",
            "qw": "趣味"
        },
        "ltMethod": {
            "sm": {
                "sm": {
                    "title": "三码",
                    "method": {
                        "zxfs": {
                            "desc": "前三直选复式",
                            "num": "第一位,第二位,第三位|1-11|all",
                            "name": "前三直选复式"
                        },
                        "zxds": {
                            "desc": "前三直选单式",
                            "num": "input|zx11|3",
                            "name": "前三直选单式"
                        },
                        "zuxfs": {
                            "desc": "前三组选复式",
                            "num": "前三组选|1-11|all",
                            "name": "前三组选复式"
                        },
                        "zuxds": {
                            "desc": "前三组选单式",
                            "num": "input|zux11|3",
                            "name": "前三组选单式"
                        }
                    }
                }
            },
            "em": {
                "em": {
                    "title": "二码",
                    "method": {
                        "zxfs": {
                            "desc": "前二直选复式",
                            "num": "第一位,第二位|1-11|all",
                            "name": "前二直选复式"
                        },
                        "zxds": {
                            "desc": "前二直选单式",
                            "num": "input|zx11|2",
                            "name": "前二直选单式"
                        },
                        "zuxfs": {
                            "desc": "前二组选复式",
                            "num": "前二组选|1-11|all",
                            "name": "前二组选复式"
                        },
                        "zuxds": {
                            "desc": "前二组选单式",
                            "num": "input|zux11|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd11y": {
                            "desc": "前三位",
                            "num": "前三位|1-11|all",
                            "name": "前三位不定胆"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd11y": {
                            "desc": "定位胆",
                            "num": "第一位,第二位,第三位,所有位置|1-11|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "rxfs": {
                "rxfs": {
                    "title": "任选复式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "选一中1|1-11|all",
                            "name": "任选复式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "选二中2|1-11|all",
                            "name": "任选复式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "选三中3|1-11|all",
                            "name": "任选复式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "选四中4|1-11|all",
                            "name": "任选复式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "选五中5|1-11|all",
                            "name": "任选复式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "选六中5|1-11|all",
                            "name": "任选复式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "选七中5|1-11|all",
                            "name": "任选复式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "选八中5|1-11|all",
                            "name": "任选复式八中五"
                        }
                    }
                }
            },
            "rxds": {
                "rxds": {
                    "title": "任选单式",
                    "method": {
                        "1z1": {
                            "desc": "一中一",
                            "num": "input|rx|1",
                            "name": "任选单式一中一"
                        },
                        "2z2": {
                            "desc": "二中二",
                            "num": "input|rx|2",
                            "name": "任选单式二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "input|rx|3",
                            "name": "任选单式三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "input|rx|4",
                            "name": "任选单式四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "input|rx|5",
                            "name": "任选单式五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "input|rx|6",
                            "name": "任选单式六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "input|rx|7",
                            "name": "任选单式七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "input|rx|8",
                            "name": "任选单式八中五"
                        }
                    }
                }
            },
            "rxdt": {
                "rxdt": {
                    "title": "任选胆拖",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖二中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖三中三"
                        },
                        "4z4": {
                            "desc": "四中四",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖四中四"
                        },
                        "5z5": {
                            "desc": "五中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖五中五"
                        },
                        "6z5": {
                            "desc": "六中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖六中五"
                        },
                        "7z5": {
                            "desc": "七中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖七中五"
                        },
                        "8z5": {
                            "desc": "八中五",
                            "num": "胆码,拖码|1-11|",
                            "name": "任选胆拖八中五"
                        },
                    }
                }
            },
            "qw": {
                "qw": {
                    "title": "定单双",
                    "method": {
                        "dds": {
                            "desc": "定单双",
                            "num": "定单双|0-5|two",
                            "name": "定单双"
                        },
                        "czw": {
                            "desc": "猜中位",
                            "num": "猜中位|3-9|two",
                            "name": "猜中位"
                        }
                    }
                }
            }
        }
    },

    "3DFC": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "qw": "趣味玩法"
        },
        "ltMethod": {
            "sm": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "三码直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "三码直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "三码直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "三码组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "三码组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "三码混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "三码组选和值"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "hfs": {
                            "desc": "后二直选复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "后二直选单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "qfs": {
                            "desc": "前二直选复式",
                            "num": "百位,十位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "前二直选单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "hfs": {
                            "desc": "后二组选复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "后二组选单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "qfs": {
                            "desc": "前二组选复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "前二组选单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd1": {
                            "desc": "一码",
                            "num": "不定胆|0-9|all",
                            "name": "一码不定胆"
                        },
                        "bdd2": {
                            "desc": "二码",
                            "num": "不定胆|0-9|all",
                            "name": "二码不定胆"
                        }
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "形态",
                    "method": {
                        "xt": {
                            "desc": "形态",
                            "num": "形态|8-12|two",
                            "name": "形态"
                        }
                    }
                }
            }
        }
    },
    "MC3D": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "qw": "趣味玩法"
        },
        "ltMethod": {
            "sm": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "三码直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "三码直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "三码直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "三码组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "三码组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "三码混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "三码组选和值"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "hfs": {
                            "desc": "后二直选复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "后二直选单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "qfs": {
                            "desc": "前二直选复式",
                            "num": "百位,十位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "前二直选单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "hfs": {
                            "desc": "后二组选复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "后二组选单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "qfs": {
                            "desc": "前二组选复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "前二组选单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd1": {
                            "desc": "一码",
                            "num": "不定胆|0-9|all",
                            "name": "一码不定胆"
                        },
                        "bdd2": {
                            "desc": "二码",
                            "num": "不定胆|0-9|all",
                            "name": "二码不定胆"
                        }
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "形态",
                    "method": {
                        "xt": {
                            "desc": "形态",
                            "num": "形态|8-12|two",
                            "name": "形态"
                        }
                    }
                }
            }
        }
    },
    "TCP3": {
        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "qw": "趣味玩法"
        },
        "ltMethod": {
            "sm": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "三码直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "三码直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "三码直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "三码组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "三码组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "三码混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "三码组选和值"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "hfs": {
                            "desc": "后二直选复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "后二直选单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "qfs": {
                            "desc": "前二直选复式",
                            "num": "百位,十位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "前二直选单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "hfs": {
                            "desc": "后二组选复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "后二组选单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "qfs": {
                            "desc": "前二组选复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "前二组选单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd1": {
                            "desc": "一码",
                            "num": "不定胆|0-9|all",
                            "name": "一码不定胆"
                        },
                        "bdd2": {
                            "desc": "二码",
                            "num": "不定胆|0-9|all",
                            "name": "二码不定胆"
                        }
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "形态",
                    "method": {
                        "xt": {
                            "desc": "形态",
                            "num": "形态|8-12|two",
                            "name": "形态"
                        }
                    }
                }
            }
        }
    },
    "SHSSL": {

        "ltTab": {
            "sm": "三星",
            "em": "二星",
            "dwd": "定位胆",
            "bdd": "不定胆",
            "qw": "趣味玩法"
        },
        "ltMethod": {
            "sm": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "百位,十位,个位|0-9|all",
                            "name": "三码直选复式"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|zx|3",
                            "name": "三码直选单式"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "直选和值|0-27|",
                            "name": "三码直选和值"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "z3": {
                            "desc": "组三",
                            "num": "组三|0-9|all",
                            "name": "三码组选三"
                        },
                        "z6": {
                            "desc": "组六",
                            "num": "组六|0-9|all",
                            "name": "三码组选六"
                        },
                        "hh": {
                            "desc": "混合",
                            "num": "input|hh|3",
                            "name": "三码混合组选"
                        },
                        "hz": {
                            "desc": "和值",
                            "num": "组选和值|1-26|",
                            "name": "三码组选和值"
                        }
                    }
                }
            },
            "em": {
                "zx": {
                    "title": "直选",
                    "method": {
                        "hfs": {
                            "desc": "后二直选复式",
                            "num": "十位,个位|0-9|all",
                            "name": "后二直选复式"
                        },
                        "hds": {
                            "desc": "后二直选单式",
                            "num": "input|zx|2",
                            "name": "后二直选单式"
                        },
                        "qfs": {
                            "desc": "前二直选复式",
                            "num": "百位,十位|0-9|all",
                            "name": "前二直选复式"
                        },
                        "qds": {
                            "desc": "前二直选单式",
                            "num": "input|zx|2",
                            "name": "前二直选单式"
                        }
                    }
                },
                "zux": {
                    "title": "组选",
                    "method": {
                        "hfs": {
                            "desc": "后二组选复式",
                            "num": "组选|0-9|all",
                            "name": "后二组选复式"
                        },
                        "hds": {
                            "desc": "后二组选单式",
                            "num": "input|zux|2",
                            "name": "后二组选单式"
                        },
                        "qfs": {
                            "desc": "前二组选复式",
                            "num": "组选|0-9|all",
                            "name": "前二组选复式"
                        },
                        "qds": {
                            "desc": "前二组选单式",
                            "num": "input|zux|2",
                            "name": "前二组选单式"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "dwd": {
                            "desc": "定位胆",
                            "num": "百位,十位,个位,所有位置|0-9|all",
                            "name": "定位胆"
                        }
                    }
                }
            },
            "bdd": {
                "bdd": {
                    "title": "不定胆",
                    "method": {
                        "bdd1": {
                            "desc": "一码",
                            "num": "不定胆|0-9|all",
                            "name": "一码不定胆"
                        },
                        "bdd2": {
                            "desc": "二码",
                            "num": "不定胆|0-9|all",
                            "name": "二码不定胆"
                        }
                    }
                }
            },
            "qw": {
                "lhh": {
                    "title": "龙虎斗",
                    "method": {
                        "bs": {
                            "desc": "百十",
                            "num": "百十|5-6|two",
                            "name": "百十龙虎斗"
                        },
                        "bg": {
                            "desc": "百个",
                            "num": "百个|5-6|two",
                            "name": "百个龙虎斗"
                        },
                        "sg": {
                            "desc": "十个",
                            "num": "十个|5-6|two",
                            "name": "十个龙虎斗"
                        }
                    }
                },
                "xt": {
                    "title": "形态",
                    "method": {
                        "xt": {
                            "desc": "形态",
                            "num": "形态|8-12|two",
                            "name": "形态"
                        }
                    }
                }
            }
        }
    },

    "BJPK10": {
        "ltTab": {
            "cq1": "猜冠军",
            "cq2": "猜前二",
            "cq3": "猜前三",
            "cq4": "猜前四",
            "cq5": "猜前五",
            "dwd": "定位胆",
            "dx": "大小",
            "hz": "和值",
            "ds": "单双",
            "lh": "龙虎"
        },
        "ltMethod": {
            "q2": {
                "hz": {
                    "title": "冠亚和值",
                    "method": {
                        "he": {
                            "desc": "冠亚和值",
                            "num": "",
                            "name": "冠亚和值"
                        }
                    }
                }
            },
            "cq1": {
                "cq1": {
                    "title": "猜冠军",
                    "method": {
                        "cq1": {
                            "desc": "猜冠军",
                            "num": "冠军|1-10|all",
                            "name": "猜冠军"
                        }
                    }
                }
            },
            "cq2": {
                "cq2": {
                    "title": "猜前二",
                    "method": {
                        "cq2": {
                            "desc": "猜前二",
                            "num": "冠军,第二名|1-10|all",
                            "name": "猜前二"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|2",
                            "name": "猜前二单式"
                        }
                    }
                }
            },
            "cq3": {
                "cq3": {
                    "title": "猜前三",
                    "method": {
                        "cq3": {
                            "desc": "猜前三",
                            "num": "冠军,第二名,第三名|1-10|all",
                            "name": "猜前三"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|3",
                            "name": "猜前三单式"
                        }
                    }
                }
            },
            "cq4": {
                "cq4": {
                    "title": "猜前四",
                    "method": {
                        "cq4": {
                            "desc": "猜前四",
                            "num": "冠军,第二名,第三名,第四名|1-10|all",
                            "name": "猜前四"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|4",
                            "name": "猜前四单式"
                        }
                    }
                }
            },
            "cq5": {
                "cq5": {
                    "title": "猜前五",
                    "method": {
                        "cq5": {
                            "desc": "猜前五",
                            "num": "冠军,第二名,第三名,第四名,第五名|1-10|all",
                            "name": "猜前五"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|5",
                            "name": "猜前五单式"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "q5": {
                            "desc": "前五定位胆",
                            "num": "冠军,第二名,第三名,第四名,第五名,所有位置|1-10|all",
                            "name": "前五定位胆"
                        },
                        "h5": {
                            "desc": "后五定位胆",
                            "num": "第六名,第七名,第八名,第九名,第十名,所有位置|1-10|all",
                            "name": "后五定位胆"
                        }
                    }
                }
            },
            "dx": {
                "dx": {
                    "title": "大小",
                    "method": {
                        "d1": {
                            "desc": "冠军",
                            "num": "冠军|0-1|two",
                            "name": "大小冠军"
                        },
                        "d2": {
                            "desc": "第二名",
                            "num": "第二名|0-1|two",
                            "name": "大小第二名"
                        },
                        "d3": {
                            "desc": "第三名",
                            "num": "第三名|0-1|two",
                            "name": "大小第三名"
                        },
                        "d4": {
                            "desc": "第四名",
                            "num": "第四名|0-1|two",
                            "name": "大小第四名"
                        },
                        "d5": {
                            "desc": "第五名",
                            "num": "第五名|0-1|two",
                            "name": "大小第五名"
                        },
                        "q2": {
                            "desc": "冠亚和值",
                            "num": "冠亚和值|0-1|two",
                            "name": "冠亚和值"
                        }
                    }
                }
            },
            "hz": {
                "hz": {
                    "title": "和值",
                    "method": {
                        "q2": {
                            "desc": "冠亚和值",
                            "num": "和值|3-19|",
                            "name": "冠亚和值"
                        },
                        "q3": {
                            "desc": "前三和值",
                            "num": "和值|6-27|",
                            "name": "前三和值"
                        }
                    }
                }
            },
            "ds": {
                "ds": {
                    "title": "单双",
                    "method": {
                        "d1": {
                            "desc": "冠军",
                            "num": "冠军|2-3|two",
                            "name": "单双冠军"
                        },
                        "d2": {
                            "desc": "第二名",
                            "num": "第二名|2-3|two",
                            "name": "单双第二名"
                        },
                        "d3": {
                            "desc": "第三名",
                            "num": "第三名|2-3|two",
                            "name": "单双第三名"
                        },
                        "d4": {
                            "desc": "第四名",
                            "num": "第四名|2-3|two",
                            "name": "单双第四名"
                        },
                        "d5": {
                            "desc": "第五名",
                            "num": "第五名|2-3|two",
                            "name": "单双第五名"
                        },
                        "q2": {
                            "desc": "冠亚和值",
                            "num": "冠亚和值|2-3|two",
                            "name": "冠亚和值"
                        }
                    }
                }
            },
            "lh": {
                "lh": {
                    "title": "龙虎",
                    "method": {
                        "1v10": {
                            "desc": "1v10",
                            "num": "1v10|5-6|two",
                            "name": "龙虎1v10"
                        },
                        "2v9": {
                            "desc": "2v9",
                            "num": "2v9|5-6|two",
                            "name": "龙虎2v9"
                        },
                        "3v8": {
                            "desc": "3v8",
                            "num": "3v8|5-6|two",
                            "name": "龙虎3v8"
                        },
                        "4v7": {
                            "desc": "4v7",
                            "num": "4v7|5-6|two",
                            "name": "龙虎4v7"
                        },
                        "5v6": {
                            "desc": "5v6",
                            "num": "5v6|5-6|two",
                            "name": "龙虎5v6"
                        }
                    }
                }
            }
        }
    },
    "XGPK10": {
        "ltTab": {
            "cq1": "猜冠军",
            "cq2": "猜前二",
            "cq3": "猜前三",
            "cq4": "猜前四",
            "cq5": "猜前五",
            "dwd": "定位胆",
            "dx": "大小",
            "hz": "和值",
            "ds": "单双",
            "lh": "龙虎"
        },
        "ltMethod": {
            "q2": {
                "hz": {
                    "title": "冠亚和值",
                    "method": {
                        "he": {
                            "desc": "冠亚和值",
                            "num": "",
                            "name": "冠亚和值"
                        }
                    }
                }
            },
            "cq1": {
                "cq1": {
                    "title": "猜冠军",
                    "method": {
                        "cq1": {
                            "desc": "猜冠军",
                            "num": "冠军|1-10|all",
                            "name": "猜冠军"
                        }
                    }
                }
            },
            "cq2": {
                "cq2": {
                    "title": "猜前二",
                    "method": {
                        "cq2": {
                            "desc": "猜前二",
                            "num": "冠军,第二名|1-10|all",
                            "name": "猜前二"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|2",
                            "name": "猜前二单式"
                        }
                    }
                }
            },
            "cq3": {
                "cq3": {
                    "title": "猜前三",
                    "method": {
                        "cq3": {
                            "desc": "猜前三",
                            "num": "冠军,第二名,第三名|1-10|all",
                            "name": "猜前三"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|3",
                            "name": "猜前三单式"
                        }
                    }
                }
            },
            "cq4": {
                "cq4": {
                    "title": "猜前四",
                    "method": {
                        "cq4": {
                            "desc": "猜前四",
                            "num": "冠军,第二名,第三名,第四名|1-10|all",
                            "name": "猜前四"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|4",
                            "name": "猜前四单式"
                        }
                    }
                }
            },
            "cq5": {
                "cq5": {
                    "title": "猜前五",
                    "method": {
                        "cq5": {
                            "desc": "猜前五",
                            "num": "冠军,第二名,第三名,第四名,第五名|1-10|all",
                            "name": "猜前五"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|5",
                            "name": "猜前五单式"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "q5": {
                            "desc": "前五定位胆",
                            "num": "冠军,第二名,第三名,第四名,第五名,所有位置|1-10|all",
                            "name": "前五定位胆"
                        },
                        "h5": {
                            "desc": "后五定位胆",
                            "num": "第六名,第七名,第八名,第九名,第十名,所有位置|1-10|all",
                            "name": "后五定位胆"
                        }
                    }
                }
            },
            "dx": {
                "dx": {
                    "title": "大小",
                    "method": {
                        "d1": {
                            "desc": "冠军",
                            "num": "冠军|0-1|two",
                            "name": "大小冠军"
                        },
                        "d2": {
                            "desc": "第二名",
                            "num": "第二名|0-1|two",
                            "name": "大小第二名"
                        },
                        "d3": {
                            "desc": "第三名",
                            "num": "第三名|0-1|two",
                            "name": "大小第三名"
                        },
                        "d4": {
                            "desc": "第四名",
                            "num": "第四名|0-1|two",
                            "name": "大小第四名"
                        },
                        "d5": {
                            "desc": "第五名",
                            "num": "第五名|0-1|two",
                            "name": "大小第五名"
                        },
                        "q2": {
                            "desc": "冠亚和值",
                            "num": "冠亚和值|0-1|two",
                            "name": "冠亚和值"
                        }
                    }
                }
            },
            "hz": {
                "hz": {
                    "title": "和值",
                    "method": {
                        "q2": {
                            "desc": "冠亚和值",
                            "num": "和值|3-19|",
                            "name": "冠亚和值"
                        },
                        "q3": {
                            "desc": "前三和值",
                            "num": "和值|6-27|",
                            "name": "前三和值"
                        }
                    }
                }
            },
            "ds": {
                "ds": {
                    "title": "单双",
                    "method": {
                        "d1": {
                            "desc": "冠军",
                            "num": "冠军|2-3|two",
                            "name": "单双冠军"
                        },
                        "d2": {
                            "desc": "第二名",
                            "num": "第二名|2-3|two",
                            "name": "单双第二名"
                        },
                        "d3": {
                            "desc": "第三名",
                            "num": "第三名|2-3|two",
                            "name": "单双第三名"
                        },
                        "d4": {
                            "desc": "第四名",
                            "num": "第四名|2-3|two",
                            "name": "单双第四名"
                        },
                        "d5": {
                            "desc": "第五名",
                            "num": "第五名|2-3|two",
                            "name": "单双第五名"
                        },
                        "q2": {
                            "desc": "冠亚和值",
                            "num": "冠亚和值|2-3|two",
                            "name": "冠亚和值"
                        }
                    }
                }
            },
            "lh": {
                "lh": {
                    "title": "龙虎",
                    "method": {
                        "1v10": {
                            "desc": "1v10",
                            "num": "1v10|5-6|two",
                            "name": "龙虎1v10"
                        },
                        "2v9": {
                            "desc": "2v9",
                            "num": "2v9|5-6|two",
                            "name": "龙虎2v9"
                        },
                        "3v8": {
                            "desc": "3v8",
                            "num": "3v8|5-6|two",
                            "name": "龙虎3v8"
                        },
                        "4v7": {
                            "desc": "4v7",
                            "num": "4v7|5-6|two",
                            "name": "龙虎4v7"
                        },
                        "5v6": {
                            "desc": "5v6",
                            "num": "5v6|5-6|two",
                            "name": "龙虎5v6"
                        }
                    }
                }
            }
        }
    },
    "MCPK10": {
        "ltTab": {
            "cq1": "猜冠军",
            "cq2": "猜前二",
            "cq3": "猜前三",
            "cq4": "猜前四",
            "cq5": "猜前五",
            "dwd": "定位胆",
            "dx": "大小",
            "hz": "和值",
            "ds": "单双",
            "lh": "龙虎"
        },
        "ltMethod": {
            "q2": {
                "hz": {
                    "title": "冠亚和值",
                    "method": {
                        "he": {
                            "desc": "冠亚和值",
                            "num": "",
                            "name": "冠亚和值"
                        }
                    }
                }
            },
            "cq1": {
                "cq1": {
                    "title": "猜冠军",
                    "method": {
                        "cq1": {
                            "desc": "猜冠军",
                            "num": "冠军|1-10|all",
                            "name": "猜冠军"
                        }
                    }
                }
            },
            "cq2": {
                "cq2": {
                    "title": "猜前二",
                    "method": {
                        "cq2": {
                            "desc": "猜前二",
                            "num": "冠军,第二名|1-10|all",
                            "name": "猜前二"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|2",
                            "name": "猜前二单式"
                        }
                    }
                }
            },
            "cq3": {
                "cq3": {
                    "title": "猜前三",
                    "method": {
                        "cq3": {
                            "desc": "猜前三",
                            "num": "冠军,第二名,第三名|1-10|all",
                            "name": "猜前三"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|3",
                            "name": "猜前三单式"
                        }
                    }
                }
            },
            "cq4": {
                "cq4": {
                    "title": "猜前四",
                    "method": {
                        "cq4": {
                            "desc": "猜前四",
                            "num": "冠军,第二名,第三名,第四名|1-10|all",
                            "name": "猜前四"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|4",
                            "name": "猜前四单式"
                        }
                    }
                }
            },
            "cq5": {
                "cq5": {
                    "title": "猜前五",
                    "method": {
                        "cq5": {
                            "desc": "猜前五",
                            "num": "冠军,第二名,第三名,第四名,第五名|1-10|all",
                            "name": "猜前五"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "input|pkzux|5",
                            "name": "猜前五单式"
                        }
                    }
                }
            },
            "dwd": {
                "dwd": {
                    "title": "定位胆",
                    "method": {
                        "q5": {
                            "desc": "前五定位胆",
                            "num": "冠军,第二名,第三名,第四名,第五名,所有位置|1-10|all",
                            "name": "前五定位胆"
                        },
                        "h5": {
                            "desc": "后五定位胆",
                            "num": "第六名,第七名,第八名,第九名,第十名,所有位置|1-10|all",
                            "name": "后五定位胆"
                        }
                    }
                }
            },
            "dx": {
                "dx": {
                    "title": "大小",
                    "method": {
                        "d1": {
                            "desc": "冠军",
                            "num": "冠军|0-1|two",
                            "name": "大小冠军"
                        },
                        "d2": {
                            "desc": "第二名",
                            "num": "第二名|0-1|two",
                            "name": "大小第二名"
                        },
                        "d3": {
                            "desc": "第三名",
                            "num": "第三名|0-1|two",
                            "name": "大小第三名"
                        },
                        "d4": {
                            "desc": "第四名",
                            "num": "第四名|0-1|two",
                            "name": "大小第四名"
                        },
                        "d5": {
                            "desc": "第五名",
                            "num": "第五名|0-1|two",
                            "name": "大小第五名"
                        },
                        "q2": {
                            "desc": "冠亚和值",
                            "num": "冠亚和值|0-1|two",
                            "name": "冠亚和值"
                        }
                    }
                }
            },
            "hz": {
                "hz": {
                    "title": "和值",
                    "method": {
                        "q2": {
                            "desc": "冠亚和值",
                            "num": "和值|3-19|",
                            "name": "冠亚和值"
                        },
                        "q3": {
                            "desc": "前三和值",
                            "num": "和值|6-27|",
                            "name": "前三和值"
                        }
                    }
                }
            },
            "ds": {
                "ds": {
                    "title": "单双",
                    "method": {
                        "d1": {
                            "desc": "冠军",
                            "num": "冠军|2-3|two",
                            "name": "单双冠军"
                        },
                        "d2": {
                            "desc": "第二名",
                            "num": "第二名|2-3|two",
                            "name": "单双第二名"
                        },
                        "d3": {
                            "desc": "第三名",
                            "num": "第三名|2-3|two",
                            "name": "单双第三名"
                        },
                        "d4": {
                            "desc": "第四名",
                            "num": "第四名|2-3|two",
                            "name": "单双第四名"
                        },
                        "d5": {
                            "desc": "第五名",
                            "num": "第五名|2-3|two",
                            "name": "单双第五名"
                        },
                        "q2": {
                            "desc": "冠亚和值",
                            "num": "冠亚和值|2-3|two",
                            "name": "冠亚和值"
                        }
                    }
                }
            },
            "lh": {
                "lh": {
                    "title": "龙虎",
                    "method": {
                        "1v10": {
                            "desc": "1v10",
                            "num": "1v10|5-6|two",
                            "name": "龙虎1v10"
                        },
                        "2v9": {
                            "desc": "2v9",
                            "num": "2v9|5-6|two",
                            "name": "龙虎2v9"
                        },
                        "3v8": {
                            "desc": "3v8",
                            "num": "3v8|5-6|two",
                            "name": "龙虎3v8"
                        },
                        "4v7": {
                            "desc": "4v7",
                            "num": "4v7|5-6|two",
                            "name": "龙虎4v7"
                        },
                        "5v6": {
                            "desc": "5v6",
                            "num": "5v6|5-6|two",
                            "name": "龙虎5v6"
                        }
                    }
                }
            }
        }
    },

    "JSK3": {
        "ltTab": {
            "dxds": "大小单双",
            "hz": "和值",
            "th3": "三同号",
            "bth3": "三不同号",
            "th2": "二同号",
            "bth2": "二不同号",
            "cygh": "猜一个号"
        },
        "ltMethod": {
            "dxds": {
                "dxds": {
                    "title": "大小单双",
                    "method": {
                        "dxds": {
                            "desc": "大小单双",
                            "num": "和值|0-3|two",
                            "name": "大小单双"
                        }
                    }
                }
            },
            "hz": {
                "hz": {
                    "title": "和值",
                    "method": {
                        "hz": {
                            "desc": "和值",
                            "num": "和值|3-18|",
                            "name": "和值 "
                        }
                    }
                }
            },
            "th3": {
                "th3": {
                    "title": "三同号",
                    "method": {
                        "th3dx": {
                            "desc": "单选",
                            "num": "单选|1-6|",
                            "name": "三同号单选"
                        },
                        "th3tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三同号通选"
                        }
                    }
                }
            },
            "bth3": {
                "bth3": {
                    "title": "三不同号",
                    "method": {
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "三不同号单选"
                        },
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "三不同号复选"
                        }

                    }
                },
                "lh3": {
                    "title": "三连号&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选|1-4|",
                            "name": "三连号单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三连号通选"
                        }

                    }
                },
                "bs": {
                    "title": "半顺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "半顺单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "半顺通选"
                        },

                    }
                },
                "z6": {
                    "title": "杂六&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "杂六单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "杂六通选"
                        },

                    }
                }
            },
            "th2": {
                "th2dx": {
                    "title": "二同号单选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "同号,不同号|1-6|",
                            "name": "二同号单选复选"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "单选||",
                            "name": "二同号单选单选"
                        }
                    }
                },
                "th2fx": {
                    "title": "二同号复选",
                    "method": {
                        "fx": {
                            "desc": "二同号复选",
                            "num": "二同号复选|1-6|",
                            "name": "二同号复选"
                        }
                    }
                }
            },

            "bth2": {
                "bth2": {
                    "title": "二不同号",
                    "method": {
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "二不同号复选"
                        },
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "二不同号单选"
                        }
                    }
                }
            },
            "cygh": {
                "cygh": {
                    "title": "猜一个号",
                    "method": {
                        "cygh": {
                            "desc": "猜一个号",
                            "num": "猜一个号|1-6|",
                            "name": "猜一个号"
                        },
                    }
                }
            },
        }
    },
    "HNK3": {
        "ltTab": {
            "dxds": "大小单双",
            "hz": "和值",
            "th3": "三同号",
            "bth3": "三不同号",
            "th2": "二同号",
            "bth2": "二不同号",
            "cygh": "猜一个号"
        },
        "ltMethod": {
            "dxds": {
                "dxds": {
                    "title": "大小单双",
                    "method": {
                        "dxds": {
                            "desc": "大小单双",
                            "num": "和值|0-3|two",
                            "name": "大小单双"
                        }
                    }
                }
            },
            "hz": {
                "hz": {
                    "title": "和值",
                    "method": {
                        "hz": {
                            "desc": "和值",
                            "num": "和值|3-18|",
                            "name": "和值 "
                        }
                    }
                }
            },
            "th3": {
                "th3": {
                    "title": "三同号",
                    "method": {
                        "th3dx": {
                            "desc": "单选",
                            "num": "单选|1-6|",
                            "name": "三同号单选"
                        },
                        "th3tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三同号通选"
                        }
                    }
                }
            },
            "bth3": {
                "bth3": {
                    "title": "三不同号",
                    "method": {
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "三不同号单选"
                        },
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "三不同号复选"
                        }

                    }
                },
                "lh3": {
                    "title": "三连号&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选|1-4|",
                            "name": "三连号单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三连号通选"
                        }

                    }
                },
                "bs": {
                    "title": "半顺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "半顺单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "半顺通选"
                        },

                    }
                },
                "z6": {
                    "title": "杂六&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "杂六单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "杂六通选"
                        },

                    }
                }
            },
            "th2": {
                "th2dx": {
                    "title": "二同号单选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "同号,不同号|1-6|",
                            "name": "二同号单选复选"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "单选||",
                            "name": "二同号单选单选"
                        }
                    }
                },
                "th2fx": {
                    "title": "二同号复选",
                    "method": {
                        "fx": {
                            "desc": "二同号复选",
                            "num": "二同号复选|1-6|",
                            "name": "二同号复选"
                        }
                    }
                }
            },

            "bth2": {
                "bth2": {
                    "title": "二不同号",
                    "method": {
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "二不同号复选"
                        },
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "二不同号单选"
                        }
                    }
                }
            },
            "cygh": {
                "cygh": {
                    "title": "猜一个号",
                    "method": {
                        "cygh": {
                            "desc": "猜一个号",
                            "num": "猜一个号|1-6|",
                            "name": "猜一个号"
                        },
                    }
                }
            },
        }
    },
    "MCK3": {
        "ltTab": {
            "dxds": "大小单双",
            "hz": "和值",
            "th3": "三同号",
            "bth3": "三不同号",
            "th2": "二同号",
            "bth2": "二不同号",
            "cygh": "猜一个号"
        },
        "ltMethod": {
            "dxds": {
                "dxds": {
                    "title": "大小单双",
                    "method": {
                        "dxds": {
                            "desc": "大小单双",
                            "num": "和值|0-3|two",
                            "name": "大小单双"
                        }
                    }
                }
            },
            "hz": {
                "hz": {
                    "title": "和值",
                    "method": {
                        "hz": {
                            "desc": "和值",
                            "num": "和值|3-18|",
                            "name": "和值 "
                        }
                    }
                }
            },
            "th3": {
                "th3": {
                    "title": "三同号",
                    "method": {
                        "th3dx": {
                            "desc": "单选",
                            "num": "单选|1-6|",
                            "name": "三同号单选"
                        },
                        "th3tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三同号通选"
                        }
                    }
                }
            },
            "bth3": {
                "bth3": {
                    "title": "三不同号",
                    "method": {
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "三不同号单选"
                        },
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "三不同号复选"
                        }

                    }
                },
                "lh3": {
                    "title": "三连号&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选|1-4|",
                            "name": "三连号单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三连号通选"
                        }

                    }
                },
                "bs": {
                    "title": "半顺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "半顺单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "半顺通选"
                        },

                    }
                },
                "z6": {
                    "title": "杂六&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "杂六单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "杂六通选"
                        },

                    }
                }
            },
            "th2": {
                "th2dx": {
                    "title": "二同号单选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "同号,不同号|1-6|",
                            "name": "二同号单选复选"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "单选||",
                            "name": "二同号单选单选"
                        }
                    }
                },
                "th2fx": {
                    "title": "二同号复选",
                    "method": {
                        "fx": {
                            "desc": "二同号复选",
                            "num": "二同号复选|1-6|",
                            "name": "二同号复选"
                        }
                    }
                }
            },

            "bth2": {
                "bth2": {
                    "title": "二不同号",
                    "method": {
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "二不同号复选"
                        },
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "二不同号单选"
                        }
                    }
                }
            },
            "cygh": {
                "cygh": {
                    "title": "猜一个号",
                    "method": {
                        "cygh": {
                            "desc": "猜一个号",
                            "num": "猜一个号|1-6|",
                            "name": "猜一个号"
                        },
                    }
                }
            },
        }
    },
    "HBK3": {
        "ltTab": {
            "dxds": "大小单双",
            "hz": "和值",
            "th3": "三同号",
            "bth3": "三不同号",
            "th2": "二同号",
            "bth2": "二不同号",
            "cygh": "猜一个号"
        },
        "ltMethod": {
            "dxds": {
                "dxds": {
                    "title": "大小单双",
                    "method": {
                        "dxds": {
                            "desc": "大小单双",
                            "num": "和值|0-3|two",
                            "name": "大小单双"
                        }
                    }
                }
            },
            "hz": {
                "hz": {
                    "title": "和值",
                    "method": {
                        "hz": {
                            "desc": "和值",
                            "num": "和值|3-18|",
                            "name": "和值 "
                        }
                    }
                }
            },
            "th3": {
                "th3": {
                    "title": "三同号",
                    "method": {
                        "th3dx": {
                            "desc": "单选",
                            "num": "单选|1-6|",
                            "name": "三同号单选"
                        },
                        "th3tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三同号通选"
                        }
                    }
                }
            },
            "bth3": {
                "bth3": {
                    "title": "三不同号",
                    "method": {
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "三不同号单选"
                        },
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "三不同号复选"
                        }

                    }
                },
                "lh3": {
                    "title": "三连号&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选|1-4|",
                            "name": "三连号单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三连号通选"
                        }

                    }
                },
                "bs": {
                    "title": "半顺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "半顺单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "半顺通选"
                        },

                    }
                },
                "z6": {
                    "title": "杂六&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "杂六单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "杂六通选"
                        },

                    }
                }
            },
            "th2": {
                "th2dx": {
                    "title": "二同号单选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "同号,不同号|1-6|",
                            "name": "二同号单选复选"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "单选||",
                            "name": "二同号单选单选"
                        }
                    }
                },
                "th2fx": {
                    "title": "二同号复选",
                    "method": {
                        "fx": {
                            "desc": "二同号复选",
                            "num": "二同号复选|1-6|",
                            "name": "二同号复选"
                        }
                    }
                }
            },

            "bth2": {
                "bth2": {
                    "title": "二不同号",
                    "method": {
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "二不同号复选"
                        },
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "二不同号单选"
                        }
                    }
                }
            },
            "cygh": {
                "cygh": {
                    "title": "猜一个号",
                    "method": {
                        "cygh": {
                            "desc": "猜一个号",
                            "num": "猜一个号|1-6|",
                            "name": "猜一个号"
                        },
                    }
                }
            },
        }
    },
    "JLK3": {
        "ltTab": {
            "dxds": "大小单双",
            "hz": "和值",
            "th3": "三同号",
            "bth3": "三不同号",
            "th2": "二同号",
            "bth2": "二不同号",
            "cygh": "猜一个号"
        },
        "ltMethod": {
            "dxds": {
                "dxds": {
                    "title": "大小单双",
                    "method": {
                        "dxds": {
                            "desc": "大小单双",
                            "num": "和值|0-3|two",
                            "name": "大小单双"
                        }
                    }
                }
            },
            "hz": {
                "hz": {
                    "title": "和值",
                    "method": {
                        "hz": {
                            "desc": "和值",
                            "num": "和值|3-18|",
                            "name": "和值 "
                        }
                    }
                }
            },
            "th3": {
                "th3": {
                    "title": "三同号",
                    "method": {
                        "th3dx": {
                            "desc": "单选",
                            "num": "单选|1-6|",
                            "name": "三同号单选"
                        },
                        "th3tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三同号通选"
                        }
                    }
                }
            },
            "bth3": {
                "bth3": {
                    "title": "三不同号",
                    "method": {
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "三不同号单选"
                        },
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "三不同号复选"
                        }

                    }
                },
                "lh3": {
                    "title": "三连号&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选|1-4|",
                            "name": "三连号单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三连号通选"
                        }

                    }
                },
                "bs": {
                    "title": "半顺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "半顺单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "半顺通选"
                        },

                    }
                },
                "z6": {
                    "title": "杂六&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "杂六单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "杂六通选"
                        },

                    }
                }
            },
            "th2": {
                "th2dx": {
                    "title": "二同号单选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "同号,不同号|1-6|",
                            "name": "二同号单选复选"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "单选||",
                            "name": "二同号单选单选"
                        }
                    }
                },
                "th2fx": {
                    "title": "二同号复选",
                    "method": {
                        "fx": {
                            "desc": "二同号复选",
                            "num": "二同号复选|1-6|",
                            "name": "二同号复选"
                        }
                    }
                }
            },

            "bth2": {
                "bth2": {
                    "title": "二不同号",
                    "method": {
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "二不同号复选"
                        },
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "二不同号单选"
                        }
                    }
                }
            },
            "cygh": {
                "cygh": {
                    "title": "猜一个号",
                    "method": {
                        "cygh": {
                            "desc": "猜一个号",
                            "num": "猜一个号|1-6|",
                            "name": "猜一个号"
                        },
                    }
                }
            },
        }
    },
    "AHK3": {
        "ltTab": {
            "dxds": "大小单双",
            "hz": "和值",
            "th3": "三同号",
            "bth3": "三不同号",
            "th2": "二同号",
            "bth2": "二不同号",
            "cygh": "猜一个号"
        },
        "ltMethod": {
            "dxds": {
                "dxds": {
                    "title": "大小单双",
                    "method": {
                        "dxds": {
                            "desc": "大小单双",
                            "num": "和值|0-3|two",
                            "name": "大小单双"
                        }
                    }
                }
            },
            "hz": {
                "hz": {
                    "title": "和值",
                    "method": {
                        "hz": {
                            "desc": "和值",
                            "num": "和值|3-18|",
                            "name": "和值 "
                        }
                    }
                }
            },
            "th3": {
                "th3": {
                    "title": "三同号",
                    "method": {
                        "th3dx": {
                            "desc": "单选",
                            "num": "单选|1-6|",
                            "name": "三同号单选"
                        },
                        "th3tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三同号通选"
                        }
                    }
                }
            },
            "bth3": {
                "bth3": {
                    "title": "三不同号",
                    "method": {
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "三不同号单选"
                        },
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "三不同号复选"
                        }

                    }
                },
                "lh3": {
                    "title": "三连号&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选|1-4|",
                            "name": "三连号单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "三连号通选"
                        }

                    }
                },
                "bs": {
                    "title": "半顺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "半顺单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "半顺通选"
                        },

                    }
                },
                "z6": {
                    "title": "杂六&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "method": {
                        "dx": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "杂六单选"
                        },
                        "tx": {
                            "desc": "通选",
                            "num": "通选||",
                            "name": "杂六通选"
                        },

                    }
                }
            },
            "th2": {
                "th2dx": {
                    "title": "二同号单选",
                    "method": {
                        "fs": {
                            "desc": "复式",
                            "num": "同号,不同号|1-6|",
                            "name": "二同号单选复选"
                        },
                        "ds": {
                            "desc": "单式",
                            "num": "单选||",
                            "name": "二同号单选单选"
                        }
                    }
                },
                "th2fx": {
                    "title": "二同号复选",
                    "method": {
                        "fx": {
                            "desc": "二同号复选",
                            "num": "二同号复选|1-6|",
                            "name": "二同号复选"
                        }
                    }
                }
            },

            "bth2": {
                "bth2": {
                    "title": "二不同号",
                    "method": {
                        "fs": {
                            "desc": "复选",
                            "num": "复选|1-6|",
                            "name": "二不同号复选"
                        },
                        "ds": {
                            "desc": "单选",
                            "num": "单选||",
                            "name": "二不同号单选"
                        }
                    }
                }
            },
            "cygh": {
                "cygh": {
                    "title": "猜一个号",
                    "method": {
                        "cygh": {
                            "desc": "猜一个号",
                            "num": "猜一个号|1-6|",
                            "name": "猜一个号"
                        },
                    }
                }
            },
        }
    },

    "XGLHC": {
        "ltTab": {
            "tm": "特码",
            "zt1m": "正特一码",
            "zt1x": "正特一肖",   
            "ztws": "正特尾数",            
            "lx": "连肖",
            "lm": "连码",
            "hzdxds": "总和大小单双",
        },
        "ltMethod": {
            "tm": {
                "tm": {
                    "title": "特码",
                    "method": {
                        "zx": {
                            "desc": "特码直选",
                            "num": "tm_zx||",
                            "name": "特码直选"
                        },
                        "sx": {
                            "desc": "特码生肖",
                            "num": "tm_sx||",
                            "name": "特码生肖"
                        },
                        "sb": {
                            "desc": "特码色波",
                            "num": "tm_sb||",
                            "name": "特码色波"
                        },
                        "dxds": {
                            "desc": "大小单双",
                            "num": "tm_dxds||",
                            "name": "特码大小单双"
                        },
                        "ws": {
                            "desc": "特码尾数",
                            "num": "tm_ws||",
                            "name": "特码尾数"
                        }
                    }
                }
            },
            "zt1m": {
                "zt1m": {
                    "title": "正特一码",
                    "method": {
                        "zt1m": {
                            "desc": "正特一码",
                            "num": "zt1m_zt1m||",
                            "name": "正特一码"
                        }
                    }
                }
            },
            "zt1x": {
                "zt1x": {
                    "title": "正特一肖",
                    "method": {
                        "zt1x": {
                            "desc": "正特一肖",
                            "num": "zt1x_zt1x||",
                            "name": "正特一肖"
                        }
                    }
                }
            },
            "ztws": {
                "ztws": {
                    "title": "正特尾数",
                    "method": {
                        "ztws": {
                            "desc": "正特尾数",
                            "num": "ztws_ztws||",
                            "name": "正特尾数"
                        }
                    }
                }
            },
            "lx": {
                "lx": {
                    "title": "连肖",
                    "method": {
                        "2lx": {
                            "desc": "二连肖",
                            "num": "lx_2lx||",
                            "name": "二连肖"
                        },
                        "3lx": {
                            "desc": "三连肖",
                            "num": "lx_3lx||",
                            "name": "三连肖"
                        },
                        "4lx": {
                            "desc": "四连肖",
                            "num": "lx_4lx||",
                            "name": "四连肖"
                        }
                    }
                }
            },
            "lm": {
                "lm": {
                    "title": "连码",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "lm_2z2||",
                            "name": "二中二"
                        },
                        "3z2": {
                            "desc": "三中二",
                            "num": "lm_3z2||",
                            "name": "三中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "lm_3z3||",
                            "name": "三中三"
                        }
                    }
                }
            },
            "hzdxds": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "hzdxds": {
                            "desc": "总和大小单双",
                            "num": "hzdxds_hzdxds||",
                            "name": "总和大小单双"
                        }
                    }
                }
            }
        }
    },
    "JSLHC": {
        "ltTab": {
            "tm": "特码",
            "zt1m": "正特一码",
            "zt1x": "正特一肖",   
            "ztws": "正特尾数",            
            "lx": "连肖",
            "lm": "连码",
            "hzdxds": "总和大小单双",
        },
        "ltMethod": {
            "tm": {
                "tm": {
                    "title": "特码",
                    "method": {
                        "zx": {
                            "desc": "特码直选",
                            "num": "tm_zx||",
                            "name": "特码直选"
                        },
                        "sx": {
                            "desc": "特码生肖",
                            "num": "tm_sx||",
                            "name": "特码生肖"
                        },
                        "sb": {
                            "desc": "特码色波",
                            "num": "tm_sb||",
                            "name": "特码色波"
                        },
                        "dxds": {
                            "desc": "大小单双",
                            "num": "tm_dxds||",
                            "name": "特码大小单双"
                        },
                        "ws": {
                            "desc": "特码尾数",
                            "num": "tm_ws||",
                            "name": "特码尾数"
                        }
                    }
                }
            },
            "zt1m": {
                "zt1m": {
                    "title": "正特一码",
                    "method": {
                        "zt1m": {
                            "desc": "正特一码",
                            "num": "zt1m_zt1m||",
                            "name": "正特一码"
                        }
                    }
                }
            },
            "zt1x": {
                "zt1x": {
                    "title": "正特一肖",
                    "method": {
                        "zt1x": {
                            "desc": "正特一肖",
                            "num": "zt1x_zt1x||",
                            "name": "正特一肖"
                        }
                    }
                }
            },
            "ztws": {
                "ztws": {
                    "title": "正特尾数",
                    "method": {
                        "ztws": {
                            "desc": "正特尾数",
                            "num": "ztws_ztws||",
                            "name": "正特尾数"
                        }
                    }
                }
            },
            "lx": {
                "lx": {
                    "title": "连肖",
                    "method": {
                        "2lx": {
                            "desc": "二连肖",
                            "num": "lx_2lx||",
                            "name": "二连肖"
                        },
                        "3lx": {
                            "desc": "三连肖",
                            "num": "lx_3lx||",
                            "name": "三连肖"
                        },
                        "4lx": {
                            "desc": "四连肖",
                            "num": "lx_4lx||",
                            "name": "四连肖"
                        }
                    }
                }
            },
            "lm": {
                "lm": {
                    "title": "连码",
                    "method": {
                        "2z2": {
                            "desc": "二中二",
                            "num": "lm_2z2||",
                            "name": "二中二"
                        },
                        "3z2": {
                            "desc": "三中二",
                            "num": "lm_3z2||",
                            "name": "三中二"
                        },
                        "3z3": {
                            "desc": "三中三",
                            "num": "lm_3z3||",
                            "name": "三中三"
                        }
                    }
                }
            },
            "hzdxds": {
                "hzdxds": {
                    "title": "总和大小单双",
                    "method": {
                        "hzdxds": {
                            "desc": "总和大小单双",
                            "num": "hzdxds_hzdxds||",
                            "name": "总和大小单双"
                        }
                    }
                }
            }
        }
    },

    "BJKL8": {
        "ltTab": {
            "qw": "趣味",
            "rxx": "任选"
        },
        "ltMethod": {
            "qw": {
                "qw": {
                    "title": "趣味型",
                    "method": {
                        "jo": {
                            "desc": "奇偶盘",
                            "num": "奇和偶|4-6|two",
                            "name": "趣味奇偶盘"
                        },
                        "sx": {
                            "desc": "上下盘",
                            "num": "上中下|7-9|two",
                            "name": "趣味上下盘"
                        },
                        "hzdx": {
                            "desc": "和值大小",
                            "num": "大小|0-1|two",
                            "name": "趣味和值大小"
                        },
                        "hzds": {
                            "desc": "和值单双",
                            "num": "单双|2-3|two",
                            "name": "趣味和值单双"
                        },
                        "hzdxds": {
                            "desc": "和值大小单双",
                            "num": "全部|10-13|two",
                            "name": "趣味和值大小单双"
                        }
                    }
                }
            },
            "rxx": {
                "rxx": {
                    "title": "任选型",
                    "method": {
                        "rx1": {
                            "desc": "任选一",
                            "num": "上,下|1-40|",
                            "name": "任选型任选一"
                        },
                        "rx2": {
                            "desc": "任选二",
                            "num": "上,下|1-40|",
                            "name": "任选型任选二"
                        },
                        "rx3": {
                            "desc": "任选三",
                            "num": "上,下|1-40|",
                            "name": "任选型任选三"
                        },
                        "rx4": {
                            "desc": "任选四",
                            "num": "上,下|1-40|",
                            "name": "任选型任选四"
                        },
                        "rx5": {
                            "desc": "任选五",
                            "num": "上,下|1-40|",
                            "name": "任选型任选五"
                        },
                        "rx6": {
                            "desc": "任选六",
                            "num": "上,下|1-40|",
                            "name": "任选型任选六"
                        },
                        "rx7": {
                            "desc": "任选七",
                            "num": "上,下|1-40|",
                            "name": "任选型任选七"
                        }
                    }
                }
            }
        }
    }
};
LotteryTips = {
    "ssc": {
        "wx_zx_fs": {
            "title": "在万位、千位、百位、十位、个位上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在万位、千位、百位、十位、个位上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "wx_zx_ds": {
            "title": "手动输入或导入一个五位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个五位数号码，组合成一注。录入的号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "wx_zx_zh": {
            "title": "在万位、千位、百位、十位、个位上各选一个号码，组成1-5星的组合共5注。",
            "paraphrase": "在万位、千位、百位、十位、个位上各选一个号码，组成1-5星的组合共5注。所选号码的个位与开奖号码个位相同，即中1个五等奖；所选号码的个位、十位与开奖号码个位、十位相同，即中1个五等奖和1个四等奖；以此类推，最多中五个奖。"
        },
        "wx_zux_z120": {
            "title": "从0-9中任选5个号码组成一注。",
            "paraphrase": "从0-9中任选5个号码组成一注，所选号码与开奖号码数字相同，顺序不限，即为中奖。"
        },
        "wx_zux_z60": {
            "title": "从0-9中选择1个号码作为二重号；再从0-9中选择3个号码作为单号。",
            "paraphrase": "从0-9中选择1个号码作为二重号；再从0-9中选择3个号码作为单号。若所选择的二重号在开奖号码中出现了2次，单号各出现1次，即为中奖。"
        },
        "wx_zux_z30": {
            "title": "从0-9中选择2个号码作为二重号；再从0-9中选择1个号码作为单号。",
            "paraphrase": "从0-9中选择2个号码作为二重号；再从0-9中选择1个号码作为单号。若所选择的二重号在开奖号码中分别出现了2次，单号出现1次，即为中奖。"
        },
        "wx_zux_z20": {
            "title": "从0-9中选择1个号码作为三重号；再从0-9中选择2个号码作为单号。",
            "paraphrase": "从0-9中选择1个号码作为三重号；再从0-9中选择2个号码作为单号。若所选择的三重号在开奖号码中出现了3次，两个单号出现1次，即为中奖。"
        },
        "wx_zux_z10": {
            "title": "从0-9中选择1个号码作为三重号；再从0-9中选择1个号码作为二重号。",
            "paraphrase": "从0-9中选择1个号码作为三重号；再从0-9中选择1个号码作为二重号。若所选择的三重号在开奖号码中出现了3次，二重号出现了2次，即为中奖。"
        },
        "wx_zux_z5": {
            "title": "从0-9中选择1个号码作为四重号；再从0-9中选择1个号码作为单号。",
            "paraphrase": "从0-9中选择1个号码作为四重号；再从0-9中选择1个号码作为单号。若所选择的四重号在开奖号码中出现了4次，单号出现了1次，即为中奖。"
        },
        "sx_zx_fs": {
            "title": "在千位、百位、十位、个位上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在千位、百位、十位、个位上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "sx_zx_ds": {
            "title": "手动输入或导入一个四位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个四位数号码，组合成一注。录入的号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "sx_zx_zh": {
            "title": "在千位、百位、十位、个位上各选一个号码，组成1-4星的组合共4注。",
            "paraphrase": "在千位、百位、十位、个位上各选一个号码，组成1-4星的组合共4注。所选号码的个位与开奖号码个位相同，即中1个五等奖；所选号码的个位、十位与开奖号码个位、十位相同，即中1个四等奖和1个三等奖；以此类推，最多中四个奖。"
        },
        "sx_zux_z24": {
            "title": "从0-9中任选4个号码组成一注。",
            "paraphrase": "从0-9中任选4个号码组成一注，所选号码与开奖号码的千、百、十、个位数字相同，顺序不限，即为中奖。"
        },
        "sx_zux_z12": {
            "title": "从0-9中选择1个号码作为二重号；再从0-9中选择2个号码作为单号。",
            "paraphrase": "从0-9中选择1个号码作为二重号；再从0-9中选择2个号码作为单号。若所选的二重号在开奖号码的千、百、十、个位中出现了2次，两个单号各出现1次，即为中奖。"
        },
        "sx_zux_z6": {
            "title": "从0-9中选择2个号码作为二重号。",
            "paraphrase": "从0-9中选择2个号码作为二重号。若所选择的二重号在开奖号码的千、百、十、个位中分别出现了两次，即为中奖。"
        },
        "sx_zux_z4": {
            "title": "从0-9中选择1个号码作为三重号；再从0-9中选择1个号码作为单号。",
            "paraphrase": "从0-9中选择1个号码作为三重号；再从0-9中选择1个号码作为单号。若所选择的三重号在开奖号码的千、百、十、个位中出现了三次，单号出现了1次，即为中奖。"
        },
        "hsm_zx_fs": {
            "title": "在百位、十位、个位上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在百位、十位、个位上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "hsm_zx_ds": {
            "title": "手动输入或导入一个三位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个三位数号码，组合成一注。录入的号码与开奖号码的百位、十位、个位一致且顺序相同，即为中奖。"
        },
        "hsm_zx_hz": {
            "title": "从0-27中选择一个号码。",
            "paraphrase": "从0-27中选择一个号码，若开奖号码的百、十、个位相加之和，等于所选号码，即为中奖。"
        },
        "hsm_zx_kd": {
            "title": "从0-9中选择一个号码作为一注。",
            "paraphrase": "选择一个数值，若所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖。"
        },
        "hsm_zux_z3": {
            "title": "从0-9中选择2个号码组成两注。",
            "paraphrase": "从0-9中选择2个号码组成两注，所选号码与开奖号码的百、十、个位数字相同，顺序不限，即为中奖。"
        },
        "hsm_zux_z6": {
            "title": "从0-9中选择3个号码组成一注。",
            "paraphrase": "从0-9中选择3个号码组成一注，所选号码与开奖号码的百、十、个位数字相同，顺序不限，即为中奖。"
        },
        "hsm_zux_hh": {
            "title": "手动输入或导入号码，三个号码为一注。",
            "paraphrase": "手动输入或导入号码，三个号码为一注，对比开奖号码的百位、十位、个位，符合后三组三或组六的规则，均为中奖。"
        },
        "hsm_zux_hz": {
            "title": "从1-26中选择一个号码作为一注。",
            "paraphrase": "从1-26中选择一个号码作为一注，所选号码等于开奖号码百、十、个位数字（豹子号除外，如：333）相加之和，即为中奖。"
        },
        "hsm_zux_bd": {
            "title": "从0-9中选择一个号码作为一注。",
            "paraphrase": "从0-9中任选一个号码，开奖号码后三位任意1位号码与所选号码相同（不含豹子号），即为中奖。"
        },
        "qsm_zx_fs": {
            "title": "在万位、千位、百位上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在万位、千位、百位上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "qsm_zx_ds": {
            "title": "手动输入或导入一个三位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个三位数号码，组合成一注。录入的号码与开奖号码的万位、千位、百位一致且顺序相同，即为中奖。"
        },
        "qsm_zx_hz": {
            "title": "从0-27中选择一个号码。",
            "paraphrase": "从0-27中选择一个号码，若开奖号码的万、千、百位相加之和，等于所选号码，即为中奖。"
        },
        "qsm_zx_kd": {
            "title": "从0-9中选择一个号码。",
            "paraphrase": "选择一个数值，若所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖。"
        },
        "qsm_zux_z3": {
            "title": "从0-9中选择2个号码组成两注。",
            "paraphrase": "从0-9中选择2个号码组成两注，所选号码与开奖号码的万、千、百位数字相同，顺序不限，即为中奖。"
        },
        "qsm_zux_z6": {
            "title": "从0-9中选择3个号码组成一注。",
            "paraphrase": "从0-9中选择3个号码组成一注，所选号码与开奖号码的万、千、百位数字相同，顺序不限，即为中奖。"
        },
        "qsm_zux_hh": {
            "title": "手动输入或导入号码，三个号码为一注。",
            "paraphrase": "手动输入或导入号码，三个号码为一注，对比开奖号码的万位、千位、百位，符合前三组三或组六的规则，均为中奖。"
        },
        "qsm_zux_hz": {
            "title": "从1-26中选择一个号码作为一注。",
            "paraphrase": "从1-26中选择一个号码作为一注，所选号码等于开奖号码万、千、百位数字（豹子号除外，如：333）相加之和，即为中奖。"
        },
        "qsm_zux_bd": {
            "title": "从0-9中选择一个号码作为一注。",
            "paraphrase": "从0-9中任选一个号码，开奖号码前三位任意1位号码与所选号码相同（不含豹子号），即为中奖。"
        },
        "zsm_zx_fs": {
            "title": "在千位、百位、十位上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在千位、百位、十位上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "zsm_zx_ds": {
            "title": "手动输入或导入一个三位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个三位数号码，组合成一注。录入的号码与开奖号码的千位、百位、十位一致且顺序相同，即为中奖。"
        },
        "zsm_zx_hz": {
            "title": "从0-27中选择一个号码。",
            "paraphrase": "从0-27中选择一个号码，若开奖号码的千、百、十位相加之和，等于所选号码，即为中奖。"
        },
        "zsm_zx_kd": {
            "title": "从0-9中选择一个号码。",
            "paraphrase": "选择一个数值，若所选数值等于开奖号码的中3位最大与最小数字相减之差，即为中奖。"
        },
        "zsm_zux_z3": {
            "title": "从0-9中选择2个号码组成两注。",
            "paraphrase": "从0-9中选择2个号码组成两注，所选号码与开奖号码的千、百、十位数字相同，顺序不限，即为中奖。"
        },
        "zsm_zux_z6": {
            "title": "从0-9中选择3个号码组成一注。",
            "paraphrase": "从0-9中选择3个号码组成一注，所选号码与开奖号码的千、百、十位数字相同，顺序不限，即为中奖。"
        },
        "zsm_zux_hh": {
            "title": "手动输入或导入号码，三个号码为一注。",
            "paraphrase": "手动输入或导入号码，三个号码为一注，对比开奖号码的千位、百位、十位，符合中三组三或组六的规则，均为中奖。"
        },
        "zsm_zux_hz": {
            "title": "从1-26中选择一个号码作为一注。",
            "paraphrase": "从1-26中选择一个号码作为一注，所选号码等于开奖号码千、百、十位数字（豹子号除外，如：333）相加之和，即为中奖。"
        },
        "zsm_zux_bd": {
            "title": "从0-9中选择一个号码作为一注。",
            "paraphrase": "从0-9中任选一个号码，开奖号码中三位任意1位号码与所选号码相同（不含豹子号），即为中奖。"
        },
        "em_zx_hfs": {
            "title": "在十位、个位上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在十位、个位上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "em_zx_hds": {
            "title": "手动输入或导入一个两位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个两位数号码，组合成一注。录入的号码与开奖号码的十位、个位一致且顺序相同，即为中奖。"
        },
        "em_zx_hhz": {
            "title": "从0-18中选择一个号码。",
            "paraphrase": "从0-18中选择一个号码，所选号码等于开奖号码的十、个位数字相加之和，即为中奖。"
        },
        "em_zx_hkd": {
            "title": "从0-9中选择一个号码。",
            "paraphrase": "选择一个数值，若所选数值等于开奖号码的后两位数字之差，即为中奖。"
        },
        "em_zx_qfs": {
            "title": "在万位、千位上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在万位、千位上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "em_zx_qds": {
            "title": "手动输入或导入一个两位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个两位数号码，组合成一注。录入的号码与开奖号码的万位、千位一致且顺序相同，即为中奖。"
        },
        "em_zx_qhz": {
            "title": "从0-18中选择一个号码。",
            "paraphrase": "从0-18中选择一个号码，所选号码等于开奖号码的万、千位数字相加之和，即为中奖。"
        },
        "em_zx_qkd": {
            "title": "从0-9中选择一个号码。",
            "paraphrase": "选择一个数值，若所选数值等于开奖号码的前两位数字之差，即为中奖。"
        },
        "em_zux_qfs": {
            "title": "从0-9中选择两个或多个号码，组成一注或多注。",
            "paraphrase": "从0-9中选择两个或多个号码，组成一注或多注，所选号码与开奖号码的万位、千位号码相同，顺序不限，即为中奖。"
        },
        "em_zux_qds": {
            "title": "手动输入或导入一个2位数号码，作为一注。",
            "paraphrase": "手动输入或导入一个2位数号码，作为一注，所选号码与开奖号码的万位、千位号码相同，顺序不限，即为中奖。"
        },
        "em_zux_qhz": {
            "title": "从1-17中选择一个号码。",
            "paraphrase": "从1-17中选择一个号码，所选号码等于开奖号码的万、千位数字（对子号除外，如：33）相加之和，即为中奖。"
        },
        "em_zux_qbd": {
            "title": "从0-9中选择一个号码。",
            "paraphrase": "从0-9中任选一个号码，开奖号码万位、千位中任意1位号码与所选号码相同。"
        },
        "em_zx_hfs": {
            "title": "在十位、个位上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在十位、个位上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "em_zx_hds": {
            "title": "手动输入或导入一个两位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个两位数号码，组合成一注。录入的号码与开奖号码的十位、个位一致且顺序相同，即为中奖。"
        },
        "em_zx_hhz": {
            "title": "从0-18中选择一个号码。",
            "paraphrase": "从0-18中选择一个号码，所选号码等于开奖号码的十、个位数字相加之和，即为中奖。"
        },
        "em_zx_hkd": {
            "title": "从0-9中选择一个号码。",
            "paraphrase": "选择一个数值，若所选数值等于开奖号码的后两位数字之差，即为中奖。"
        },
        "em_zux_hfs": {
            "title": "从0-9中选择两个或多个号码，组成一注或多注。",
            "paraphrase": "从0-9中选择两个或多个号码，组成一注或多注，所选号码与开奖号码的十位、个位号码相同，顺序不限，即为中奖。"
        },
        "em_zux_hds": {
            "title": "手动输入或导入一个2位数号码，作为一注。",
            "paraphrase": "手动输入或导入一个2位数号码，作为一注，所选号码与开奖号码的十位、个位号码相同，顺序不限，即为中奖。"
        },
        "em_zux_hhz": {
            "title": "从1-17中选择一个号码。",
            "paraphrase": "从1-17中选择一个号码，所选号码等于开奖号码的十、个位数字（对子号除外，如：33）相加之和，即为中奖。"
        },
        "em_zux_hbd": {
            "title": "从0-9中选择一个号码。",
            "paraphrase": "从0-9中任选一个号码，开奖号码十位、个位中任意1位号码与所选号码相同。"
        },
        "dwd_dwd_dwd": {
            "title": "在万、千、百、十、个位任意位置上至少选择一个号码，作为一注。",
            "paraphrase": "在万、千、百、十、个位任意位置上至少选择一个号码，作为一注，所选号码与相应位置上的开奖号码一致，即为中奖。"
        },
        "bdd_bdd_hs1": {
            "title": "从0-9中至少选择一个号码，一个号码作为一注。",
            "paraphrase": "从0-9中至少选择一个号码，一个号码作为一注，若开奖号码的百位、十位、个位中包含所选号码，即为中奖。"
        },
        "bdd_bdd_hs2": {
            "title": "从0-9中至少选择两个号码，每两个号码作为一注。",
            "paraphrase": "从0-9中至少选择两个号码，每两个号码作为一注，若开奖号码的百位、十位、个位同时包含所选的两个号码，即为中奖。"
        },
        "bdd_bdd_qs1": {
            "title": "从0-9中至少选择一个号码，一个号码作为一注。",
            "paraphrase": "从0-9中至少选择一个号码，一个号码作为一注，若开奖号码的万位、千位、百位中包含所选号码，即为中奖。"
        },
        "bdd_bdd_qs2": {
            "title": "从0-9中至少选择两个号码，每两个号码作为一注。",
            "paraphrase": "从0-9中至少选择两个号码，每两个号码作为一注，若开奖号码的万位、千位、百位同时包含所选的两个号码，即为中奖。"
        },
        "bdd_bdd_z31": {
            "title": "从0-9中至少选择一个号码，一个号码作为一注。",
            "paraphrase": "从0-9中至少选择一个号码，一个号码作为一注，若开奖号码的千位、百位、十位中包含所选号码，即为中奖。"
        },
        "bdd_bdd_z32": {
            "title": "从0-9中至少选择两个号码，每两个号码作为一注。",
            "paraphrase": "从0-9中至少选择两个号码，每两个号码作为一注，若开奖号码的千位、百位、十位包含所选的两个号码（顺序不限），即为中奖。"
        },

        "bdd_bdd4_4x1": {
            "title": "从0-9中至少选择一个号码，一个号码作为一注。",
            "paraphrase": "从0-9中至少选择一个号码，一个号码作为一注。若开奖号码的千位、百位、十位、个位中包含所选的号码（顺序不限），即为中奖。"
        },
        "bdd_bdd4_4x2": {
            "title": "从0-9中至少选择两个号码，每两个号码作为一注。",
            "paraphrase": "从0-9中至少选择两个号码，每两个号码作为一注。若开奖号码的千位、百位、十位、个位中包含所选的两个号码（顺序不限），即为中奖。"
        },
        "bdd_bdd4_4x3": {
            "title": "从0-9中至少选择三个号码，每三个号码作为一注。",
            "paraphrase": "从0-9中至少选择三个号码，每三个号码作为一注。若开奖号码的千位、百位、十位、个位中包含所选的三个号码（顺序不限），即为中奖。"
        },
        "bdd_bdd5_5x1": {
            "title": "从0-9中至少选择一个号码，一个号码作为一注。",
            "paraphrase": "从0-9中至少选择一个号码，一个号码作为一注。若开奖号码中包含所选的号码，即为中奖。"
        },
        "bdd_bdd5_5x2": {
            "title": "从0-9中至少选择两个号码，每两个号码作为一注。",
            "paraphrase": "从0-9中至少选择两个号码，每两个号码作为一注。若开奖号码中包含所选的两个号码（顺序不限），即为中奖。"
        },
        "bdd_bdd5_5x3": {
            "title": "从0-9中至少选择三个号码，每三个号码作为一注。",
            "paraphrase": "从0-9中至少选择三个号码，每三个号码作为一注。若开奖号码中包含所选的三个号码（顺序不限），即为中奖。"
        },
        "dxds_dxds_h2": {
            "title": "从十位、个位的“大、小、单、双”形态中各选一个，组成一注。",
            "paraphrase": "从十位、个位的“大、小、单、双”形态中各选一个，组成一注。若所选的号码位置、形态，与开奖号码的位置、形态一致，即为中奖。"
        },
        "dxds_dxds_q2": {
            "title": "从万位、千位的“大、小、单、双”形态中各选一个，组成一注。",
            "paraphrase": "从万位、千位的“大、小、单、双”形态中各选一个，组成一注。若所选的号码位置、形态，与开奖号码的位置、形态一致，即为中奖。"
        },
        "dxds_dxds_h3": {
            "title": "从百位、十位、个位的“大、小、单、双”形态中各选一个，组成一注。",
            "paraphrase": "从百位、十位、个位的“大、小、单、双”形态中各选一个，组成一注。若所选的形态与开奖号码对应位置上的形态相同，即为中奖。"
        },
        "dxds_dxds_q3": {
            "title": "从万位、千位、百位的“大、小、单、双”形态中各选一个，组成一注。",
            "paraphrase": "从万位、千位、百位的“大、小、单、双”形态中各选一个，组成一注。若所选的形态与开奖号码对应位置上的形态相同，即为中奖。"
        },
        "zh_hzdxds_5xhz": {
            "title": "对五个号码和值的大小单双形态进行选择。注：0-22为小，23-45为大。",
            "paraphrase": "对五个号码和值的大小单双形态进行选择。注：0-22为小，23-45为大。"
        },
        "zh_hzdxds_q3hz": {
            "title": "对万、千、百位号码和值的大小单双形态进行选择。注：0-13为小，14-27为大。",
            "paraphrase": "对万、千、百位号码和值的大小单双形态进行选择。注：0-13为小，14-27为大。"
        },
        "zh_hzdxds_h3hz": {
            "title": "对百、十、个位号码和值的大小单双形态进行选择。注：0-13为小，14-27为大。",
            "paraphrase": "对百、十、个位号码和值的大小单双形态进行选择。注：0-13为小，14-27为大。"
        },
        "zh_hzdxds_z3hz": {
            "title": "对千、百、十位号码和值的大小单双形态进行选择。注：0-13为小，14-27为大。",
            "paraphrase": "对千、百、十位号码和值的大小单双形态进行选择。注：0-13为小，14-27为大。"
        },
        "dxds_dxgs_wx": {
            "title": "对5个号码中大号与小号的个数进行选择，每个选项为1注。",
            "paraphrase": "对5个号码中大号与小号的个数进行选择，每个选项为1注。"
        },
        "dxds_dxgs_sx": {
            "title": "对千、百、十、个4个号码中大号与小号的个数进行选择，每个选项为1注。",
            "paraphrase": "对千、百、十、个4个号码中大号与小号的个数进行选择，每个选项为1注。"
        },
        "dxds_dxgs_qs": {
            "title": "对万、千、百3个号码中大号与小号的个数进行选择，每个选项为1注。",
            "paraphrase": "对万、千、百3个号码中大号与小号的个数进行选择，每个选项为1注。"
        },
        "dxds_dxgs_zs": {
            "title": "对千、百、十3个号码中大号与小号的个数进行选择，每个选项为1注。",
            "paraphrase": "对千、百、十3个号码中大号与小号的个数进行选择，每个选项为1注。"
        },
        "dxds_dxgs_hs": {
            "title": "对百、十、个3个号码中大号与小号的个数进行选择，每个选项为1注。",
            "paraphrase": "对百、十、个3个号码中大号与小号的个数进行选择，每个选项为1注。"
        },
        "dxds_dsgs_wx": {
            "title": "对5个号码中单号与双号的个数进行选择，每个选项为1注。",
            "paraphrase": "对5个号码中单号与双号的个数进行选择，每个选项为1注。"
        },
        "dxds_dsgs_sx": {
            "title": "对千、百、十、个4个号码中单号与双号的个数进行选择，每个选项为1注。",
            "paraphrase": "对千、百、十、个4个号码中单号与双号的个数进行选择，每个选项为1注。"
        },
        "dxds_dsgs_qs": {
            "title": "对万、千、百3个号码中单号与双号的个数进行选择，每个选项为1注。",
            "paraphrase": "对万、千、百3个号码中单号与双号的个数进行选择，每个选项为1注。"
        },
        "dxds_dsgs_zs": {
            "title": "对千、百、十3个号码中单号与双号的个数进行选择，每个选项为1注。",
            "paraphrase": "对千、百、十3个号码中单号与双号的个数进行选择，每个选项为1注。"
        },
        "dxds_dsgs_hs": {
            "title": "对百、十、个3个号码中单号与双号的个数进行选择，每个选项为1注。",
            "paraphrase": "对百、十、个3个号码中单号与双号的个数进行选择，每个选项为1注。"
        },
        "rx2_zx_fs": {
            "title": "在万、千、百、十、个位中任意两个位置上分别选择一个号码，组成一注。",
            "paraphrase": "在万、千、百、十、个位中任意两个位置上分别选择一个号码，组成一注。若所选号码与开奖号码一致，且位置相同，即为中奖。"
        },
        "rx2_zx_ds": {
            "title": "选择两个位置，并手动输入或导入两个号码组成一注。",
            "paraphrase": "选择两个位置，并手动输入或导入两个号码组成一注。若所选号码与开奖号码一致，且位置相同，即为中奖。"
        },
        "rx2_zx_hz": {
            "title": "选择两个位置，并选择一个和值号码组成一注。",
            "paraphrase": "选择两个位置，并选择一个和值号码组成一注。所选号码等于开奖号码对应位置上的号码之和，即为中奖。"
        },
        "rx2_zux_fs": {
            "title": "选择两个位置，并选择两个号码组成一注。",
            "paraphrase": "选择两个位置，并选择两个号码组成一注。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx2_zux_ds": {
            "title": "选择两个位置，并手动输入或导入一个两位数的号码组成一注。",
            "paraphrase": "选择两个位置，并手动输入或导入一个两位数的号码组成一注。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx2_zux_hz": {
            "title": "选择两个位置，并选择一个和值号码组成一注。",
            "paraphrase": "选择两个位置，并选择一个和值号码组成一注。所选号码等于开奖号码对应位置上的号码（对子号除外，例如：33）之和，即为中奖。"
        },
        "rx3_zx_fs": {
            "title": "在万、千、百、十、个位中任意三个位置上分别选择一个号码，组成一注。",
            "paraphrase": "在万、千、百、十、个位中任意三个位置上分别选择一个号码，组成一注。若所选号码与开奖号码一致，且位置相同，即为中奖。"
        },
        "rx3_zx_ds": {
            "title": "选择三个位置，并手动输入或导入三个号码组成一注。",
            "paraphrase": "选择三个位置，并手动输入或导入三个号码组成一注。若所选号码与开奖号码一致，且位置相同，即为中奖。"
        },
        "rx3_zx_hz": {
            "title": "选择三个位置，选择一个和值号码组成一注。",
            "paraphrase": "选择三个位置，选择一个和值号码组成一注。所选号码等于开奖号码对应位置上的号码之和，即为中奖。"
        },
        "rx3_zux_z3": {
            "title": "选择三个位置，并选择两个号码组成两注。",
            "paraphrase": "选择三个位置，并选择两个号码组成两注。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx3_zux_z6": {
            "title": "选择三个位置，并选择三个号码组成一注。",
            "paraphrase": "选择三个位置，并选择三个号码组成一注。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx3_zux_hh": {
            "title": "选择三个位置，并手动输入或者导入三个号码组成一注（不包含豹子号）。",
            "paraphrase": "选择三个位置，并手动输入或者导入三个号码组成一注（不包含豹子号）。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx3_zux_hz": {
            "title": "选择三个位置，并选择一个和值号码构成一注。",
            "paraphrase": "选择三个位置，并选择一个和值号码构成一注。所选号码与开奖号码对应位置上的号码（豹子号除外，例如：333）之和相同，即为中奖。"
        },
        "rx4_zx_fs": {
            "title": "在万、千、百、十、个位中任意四个位置上分别选择一个号码，组成一注。",
            "paraphrase": "在万、千、百、十、个位中任意四个位置上分别选择一个号码，组成一注。若所选号码与开奖号码一致，且位置相同，即为中奖。"
        },
        "rx4_zx_ds": {
            "title": "选择任意四个位置，并手动输入或导入四个号码组成一注。",
            "paraphrase": "选择任意四个位置，并手动输入或导入四个号码组成一注。若所选号码与开奖号码一致，且位置相同，即为中奖。"
        },
        "rx4_zux_z24": {
            "title": "选择任意四个位置，并选择四个号码组成一注。",
            "paraphrase": "选择任意四个位置，并选择四个号码组成一注。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx4_zux_z12": {
            "title": "选择任意四个位置，并从二重号中选择一个号码，单号中选择两个号码组成一注。",
            "paraphrase": "选择任意四个位置，并从二重号中选择一个号码，单号中选择两个号码组成一注。若在开奖号码的选定位置上，二重号出现了两次，单号分别出现了一次，顺序不限，即为中奖。"
        },
        "rx4_zux_z6": {
            "title": "选择任意四个位置，并从二重号中选择两个号码组成一注。",
            "paraphrase": "选择任意四个位置，并从二重号中选择两个号码组成一注。若在开奖号码的指定位置上，二重号分别出现了两次，顺序不限，即为中奖。"
        },
        "rx4_zux_z4": {
            "title": "选择任意四个位置，并从三重号中选择一个号码，在单号中选择一个号码组成一注。",
            "paraphrase": "选择任意四个位置，并从三重号中选择一个号码，在单号中选择一个号码组成一注。若开奖号码的指定位置上，三重号出现了三次，单号出现了一次，顺序不限，即为中奖。"
        },
        "qw_lhh_wq": {
            "title": "万位大于千位为龙；千位大于万位为虎；万位等于千位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的万位、千位数字比较大小，万位大于千位为龙；千位大于万位为虎；开奖结果与投注项相符，即为中奖。若万位等于千位，则为和，开和退还投注本金。"
        },
        "qw_lhh_wb": {
            "title": "万位大于百位为龙；百位大于万位为虎；万位等于百位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的万位、百位数字比较大小，万位大于百位为龙；百位大于万位为虎；开奖结果与投注项相符，即为中奖。若万位等于千位，则为和，开和退还投注本金。"
        },
        "qw_lhh_ws": {
            "title": "万位大于十位为龙；十位大于万位为虎；万位等于十位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的万位、十位数字比较大小，万位大于十位为龙；十位大于万位为虎；开奖结果与投注项相符，即为中奖。若万位等于十位，则为和，开和退还投注本金。"
        },
        "qw_lhh_wg": {
            "title": "万位大于个位为龙；个位大于万位为虎；万位等于个位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的万位、个位数字比较大小，万位大于个位为龙；个位大于万位为虎；开奖结果与投注项相符，即为中奖。若万位等于个位，则为和，开和退还投注本金。"
        },
        "qw_lhh_qb": {
            "title": "千位大于百位为龙；百位大于千位为虎；千位等于百位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的千位、百位数字比较大小，千位大于百位为龙；百位大于千位为虎；开奖结果与投注项相符，即为中奖。若千位等于百位，则为和，开和退还投注本金。"
        },
        "qw_lhh_qs": {
            "title": "千位大于十位为龙；十位大于千位为虎；千位等于十位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的千位、十位数字比较大小，千位大于十位为龙；十位大于千位为虎；开奖结果与投注项相符，即为中奖。若千位等于十位，则为和，开和退还投注本金。"
        },
        "qw_lhh_qg": {
            "title": "千位大于个位为龙；个位大于千位为虎；千位等于个位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的千位、个位数字比较大小，千位大于个位为龙；个位大于千位为虎；开奖结果与投注项相符，即为中奖。若千位等于个位，则为和，开和退还投注本金。"
        },
        "qw_lhh_bs": {
            "title": "百位大于十位为龙；十位大于百位为虎；百位等于十位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的百位、十位数字比较大小，百位大于十位为龙；十位大于百位为虎；开奖结果与投注项相符，即为中奖。若百位等于十位，则为和，开和退还投注本金。"
        },
        "qw_lhh_bg": {
            "title": "百位大于个位为龙；个位大于百位为虎；百位等于个位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的百位、个位数字比较大小，百位大于个位为龙；个位大于百位为虎；开奖结果与投注项相符，即为中奖。若百位等于个位，则为和，开和退还投注本金。"
        },
        "qw_lhh_sg": {
            "title": "十位大于个位为龙；个位大于十位为虎；十位等于个位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的十位、个位数字比较大小，十位大于个位为龙；个位大于十位为虎；开奖结果与投注项相符，即为中奖。若十位等于个位，则为和，开和退还投注本金。"
        },
        "qw_ts_yffs": {
            "title": "从0-9中至少选择一个号码，每个号码作为一注。若开奖号码中包含所选号码，即为中奖。",
            "paraphrase": "从0-9中至少选择一个号码，每个号码作为一注。若开奖号码中包含所选号码，即为中奖。"
        },
        "qw_ts_hscs": {
            "title": "从0-9中至少选择一个号码，每个号码作为一注。若所选号码在开奖号码中出现2次（或以上），即为中奖。",
            "paraphrase": "从0-9中至少选择一个号码，每个号码作为一注。若所选号码在开奖号码中出现2次（或以上），即为中奖。"
        },
        "qw_ts_sxbx": {
            "title": "从0-9中至少选择一个号码，每个号码作为一注。若所选号码在开奖号码中出现3次（或以上），即为中奖。",
            "paraphrase": "从0-9中至少选择一个号码，每个号码作为一注。若所选号码在开奖号码中出现3次（或以上），即为中奖。"
        },
        "qw_ts_sjfc": {
            "title": "从0-9中至少选择一个号码，每个号码作为一注。若所选号码在开奖号码中出现4次（或以上），即为中奖。",
            "paraphrase": "从0-9中至少选择一个号码，每个号码作为一注。若所选号码在开奖号码中出现4次（或以上），即为中奖。"
        },
        "qw_xt_q3": {
            "title": "下注万位、千位、百位三个位置上的开奖号码所组成的形态（顺序不限），每个形态为一注。",
            "paraphrase": "下注万位、千位、百位三个位置上的开奖号码所组成的形态（顺序不限），每个形态为一注。所选形态与开奖号码相符，即为中奖。豹子：三个数字相同，如：111, 222；顺子：三个数字各不相同且相连，如：123, 234, 890, 901, 012.（9与0相连，0与1相连）；对子：三个数字中有1个数字出现了两次，另1个数字出现一次，例如：113, 252, 899；半顺：三个数字各不相同，且其中有2个数字相连，另一个数字不相连,例如：125, 569, 108；杂六：三个数字各不相同，且各不相连，例如：247, 369, 538。"
        },
        "qw_xt_z3": {
            "title": "下注千位、百位、十位三个位置上的开奖号码所组成的形态（顺序不限），每个形态为一注。",
            "paraphrase": "下注千位、百位、十位三个位置上的开奖号码所组成的形态（顺序不限），每个形态为一注。所选形态与开奖号码相符，即为中奖。豹子：三个数字相同，如：111, 222；顺子：三个数字各不相同且相连，如：123, 234, 890, 901, 012.（9与0相连，0与1相连）；对子：三个数字中有1个数字出现了两次，另1个数字出现一次，例如：113, 252, 899；半顺：三个数字各不相同，且其中有2个数字相连，另一个数字不相连,例如：125, 569, 108；杂六：三个数字各不相同，且各不相连，例如：247, 369, 538。"
        },
        "qw_xt_h3": {
            "title": "下注百位、十位、个位三个位置上的开奖号码所组成的形态（顺序不限），每个形态为一注。",
            "paraphrase": "下注百位、十位、个位三个位置上的开奖号码所组成的形态（顺序不限），每个形态为一注。所选形态与开奖号码相符，即为中奖。豹子：三个数字相同，如：111, 222；顺子：三个数字各不相同且相连，如：123, 234, 890, 901, 012.（9与0相连，0与1相连）；对子：三个数字中有1个数字出现了两次，另1个数字出现一次，例如：113, 252, 899；半顺：三个数字各不相同，且其中有2个数字相连，另一个数字不相连,例如：125, 569, 108；杂六：三个数字各不相同，且各不相连，例如：247, 369, 538。"
        },
        "sh_sh_wx": {
            "title": "下注开奖号码所组成的形态（顺序不限），每个选项为1注。",
            "paraphrase": "下注开奖号码所组成的形态（顺序不限），每个选项为1注。所选形态与开奖号码相符，即为中奖。四条：开奖号码中有1个数字出现四次，另1个数字出现一次。如：11113, 22022。葫芦：开奖号码中有1个数字出现三次，另1个数字出现两次，如：11122, 32323。顺子：开奖号码的5个数字不同且相连，如：01234, 67890, 89012（9与0相连，0与1相连）。三条：开奖号码中有1个数字出现三次，其余2个数字各出现一次，例如：21113, 22256, 90899。两对：开奖号码中有2个数字各出现两次，另1个数字出现一次：例如：11255, 56569。一对：开奖号码中有1个数字出现两次，其余3个数字各出现一次：例如：11256, 46689。单牌：开奖号码的5个数字各不相同，且不为顺子。例如：12348,24680。"
        },
        "bjl_bjl_bjl": {
            "title": "(万位+千位)的和值，取其个位数为庄；(十位+个位)的和值，取其个位数为闲。",
            "paraphrase": '(万位+千位)的和值，取其个位数为庄；(十位+个位)的和值，取其个位数为闲。庄大于闲，即押"庄"赢；庄小于闲，即押"闲"赢；庄=闲，即押"和"赢；若万位与千位号码相同，即押"庄对"赢；若十位与个位号码相同，即押"闲对"赢；若庄为6，闲小于6，即押"Super6"赢。'
        },
        "nn_nn_nn": {
            "title": "从下列投注选项中选择一项进行投注",
            "paraphrase": "牛牛：根据开奖第一球~第五球开出的球号数字为基础，任意组合三个号码成0或10的倍数，取剩余两个号码之和为点数（大于10时减去10后的数字作为兑奖基数，如：00026为牛8,02818为牛9，68628、23500皆为牛牛，26378、15286因任意三个号码都无法组合成0或10的倍数，称为无牛，注：当五个号码相同时，只有00000视为牛牛，其它11111,66666等皆为无牛）。" +
                "大小：牛大（牛6、牛7、牛8、牛9、牛牛），牛小（牛1、牛2、牛3、牛4、牛5），若开出斗牛结果为无牛，则投注牛大牛小皆为不中奖。" +
                "单双：牛单（牛1、牛3、牛5、牛7、牛9），牛双（牛2、牛4、牛6、牛8、牛牛），若开出斗牛结果为无牛，则投注牛单牛双皆为不中奖。"
        }
    },
    "11y": {
        "sm_sm_zxfs": {
            "title": "从前三位中至少各选择一个号码，三个位置上，三个不重复的号码构成一注。",
            "paraphrase": "从前三位中至少各选择一个号码，三个位置上，三个不重复的号码构成一注。所选号码与当期顺序摇出的五个号码中的前三个号码相同，顺序一致，即为中奖。"
        },
        "sm_sm_zxds": {
            "title": "手动输入或导入三个号码（三个号码各不相同）。",
            "paraphrase": "手动输入或导入三个号码（三个号码各不相同），所录入的号码与当期顺序摇出的五个号码中的前三个号码相同，顺序一致，即为中奖。"
        },
        "sm_sm_zuxfs": {
            "title": "从01-11中至少选出三个号码，三个号码构成一注。",
            "paraphrase": "从01-11中至少选出三个号码，三个号码构成一注，所选号码与当期顺序摇出的五个号码中的前三个号码相同，顺序不限，即为中奖。"
        },
        "sm_sm_zuxds": {
            "title": "手动输入或导入三个号码（三个号码各不相同）组成一注。",
            "paraphrase": "手动输入或导入三个号码（三个号码各不相同）组成一注，所录入的号码与当期顺序摇出的五个号码中的前三个号码相同，顺序不限，即为中奖。"
        },
        "em_em_zxfs": {
            "title": "从前两位中至少各选择一个号码，两个位置上，两个不重复的号码构成一注。",
            "paraphrase": "从前两位中至少各选择一个号码，两个位置上，两个不重复的号码构成一注。所选号码与当期顺序摇出的五个号码中的前两个号码相同，顺序一致，即为中奖。"
        },
        "em_em_zxds": {
            "title": "手动输入或导入两个号码（两个号码不同）。",
            "paraphrase": "手动输入或导入两个号码（两个号码不同），所录入的号码与当期顺序摇出的五个号码中的前两个号码相同，顺序一致，即为中奖。"
        },
        "em_em_zuxfs": {
            "title": "从01-11中至少选出两个号码，两个号码构成一注。",
            "paraphrase": "从01-11中至少选出两个号码，两个号码构成一注，所选号码与当期顺序摇出的五个号码中的前两个号码相同，顺序不限，即为中奖。"
        },
        "em_em_zuxds": {
            "title": "手动输入或导入两个号码（两个号码不同）组成一注。",
            "paraphrase": "手动输入或导入两个号码（两个号码不同）组成一注，所录入的号码与当期顺序摇出的五个号码中的前两个号码相同，顺序不限，即为中奖。"
        },
        "bdd_bdd_bdd11y": {
            "title": "从01-11中至少选择一个号码，一个号码作为一注。",
            "paraphrase": "从01-11中至少选择一个号码，一个号码作为一注，若当期顺序摇出的五个号码中的前三个号码，包含所选号码，即为中奖。"
        },
        "dwd_dwd_dwd11y": {
            "title": "在前三位的任意位置上任意选择至少一个号码，每个号码作为一注。",
            "paraphrase": "在前三位的任意位置上任意选择至少一个号码，每个号码作为一注，若所选号码与相同位置上的开奖号码一致，即为中奖。"
        },
        "rxfs_rxfs_1z1": {
            "title": "从01-11中任意选择至少一个号码，一个号码作为一注。",
            "paraphrase": "从01-11中任意选择至少一个号码，一个号码作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxfs_rxfs_2z2": {
            "title": "从01-11中任意选择至少两个号码，两个号码作为一注。",
            "paraphrase": "从01-11中任意选择至少两个号码，两个号码作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxfs_rxfs_3z3": {
            "title": "从01-11中任意选择至少三个号码，三个号码作为一注。",
            "paraphrase": "从01-11中任意选择至少三个号码，三个号码作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxfs_rxfs_4z4": {
            "title": "从01-11中任意选择至少四个号码，四个号码作为一注。",
            "paraphrase": "从01-11中任意选择至少四个号码，四个号码作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxfs_rxfs_5z5": {
            "title": "从01-11中任意选择至少五个号码，五个号码作为一注。",
            "paraphrase": "从01-11中任意选择至少五个号码，五个号码作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxfs_rxfs_6z5": {
            "title": "从01-11中任意选择至少六个号码，六个号码作为一注。",
            "paraphrase": "从01-11中任意选择至少六个号码，六个号码作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxfs_rxfs_7z5": {
            "title": "从01-11中任意选择至少七个号码，七个号码作为一注。",
            "paraphrase": "从01-11中任意选择至少七个号码，七个号码作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxfs_rxfs_8z5": {
            "title": "从01-11中任意选择至少八个号码，八个号码作为一注。",
            "paraphrase": "从01-11中任意选择至少八个号码，八个号码作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxds_rxds_1z1": {
            "title": "从01-11中任意输入或导入一个号码，作为一注。",
            "paraphrase": "从01-11中任意输入或导入一个号码，作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxds_rxds_2z2": {
            "title": "从01-11中任意输入或导入两个号码，作为一注。",
            "paraphrase": "从01-11中任意输入或导入两个号码，作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxds_rxds_3z3": {
            "title": "从01-11中任意输入或导入三个号码，作为一注。",
            "paraphrase": "从01-11中任意输入或导入三个号码，作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxds_rxds_4z4": {
            "title": "从01-11中任意输入或导入四个号码，作为一注。",
            "paraphrase": "从01-11中任意输入或导入四个号码，作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxds_rxds_5z5": {
            "title": "从01-11中任意输入或导入五个号码，作为一注。",
            "paraphrase": "从01-11中任意输入或导入五个号码，作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxds_rxds_6z5": {
            "title": "从01-11中任意输入或导入六个号码，作为一注。",
            "paraphrase": "从01-11中任意输入或导入六个号码，作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxds_rxds_7z5": {
            "title": "从01-11中任意输入或导入七个号码，作为一注。",
            "paraphrase": "从01-11中任意输入或导入七个号码，作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxds_rxds_8z5": {
            "title": "从01-11中任意输入或导入八个号码，作为一注。",
            "paraphrase": "从01-11中任意输入或导入八个号码，作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxdt_rxdt_2z2": {
            "title": "分别从胆码和拖码的01-11中，选择1个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码中，包含所选的胆码和拖码组成的注单，即为中奖。",
            "paraphrase": "分别从胆码和拖码的01-11中，选择1个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码中，包含所选的胆码和拖码组成的注单，即为中奖。"
        },
        "rxdt_rxdt_3z3": {
            "title": "分别从胆码和拖码的01-11中，选择1-2个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码中，包含所选的胆码和拖码组成的注单，即为中奖。",
            "paraphrase": "分别从胆码和拖码的01-11中，选择1-2个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码中，包含所选的胆码和拖码组成的注单，即为中奖。"
        },
        "rxdt_rxdt_4z4": {
            "title": "分别从胆码和拖码的01-11中，选择1-3个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码中，包含所选的胆码和拖码组成的注单，即为中奖。",
            "paraphrase": "分别从胆码和拖码的01-11中，选择1-3个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码中，包含所选的胆码和拖码组成的注单，即为中奖。"
        },
        "rxdt_rxdt_5z5": {
            "title": "分别从胆码和拖码的01-11中，选择1-4个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码，与所选的胆码和拖码组成的注单相同，即为中奖。",
            "paraphrase": "分别从胆码和拖码的01-11中，选择1-4个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码，与所选的胆码和拖码组成的注单相同，即为中奖。"
        },
        "rxdt_rxdt_6z5": {
            "title": "分别从胆码和拖码的01-11中，选择1-5个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码，出现在所选的胆码和拖码组成的注单中，即为中奖。",
            "paraphrase": "分别从胆码和拖码的01-11中，选择1-5个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码，出现在所选的胆码和拖码组成的注单中，即为中奖。"
        },
        "rxdt_rxdt_7z5": {
            "title": "分别从胆码和拖码的01-11中，选择1-6个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码，出现在所选的胆码和拖码组成的注单中，即为中奖。",
            "paraphrase": "分别从胆码和拖码的01-11中，选择1-6个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码，出现在所选的胆码和拖码组成的注单中，即为中奖。"
        },
        "rxdt_rxdt_8z5": {
            "title": "分别从胆码和拖码的01-11中，选择1-7个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码，出现在所选的胆码和拖码组成的注单中，即为中奖。",
            "paraphrase": "分别从胆码和拖码的01-11中，选择1-7个胆码和至少2个拖码形成注单。只要当期摇出的5个开奖号码，出现在所选的胆码和拖码组成的注单中，即为中奖。"
        },
        "qw_qw_dds": {
            "title": "从5个开奖号码形成的六种单双组合中选择一种作为一注，若开奖号码符合所选的单双组合，即中奖。每种组合的中奖概率不一样，奖金也各不相同，奖金由高至低排列依次为：0单5双、5单0双、1单4双、4单1双、2单3双、3单2双。",
            "paraphrase": "从5个开奖号码形成的六种单双组合中选择一种作为一注，若开奖号码符合所选的单双组合，即中奖。每种组合的中奖概率不一样，奖金也各不相同，奖金由高至低排列依次为：0单5双、5单0双、1单4双、4单1双、2单3双、3单2双。"
        },
        "qw_qw_czw": {
            "title": "从03至09中选择1个号码作为1注，若开奖号码按照从大到小顺序排列后的第3个号码与投注号码相同，即为中奖。号码中奖概率不一样，奖金也不相同，奖金由高至低排列依次为：03/09、04/08、05/07、06。",
            "paraphrase": "从03至09中选择1个号码作为1注，若开奖号码按照从大到小顺序排列后的第3个号码与投注号码相同，即为中奖。号码中奖概率不一样，奖金也不相同，奖金由高至低排列依次为：03/09、04/08、05/07、06。"
        }
    },
    "pk10": {
        "cq1_cq1_cq1": {
            "title": "在冠军位上任意选择至少一个号码，一个号码组成一注。",
            "paraphrase": "在冠军位上任意选择至少一个号码，一个号码组成一注。若开奖号码的第一位与所选号码相同，即为中奖。"
        },
        "cq2_cq2_cq2": {
            "title": "在冠军和第二名位置上分别选择至少一个号码，两个不重复的号码组成一注。",
            "paraphrase": "在冠军和第二名位置上分别选择至少一个号码，两个不重复的号码组成一注。所选号码与开奖号码的前两位号码相同，顺序一致，即为中奖。"
        },
        "cq2_cq2_ds": {
            "title": "手动输入或导入两个不重复的号码组成一注。",
            "paraphrase": "手动输入或导入两个不重复的号码组成一注。所录入的号码与开奖号码的前两位号码相同，顺序一致，即为中奖。"
        },
        "cq3_cq3_cq3": {
            "title": "在冠军、第二名、第三名位置上分别选择至少一个号码，三个不重复的号码组成一注。",
            "paraphrase": "在冠军、第二名、第三名位置上分别选择至少一个号码，三个不重复的号码组成一注。所选号码与开奖号码的前三位号码相同，顺序一致，即为中奖。"
        },
        "cq3_cq3_ds": {
            "title": "手动输入或导入三个不重复的号码组成一注。",
            "paraphrase": "手动输入或导入三个不重复的号码组成一注。所录入的号码与开奖号码的前三位号码相同，顺序一致，即为中奖。"
        },
        "cq4_cq4_cq4": {
            "title": "在冠军、第二名、第三名、第四名位置上分别选择至少一个号码，四个不重复的号码组成一注。",
            "paraphrase": "在冠军、第二名、第三名、第四名位置上分别选择至少一个号码，四个不重复的号码组成一注。所选号码与开奖号码的前四位号码相同，顺序一致，即为中奖。"
        },
        "cq4_cq4_ds": {
            "title": "手动输入或导入四个不重复的号码组成一注。",
            "paraphrase": "手动输入或导入四个不重复的号码组成一注。所录入的号码与开奖号码的前四位号码相同，顺序一致，即为中奖。"
        },
        "cq5_cq5_cq5": {
            "title": "在冠军、第二名、第三名、第四名、第五名位置上分别选择至少一个号码，五个不重复的号码组成一注。",
            "paraphrase": "在冠军、第二名、第三名、第四名、第五名位置上分别选择至少一个号码，五个不重复的号码组成一注。所选号码与开奖号码的前五位号码相同，顺序一致，即为中奖。"
        },
        "cq5_cq5_ds": {
            "title": "手动输入或导入五个不重复的号码组成一注。",
            "paraphrase": "手动输入或导入五个不重复的号码组成一注。所录入的号码与开奖号码的前五位号码相同，顺序一致，即为中奖。"
        },
        "dwd_dwd_q5": {
            "title": "在前五位的任意位置上至少选择一个号码。",
            "paraphrase": "在前五位的任意位置上至少选择一个号码，所选号码与开奖号码对应位置上的号码相同，即为中奖。"
        },
        "dwd_dwd_h5": {
            "title": "在后五位的任意位置上至少选择一个号码。",
            "paraphrase": "在后五位的任意位置上至少选择一个号码，所选号码与开奖号码对应位置上的号码相同，即为中奖。"
        },
        "dx_dx_d1": {
            "title": "对冠军的“大（06、07、08、09、10）、小（01、02、03、04、05）”形态进行选择",
            "paraphrase": "对冠军的“大（06、07、08、09、10）、小（01、02、03、04、05）”形态进行选择，所选形态与开奖号码第一位的形态相同，即为中奖。"
        },
        "dx_dx_d2": {
            "title": "对第二名的“大（06、07、08、09、10）、小（01、02、03、04、05）”形态进行选择。",
            "paraphrase": "对第二名的“大（06、07、08、09、10）、小（01、02、03、04、05）”形态进行选择，所选形态与开奖号码第二位的形态相同，即为中奖。"
        },
        "dx_dx_d3": {
            "title": "对第三名的“大（06、07、08、09、10）、小（01、02、03、04、05）”形态进行选择。",
            "paraphrase": "对第三名的“大（06、07、08、09、10）、小（01、02、03、04、05）”形态进行选择，所选形态与开奖号码第三位的形态相同，即为中奖。"
        },
        "dx_dx_d4": {
            "title": "对第四名的“大（06、07、08、09、10）、小（01、02、03、04、05）”形态进行选择。",
            "paraphrase": "对第四名的“大（06、07、08、09、10）、小（01、02、03、04、05）”形态进行选择，所选形态与开奖号码第四位的形态相同，即为中奖。"
        },
        "dx_dx_d5": {
            "title": "对第五名的“大（06、07、08、09、10）、小（01、02、03、04、05）”形态进行选择。",
            "paraphrase": "对第五名的“大（06、07、08、09、10）、小（01、02、03、04、05）”形态进行选择，所选形态与开奖号码第五位的形态相同，即为中奖。"
        },
        "dx_dx_q2": {
            "title": "对冠亚和值的大（11,12,13,14,15,16,17,18,19）、小（3,4,5,6,7,8,9,10）形态进行选择。",
            "paraphrase": "对冠亚和值的大（11,12,13,14,15,16,17,18,19）、小（3,4,5,6,7,8,9,10）形态进行选择。所选形态与开奖号码冠亚和值的形态一致，即为中奖"
        },
        "hz_hz_q2": {
            "title": "从3-19中任意选择至少一个号码。",
            "paraphrase": "从3-19中任意选择至少一个号码，若所选号码的数值等于开奖号码的前两位数字相加之和，即为中奖。"
        },
        "hz_hz_q3": {
            "title": "从6-27中任意选择至少一个号码。",
            "paraphrase": "从6-27中任意选择至少一个号码，若所选号码的数值等于开奖号码的前三位数字相加之和，即为中奖。"
        },
        "ds_ds_d1": {
            "title": "对冠军的“单（01、03、05、07、09）、双（02、04、06、08、10）”形态进行选择。",
            "paraphrase": "对冠军的“单（01、03、05、07、09）、双（02、04、06、08、10）”形态进行选择，所选形态与开奖号码第一位的形态相同，即为中奖。"
        },
        "ds_ds_d2": {
            "title": "对第二名的“单（01、03、05、07、09）、双（02、04、06、08、10）”形态进行选择。",
            "paraphrase": "对第二名的“单（01、03、05、07、09）、双（02、04、06、08、10）”形态进行选择，所选形态与开奖号码第二位的形态相同，即为中奖。"
        },
        "ds_ds_d3": {
            "title": "对第三名的“单（01、03、05、07、09）、双（02、04、06、08、10）”形态进行选择。",
            "paraphrase": "对第三名的“单（01、03、05、07、09）、双（02、04、06、08、10）”形态进行选择，所选形态与开奖号码第三位的形态相同，即为中奖。"
        },
        "ds_ds_d4": {
            "title": "对第四名的“单（01、03、05、07、09）、双（02、04、06、08、10）”形态进行选择。",
            "paraphrase": "对第四名的“单（01、03、05、07、09）、双（02、04、06、08、10）”形态进行选择，所选形态与开奖号码第四位的形态相同，即为中奖。"
        },
        "ds_ds_d5": {
            "title": "对第五名的“单（01、03、05、07、09）、双（02、04、06、08、10）”形态进行选择。",
            "paraphrase": "对第五名的“单（01、03、05、07、09）、双（02、04、06、08、10）”形态进行选择，所选形态与开奖号码第五位的形态相同，即为中奖。"
        },
        "ds_ds_q2": {
            "title": "对冠亚和值的单（3,5,7,9,11,13,15,17,19）、双（4,6,8,10,12,14,16,18）形态进行选择。",
            "paraphrase": "对冠亚和值的单（3,5,7,9,11,13,15,17,19）、双（4,6,8,10,12,14,16,18）形态进行选择。所选形态与开奖号码冠亚和值的形态一致，即为中奖。"
        },
        "lh_lh_1v10": {
            "title": "若第一名号码大于第十名号码，龙中奖；反之则虎中奖。",
            "paraphrase": "若第一名号码大于第十名号码，龙中奖；反之则虎中奖。"
        },
        "lh_lh_2v9": {
            "title": "若第二名号码大于第九名号码，龙中奖；反之则虎中奖。。",
            "paraphrase": "若第二名号码大于第九名号码，龙中奖；反之则虎中奖。"
        },
        "lh_lh_3v8": {
            "title": "若第三名号码大于第八名号码，龙中奖；反之则虎中奖。",
            "paraphrase": "若第三名号码大于第八名号码，龙中奖；反之则虎中奖。"
        },
        "lh_lh_4v7": {
            "title": "若第四名号码大于第七名号码，龙中奖；反之则虎中奖。",
            "paraphrase": "若第四名号码大于第七名号码，龙中奖；反之则虎中奖。"
        },
        "lh_lh_5v6": {
            "title": "若第五名号码大于第六名号码，龙中奖；反之则虎中奖。",
            "paraphrase": "若第五名号码大于第六名号码，龙中奖；反之则虎中奖。"
        }
    },
    "3d": {
        "sm_zx_fs": {
            "title": "从百位、十位、个位分别至少选择一个号码，三个号码作为一注。",
            "paraphrase": "从百位、十位、个位分别至少选择一个号码，三个号码作为一注，若所选号码与开奖号码相同，且顺序一致，即为中奖。"
        },
        "sm_zx_ds": {
            "title": "手动输入或导入一个三位数号码。",
            "paraphrase": "手动输入或导入一个三位数号码，录入的号码与开奖号码相同，且顺序一致，即为中奖。"
        },
        "sm_zx_hz": {
            "title": "从0-27中至少任选一个号码，每个号码作为一注。",
            "paraphrase": "从0-27中至少任选一个号码，每个号码作为一注。所选号码等于开奖号码三个数字相加之和，即为中奖。"
        },
        "sm_zux_z3": {
            "title": "从0-9中至少任选两个号码，两个号码组成两注。",
            "paraphrase": "从0-9中至少任选两个号码，两个号码组成两注，所选号码与开奖号码的百位、十位、个位号码相同，顺序不限，即为中奖。"
        },
        "sm_zux_z6": {
            "title": "从0-9中至少任选三个号码，三个号码作为一注。",
            "paraphrase": "从0-9中至少任选三个号码，三个号码作为一注，所选号码与开奖号码的百位、十位、个位号码相同，顺序不限，即为中奖。"
        },
        "sm_zux_hh": {
            "title": "手动输入或导入一个三位数号码（不含豹子号，如：111,222）。",
            "paraphrase": "手动输入或导入一个三位数号码（不含豹子号，如：111,222），所选号码与开奖号码相同，顺序不限，即为中奖。形态为组三，获得组三奖金；形态为组六，获得组六奖金。"
        },
        "sm_zux_hz": {
            "title": "从1-26中至少任选一个号码。",
            "paraphrase": "从1-26中至少任选一个号码，所选号码等于开奖号码（不含豹子号）数字之和，即为中奖。"
        },
        "em_zx_hfs": {
            "title": "从十位、个位分别至少选择一个号码，两个号码作为一注。",
            "paraphrase": "从十位、个位分别至少选择一个号码，两个号码作为一注，所选号码与开奖号码的十位、个位号码相同，顺序一致，即为中奖。"
        },
        "em_zx_hds": {
            "title": "手动输入或导入一个二位数作为一注。",
            "paraphrase": "手动输入或导入一个二位数作为一注，录入号码与开奖号码的十位、个位号码相同，顺序一致，即为中奖。"
        },
        "em_zx_qfs": {
            "title": "从百位、十位分别至少选择一个号码，两个号码作为一注。",
            "paraphrase": "从百位、十位分别至少选择一个号码，两个号码作为一注，所选号码与开奖号码的百位、十位号码相同，顺序一致，即为中奖。"
        },
        "em_zx_qds": {
            "title": "手动输入或导入一个二位数作为一注。",
            "paraphrase": "手动输入或导入一个二位数作为一注，录入号码与开奖号码的百位、十位号码相同，顺序一致，即为中奖。"
        },
        "em_zux_hfs": {
            "title": "从0-9中至少任选两个号码，两个号码作为一注。",
            "paraphrase": "从0-9中至少任选两个号码，两个号码作为一注，所选号码与开奖号码的十位、个位号码相同，顺序不限，即为中奖。"
        },
        "em_zux_hds": {
            "title": "手动输入或导入一个二位数作为一注。",
            "paraphrase": "手动输入或导入一个二位数作为一注，录入号码与开奖号码的十位、个位号码相同，顺序不限，即为中奖。"
        },
        "em_zux_qfs": {
            "title": "从0-9中至少任选两个号码，两个号码作为一注。",
            "paraphrase": "从0-9中至少任选两个号码，两个号码作为一注，所选号码与开奖号码的百位、十位号码相同，顺序不限，即为中奖。"
        },
        "em_zux_qds": {
            "title": "手动输入或导入一个二位数作为一注。",
            "paraphrase": "手动输入或导入一个二位数作为一注，录入号码与开奖号码的百位、十位号码相同，顺序不限，即为中奖。"
        },
        "dwd_dwd_dwd": {
            "title": "从百位、十位、个位任意位置任选一个号码，每个号码作为一注。",
            "paraphrase": "从百位、十位、个位任意位置任选一个号码，每个号码作为一注，若所选号码与开奖号码对应位置上的号码相同，即为中奖。"
        },
        "bdd_bdd_bdd1": {
            "title": "从0-9中至少任选一个号码，一个号码作为一注。",
            "paraphrase": "从0-9中至少任选一个号码，一个号码作为一注，若开奖号码的百位、十位、个位中包含所选号码，即为中奖。"
        },
        "bdd_bdd_bdd2": {
            "title": "从0-9中至少任选两个号码，两个号码作为一注。",
            "paraphrase": "从0-9中至少任选两个号码，两个号码作为一注，若开奖号码的百位、十位、个位中包含所选号码，即为中奖"
        },
        "qw_lhh_bs": {
            "title": "百位大于十位为龙；十位大于百位为虎；百位等于十位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的百位、十位数字比较大小，百位大于十位为龙；十位大于百位为虎；开奖结果与投注项相符，即为中奖。若百位等于十位，则为和，开和退还投注本金。"
        },
        "qw_lhh_bg": {
            "title": "百位大于个位为龙；个位大于百位为虎；百位等于个位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的百位、个位数字比较大小，百位大于个位为龙；个位大于百位为虎；开奖结果与投注项相符，即为中奖。若百位等于个位，则为和，开和退还投注本金。"
        },
        "qw_lhh_sg": {
            "title": "十位大于个位为龙；个位大于十位为虎；十位等于个位为和。",
            "paraphrase": "在龙、虎两种形态中选择一种。用开奖号码的十位、个位数字比较大小，十位大于个位为龙；个位大于十位为虎；开奖结果与投注项相符，即为中奖。若十位等于个位，则为和，开和退还投注本金。"
        },
        "qw_xt_xt": {
            "title": "下注百位、十位、个位三个位置上的开奖号码所组成的形态（顺序不限），每个形态为一注。",
            "paraphrase": "下注百位、十位、个位三个位置上的开奖号码所组成的形态（顺序不限），每个形态为一注。所选形态与开奖号码相符，即为中奖。豹子：三个数字相同，如：111, 222；顺子：三个数字各不相同且相连，如：123, 234, 890, 901, 012.（9与0相连，0与1相连）；对子：三个数字中有1个数字出现了两次，另1个数字出现一次，例如：113, 252, 899；半顺：三个数字各不相同，且其中有2个数字相连，另一个数字不相连,例如：125, 569, 108；杂六：三个数字各不相同，且各不相连，例如：247, 369, 538。"
        }
    },
    "k3": {
        "hz_hz_hz": {
            "title": "选择一个和值号码进行投注。若所选号码等于开奖号码之和，即为中奖。 ",
            "paraphrase": "选择一个和值号码进行投注。若所选号码等于开奖号码之和，即为中奖。 "
        },
        "th3_th3_th3dx": {
            "title": "在六组三同号（111,222,333,444,555,666）中选择一组，作为一注。",
            "paraphrase": "在六组三同号（111,222,333,444,555,666）中选择一组，作为一注。若所选号码组与开奖号码相同，即为中奖。"
        },
        "th3_th3_th3tx": {
            "title": "选择所有三同号（111,222,333,444,555,666）作为一注。",
            "paraphrase": "选择所有三同号（111,222,333,444,555,666）作为一注。若开奖号码中三个数字相同，即为中奖。"
        },
        "th2_th2dx_fs": {
            "title": "从二同号（11,22,33,44,55,66）和不同号（1,2,3,4,5,6）中各选一个组成一注。",
            "paraphrase": "从二同号（11,22,33,44,55,66）和不同号（1,2,3,4,5,6）中各选一个组成一注。若所选号码与开奖号码相同，即为中奖。"
        },
        "th2_th2dx_ds": {
            "title": "从下列30组号码中选择一组作为一注。若所选号码与开奖号码相同，即为中奖。",
            "paraphrase": "从下列30组号码中选择一组作为一注。若所选号码与开奖号码相同，即为中奖。"
        },
        "th2_th2fx_fx": {
            "title": "从六组二同号（11,22,33,44,55,66）中选择一组作为一注。",
            "paraphrase": "从六组二同号（11,22,33,44,55,66）中选择一组作为一注。若开奖号码中包含所选的二同号，即为中奖。"
        },
        "bth3_bth3_fs": {
            "title": "从1-6中选择三个号码作为一注。若所选的三个号码与开奖号码相同，即为中奖。",
            "paraphrase": "从1-6中选择三个号码作为一注。若所选的三个号码与开奖号码相同，即为中奖。"
        },
        "bth3_bth3_ds": {
            "title": "从下列20组号码中选择一组作为一注。若所选号码与开奖号码相同，即为中奖。",
            "paraphrase": "从下列20组号码中选择一组作为一注。若所选号码与开奖号码相同，即为中奖。"
        },
        "bth3_lh3_tx": {
            "title": "对所有的三连号（123,234,345,456）进行投注。若开奖号码为其中任意一个三连号，即为中奖。",
            "paraphrase": "对所有的三连号（123,234,345,456）进行投注。若开奖号码为其中任意一个三连号，即为中奖。"
        },
        "bth3_lh3_dx": {
            "title": "从以下4个三连号中选择一个进行投注，若投注号码与开奖号码相同，即为中奖。",
            "paraphrase": "从以下4个三连号中选择一个进行投注，若投注号码与开奖号码相同，即为中奖。"
        },
        "bth3_bs_tx": {
            "title": "选择所有的半顺形态号码作为一注进行投注，若开奖号码为其中任意一组号码，即为中奖。",
            "paraphrase": "选择所有的半顺形态号码作为一注进行投注，若开奖号码为其中任意一组号码，即为中奖。"
        },
        "bth3_bs_dx": {
            "title": "从以下12组半顺形态号码中选择一组进行投注，若所选号码与开奖号码相同，即为中奖。",
            "paraphrase": "从以下12组半顺形态号码中选择一组进行投注，若所选号码与开奖号码相同，即为中奖。"
        },
        "bth3_z6_tx": {
            "title": "选择所有杂六形态号码作为一注进行投注，若开奖号码为其中任意一组号码，即为中奖。",
            "paraphrase": "选择所有杂六形态号码作为一注进行投注，若开奖号码为其中任意一组号码，即为中奖。"
        },
        "bth3_z6_dx": {
            "title": "从以下4组杂六形态号码中选择一组进行投注，若所选号码与开奖号码相同，即为中奖。",
            "paraphrase": "从以下4组杂六形态号码中选择一组进行投注，若所选号码与开奖号码相同，即为中奖。"
        },
        "bth2_bth2_fs": {
            "title": "从1-6中选择两个号码作为一注。若开奖号码中包含所选号码，即为中奖。",
            "paraphrase": "从1-6中选择两个号码作为一注。若开奖号码中包含所选号码，即为中奖。"
        },
        "bth2_bth2_ds": {
            "title": "从下列15组号码中选择一组作为一注。若开奖号码中包含所选号码，即为中奖。",
            "paraphrase": "从下列15组号码中选择一组作为一注。若开奖号码中包含所选号码，即为中奖。"
        },
        "dxds_dxds_dxds": {
            "title": "对三个号码和值的大小单双形态进行选择。注：3-10为小，11-18为大。",
            "paraphrase": "对三个号码和值的大小单双形态进行选择。注：3-10为小，11-18为大。"
        },
        "cygh_cygh_cygh": {
            "title": "从1-6这六个号码中选择一个进行投注，若选择的号码出现在开奖号码中，即为中奖。",
            "paraphrase": "从1-6这六个号码中选择一个进行投注，若选择的号码出现在开奖号码中，即为中奖。"
        }
    },
    "kl12": {
        "sm_sm_zxfs": {
            "title": "从前三位中至少各选择一个号码，三个位置上，三个不重复的号码构成一注。",
            "paraphrase": "从前三位中至少各选择一个号码，三个位置上，三个不重复的号码构成一注。所选号码与当期顺序摇出的五个号码中的前三个号码相同，顺序一致，即为中奖。"
        },
        "sm_sm_zxds": {
            "title": "手动输入或导入三个号码（三个号码各不相同）。",
            "paraphrase": "手动输入或导入三个号码（三个号码各不相同），所录入的号码与当期顺序摇出的五个号码中的前三个号码相同，顺序一致，即为中奖。"
        },
        "sm_sm_zuxfs": {
            "title": "从01-12中至少选出三个号码，三个号码构成一注。",
            "paraphrase": "从01-12中至少选出三个号码，三个号码构成一注，所选号码与当期顺序摇出的五个号码中的前三个号码相同，顺序不限，即为中奖。"
        },
        "sm_sm_zuxds": {
            "title": "手动输入或导入三个号码（三个号码各不相同）组成一注。",
            "paraphrase": "手动输入或导入三个号码（三个号码各不相同）组成一注，所录入的号码与当期顺序摇出的五个号码中的前三个号码相同，顺序不限，即为中奖。"
        },
        "em_em_zxfs": {
            "title": "从前两位中至少各选择一个号码，两个位置上，两个不重复的号码构成一注。",
            "paraphrase": "从前两位中至少各选择一个号码，两个位置上，两个不重复的号码构成一注。所选号码与当期顺序摇出的五个号码中的前两个号码相同，顺序一致，即为中奖。"
        },
        "em_em_zxds": {
            "title": "手动输入或导入两个号码（两个号码不同）。",
            "paraphrase": "手动输入或导入两个号码（两个号码不同），所录入的号码与当期顺序摇出的五个号码中的前两个号码相同，顺序一致，即为中奖。"
        },
        "em_em_zuxfs": {
            "title": "从01-12中至少选出两个号码，两个号码构成一注。",
            "paraphrase": "从01-12中至少选出两个号码，两个号码构成一注，所选号码与当期顺序摇出的五个号码中的前两个号码相同，顺序不限，即为中奖。"
        },
        "em_em_zuxds": {
            "title": "手动输入或导入两个号码（两个号码不同）组成一注。",
            "paraphrase": "手动输入或导入两个号码（两个号码不同）组成一注，所录入的号码与当期顺序摇出的五个号码中的前两个号码相同，顺序不限，即为中奖。"
        },
        "bdd_bdd_3x1m": {
            "title": "从01-12中至少选择一个号码，一个号码作为一注。",
            "paraphrase": "从01-12中至少选择一个号码，一个号码作为一注，若当期顺序摇出的五个号码中的前三个号码，包含所选号码，即为中奖。"
        },
        "bdd_bdd_4x1m": {
            "title": "从01-12中至少选择一个号码，一个号码作为一注。",
            "paraphrase": "从01-12中至少选择一个号码，一个号码作为一注，若当期顺序摇出的五个号码中的前四个号码，包含所选号码，即为中奖。"
        },
        "bdd_bdd_5x1m": {
            "title": "从01-12中至少选择一个号码，一个号码作为一注。",
            "paraphrase": "从01-12中至少选择一个号码，一个号码作为一注，若当期顺序摇出的五个号码中，包含所选号码，即为中奖。"
        },
        "dwd_dwd_dwd11y": {
            "title": "在前五位的任意位置上任意选择至少一个号码，每个号码作为一注。",
            "paraphrase": "在前五位的任意位置上任意选择至少一个号码，每个号码作为一注，若所选号码与相同位置上的开奖号码一致，即为中奖。"
        },
        "rxfs_rxfs_1z1": {
            "title": "从01-12中任意选择至少一个号码，一个号码作为一注。",
            "paraphrase": "从01-12中任意选择至少一个号码，一个号码作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxfs_rxfs_2z2": {
            "title": "从01-12中任意选择至少两个号码，两个号码作为一注。",
            "paraphrase": "从01-12中任意选择至少两个号码，两个号码作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxfs_rxfs_3z3": {
            "title": "从01-12中任意选择至少三个号码，三个号码作为一注。",
            "paraphrase": "从01-12中任意选择至少三个号码，三个号码作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxfs_rxfs_4z4": {
            "title": "从01-12中任意选择至少四个号码，四个号码作为一注。",
            "paraphrase": "从01-12中任意选择至少四个号码，四个号码作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxfs_rxfs_5z5": {
            "title": "从01-12中任意选择至少五个号码，五个号码作为一注。",
            "paraphrase": "从01-12中任意选择至少五个号码，五个号码作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxfs_rxfs_6z5": {
            "title": "从01-12中任意选择至少六个号码，六个号码作为一注。",
            "paraphrase": "从01-12中任意选择至少六个号码，六个号码作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxfs_rxfs_7z5": {
            "title": "从01-12中任意选择至少七个号码，七个号码作为一注。",
            "paraphrase": "从01-12中任意选择至少七个号码，七个号码作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxfs_rxfs_8z5": {
            "title": "从01-12中任意选择至少八个号码，八个号码作为一注。",
            "paraphrase": "从01-12中任意选择至少八个号码，八个号码作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxds_rxds_1z1": {
            "title": "从01-12中任意输入或导入一个号码，作为一注。",
            "paraphrase": "从01-12中任意输入或导入一个号码，作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxds_rxds_2z2": {
            "title": "从01-12中任意输入或导入两个号码，作为一注。",
            "paraphrase": "从01-12中任意输入或导入两个号码，作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxds_rxds_3z3": {
            "title": "从01-12中任意输入或导入三个号码，作为一注。",
            "paraphrase": "从01-12中任意输入或导入三个号码，作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxds_rxds_4z4": {
            "title": "从01-12中任意输入或导入四个号码，作为一注。",
            "paraphrase": "从01-12中任意输入或导入四个号码，作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxds_rxds_5z5": {
            "title": "从01-12中任意输入或导入五个号码，作为一注。",
            "paraphrase": "从01-12中任意输入或导入五个号码，作为一注，只要当期顺序摇出的五个开奖号码中包含所选号码，即为中奖。"
        },
        "rxds_rxds_6z5": {
            "title": "从01-12中任意输入或导入六个号码，作为一注。",
            "paraphrase": "从01-12中任意输入或导入六个号码，作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxds_rxds_7z5": {
            "title": "从01-12中任意输入或导入七个号码，作为一注。",
            "paraphrase": "从01-12中任意输入或导入七个号码，作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxds_rxds_8z5": {
            "title": "从01-12中任意输入或导入八个号码，作为一注。",
            "paraphrase": "从01-12中任意输入或导入八个号码，作为一注，只要所选号码包含当期顺序摇出的五个开奖号码，即为中奖。"
        },
        "rxdt_rxdt_2z2": {
            "title": "分别从胆码和拖码的01-12中，选择1个胆码和至少2个拖码。",
            "paraphrase": "只要当期顺序摇出的5个开奖号码中，包含所选的胆码和拖码组成的注单，即为中奖。"
        },
        "rxdt_rxdt_3z3": {
            "title": "分别从胆码和拖码的01-12中，选择1-2个胆码和至少2个拖码。",
            "paraphrase": "只要当期顺序摇出的5个开奖号码中，包含所选的胆码和拖码组成的注单，即为中奖。"
        },
        "rxdt_rxdt_4z4": {
            "title": "分别从胆码和拖码的01-12中，选择1-3个胆码和至少2个拖码。",
            "paraphrase": "只要当期顺序摇出的5个开奖号码中，包含所选的胆码和拖码组成的注单，即为中奖。"
        },
        "rxdt_rxdt_5z5": {
            "title": "分别从胆码和拖码的01-12中，选择1-4个胆码和至少2个拖码。",
            "paraphrase": "只要当期顺序摇出的5个开奖号码，与所选的胆码和拖码组成的注单相同，即为中奖"
        },
        "rxdt_rxdt_6z5": {
            "title": "分别从胆码和拖码的01-12中，选择1-5个胆码和至少2个拖码。",
            "paraphrase": "只要当期顺序摇出的5个开奖号码，出现在所选的胆码和拖码组成的注单中，即为中奖。"
        },
        "rxdt_rxdt_7z5": {
            "title": "分别从胆码和拖码的01-12中，选择1-6个胆码和至少2个拖码。",
            "paraphrase": "只要当期顺序摇出的5个开奖号码，出现在所选的胆码和拖码组成的注单中，即为中奖。"
        },
        "rxdt_rxdt_8z5": {
            "title": "分别从胆码和拖码的01-12中，选择1-7个胆码和至少2个拖码。",
            "paraphrase": "只要当期顺序摇出的5个开奖号码，出现在所选的胆码和拖码组成的注单中，即为中奖。"
        }
    },
    "ky481": {
        "sx_zx_fs": {
            "title": "在自由泳、仰泳、蛙泳、蝶泳上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在自由泳、仰泳、蛙泳、蝶泳上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "sx_zx_ds": {
            "title": "手动输入或导入一个四位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个四位数号码，组合成一注。录入的号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "sx_zx_zh": {
            "title": "在自由泳、仰泳、蛙泳、蝶泳上各选一个号码，组成1-4星的组合共4注。",
            "paraphrase": "在自由泳、仰泳、蛙泳、蝶泳上各选一个号码，组成1-4星的组合共4注。所选号码的蝶泳位置与开奖号码蝶泳位置相同，即中1个四等奖；所选号码的蝶泳、蛙泳位置与开奖号码蝶泳、蛙泳位置相同，即中1个四等奖和1个三等奖；以此类推，最多中四个奖。"
        },
        "sx_zux_z24": {
            "title": "从1-8中任选4个号码组成一注。",
            "paraphrase": "从1-8中任选4个号码组成一注，所选号码与开奖号码的自由泳、仰泳、蛙泳、蝶泳数字相同，顺序不限，即为中奖。"
        },
        "sx_zux_z12": {
            "title": "从1-8中选择1个号码作为二重号；再从1-8中选择2个号码作为单号。",
            "paraphrase": "从1-8中选择1个号码作为二重号；再从1-8中选择2个号码作为单号。若所选的二重号在开奖号码的自由泳、仰泳、蛙泳、蝶泳中出现了2次，两个单号各出现1次，即为中奖。"
        },
        "sx_zux_z6": {
            "title": "从1-8中选择2个号码作为二重号。",
            "paraphrase": "从1-8中选择2个号码作为二重号。若所选择的二重号在开奖号码的自由泳、仰泳、蛙泳、蝶泳中分别出现了两次，即为中奖。"
        },
        "sx_zux_z4": {
            "title": "从1-8中选择1个号码作为三重号；再从1-8中选择1个号码作为单号。",
            "paraphrase": "从1-8中选择1个号码作为三重号；再从1-8中选择1个号码作为单号。若所选择的三重号在开奖号码的自由泳、仰泳、蛙泳、蝶泳中出现了三次，单号出现了1次，即为中奖。"
        },
        "hsm_zx_fs": {
            "title": "在仰泳、蛙泳、蝶泳上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在仰泳、蛙泳、蝶泳上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "hsm_zx_ds": {
            "title": "手动输入或导入一个三位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个三位数号码，组合成一注。录入的号码与开奖号码的仰泳、蛙泳、蝶泳一致且顺序相同，即为中奖。"
        },
        "hsm_zx_hz": {
            "title": "从3-24中选择一个号码。",
            "paraphrase": "从3-24中选择一个号码，若开奖号码的仰泳、蛙泳、蝶泳相加之和，等于所选号码，即为中奖。"
        },
        "hsm_zux_z3": {
            "title": "从1-8中选择2个号码组成两注。",
            "paraphrase": "从1-8中选择2个号码组成两注，所选号码与开奖号码的仰泳、蛙泳、蝶泳数字相同，顺序不限，即为中奖。"
        },
        "hsm_zux_z6": {
            "title": "从1-8中选择3个号码组成一注。",
            "paraphrase": "从1-8中选择3个号码组成一注，所选号码与开奖号码的仰泳、蛙泳、蝶泳数字相同，顺序不限，即为中奖。"
        },
        "hsm_zux_hh": {
            "title": "手动输入或导入号码，三个号码为一注。",
            "paraphrase": "手动输入或导入号码，三个号码为一注，对比开奖号码的仰泳、蛙泳、蝶泳，符合后三组三或组六的规则，均为中奖。"
        },
        "hsm_zux_hz": {
            "title": "从4-23中选择一个号码作为一注。",
            "paraphrase": "从4-23中选择一个号码作为一注，所选号码等于开奖号码仰泳、蛙泳、蝶泳数字（豹子号除外，如：333）相加之和，即为中奖。"
        },
        "qsm_zx_fs": {
            "title": "在自由泳、仰泳、蛙泳上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在自由泳、仰泳、蛙泳上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "qsm_zx_ds": {
            "title": "手动输入或导入一个三位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个三位数号码，组合成一注。录入的号码与开奖号码的自由泳、仰泳、蛙泳一致且顺序相同，即为中奖。"
        },
        "qsm_zx_hz": {
            "title": "从3-24中选择一个号码。",
            "paraphrase": "从3-24中选择一个号码，若开奖号码的自由泳、仰泳、蛙泳相加之和，等于所选号码，即为中奖。"
        },
        "qsm_zux_z3": {
            "title": "从1-8中选择2个号码组成两注。",
            "paraphrase": "从1-8中选择2个号码组成两注，所选号码与开奖号码的自由泳、仰泳、蛙泳数字相同，顺序不限，即为中奖。"
        },
        "qsm_zux_z6": {
            "title": "从1-8中选择3个号码组成一注。",
            "paraphrase": "从1-8中选择3个号码组成一注，所选号码与开奖号码的自由泳、仰泳、蛙泳数字相同，顺序不限，即为中奖。"
        },
        "qsm_zux_hh": {
            "title": "手动输入或导入号码，三个号码为一注。",
            "paraphrase": "手动输入或导入号码，三个号码为一注，对比开奖号码的自由泳、仰泳、蛙泳，符合前三组三或组六的规则，均为中奖。"
        },
        "qsm_zux_hz": {
            "title": "从4-23中选择一个号码作为一注。",
            "paraphrase": "从4-23中选择一个号码作为一注，所选号码等于开奖号码自由泳、仰泳、蛙泳数字（豹子号除外，如：333）相加之和，即为中奖。"
        },
        "qsm_zux_bd": {
            "title": "从1-8中选择一个号码作为一注。",
            "paraphrase": "从1-8中任选一个号码，开奖号码前三位任意1位号码与所选号码相同（不含豹子号），即为中奖。"
        },
        "em_zx_hfs": {
            "title": "在仰泳、蛙泳上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在仰泳、蛙泳上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "em_zx_hds": {
            "title": "手动输入或导入一个两位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个两位数号码，组合成一注。录入的号码与开奖号码的仰泳、蛙泳一致且顺序相同，即为中奖。"
        },
        "em_zx_hhz": {
            "title": "从2-16中选择一个号码。",
            "paraphrase": "从2-16中选择一个号码，所选号码等于开奖号码的仰泳、蛙泳数字相加之和，即为中奖。"
        },
        "em_zx_hkd": {
            "title": "从1-8中选择一个号码。",
            "paraphrase": "选择一个数值，若所选数值等于开奖号码的后两位数字之差，即为中奖。"
        },
        "em_zx_qfs": {
            "title": "在自由泳、仰泳上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在自由泳、仰泳上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "em_zx_qds": {
            "title": "手动输入或导入一个两位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个两位数号码，组合成一注。录入的号码与开奖号码的自由泳、仰泳一致且顺序相同，即为中奖。"
        },
        "em_zx_qhz": {
            "title": "从2-16中选择一个号码。",
            "paraphrase": "从2-16中选择一个号码，所选号码等于开奖号码的自由泳、仰泳数字相加之和，即为中奖。"
        },
        "em_zx_qkd": {
            "title": "从0-9中选择一个号码。",
            "paraphrase": "选择一个数值，若所选数值等于开奖号码的前两位数字之差，即为中奖。"
        },
        "em_zux_qfs": {
            "title": "从1-8中选择两个或多个号码，组成一注或多注。",
            "paraphrase": "从1-8中选择两个或多个号码，组成一注或多注，所选号码与开奖号码的自由泳、仰泳号码相同，顺序不限，即为中奖。"
        },
        "em_zux_qds": {
            "title": "手动输入或导入一个2位数号码，作为一注。",
            "paraphrase": "手动输入或导入一个2位数号码，作为一注，所选号码与开奖号码的自由泳、仰泳号码相同，顺序不限，即为中奖。"
        },
        "em_zux_qhz": {
            "title": "从3-15中选择一个号码。",
            "paraphrase": "从3-15中选择一个号码，所选号码等于开奖号码的自由泳、仰泳数字（对子号除外，如：33）相加之和，即为中奖。"
        },
        "em_zx_hfs": {
            "title": "在蛙泳、蝶泳上分别选择一个或多个号码，组合成一注或多注。",
            "paraphrase": "在蛙泳、蝶泳上分别选择一个或多个号码，组合成一注或多注。所选号码与开奖号码一致且顺序相同，即为中奖。"
        },
        "em_zx_hds": {
            "title": "手动输入或导入一个两位数号码，组合成一注。",
            "paraphrase": "手动输入或导入一个两位数号码，组合成一注。录入的号码与开奖号码的蛙泳、蝶泳一致且顺序相同，即为中奖。"
        },
        "em_zx_hhz": {
            "title": "从2-16中选择一个号码。",
            "paraphrase": "从2-16中选择一个号码，所选号码等于开奖号码的蛙泳、蝶泳数字相加之和，即为中奖。"
        },
        "em_zux_hfs": {
            "title": "从1-8中选择两个或多个号码，组成一注或多注。",
            "paraphrase": "从1-8中选择两个或多个号码，组成一注或多注，所选号码与开奖号码的蛙泳、蝶泳号码相同，顺序不限，即为中奖。"
        },
        "em_zux_hds": {
            "title": "手动输入或导入一个2位数号码，作为一注。",
            "paraphrase": "手动输入或导入一个2位数号码，作为一注，所选号码与开奖号码的蛙泳、蝶泳号码相同，顺序不限，即为中奖。"
        },
        "em_zux_hhz": {
            "title": "从3-15中选择一个号码。",
            "paraphrase": "从3-15中选择一个号码，所选号码等于开奖号码的蛙泳、蝶泳数字（对子号除外，如：33）相加之和，即为中奖。"
        },
        "dwd_dwd_dwd": {
            "title": "在自由泳、仰泳、蛙泳、蝶泳任意位置上至少选择一个号码，作为一注。",
            "paraphrase": "在自由泳、仰泳、蛙泳、蝶泳任意位置上至少选择一个号码，作为一注，所选号码与相应位置上的开奖号码一致，即为中奖。"
        },
        "rx2_zx_fs": {
            "title": "在自由泳、仰泳、蛙泳、蝶泳中任意两个位置上分别选择一个号码，组成一注。",
            "paraphrase": "在自由泳、仰泳、蛙泳、蝶泳中任意两个位置上分别选择一个号码，组成一注。若所选号码与开奖号码一致，且位置相同，即为中奖。"
        },
        "rx2_zx_ds": {
            "title": "选择两个位置，并手动输入或导入两个号码组成一注。",
            "paraphrase": "选择两个位置，并手动输入或导入两个号码组成一注。若所选号码与开奖号码一致，且位置相同，即为中奖。"
        },
        "rx2_zx_hz": {
            "title": "选择两个位置，并选择一个和值号码组成一注。",
            "paraphrase": "选择两个位置，并选择一个和值号码组成一注。所选号码等于开奖号码对应位置上的号码之和，即为中奖。"
        },
        "rx2_zux_fs": {
            "title": "选择两个位置，并选择两个号码组成一注。",
            "paraphrase": "选择两个位置，并选择两个号码组成一注。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx2_zux_ds": {
            "title": "选择两个位置，并手动输入或导入一个两位数的号码组成一注。",
            "paraphrase": "选择两个位置，并手动输入或导入一个两位数的号码组成一注。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx2_zux_hz": {
            "title": "选择两个位置，并选择一个和值号码组成一注。",
            "paraphrase": "选择两个位置，并选择一个和值号码组成一注。所选号码等于开奖号码对应位置上的号码（对子号除外，例如：33）之和，即为中奖。"
        },
        "rx3_zx_fs": {
            "title": "在自由泳、仰泳、蛙泳、蝶泳中任意三个位置上分别选择一个号码，组成一注。",
            "paraphrase": "在自由泳、仰泳、蛙泳、蝶泳中任意三个位置上分别选择一个号码，组成一注。若所选号码与开奖号码一致，且位置相同，即为中奖。"
        },
        "rx3_zx_ds": {
            "title": "选择三个位置，并手动输入或导入三个号码组成一注。",
            "paraphrase": "选择三个位置，并手动输入或导入三个号码组成一注。若所选号码与开奖号码一致，且位置相同，即为中奖。"
        },
        "rx3_zx_hz": {
            "title": "选择三个位置，选择一个和值号码组成一注。",
            "paraphrase": "选择三个位置，选择一个和值号码组成一注。所选号码等于开奖号码对应位置上的号码之和，即为中奖。"
        },
        "rx3_zux_z3": {
            "title": "选择三个位置，并选择两个号码组成两注。",
            "paraphrase": "选择三个位置，并选择两个号码组成两注。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx3_zux_z6": {
            "title": "选择三个位置，并选择三个号码组成一注。",
            "paraphrase": "选择三个位置，并选择三个号码组成一注。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx3_zux_hh": {
            "title": "选择三个位置，并手动输入或者导入三个号码组成一注（不包含豹子号）。",
            "paraphrase": "选择三个位置，并手动输入或者导入三个号码组成一注（不包含豹子号）。若在选定的位置上，所选号码与开奖号码相同，顺序不限，即为中奖。"
        },
        "rx3_zux_hz": {
            "title": "选择三个位置，并选择一个和值号码构成一注。",
            "paraphrase": "选择三个位置，并选择一个和值号码构成一注。所选号码与开奖号码对应位置上的号码（豹子号除外，例如：333）之和相同，即为中奖。"
        },
    },
    "lhc": {
        "tm_tm_zx": {
            "title": "从1-49这49个号码中任选一个号码作为一注，下注号码与特码的开奖号码相同，即为中奖。",
            "paraphrase": "从1-49这49个号码中任选一个号码作为一注，下注号码与特码的开奖号码相同，即为中奖。"
        },
        "tm_tm_sx": {
            "title": "从十二生肖中选择一个生肖作为一注，特码的开奖号码属于所选生肖对应的号码，即为中奖。",
            "paraphrase": "从十二生肖中选择一个生肖作为一注，特码的开奖号码属于所选生肖对应的号码，即为中奖。"
        },
        "tm_tm_sb": {
            "title": "从红波、蓝波、绿波三个色波中选择一个作为一注，特码的开奖号码颜色与所选色波颜色相同，即为中奖。",
            "paraphrase": "从红波、蓝波、绿波三个色波中选择一个作为一注，特码的开奖号码颜色与所选色波颜色相同，即为中奖。"
        },
        "tm_tm_dxds": {
            "title": "从大、小、单、双中任选一个作为一注，投注项与特码的开奖号码相符时，即为中奖（1-24为小，25-49为大）。",
            "paraphrase": "从大、小、单、双中任选一个作为一注，投注项与特码的开奖号码相符时，即为中奖（1-24为小，25-49为大）。"
        },
        "tm_tm_ws": {
            "title": "从0尾-9尾中任选一个作为一注，特码的开奖号码属于所选尾数对应的号码，即为中奖。",
            "paraphrase": "从0尾-9尾中任选一个作为一注，特码的开奖号码属于所选尾数对应的号码，即为中奖。"
        },
        "zt1m_zt1m_zt1m": {
            "title": "选择1个号码作为1注，只要下注号码出现在当期开奖号码中(正码+特码)，即为中奖",
            "paraphrase": "选择1个号码作为1注，只要下注号码出现在当期开奖号码中(正码+特码)，即为中奖"
        },
        "zt1x_zt1x_zt1x": {
            "title": "选择1个生肖作为1注，只要当期号码（正码+特码）中，有1个或以上的号码属于所选的生肖，即为中奖。",
            "paraphrase": "选择1个生肖作为1注，只要当期号码（正码+特码）中，有1个或以上的号码属于所选的生肖，即为中奖。"
        },
        "ztws_ztws_ztws": {
            "title": "选择1个尾数作为1注，只要当期号码（正码+特码）中，有1个或以上的号码属于所选的尾数范围，即为中奖。",
            "paraphrase": "选择1个尾数作为1注，只要当期号码（正码+特码）中，有1个或以上的号码属于所选的尾数范围，即为中奖。"
        },
        "lx_lx_2lx": {
            "title": "选择两个生肖作为1注，若这两个生肖中的每1个，都能在开奖号码中找到与之对应的号码（1个或以上），即中奖。",
            "paraphrase": "选择两个生肖作为1注，若这两个生肖中的每1个，都能在开奖号码中找到与之对应的号码（1个或以上），即中奖。"
        },
        "lx_lx_3lx": {
            "title": "选择3个生肖作为1注，若这3个生肖中的每1个，都能在开奖号码中找到与之对应的号码（1个或以上），即中奖。",
            "paraphrase": "选择3个生肖作为1注，若这3个生肖中的每1个，都能在开奖号码中找到与之对应的号码（1个或以上），即中奖。"
        },
        "lx_lx_4lx": {
            "title": "选择4个生肖作为1注，若这4个生肖中的每1个，都能在开奖号码中找到与之对应的号码（1个或以上），即中奖。",
            "paraphrase": "选择4个生肖作为1注，若这4个生肖中的每1个，都能在开奖号码中找到与之对应的号码（1个或以上），即中奖。"
        },
        "lm_lm_2z2": {
            "title": "选择两个号码作为1注，当期开奖号码的正码中，出现所选的2个号码，即为中奖。",
            "paraphrase": "选择两个号码作为1注，当期开奖号码的正码中，出现所选的2个号码，即为中奖。"
        },
        "lm_lm_3z2": {
            "title": "选择3个号码作为1注，当期开奖号码的正码中，出现所选3个号码中任意2个或3个，都为中奖。",
            "paraphrase": "选择3个号码作为1注，当期开奖号码的正码中，出现所选3个号码中任意2个或3个，都为中奖。"
        },
        "lm_lm_3z3": {
            "title": "选择3个号码作为1注，当期开奖号码的正码中，出现所选的3个号码，即为中奖。",
            "paraphrase": "选择3个号码作为1注，当期开奖号码的正码中，出现所选的3个号码，即为中奖。"
        },
        "hzdxds_hzdxds_hzdxds": {
            "title": "所有7个开奖号码的数值总和叫做和值，如果和值大于或等于175则“大”中奖，小于175则“小”中奖；和值是单数，则“单”中奖，是双数则“双”中奖。",
            "paraphrase": "所有7个开奖号码的数值总和叫做和值，如果和值大于或等于175则“大”中奖，小于175则“小”中奖；和值是单数，则“单”中奖，是双数则“双”中奖。"
        }
    },
};
sessionStorage.setItem('LotteryClass',JSON.stringify(LotteryClass));
sessionStorage.setItem('LotteryTips',JSON.stringify(LotteryTips));
