"use strict";new Vue({el:"#vue-speed",data:{httpUrlArr:["www.mcgame998.net","www.mcgame998.com","www.mochen999.net","www.mochen999.com","www.mochencards.com","www.volocn.com","www.whbman.com","www.nxjk99.com","wb.whbman.com","www.mcallin.com","wb.volocn.com","mc.xxgstz.com","mc.lszlzz.com","www.mochenpoker.com","mc.yirongmi.com","mm.whbman.com","mc.jhshjx.com","www.jhshjx.com","www.mochencards.com","www.szhscl.com","www.mochen5858.com","www.mochenmoney.com"],httpsUrlArr:["www.mcgame998.net","www.mcgame998.com","www.mochen999.net","www.mochen999.com","www.mochencards.com","www.volocn.com","www.whbman.com","www.nxjk99.com","wb.whbman.com","www.mcallin.com","wb.volocn.com","mc.xxgstz.com","mc.lszlzz.com","www.mochenpoker.com","mc.yirongmi.com","mm.whbman.com","mc.jhshjx.com","www.jhshjx.com","www.mochencards.com","www.szhscl.com","www.mochen5858.com","www.mochenmoney.com"],itemsData:[{},{},{},{},{},{}],itemsCount:6,testing:!1},mounted:function(){this.testSpeed()},computed:{protocol:function(){return window.location.protocol},urlArr:function(){return"http:"===this.protocol?this.httpUrlArr:(this.protocol,this.httpsUrlArr)}},methods:{getSpeedLink:function(o){return o?this.protocol+"//"+o:"javascript: void(0)"},testSpeed:function(){var m=this;if(!this.testing){this.testing=!0;for(var t=Date.now(),e=0,o=function(o){var c=m.urlArr[o],w=new Image;w.src=m.protocol+"//"+c+"?random="+Math.random(),w.setAttribute("pureSrc",c),w.classList.add("speed-test-img"),w.style.display="none",w.onerror=function(){var o=w.getAttribute("pureSrc"),c=(Date.now()-t)/1e3;c=c.toFixed(2),++e<=m.itemsCount&&m.itemsData.splice(e-1,1,{time:1<c?"1.00秒":c+"秒",url:o}),e===m.itemsCount&&(m.testing=!1,document.querySelectorAll(".speed-test-img").forEach(function(o){return document.body.removeChild(o)}))},document.body.appendChild(w)},c=0;c<this.urlArr.length;c++)o(c)}},selectThis:function(o){o.target.select()}}});