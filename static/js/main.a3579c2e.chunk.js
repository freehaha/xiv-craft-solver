(this["webpackJsonpxiv-craft-solver"]=this["webpackJsonpxiv-craft-solver"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"actions":{"x1":{"cp":0,"durability":10,"quality":1169},"x2":{"cp":150,"durability":20,"quality":19873},"x3":{"cp":125,"durability":20,"quality":15781},"x4":{"cp":118,"durability":20,"quality":14028},"x5":{"cp":100,"durability":20,"quality":14027},"x6":{"cp":68,"durability":20,"quality":10520},"x7":{"cp":57,"durability":10,"quality":7014},"x8":{"cp":57,"durability":5,"quality":4676},"x9":{"cp":18,"durability":10,"quality":2338},"x10":{"cp":25,"durability":5,"quality":2338},"x11":{"cp":25,"durability":10,"quality":3507},"x12":{"cp":40,"durability":20,"quality":4676},"x13":{"cp":72,"durability":20,"quality":9352},"m":{"cp":96,"durability":-40,"quality":0},"ma":{"cp":88,"durability":-30,"quality":0},"ob":{"cp":7,"durability":0,"quality":0,"ob":1},"f1":{"cp":164,"durability":40,"quality":32732,"finisher":1},"f2":{"cp":171,"durability":35,"quality":32732,"finisher":1},"f3":{"cp":192,"durability":30,"quality":31563,"finisher":1},"f4":{"cp":146,"durability":30,"quality":29225,"finisher":1},"f5":{"cp":167,"durability":25,"quality":28056,"finisher":1},"f6":{"cp":131,"durability":20,"quality":26302,"finisher":1},"f7":{"cp":110,"durability":30,"quality":24549,"finisher":1},"f8":{"cp":117,"durability":25,"quality":24549,"finisher":1},"f9":{"cp":124,"durability":20,"quality":24549,"finisher":1},"f10":{"cp":92,"durability":20,"quality":21042,"finisher":1},"f11":{"cp":99,"durability":15,"quality":21042,"finisher":1},"f12":{"cp":74,"durability":10,"quality":17535,"finisher":1}},"sequences":{"ob":"Observe","f12":["Great Strides","Innovation","Byregot\'s Blessing"],"f11":["Innovation","Prudent Touch","Great Strides","Byregot\'s Blessing"],"f10":["Innovation","Basic Touch","Great Strides","Byregot\'s Blessing"],"f9":["Innovation","Prudent Touch","Prudent Touch","Great Strides","Byregot\'s Blessing"],"f8":["Innovation","Prudent Touch","Basic Touch","Great Strides","Byregot\'s Blessing"],"f7":["Innovation","Basic Touch","Basic Touch","Great Strides","Byregot\'s Blessing"],"f6":["Great Strides","Innovation","Observe","Focused Touch","Great Strides","Byregot\'s Blessing"],"f5":["Innovation","Prudent Touch","Prudent Touch","Prudent Touch","Great Strides","Innovation","Byregot\'s Blessing"],"f4":["Great Strides","Innovation","Preparatory Touch","Great Strides","Byregot\'s Blessing"],"f3":["Innovation","Prudent Touch","Prudent Touch","Prudent Touch","Prudent Touch","Great Strides","Innovation","Byregot\'s Blessing"],"f2":["Great Strides","Innovation","Preparatory Touch","Prudent Touch","Great Strides","Byregot\'s Blessing"],"f1":["Great Strides","Innovation","Preparatory Touch","Basic Touch","Great Strides","Byregot\'s Blessing"],"ma":"Master\'s Mend","m":"Manipulation","x13":["Great Strides","Preparatory Touch"],"x12":"Preparatory Touch","x11":["Observe","Focused Touch"],"x10":"Prudent Touch","x9":"Basic Touch","x8":["Great Strides","Prudent Touch"],"x7":["Great Strides","Observe","Focused Touch"],"x6":["Innovation","Observe","Focused Touch","Observe","Focused Touch"],"x5":["Great Strides","Innovation","Observe","Focused Touch","Observe","Focused Touch"],"x4":["Innovation","Prudent Touch","Prudent Touch","Prudent Touch","Prudent Touch"],"x3":["Great Strides","Innovation","Observe","Focused Touch","Prudent Touch","Prudent Touch"],"x2":["Great Strides","Innovation","Prudent Touch","Prudent Touch","Prudent Touch","Prudent Touch"],"x1":"Hasty Touch"}}')},70:function(e,t,a){e.exports=a(95)},75:function(e,t,a){},76:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),u=(a(75),a(43)),c=a(16),s=(a(76),a(60)),l=a.n(s),y=a(12),d=a(61),h=a.n(d),f=a(142),p=a(139),b=a(135),m=a(141),v=a(136),g=a(143),T=a(137),q=a(97),S=a(138),x=a(129),O=a(63),B=a.n(O),E=a(140);function P(e,t,a){var n=!0,i=!1,r=void 0;try{for(var o,u=a[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var s=o.value;if(s)if(Array.isArray(s)){var l=P(e,t,s),d=Object(c.a)(l,2);if(e=d[0],t=d[1],e<1)return[e,0]}else{if("Manipulation"===s){t=8;continue}if(y.singles[s]&&y.singles[s].durability&&(e-=y.singles[s].durability),e<1)return[e,t];t>0&&(t--,e+=5,e=Math.min(e,60))}}}catch(h){i=!0,r=h}finally{try{n||null==u.return||u.return()}finally{if(i)throw r}}return[e,t]}y.singles={},Object.entries(y.sequences).forEach((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];Array.isArray(n)||(y.singles[n]=y.actions[a])}));var j=Object(x.a)((function(e){return{controlRoot:{"& .MuiTextField-root":{marginRight:e.spacing(1)},marginBottom:e.spacing(1),marginTop:e.spacing(1)},solutions:{marginTop:e.spacing(1)},solutionHeading:{fontSize:e.typography.pxToRem(18),fontWeight:e.typography.fontWeightMedium},solutionSubtitle:{fontSize:e.typography.pxToRem(16),fontWeight:e.typography.fontWeightBold},icon:{marginRight:e.spacing(1)}}}));function I(e){var t=e.action,a=j(),n=t.replace(/\W/g,"");return i.a.createElement("span",{className:a.icon},i.a.createElement("img",{src:"images/actions/".concat(n,".png"),alt:t,title:t}))}function G(e,t,a,n){if(!(t<0)){var i={optimize:"quality",opType:"max",constraints:{durability:{max:t+5*a-1},ob:{max:0},cp:{max:e-7*n},finisher:{max:1}},variables:y.actions,ints:Object.fromEntries(Object.keys(y.actions).map((function(e){return[e,1]})))},r=l.a.Solve(i),o=0;console.log(r),r=Object.entries(r).filter((function(e){var t=Object(c.a)(e,2),a=t[0];t[1];return y.sequences[a]})).map((function(e){var t=Object(c.a)(e,2);return{id:t[0],count:t[1]}}));var s=e;r.forEach((function(e){var t=e.id,a=e.count;o+=a*y.actions[t].quality,s-=a*y.actions[t].cp})),s-=7*n;var d=function(e,t,a,n){var i=[],r="";for(n.forEach((function(e){if(e.id.startsWith("f"))r=e.id;else{i.push(e.id);for(var t=e.count-1;t>0;)i.push(e.id),t--}}));a>0;)i.push("ob"),a--;var o,s={next:function(){return null}};if(!(i&&i.length>0))return[y.sequences[r]];for(s=h.a.permutation(i);o=s.next();){o=o.map((function(e){return y.sequences[e]}));var l=P(e,t,[].concat(Object(u.a)(o),[y.sequences[r]]));if(Object(c.a)(l,1)[0]>=1)return[].concat(Object(u.a)(o),[y.sequences[r]])}}(t,a,n,r);return d?{cpRemain:s,quality:o,sequence:d.flat()}:null}}var C=function(){var e=Object(n.useState)(11),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(74),s=Object(c.a)(o,2),l=s[0],y=s[1],d=Object(n.useState)(0),h=Object(c.a)(d,2),x=h[0],O=h[1],P=Object(n.useState)([]),C=Object(c.a)(P,2),k=C[0],w=C[1],M=Object(n.useState)(!1),N=Object(c.a)(M,2),F=N[0],R=N[1],W=Object(n.useState)(!1),H=Object(c.a)(W,2),A=H[0],z=H[1],J=Object(n.useState)(!0),Q=Object(c.a)(J,2),D=Q[0],$=Q[1],K=j();return i.a.createElement("div",{className:"App"},i.a.createElement(f.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:A,autoHideDuration:6e3,onClose:function(){return z(!1)}},i.a.createElement(E.a,{color:"error"},"No solution found.")),D&&i.a.createElement(E.a,{color:"info",onClose:function(){return $(!1)}},"This assumes you are 1 Progression step(Basic, Careful Syn) away from finishing with 11 Inner Quiet stacks."),i.a.createElement("div",{className:K.controlRoot},i.a.createElement(p.a,{label:"Durability",value:a,onChange:function(e){return r(Math.min(80,parseInt(e.target.value,10)||0))}}),i.a.createElement(p.a,{label:"CP",value:l,onChange:function(e){return y(Math.min(700,parseInt(e.target.value,10)||0))}}),i.a.createElement(p.a,{label:"Manipulation Stacks",value:x,onChange:function(e){return O(Math.min(8,parseInt(e.target.value,10)||0))}}),i.a.createElement(b.a,{control:i.a.createElement(m.a,{checked:F,onChange:function(e){return R(e.target.checked)},label:"Careful Synthesis"}),label:"Careful Synthesis"})),i.a.createElement(v.a,{onClick:function(){var e=l;F&&(e-=7);for(var t=null,n=0,i=[G(e,a,x,0),G(e,a-5,x,0),G(e,a,x,1),G(e,a,x,2)];n<i.length;n++){var r=i[n];r&&(t?r.quality>t.quality&&(t=r):t=r)}t?(t.hasty=t.sequence.filter((function(e){return"Hasty Touch"===e})).length,w([t].concat(Object(u.a)(k.slice(0,5))))):z(!0)},color:"primary",variant:"contained"},"Solve"),i.a.createElement("div",{className:K.solutions},k.map((function(e,t){return i.a.createElement(g.a,{defaultExpanded:!0,key:t},i.a.createElement(T.a,{expandIcon:i.a.createElement(B.a,null)},i.a.createElement(q.a,{className:K.solutionHeading}," ","Q:",e.quality," H:",e.hasty," C:",e.cpRemain," ")),i.a.createElement(S.a,null,i.a.createElement("div",null,i.a.createElement(q.a,{className:K.solutionSubtitle},"Quality Gain ",e.quality," ",Boolean(e.hasty)&&i.a.createElement("span",null,"(",e.hasty," Hasty Touches)")),i.a.createElement(q.a,{className:K.solutionSubtitle},"CP left: ",e.cpRemain),i.a.createElement(q.a,{className:K.solutionSubtitle},"Steps"),i.a.createElement("div",{className:K.solutionSteps},e.sequence.map((function(e,t){return e?i.a.createElement(I,{key:t,action:e}):null}))))))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.a3579c2e.chunk.js.map