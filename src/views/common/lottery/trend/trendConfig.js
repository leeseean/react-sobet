
import { calcDxds, calcDsgs, calcDxgs, cacl3xZutai, calcShunzi, arrToCountItemObj, calcBjl, calcNiuniu, calcLhh, calcHezhi, calcKuadu } from '../../../../utils/algorithm';

export default {
    ssc: {
        wx_zx_fs: {
            area: [0, 1, 2, 3, 4],
            shapeName: '五星组态',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const obj = arrToCountItemObj(code.split(','));
                const keys = Object.keys(obj);
                const values = Object.values(obj);
                const shapeConfig = {  //
                    5: '<em class="shape-item"><i class="shape--zu120">组120</i></em>',
                    4: '<em class="shape-item"><i class="shape--zu60">组60</i></em>',
                    3: values.includes(3) ? '<em class="shape-item"><i class="shape--zu20">组20</i></em>' : '<em class="shape-item"><i class="shape--zu30">组30</i></em>',
                    2: values.includes(4) ? '<em class="shape-item"><i class="shape--zu5">组5</i></em>' : '<em class="shape-item"><i class="shape--zu10">组10</i></em>',
                    1: '<em class="shape-item"><i>---</i></em>',
                }
                return shapeConfig[keys.length];
            }
        },
        get wx_zx_ds() {
            return this['wx_zx_fs'];
        },
        get wx_zux_z120() {
            return this['wx_zx_fs'];
        },
        get wx_zux_z60() {
            return this['wx_zx_fs'];
        },
        get wx_zux_z30() {
            return this['wx_zx_fs'];
        },
        get wx_zux_z20() {
            return this['wx_zx_fs'];
        },
        get wx_zux_z10() {
            return this['wx_zx_fs'];
        },
        get wx_zux_z5() {
            return this['wx_zx_fs'];
        },
        sx_zx_fs: {
            area: [0, 1, 2, 3],
            shapeName: '四星组态',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const obj = arrToCountItemObj(codeArr);
                const keys = Object.keys(obj);
                const values = Object.values(obj);
                const shapeConfig = {  //
                    4: '<em class="shape-item"><i class="shape--zu24">组24</i></em>',
                    3: '<em class="shape-item"><i class="shape--zu12">组12</i></em>',
                    2: values.includes(3) ? '<em class="shape-item"><i class="shape--zu4">组4</i></em>' : '<em class="shape-item"><i class="shape--zu6">组6</i></em>',
                    1: '<em class="shape-item"><i>---</i></em>',
                }
                return shapeConfig[keys.length];
            }
        },
        get sx_zx_ds() {
            return this['sx_zx_fs'];
        },
        get sx_zux_z24() {
            return this['sx_zx_fs'];
        },
        get sx_zux_z12() {
            return this['sx_zx_fs'];
        },
        get sx_zux_z6() {
            return this['sx_zx_fs'];
        },
        get sx_zux_z4() {
            return this['sx_zx_fs'];
        },
        qsm_zx_fs: {
            area: [0, 1, 2],
            shapeName: '前三组态',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const obj = arrToCountItemObj(codeArr);
                const keys = Object.keys(obj);
                const shapeConfig = {  //
                    3: '<em class="shape-item"><i class="shape--zu6">组六</i></em>',
                    2: '<em class="shape-item"><i class="shape--zu3">组三</i></em>',
                    1: '<em class="shape-item"><i>---</i></em>',
                }
                return shapeConfig[keys.length];
            }
        },
        get qsm_zx_ds() {
            return this['qsm_zx_fs'];
        },
        get qsm_zux_z3() {
            return this['qsm_zx_fs'];
        },
        get qsm_zux_z6() {
            return this['qsm_zx_fs'];
        },
        get qsm_zux_hh() {
            return this['qsm_zx_fs'];
        },
        get qsm_zux_bd() {
            return this['qsm_zx_fs'];
        },
        qsm_zx_hz: {
            area: [0, 1, 2],
            shapeName: '直选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        qsm_zx_kd: {
            area: [0, 1, 2],
            shapeName: '直选跨度',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const kd = calcKuadu(codeArr);
                return `<em class="shape-item"><i class="shape--kd">${kd}</i></em>`;
            }
        },
        qsm_zux_hz: {
            area: [0, 1, 2],
            shapeName: '组选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const dumpArr = [...new Set(codeArr)];
                if (dumpArr.length === 1) {//组选和值不算bao子号
                    return `<em class="shape-item">---</em>`;
                }
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        zsm_zx_fs: {
            area: [1, 2, 3],
            shapeName: '中三组态',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const obj = arrToCountItemObj(codeArr);
                const keys = Object.keys(obj);
                const shapeConfig = {  //
                    3: '<em class="shape-item"><i class="shape--zu6">组六</i></em>',
                    2: '<em class="shape-item"><i class="shape--zu3">组三</i></em>',
                    1: '<em class="shape-item"><i>---</i></em>',
                }
                return shapeConfig[keys.length];
            }
        },
        get zsm_zx_ds() {
            return this['zsm_zx_fs'];
        },
        get zsm_zux_z3() {
            return this['zsm_zx_fs'];
        },
        get zsm_zux_z6() {
            return this['zsm_zx_fs'];
        },
        get zsm_zux_hh() {
            return this['zsm_zx_fs'];
        },
        get zsm_zux_bd() {
            return this['zsm_zx_fs'];
        },
        zsm_zx_hz: {
            area: [1, 2, 3],
            shapeName: '直选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        zsm_zx_kd: {
            area: [1, 2, 3],
            shapeName: '直选跨度',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const kd = calcKuadu(codeArr);
                return `<em class="shape-item"><i class="shape--kd">${kd}</i></em>`;
            }
        },
        zsm_zux_hz: {
            area: [1, 2, 3],
            shapeName: '组选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const dumpArr = [...new Set(codeArr)];
                if (dumpArr.length === 1) {//组选和值不算bao子号
                    return `<em class="shape-item">---</em>`;
                }
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        hsm_zx_fs: {
            area: [2, 3, 4],
            shapeName: '后三组态',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const obj = arrToCountItemObj(codeArr);
                const keys = Object.keys(obj);
                const shapeConfig = {  //
                    3: '<em class="shape-item"><i class="shape--zu6">组六</i></em>',
                    2: '<em class="shape-item"><i class="shape--zu3">组三</i></em>',
                    1: '<em class="shape-item"><i>---</i></em>',
                }
                return shapeConfig[keys.length];
            }
        },
        get hsm_zx_ds() {
            return this['hsm_zx_fs'];
        },
        get hsm_zux_z3() {
            return this['hsm_zx_fs'];
        },
        get hsm_zux_z6() {
            return this['hsm_zx_fs'];
        },
        get hsm_zux_hh() {
            return this['hsm_zx_fs'];
        },
        get hsm_zux_bd() {
            return this['hsm_zx_fs'];
        },
        hsm_zx_hz: {
            area: [2, 3, 4],
            shapeName: '直选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        hsm_zx_kd: {
            area: [2, 3, 4],
            shapeName: '直选跨度',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const kd = calcKuadu(codeArr);
                return `<em class="shape-item"><i class="shape--kd">${kd}</i></em>`;
            }
        },
        hsm_zux_hz: {
            area: [2, 3, 4],
            shapeName: '组选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const dumpArr = [...new Set(codeArr)];
                if (dumpArr.length === 1) {//组选和值不算bao子号
                    return `<em>---</em>`;
                }
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        em_zx_qfs: {
            area: [0, 1],
            shapeName: '直选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        get em_zx_qds() {
            return this['em_zx_qfs'];
        },
        get em_zx_qhz() {
            return this['em_zx_qfs'];
        },
        em_zx_qkd: {
            area: [0, 1],
            shapeName: '直选跨度',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const kd = calcKuadu(codeArr);
                return `<em class="shape-item"><i class="shape--kd">${kd}</i></em>`;
            }
        },
        em_zux_qfs: {
            area: [0, 1],
            shapeName: '组选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const dumpArr = [...new Set(codeArr)];
                if (dumpArr.length === 1) {//组选和值不算dui子号
                    return `<em class="shape-item">---</em>`;
                }
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        get em_zux_qds() {
            return this['em_zux_qfs'];
        },
        get em_zux_qhz() {
            return this['em_zux_qfs'];
        },
        get em_zux_qbd() {
            return this['em_zux_qfs'];
        },
        em_zx_hfs: {
            area: [3, 4],
            shapeName: '直选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        get em_zx_hds() {
            return this['em_zx_hfs'];
        },
        get em_zx_hhz() {
            return this['em_zx_hfs'];
        },
        em_zx_hkd: {
            area: [3, 4],
            shapeName: '直选跨度',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const kd = calcKuadu(codeArr);
                return `<em class="shape-item"><i class="shape--kd">${kd}</i></em>`;
            }
        },
        em_zux_hfs: {
            area: [3, 4],
            shapeName: '组选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const dumpArr = [...new Set(codeArr)];
                if (dumpArr.length === 1) {//组选和值不算dui子号
                    return `<em class="shape-item">---</em>`;
                }
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        get em_zux_hds() {
            return this['em_zux_hfs'];
        },
        get em_zux_hhz() {
            return this['em_zux_hfs'];
        },
        get em_zux_hbd() {
            return this['em_zux_hfs'];
        },
        dwd_dwd_dwd: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd_qs1: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd_qs2: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd_z31: {
            area: [1, 2, 3],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd_z32: {
            area: [1, 2, 3],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd_hs1: {
            area: [2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd_hs2: {
            area: [2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd4_4x1: {
            area: [1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd4_4x2: {
            area: [1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd4_4x3: {
            area: [1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd5_5x1: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd5_5x2: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd5_5x3: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        dxds_dxds_h2: {
            area: [3, 4],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">十位</em><em class="shape-item">个位</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return codeArr.map(num => {
                    return `<em class="shape-item">${calcDxds(num, 4.5)['dx'] + calcDxds(num, 4.5)['ds']}</em>`;
                }).join('');
            }
        },
        dxds_dxds_q2: {
            area: [0, 1],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">万位</em><em class="shape-item">千位</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return codeArr.map(num => {
                    return `<em class="shape-item">${calcDxds(num, 4.5)['dx'] + calcDxds(num, 4.5)['ds']}</em>`;
                }).join('');
            }
        },
        dxds_dxds_h3: {
            area: [2, 3, 4],
            widthConfig: {
                col1: 60,
                col2: 90
            },
            shapeName: `<em class="shape-item">百位</em><em class="shape-item">十位</em><em class="shape-item">个位</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return codeArr.map(num => {
                    return `<em class="shape-item">${calcDxds(num, 4.5)['dx'] + calcDxds(num, 4.5)['ds']}</em>`;
                }).join('');
            }
        },
        dxds_dxds_q3: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 60,
                col2: 90
            },
            shapeName: `<em class="shape-item">万位</em><em class="shape-item">千位</em><em class="shape-item">百位</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return codeArr.map(num => {
                    return `<em class="shape-item">${calcDxds(num, 4.5)['dx'] + calcDxds(num, 4.5)['ds']}</em>`;
                }).join('');
            }
        },
        dxds_dxgs_wx: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">大</em><em class="shape-item">小</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcDxgs(codeArr, 4.5)['da'] + calcDxgs(codeArr, 4.5)['xiao'];
            }
        },
        dxds_dxgs_sx: {
            area: [1, 2, 3, 4],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">大</em><em class="shape-item">小</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcDxgs(codeArr, 4.5)['da'] + calcDxgs(codeArr, 4.5)['xiao'];
            }
        },
        dxds_dxgs_qs: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">大</em><em class="shape-item">小</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcDxgs(codeArr, 4.5)['da'] + calcDxgs(codeArr, 4.5)['xiao'];
            }
        },
        dxds_dxgs_zs: {
            area: [1, 2, 3],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">大</em><em class="shape-item">小</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcDxgs(codeArr, 4.5)['da'] + calcDxgs(codeArr, 4.5)['xiao'];
            }
        },
        dxds_dxgs_hs: {
            area: [2, 3, 4],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">大</em><em class="shape-item">小</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcDxgs(codeArr, 4.5)['da'] + calcDxgs(codeArr, 4.5)['xiao'];
            }
        },
        dxds_dsgs_wx: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">单</em><em class="shape-item">双</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcDsgs(codeArr)['dan'] + calcDsgs(codeArr)['shuang'];
            }
        },
        dxds_dsgs_sx: {
            area: [1, 2, 3, 4],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">单</em><em class="shape-item">双</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcDsgs(codeArr)['dan'] + calcDsgs(codeArr)['shuang'];
            }
        },
        dxds_dsgs_qs: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">单</em><em class="shape-item">双</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcDsgs(codeArr)['dan'] + calcDsgs(codeArr)['shuang'];
            }
        },
        dxds_dsgs_zs: {
            area: [1, 2, 3],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">单</em><em class="shape-item">双</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcDsgs(codeArr)['dan'] + calcDsgs(codeArr)['shuang'];
            }
        },
        dxds_dsgs_hs: {
            area: [2, 3, 4],
            widthConfig: {
                col1: 75,
                col2: 95
            },
            shapeName: `<em class="shape-item">单</em><em class="shape-item">双</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcDsgs(codeArr)['dan'] + calcDsgs(codeArr)['shuang'];
            }
        },
        zh_hzdxds_5xhz: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 70,
                col2: 90
            },
            shapeName: `<em class="shape-item">和值</em><em class="shape-item">大小</em><em class="shape-item">单双</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>` + `<em class="shape-item">${calcDxds(codeArr, 23)['dx']}</em>` + `<em class="shape-item">${calcDxds(codeArr, 23)['ds']}</em>`;
            }
        },
        zh_hzdxds_q3hz: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 70,
                col2: 90
            },
            shapeName: `<em class="shape-item">和值</em><em class="shape-item">大小</em><em class="shape-item">单双</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>` + `<em class="shape-item">${calcDxds(codeArr, 14)['dx']}</em>` + `<em class="shape-item">${calcDxds(codeArr, 14)['ds']}</em>`;
            }
        },
        zh_hzdxds_z3hz: {
            area: [1, 2, 3],
            widthConfig: {
                col1: 70,
                col2: 90
            },
            shapeName: `<em class="shape-item">和值</em><em class="shape-item">大小</em><em class="shape-item">单双</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>` + `<em class="shape-item">${calcDxds(codeArr, 14)['dx']}</em>` + `<em class="shape-item">${calcDxds(codeArr, 14)['ds']}</em>`;
            }
        },
        zh_hzdxds_h3hz: {
            area: [2, 3, 4],
            widthConfig: {
                col1: 70,
                col2: 90
            },
            shapeName: `<em class="shape-item">和值</em><em class="shape-item">大小</em><em class="shape-item">单双</em>`,
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>` + `<em class="shape-item">${calcDxds(codeArr, 14)['dx']}</em>` + `<em class="shape-item">${calcDxds(codeArr, 14)['ds']}</em>`;
            }
        },
        qw_lhh_wq: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lhh_wb: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lhh_ws: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lhh_wg: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lhh_qb: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lhh_qs: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lhh_qg: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lhh_bs: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lhh_bg: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lhh_sg: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lh_wq: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lh_wb: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lh_ws: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lh_wg: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lh_qb: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lh_qs: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lh_qg: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lh_bs: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lh_bg: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_lh_sg: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        qw_xt_q3: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 90,
                col2: 100
            },
            shapeName: '前三',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return cacl3xZutai(codeArr);
            }
        },
        qw_xt_z3: {
            area: [1, 2, 3],
            widthConfig: {
                col1: 90,
                col2: 100
            },
            shapeName: '中三',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return cacl3xZutai(codeArr);
            }
        },
        qw_xt_h3: {
            area: [2, 3, 4],
            widthConfig: {
                col1: 90,
                col2: 100
            },
            shapeName: '后三',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return cacl3xZutai(codeArr);
            }
        },
        get qw_ts_yffs() {
            return this['wx_zx_fs'];
        },
        get qw_ts_hscs() {
            return this['wx_zx_fs'];
        },
        nn_nn_nn: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 70,
                col2: 90
            },
            shapeName: '<em class="shape-item">牛牛</em><em class="shape-item">大小</em><em class="shape-item">单双</em>',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcNiuniu(codeArr).nn + calcNiuniu(codeArr).dx + calcNiuniu(codeArr).ds;
            }
        },
        sh_sh_wx: {
            area: [0, 1, 2, 3, 4],
            shapeName: '梭哈',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const obj = arrToCountItemObj(codeArr);
                const keys = Object.keys(obj);
                const values = Object.values(obj);
                const shapeConfig = {  //
                    5: calcShunzi(codeArr, 0, 9) ? '<em class="shape-item"><i class="shape--shunzi">顺子</i></em>' : '<em class="shape-item"><i class="shape--danpai">单牌</i></em>',
                    4: '<em class="shape-item"><i class="shape--yidui">一对</em>',
                    3: values.includes(3) ? '<em class="shape-item"><i class="shape--santiao">三条</i></em>' : '<em class="shape-item"><i class="shape--liangdui">两对</i></em>',
                    2: values.includes(4) ? '<em class="shape-item"><i class="shape--sitiao">四条</i></em>' : '<em class="shape-item"><i class="shape--hulu">葫芦</i></em>',
                    1: '<em class="shape-item"><i class="shape--baozi">豹子</i></em>',
                }
                return shapeConfig[keys.length];
            }
        },
        bjl_bjl_bjl: {
            area: [0, 1, 3, 4],
            widthConfig: {
                col1: 70,
                col2: 90
            },
            shapeName: '百家乐',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcBjl(codeArr);
            }
        },
        rx2_zx_fs: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx2_zx_ds: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx2_zx_hz: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx2_zux_fs: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx2_zux_ds: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx2_zux_hz: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx3_zx_fs: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx3_zx_ds: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx3_zx_hz: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx3_zux_z3: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx3_zux_z6: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx3_zux_hh: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx3_zux_hz: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx4_zx_fs: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx4_zx_ds: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx4_zux_z24: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx4_zux_z12: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx4_zux_z6: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rx4_zux_z4: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
    },
    '11x5': {
        sm_sm_zxfs: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get sm_sm_zxds() {
            return this['sm_sm_zxfs'];
        },
        get sm_sm_zuxfs() {
            return this['sm_sm_zxfs'];
        },
        get sm_sm_zuxds() {
            return this['sm_sm_zxfs'];
        },
        em_em_zxfs: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get em_em_zxds() {
            return this['em_em_zxfs'];
        },
        get em_em_zuxfs() {
            return this['em_em_zxfs'];
        },
        get em_em_zuxds() {
            return this['em_em_zxfs'];
        },
        bdd_bdd_bdd11y: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        dwd_dwd_dwd11y: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rxfs_rxfs_1z1: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get rxfs_rxfs_2z2() {
            return this['rxfs_rxfs_1z1'];
        },
        get rxfs_rxfs_3z3() {
            return this['rxfs_rxfs_1z1'];
        },
        get rxfs_rxfs_4z4() {
            return this['rxfs_rxfs_1z1'];
        },
        get rxfs_rxfs_5z5() {
            return this['rxfs_rxfs_1z1'];
        },
        get rxfs_rxfs_6z5() {
            return this['rxfs_rxfs_1z1'];
        },
        get rxfs_rxfs_7z5() {
            return this['rxfs_rxfs_1z1'];
        },
        get rxfs_rxfs_8z5() {
            return this['rxfs_rxfs_1z1'];
        },
        rxds_rxds_1z1: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get rxds_rxds_2z2() {
            return this['rxds_rxds_1z1'];
        },
        get rxds_rxds_3z3() {
            return this['rxds_rxds_1z1'];
        },
        get rxds_rxds_4z4() {
            return this['rxds_rxds_1z1'];
        },
        get rxds_rxds_5z5() {
            return this['rxds_rxds_1z1'];
        },
        get rxds_rxds_6z5() {
            return this['rxds_rxds_1z1'];
        },
        get rxds_rxds_7z5() {
            return this['rxds_rxds_1z1'];
        },
        get rxds_rxds_8z5() {
            return this['rxds_rxds_1z1'];
        },
        rxdt_rxdt_2z2: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get rxdt_rxdt_3z3() {
            return this['rxdt_rxdt_2z2'];
        },
        get rxdt_rxdt_4z4() {
            return this['rxdt_rxdt_2z2'];
        },
        get rxdt_rxdt_5z5() {
            return this['rxdt_rxdt_2z2'];
        },
        get rxdt_rxdt_6z5() {
            return this['rxdt_rxdt_2z2'];
        },
        get rxdt_rxdt_7z5() {
            return this['rxdt_rxdt_2z2'];
        },
        get rxdt_rxdt_8z5() {
            return this['rxdt_rxdt_2z2'];
        },
        qw_qw_dds: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get qw_qw_czw() {
            return this['qw_qw_dds'];
        },
    },
    k3: {
        dxds_dxds_dxds: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '和值',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                const { dx, ds } = calcDxds(hz, 11);
                return `<em class="shape-item" method="dxds_dxds_dxds">${hz}</em>` + `<em class="shape-item" method="dxds_dxds_dxds">${dx}</em>` + `<em class="shape-item" method="dxds_dxds_dxds">${ds}</em>`;
            }
        },
        get hz_hz_hz() {
            return this['dxds_dxds_dxds'];
        },
        th3_th3_th3dx: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 90,
                col2: 100
            },
            shapeName: '和值',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const _arr = [...new Set(codeArr)];
                const shapeConfig = {
                    1: '<em class="shape-item"><i class="shape--3th">三同号</i></em>',
                    2: '<em class="shape-item"><i class="shape--2th">二同号</i></em>',
                    3: '<em class="shape-item"><i class="shape--3bt">三不同</i></em>',
                }
                return shapeConfig[_arr.length];
            }
        },
        get th3_th3_th3tx() {
            return this['th3_th3_th3dx'];
        },
        get bth3_bth3_ds() {
            return this['th3_th3_th3dx'];
        },
        get bth3_bth3_fs() {
            return this['th3_th3_th3dx'];
        },
        get bth3_lh3_dx() {
            return this['th3_th3_th3dx'];
        },
        get bth3_lh3_tx() {
            return this['th3_th3_th3dx'];
        },
        get bth3_bs_dx() {
            return this['th3_th3_th3dx'];
        },
        get bth3_bs_tx() {
            return this['th3_th3_th3dx'];
        },
        get bth3_z6_dx() {
            return this['th3_th3_th3dx'];
        },
        get bth3_z6_tx() {
            return this['th3_th3_th3dx'];
        },
        get th2_th2dx_fs() {
            return this['th3_th3_th3dx'];
        },
        get th2_th2dx_ds() {
            return this['th3_th3_th3dx'];
        },
        get th2_th2fx_fx() {
            return this['th3_th3_th3dx'];
        },
        get bth2_bth2_fs() {
            return this['th3_th3_th3dx'];
        },
        get bth2_bth2_ds() {
            return this['th3_th3_th3dx'];
        },
        get cygh_cygh_cygh() {
            return this['th3_th3_th3dx'];
        },
    },
    pk10: {
        cq1_cq1_cq1: {
            area: [0],
            widthConfig: {
                col1: 140,
                col2: 150
            }
        },
        cq2_cq2_cq2: {
            area: [0, 1],
            widthConfig: {
                col1: 140,
                col2: 150
            }
        },
        get cq2_cq2_ds() {
            return this['cq2_cq2_cq2'];
        },
        cq3_cq3_cq3: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            }
        },
        get cq3_cq3_ds() {
            return this['cq3_cq3_cq3'];
        },
        cq4_cq4_cq4: {
            area: [0, 1, 2, 3],
            widthConfig: {
                col1: 140,
                col2: 150
            }
        },
        get cq4_cq4_ds() {
            return this['cq4_cq4_cq4'];
        },
        cq5_cq5_cq5: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            }
        },
        get cq5_cq5_ds() {
            return this['cq5_cq5_cq5'];
        },
        dwd_dwd_q5: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            }
        },
        dwd_dwd_h5: {
            area: [5, 6, 7, 8, 9],
            widthConfig: {
                col1: 140,
                col2: 150
            }
        },
        dx_dx_d1: {
            area: [0],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '冠军',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const gj = codeArr[0];
                const dx = calcDxds(codeArr).dx;
                return `<em class="shape-item"><i class="shape--num">${gj}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        dx_dx_d2: {
            area: [1],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '亚军',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const gj = codeArr[0];
                const dx = calcDxds(codeArr).dx;
                return `<em class="shape-item"><i class="shape--num">${gj}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        dx_dx_d3: {
            area: [2],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '第三名',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const gj = codeArr[0];
                const dx = calcDxds(codeArr).dx;
                return `<em class="shape-item"><i class="shape--num">${gj}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        dx_dx_d4: {
            area: [3],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '第四名',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const gj = codeArr[0];
                const dx = calcDxds(codeArr).dx;
                return `<em class="shape-item"><i class="shape--num">${gj}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        dx_dx_d5: {
            area: [4],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '第五名',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const gj = codeArr[0];
                const dx = calcDxds(codeArr).dx;
                return `<em class="shape-item"><i class="shape--num">${gj}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        dx_dx_q2: {
            area: [0, 1],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '冠亚和值',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                const dx = calcDxds(codeArr).dx;
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        hz_hz_q2: {
            area: [0, 1],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '冠亚和值',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        hz_hz_q3: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '前三和值',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        ds_ds_d1: {
            area: [0],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '冠军',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const gj = codeArr[0];
                const dx = calcDxds(codeArr).ds;
                return `<em class="shape-item"><i class="shape--num">${gj}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        ds_ds_d2: {
            area: [1],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '亚军',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const gj = codeArr[0];
                const dx = calcDxds(codeArr).ds;
                return `<em class="shape-item"><i class="shape--num">${gj}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        ds_ds_d3: {
            area: [2],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '第三名',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const gj = codeArr[0];
                const dx = calcDxds(codeArr).ds;
                return `<em class="shape-item"><i class="shape--num">${gj}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        ds_ds_d4: {
            area: [3],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '第四名',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const gj = codeArr[0];
                const dx = calcDxds(codeArr).ds;
                return `<em class="shape-item"><i class="shape--num">${gj}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        ds_ds_d5: {
            area: [4],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '第五名',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const gj = codeArr[0];
                const dx = calcDxds(codeArr).ds;
                return `<em class="shape-item"><i class="shape--num">${gj}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        ds_ds_q2: {
            area: [0, 1],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '冠亚和值',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                const dx = calcDxds(codeArr).ds;
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>` + `<em class="shape-item">${dx}</em>`;
            }
        },
        lh_lh_1v10: {
            area: [0, 9],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '1v10',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcLhh(codeArr[0], codeArr[1]);
            }
        },
        lh_lh_2v9: {
            area: [1, 8],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '2v9',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcLhh(codeArr[0], codeArr[1]);
            }
        },
        lh_lh_3v8: {
            area: [2, 7],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '3v8',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcLhh(codeArr[0], codeArr[1]);
            }
        },
        lh_lh_4v7: {
            area: [3, 6],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '4v7',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcLhh(codeArr[0], codeArr[1]);
            }
        },
        lh_lh_5v6: {
            area: [4, 5],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '5v6',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcLhh(codeArr[0], codeArr[1]);
            }
        },
        rx2_zx_fs: {
            area: [],
            widthConfig: {
                col1: 140,
                col2: 150
            }
        },
        get rx2_zx_ds() {
            return this['rx2_zx_fs'];
        },
        get rx3_zx_fs() {
            return this['rx2_zx_fs'];
        },
        get rx3_zx_ds() {
            return this['rx2_zx_fs'];
        }
    },
    '3d': {
        sm_zx_fs: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '三星组态',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const _arr = [...new Set(codeArr)];
                const shapeConfig = {
                    1: '<em class="shape-item">---</em>',
                    2: '<em class="shape-item"><i class="shape--zu3">组三</i></em>',
                    3: '<em class="shape-item"><i class="shape--zu6">组六</i></em>',
                };
                return shapeConfig[_arr.length];
            }
        },
        get sm_zx_ds() {
            return this['sm_zx_fs']
        },
        get sm_zux_z3() {
            return this['sm_zx_fs']
        },
        get sm_zux_z6() {
            return this['sm_zx_fs']
        },
        get sm_zux_hh() {
            return this['sm_zx_fs']
        },
        sm_zx_hz: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '直选和值',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        sm_zux_hz: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 80,
                col2: 100
            },
            shapeName: '组选和值',
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const dumpArr = [...new Set(codeArr)];
                if (dumpArr.length === 1) {//组选和值不算bao子号
                    return `<em class="shape-item">---</em>`;
                }
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        em_zx_hfs: {
            area: [1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get em_zx_hds() {
            return this['em_zx_hfs'];
        },
        get em_zux_hfs() {
            return this['em_zx_hfs'];
        },
        get em_zux_qds() {
            return this['em_zx_hfs'];
        },
        em_zx_qfs: {
            area: [0, 1],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get em_zx_qds() {
            return this['em_zx_qfs'];
        },
        get em_zux_qfs() {
            return this['em_zx_qfs'];
        },
        get em_zux_qds() {
            return this['em_zx_qfs'];
        },
        dwd_dwd_dwd: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            }
        },
        bdd_bdd_bdd1: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            }
        },
        get bdd_bdd_bdd2() {
            return this['bdd_bdd_bdd1'];
        },
        qw_lhh_bs: {
            area: [0, 1],
            shapeName: '百十',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcLhh(codeArr[0], codeArr[1]);
            }
        },
        qw_lhh_bg: {
            area: [0, 2],
            shapeName: '百个',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcLhh(codeArr[0], codeArr[1]);
            }
        },
        qw_lhh_sg: {
            area: [1, 2],
            shapeName: '十个',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return calcLhh(codeArr[0], codeArr[1]);
            }
        },
        qw_xt_xt: {
            area: [0, 1, 2],
            shapeName: '形态',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                return cacl3xZutai(codeArr);
            }
        }
    },
    kl12: {
        sm_sm_zxfs: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get sm_sm_zxds() {
            return this['sm_sm_zxfs'];
        },
        get sm_sm_zuxfs() {
            return this['sm_sm_zxfs'];
        },
        get sm_sm_zuxds() {
            return this['sm_sm_zxfs'];
        },
        em_em_zxfs: {
            area: [0, 1],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get em_em_zxds() {
            return this['em_em_zxfs'];
        },
        get em_em_zuxfs() {
            return this['em_em_zxfs'];
        },
        get em_em_zuxds() {
            return this['em_em_zxfs'];
        },
        bdd_bdd_3x1m: {
            area: [0, 1, 2],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd_4x1m: {
            area: [0, 1, 2, 3],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        bdd_bdd_5x1m: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        dwd_dwd_dwd11y: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        rxfs_rxfs_2z2: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get rxfs_rxfs_3z3() {
            return this['rxfs_rxfs_2z2'];
        },
        get rxfs_rxfs_3z3() {
            return this['rxfs_rxfs_2z2'];
        },
        get rxfs_rxfs_4z4() {
            return this['rxfs_rxfs_2z2'];
        },
        get rxfs_rxfs_5z5() {
            return this['rxfs_rxfs_2z2'];
        },
        get rxfs_rxfs_6z5() {
            return this['rxfs_rxfs_2z2'];
        },
        get rxfs_rxfs_7z5() {
            return this['rxfs_rxfs_2z2'];
        },
        get rxfs_rxfs_8z5() {
            return this['rxfs_rxfs_2z2'];
        },
        rxds_rxds_2z2: {
            area: [0, 1, 2, 3, 4],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        get rxds_rxds_3z3() {
            return this['rxds_rxds_2z2'];
        },
        get rxds_rxds_3z3() {
            return this['rxds_rxds_2z2'];
        },
        get rxds_rxds_4z4() {
            return this['rxds_rxds_2z2'];
        },
        get rxds_rxds_5z5() {
            return this['rxds_rxds_2z2'];
        },
        get rxds_rxds_6z5() {
            return this['rxds_rxds_2z2'];
        },
        get rxds_rxds_7z5() {
            return this['rxds_rxds_2z2'];
        },
        get rxds_rxds_8z5() {
            return this['rxds_rxds_2z2'];
        },
    },
    ky481: {
        dwd_dwd_dwd: {
            area: [0, 1, 2, 3],
            widthConfig: {
                col1: 140,
                col2: 150
            },
        },
        sx_zx_fs: {
            area: [0, 1, 2, 3],
            shapeName: '四星组态',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const obj = arrToCountItemObj(codeArr);
                const keys = Object.keys(obj);
                const values = Object.values(obj);
                const shapeConfig = {  //
                    4: '<em class="shape-item"><i class="shape--zu24">组24</i></em>',
                    3: '<em class="shape-item"><i class="shape--zu12">组12</i></em>',
                    2: values.includes(3) ? '<em class="shape-item"><i class="shape--zu4">组4</i></em>' : '<em class="shape-item"><i class="shape--zu6">组6</i></em>',
                    1: '<em class="shape-item"><i>---</i></em>',
                }
                return shapeConfig[keys.length];
            }
        },
        get sx_zx_ds() {
            return this['sx_zx_fs'];
        },
        get sx_zux_z24() {
            return this['sx_zx_fs'];
        },
        get sx_zux_z12() {
            return this['sx_zx_fs'];
        },
        get sx_zux_z6() {
            return this['sx_zx_fs'];
        },
        get sx_zux_z4() {
            return this['sx_zx_fs'];
        },
        qsm_zx_fs: {
            area: [0, 1, 2],
            shapeName: '前三组态',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const obj = arrToCountItemObj(codeArr);
                const keys = Object.keys(obj);
                const shapeConfig = {  //
                    3: '<em class="shape-item"><i class="shape--zu6">组六</i></em>',
                    2: '<em class="shape-item"><i class="shape--zu3">组三</i></em>',
                    1: '<em class="shape-item"><i>---</i></em>',
                }
                return shapeConfig[keys.length];
            }
        },
        get qsm_zx_ds() {
            return this['qsm_zx_fs'];
        },
        get qsm_zux_z3() {
            return this['qsm_zx_fs'];
        },
        get qsm_zux_z6() {
            return this['qsm_zx_fs'];
        },
        get qsm_zux_hh() {
            return this['qsm_zx_fs'];
        },
        qsm_zx_hz: {
            area: [0, 1, 2],
            shapeName: '直选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        qsm_zux_hz: {
            area: [0, 1, 2],
            shapeName: '组选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const dumpArr = [...new Set(codeArr)];
                if (dumpArr.length === 1) {//组选和值不算bao子号
                    return `<em class="shape-item">---</em>`;
                }
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        hsm_zx_fs: {
            area: [1, 2, 3],
            shapeName: '后三组态',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const obj = arrToCountItemObj(codeArr);
                const keys = Object.keys(obj);
                const shapeConfig = {  //
                    3: '<em class="shape-item"><i class="shape--zu6">组六</i></em>',
                    2: '<em class="shape-item"><i class="shape--zu3">组三</i></em>',
                    1: '<em class="shape-item"><i>---</i></em>',
                }
                return shapeConfig[keys.length];
            }
        },
        get hsm_zx_ds() {
            return this['hsm_zx_fs'];
        },
        get hsm_zux_z3() {
            return this['hsm_zx_fs'];
        },
        get hsm_zux_z6() {
            return this['hsm_zx_fs'];
        },
        get hsm_zux_hh() {
            return this['hsm_zx_fs'];
        },
        hsm_zx_hz: {
            area: [1, 2, 3],
            shapeName: '直选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        hsm_zux_hz: {
            area: [1, 2, 3],
            shapeName: '组选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const dumpArr = [...new Set(codeArr)];
                if (dumpArr.length === 1) {//组选和值不算bao子号
                    return `<em class="shape-item">---</em>`;
                }
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        em_zx_qfs: {
            area: [0, 1],
            shapeName: '直选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        get em_zx_qds() {
            return this['em_zx_qfs'];
        },
        get em_zx_qhz() {
            return this['em_zx_qfs'];
        },
        em_zux_qfs: {
            area: [0, 1],
            shapeName: '组选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const dumpArr = [...new Set(codeArr)];
                if (dumpArr.length === 1) {//组选和值不算bao子号
                    return `<em class="shape-item">---</em>`;
                }
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        get em_zux_qds() {
            return this['em_zux_qfs'];
        },
        get em_zux_qhz() {
            return this['em_zux_qfs'];
        },
        em_zx_hfs: {
            area: [2, 3],
            shapeName: '直选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        get em_zx_hds() {
            return this['em_zx_hfs'];
        },
        get em_zx_hhz() {
            return this['em_zx_hfs'];
        },
        em_zux_hfs: {
            area: [0, 1, 2],
            shapeName: '组选和值',
            widthConfig: {
                col1: 90,
                col2: 100
            },
            calcShape(code) {
                const codeArr = this.area.map((v, i) => code.split(',')[v]);
                const dumpArr = [...new Set(codeArr)];
                if (dumpArr.length === 1) {//组选和值不算bao子号
                    return `<em class="shape-item">---</em>`;
                }
                const hz = calcHezhi(codeArr);
                return `<em class="shape-item"><i class="shape--hz">${hz}</i></em>`;
            }
        },
        get em_zux_hds() {
            return this['em_zux_hfs'];
        },
        get em_zux_hhz() {
            return this['em_zux_hfs'];
        },
    }
};