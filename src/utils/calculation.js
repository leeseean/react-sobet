/**
 * @author conrad
 * @date 2018-11-05
 * @desc 对浮点数加减乘除精度处理
 */

//加法  
const floatAdd = (a, b)=>{
		var c, d, e;
		try { c = a.toString().split(".")[1].length; } catch (f) { c = 0; }
		try { d = b.toString().split(".")[1].length; } catch (f) { d = 0; }
		e = Math.pow(10, Math.max(c, d))
		return (floatMul(a, e) + floatMul(b, e)) / e;
    }

//减法  
const floatSub = (a, b)=>{
		var c, d, e;
		try { c = a.toString().split(".")[1].length; } catch (f) { c = 0; }
		try { d = b.toString().split(".")[1].length; } catch (f) { d = 0; }
		e = Math.pow(10, Math.max(c, d));
		return (floatMul(a, e) - floatMul(b, e)) / e;
	}

//乘法  
const floatMul = (a, b)=>{
		var c = 0, d = a.toString(), e = b.toString();
		try { c += d.split(".")[1].length; } catch (f) { }
		try { c += e.split(".")[1].length; } catch (f) { }
		return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
	}

//除法  
const floatDiv = (a, b)=>{
		var c, d, e = 0, f = 0;
		try { e = a.toString().split(".")[1].length; } catch (g) { }
		try { f = b.toString().split(".")[1].length; } catch (g) { }
		return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), floatMul(c / d, Math.pow(10, f - e));
    }

export {
    floatAdd,floatSub,floatMul,floatDiv
}