(function() {
  var cache = {};

  this.tmpl = function tmpl(str, tpl, data) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn;
    if (!/\W/.test(str)) {
      fn = tmpl(tpl)
    } else {
      var filter = function() {
        var regex = /\|(\w+)[\,%]/g;
        var matches, output = [];
        while (matches = regex.exec(str)) {
          output.push('obj.' + matches[1] + ' = ' + matches[1]);
        }
        if (output.length == 0) return '';
        return output.join(',') + ';'
      }

      fn = new Function("obj",
        filter() + "var p=[],print=function(){p.push.apply(p,arguments);};" +
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
        .replace(/=([\w\[\].\,]+\|[\w\[\],.]+)/g, "=$1)")
        .replace(/=([\w\[\].\,]+)\|([\w.\[\]]+)/g, "=$2.call\(this\,$1")
        .replace(/[\r\t\n]/g, " ")
        .split("<%").join("\t")
        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
        .replace(/\t=(.*?)%>/g, "',$1,'")
        .split("\t").join("');")
        .split("%>").join("p.push('")
        .split("\r").join("\\'") + "');}return p.join('');")

    }
    // Provide some basic currying to the user
    return data ? fn(data) : fn;
  };
})();