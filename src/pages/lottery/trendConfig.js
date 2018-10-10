
import { calcDxds, calcDsgs, calcDxgs, calcBanshunzi, calcShunzi, arrToCountItemObj, calcBjl, calcNiuniu, calcLhh, calc2xDuizi, calcHezhi, calcKuadu } from '../../utils/algorithm';

export default {
    wx_zx_fs: {
        area: [0, 1, 2, 3, 4],
        shapeName: '五星组态',
        calcShape(code) {
            const obj = arrToCountItemObj(code.split(','));
            const keys = Object.keys(obj);
            const values = Object.values(obj);
            const shapeConfig = {  //
                5: '<em class="margin-0-4px shape--zu120">组120</em>',
                4: '<em class="margin-0-4px shape--zu60">组60</em>',
                3: values.includes(3) ? '<em class="margin-0-4px shape--zu20">组20</em>' : '<em class="margin-0-4px shape--zu30">组30</em>',
                2: values.includes(4) ? '<em class="margin-0-4px shape--zu5">组5</em>' : '<em class="margin-0-4px shape--zu10">组10</em>',
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
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const obj = arrToCountItemObj(codeArr);
            const keys = Object.keys(obj);
            const values = Object.values(obj);
            const shapeConfig = {  //
                4: '<em class="margin-0-4px shape--zu24">组24</em>',
                3: '<em class="margin-0-4px shape--zu12">组12</em>',
                2: values.includes(3) ? '<em class="margin-0-4px shape--zu4">组4</em>' : '<em class="margin-0-4px shape--zu6">组6</em>',
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
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const obj = arrToCountItemObj(codeArr);
            const keys = Object.keys(obj);
            const shapeConfig = {  //
                3: '<em class="margin-0-4px shape--zu6">组六</em>',
                2: '<em class="margin-0-4px shape--zu3">组三</em>',
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
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const hz = calcHezhi(codeArr);
            return `<em class="shape--hz">${hz}</em>`;
        }
    },
    qsm_zx_kd: {
        area: [0, 1, 2],
        shapeName: '直选跨度',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const kd = calcKuadu(codeArr);
            return `<em class="margin-0-4px shape--kd">${kd}</em>`;
        }
    },
    qsm_zux_hz: {
        area: [0, 1, 2],
        shapeName: '组选和值',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const dumpArr = [...new Set(codeArr)];
            if (dumpArr.length === 1) {//组选和值不算bao子号
                return `<em class="margin-0-4px">---</em>`;
            }
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>`;
        }
    },
    zsm_zx_fs: {
        area: [1, 2, 3],
        shapeName: '中三组态',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const obj = arrToCountItemObj(codeArr);
            const keys = Object.keys(obj);
            const shapeConfig = {  //
                3: '<em class="margin-0-4px shape--zu6">组六</em>',
                2: '<em class="margin-0-4px shape--zu3">组三</em>',
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
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>`;
        }
    },
    zsm_zx_kd: {
        area: [1, 2, 3],
        shapeName: '直选跨度',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const kd = calcKuadu(codeArr);
            return `<em class="margin-0-4px shape--kd">${kd}</em>`;
        }
    },
    zsm_zux_hz: {
        area: [1, 2, 3],
        shapeName: '组选和值',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const dumpArr = [...new Set(codeArr)];
            if (dumpArr.length === 1) {//组选和值不算bao子号
                return `<em class="margin-0-4px">---</em>`;
            }
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>`;
        }
    },
    hsm_zx_fs: {
        area: [2, 3, 4],
        shapeName: '后三组态',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const obj = arrToCountItemObj(codeArr);
            const keys = Object.keys(obj);
            const shapeConfig = {  //
                3: '<em class="margin-0-4px shape--zu6">组六</em>',
                2: '<em class="margin-0-4px shape--zu3">组三</em>',
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
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>`;
        }
    },
    hsm_zx_kd: {
        area: [2, 3, 4],
        shapeName: '直选跨度',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const kd = calcKuadu(codeArr);
            return `<em class="margin-0-4px shape--kd">${kd}</em>`;
        }
    },
    hsm_zux_hz: {
        area: [2, 3, 4],
        shapeName: '组选和值',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const dumpArr = [...new Set(codeArr)];
            if (dumpArr.length === 1) {//组选和值不算bao子号
                return `<em>---</em>`;
            }
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>`;
        }
    },
    qem_zx_fs: {
        area: [0, 1],
        shapeName: '直选和值',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>`;
        }
    },
    get qem_zx_ds() {
        return this['qem_zx_fs'];
    },
    get qem_zx_hz() {
        return this['qem_zx_fs'];
    },
    qem_zx_kd: {
        area: [0, 1],
        shapeName: '直选跨度',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const kd = calcKuadu(codeArr);
            return `<em class="margin-0-4px shape--kd">${kd}</em>`;
        }
    },
    qem_zux_fs: {
        area: [0, 1],
        shapeName: '组选和值',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const dumpArr = [...new Set(codeArr)];
            if (dumpArr.length === 1) {//组选和值不算dui子号
                return `<em class="margin-0-4px">---</em>`;
            }
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>`;
        }
    },
    get qem_zux_ds() {
        return this['qem_zux_fs'];
    },
    get qem_zux_hz() {
        return this['qem_zux_fs'];
    },
    get qem_zux_bd() {
        return this['qem_zux_fs'];
    },
    hem_zx_fs: {
        area: [3, 4],
        shapeName: '直选和值',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>`;
        }
    },
    get hem_zx_ds() {
        return this['hem_zx_fs'];
    },
    get hem_zx_hz() {
        return this['hem_zx_fs'];
    },
    hem_zx_kd: {
        area: [3, 4],
        shapeName: '直选跨度',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const kd = calcKuadu(codeArr);
            return `<em class="margin-0-4px shape--kd">${kd}</em>`;
        }
    },
    hem_zux_fs: {
        area: [3, 4],
        shapeName: '组选和值',
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const dumpArr = [...new Set(codeArr)];
            if (dumpArr.length === 1) {//组选和值不算dui子号
                return `<em class="margin-0-4px">---</em>`;
            }
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>`;
        }
    },
    get hem_zux_ds() {
        return this['hem_zux_fs'];
    },
    get hem_zux_hz() {
        return this['hem_zux_fs'];
    },
    get hem_zux_bd() {
        return this['hem_zux_fs'];
    },
    dwd_dwd_dwd: {
        area: [0, 1, 2, 3, 4]
    },
    bdd_bdd_qs1: {
        area: [0, 1, 2]
    },
    bdd_bdd_qs2: {
        area: [0, 1, 2]
    },
    bdd_bdd_zs1: {
        area: [1, 2, 3]
    },
    bdd_bdd_zs2: {
        area: [1, 2, 3]
    },
    bdd_bdd_hs1: {
        area: [2, 3, 4]
    },
    bdd_bdd_hs2: {
        area: [2, 3, 4]
    },
    bdd_bdd_4x1: {
        area: [1, 2, 3, 4]
    },
    bdd_bdd_4x2: {
        area: [1, 2, 3, 4]
    },
    bdd_bdd_4x3: {
        area: [1, 2, 3, 4]
    },
    bdd_bdd_5x1: {
        area: [0, 1, 2, 3, 4]
    },
    bdd_bdd_5x2: {
        area: [0, 1, 2, 3, 4]
    },
    bdd_bdd_5x3: {
        area: [0, 1, 2, 3, 4]
    },
    dxds_dxds_h2: {
        area: [3, 4],
        shapeName: `<em class="margin-0-4px">十位</em><em class="margin-0-4px">个位</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return codeArr.map(num => {
                return calcDxds(num, 4.5)['dx'] + calcDxds(num, 4.5)['ds'];
            });
        }
    },
    dxds_dxds_q2: {
        area: [0, 1],
        shapeName: `<em class="margin-0-4px">万位</em><em class="margin-0-4px">千位</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return codeArr.map(num => {
                return calcDxds(num, 4.5)['dx'] + calcDxds(num, 4.5)['ds'];
            });
        }
    },
    dxds_dxds_h3: {
        area: [2, 3, 4],
        shapeName: `<em class="margin-0-4px">百位</em><em class="margin-0-4px">十位</em><em class="margin-0-4px">个位</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return codeArr.map(num => {
                return calcDxds(num, 4.5)['dx'] + calcDxds(num, 4.5)['ds'];
            });
        }
    },
    dxds_dxds_q3: {
        area: [0, 1, 2],
        shapeName: `<em class="margin-0-4px">万位</em><em class="margin-0-4px">千位</em><em class="margin-0-4px">百位</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return codeArr.map(num => {
                return calcDxds(num, 4.5)['dx'] + calcDxds(num, 4.5)['ds'];
            });
        }
    },
    dxds_dxgs_wx: {
        area: [0, 1, 2, 3, 4],
        shapeName: `<em class="margin-0-4px">大</em><em class="margin-0-4px">小</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return calcDxgs(codeArr, 4.5)['da'] + calcDxgs(codeArr, 4.5)['xiao'];
        }
    },
    dxds_dxgs_sx: {
        area: [1, 2, 3, 4],
        shapeName: `<em class="margin-0-4px">大</em><em class="margin-0-4px">小</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return calcDxgs(codeArr, 4.5)['da'] + calcDxgs(codeArr, 4.5)['xiao'];
        }
    },
    dxds_dxgs_qs: {
        area: [0, 1, 2],
        shapeName: `<em class="margin-0-4px">大</em><em class="margin-0-4px">小</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return calcDxgs(codeArr, 4.5)['da'] + calcDxgs(codeArr, 4.5)['xiao'];
        }
    },
    dxds_dxgs_zs: {
        area: [1, 2, 3],
        shapeName: `<em class="margin-0-4px">大</em><em class="margin-0-4px">小</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return calcDxgs(codeArr, 4.5)['da'] + calcDxgs(codeArr, 4.5)['xiao'];
        }
    },
    dxds_dxgs_hs: {
        area: [2, 3, 4],
        shapeName: `<em class="margin-0-4px">大</em><em class="margin-0-4px">小</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return calcDxgs(codeArr, 4.5)['da'] + calcDxgs(codeArr, 4.5)['xiao'];
        }
    },
    dxds_dsgs_wx: {
        area: [0, 1, 2, 3, 4],
        shapeName: `<em class="margin-0-4px">单</em><em class="margin-0-4px">双</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return calcDsgs(codeArr)['da'] + calcDsgs(codeArr)['xiao'];
        }
    },
    dxds_dsgs_sx: {
        area: [1, 2, 3, 4],
        shapeName: `<em class="margin-0-4px">单</em><em class="margin-0-4px">双</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return calcDsgs(codeArr)['da'] + calcDsgs(codeArr)['xiao'];
        }
    },
    dxds_dsgs_qs: {
        area: [0, 1, 2],
        shapeName: `<em class="margin-0-4px">单</em><em class="margin-0-4px">双</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return calcDsgs(codeArr)['da'] + calcDsgs(codeArr)['xiao'];
        }
    },
    dxds_dsgs_zs: {
        area: [1, 2, 3],
        shapeName: `<em class="margin-0-4px">单</em><em class="margin-0-4px">双</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return calcDsgs(codeArr)['da'] + calcDsgs(codeArr)['xiao'];
        }
    },
    dxds_dsgs_hs: {
        area: [2, 3, 4],
        shapeName: `<em class="margin-0-4px">单</em><em class="margin-0-4px">双</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            return calcDsgs(codeArr)['da'] + calcDsgs(codeArr)['xiao'];
        }
    },
    zh_hzdxds_5xhz: {
        area: [0, 1, 2, 3, 4],
        shapeName: `<em class="margin-0-4px">和值</em><em class="margin-0-4px">大小</em><em class="margin-0-4px">单双</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>` + calcDxds(codeArr, 23)['dx'] + calcDxds(codeArr, 23)['ds'];
        }
    },
    zh_hzdxds_q3hz: {
        area: [0, 1, 2],
        shapeName: `<em class="margin-0-4px">和值</em><em class="margin-0-4px">大小</em><em class="margin-0-4px">单双</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>` + calcDxds(codeArr, 14)['dx'] + calcDxds(codeArr, 14)['ds'];
        }
    },
    zh_hzdxds_z3hz: {
        area: [1, 2, 3],
        shapeName: `<em class="margin-0-4px">和值</em><em class="margin-0-4px">大小</em><em class="margin-0-4px">单双</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>` + calcDxds(codeArr, 14)['dx'] + calcDxds(codeArr, 14)['ds'];
        }
    },
    zh_hzdxds_h3hz: {
        area: [2, 3, 4],
        shapeName: `<em class="margin-0-4px">和值</em><em class="margin-0-4px">大小</em><em class="margin-0-4px">单双</em>`,
        calcShape(code) {
            const codeArr = this.area.map((v, i) => code.split(',')[i]);
            const hz = calcHezhi(codeArr);
            return `<em class="margin-0-4px shape--hz">${hz}</em>` + calcDxds(codeArr, 14)['dx'] + calcDxds(codeArr, 14)['ds'];
        }
    }
};