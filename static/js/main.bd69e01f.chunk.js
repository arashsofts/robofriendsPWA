(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=n(10),i=n(9),u=(n(27),n(1)),s=n(2),h=n(4),m=n(3),d=n(5),p=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"pa3 bg-light-green dib grow ma3 br3 tc"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t)}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},b=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e){var t=e.name,n=e.id,a=e.email;return r.a.createElement(p,{key:n,name:t,id:n,email:a})}))},f=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"f4 pa3 b--green bg-lightest-blue",type:"search",placeholder:"Search...",onChange:t}))},v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops Something Went Wrong..."):this.props.children}}]),t}(a.Component),E=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"700px"},className:"scrollbar"},e.children)},j=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==e.count}},{key:"render",value:function(){return r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(a.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(j,{color:"red"}))}}]),t}(a.Component),O=(n(28),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={robots:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state.robots,t=this.props,n=t.searchField,a=t.onSearchChange,o=e.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement(g,null),r.a.createElement(f,{searchChange:a}),r.a.createElement(v,null,r.a.createElement(E,null,r.a.createElement(b,{robots:o}))))}}]),t}(a.Component)),C=Object(l.b)(function(e){return{searchField:e.searchField}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}})(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(29);var y=n(17),w={searchField:""},k=Object(i.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(y.a)({},e,{searchField:t.payload});default:return e}});c.a.render(r.a.createElement(l.a,{store:k},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.bd69e01f.chunk.js.map