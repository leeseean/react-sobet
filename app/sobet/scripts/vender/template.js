(function(_) {
  "use strict";
  var cache = {};
  
  _.tmpl = function(str, tpl, data) {
    var fn;
    if (!/\W/.test(str)) {
      fn = tmpl(tpl);
    }else {
      var filter = function() {
        var regex = /[\s\<](.\w+).length/g;
        var matches, output = [];
        while (matches= regex.exec(str)) {
          output.push('var '+matches[1].replace(/\s+/g,'')+' = obj.'+matches[1].replace(/\s+/g,''));
        }
        if(output.length == 0) return '';
        return output.join(',')+';'
      }
      fn = new Function("obj",
        filter()+"var p=[];" +
        "p.push('"+
        str
        .replace(/=([\w\[\].\,]+\|[\w\[\],.]+)/g, "=$1)")
        .replace(/=([\w\[\].\,]+)\|([\w.\[\]]+)/g, "=$2.call\(this\,$1")
        .replace(/[\r\t\n]/g," ")
        .split("<%").join("\t")
        .replace(/((^|%>)[^\t]*)'/g,"$1\r")
        .replace(/\t=(.*?)%>/g,"',$1,'")
        .split("\t").join("');")
        .split("%>").join("p.push('")
        .split("\r").join("\\'") + "');return p.join('');")
    }
    return data ? fn(data) : fn;
  };
})(window);