(()=>{var i=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var a=i((f,c)=>{function r(){return typeof performance<"u"&&performance.getEntries?performance.getEntries().reduce((e,n)=>e+n.transferSize||0,0)/(1024*1024):(console.warn("Performance API is not supported"),0)}function t(o){return o*.5}var s={asNumber(){return t(r())},measureOnce(){let o=t(r());console.log(`\u{1F33F} Carbonscope: ${o.toFixed(2)} kg CO2e`)},measure(o){function e(){let n=t(r());console.log(`\u{1F33F} Carbonscope: ${n.toFixed(2)} kg CO2e`)}this._int=setInterval(e,o||2e3),e()},stop(){clearInterval(this._int)}};c.exports=s;typeof window<"u"&&(window.CarbonScope=s)});a();})();
