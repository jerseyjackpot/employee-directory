(this.webpackJsonpemployeedir=this.webpackJsonpemployeedir||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(26),a(3)),i=a(14),m=a(15),s=a(20),u=a(19),h=a(16),d=a.n(h),p=a(47),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Name:"",Employee:[],Original:[]},e.handleFirstNameSort=function(t){t.preventDefault(),console.log(t.target);var a=Object(c.a)(e.state.Employee);a=a.sort((function(e,t){return e.name.first>t.name.first?1:-1})),e.setState({Employee:a})},e.handleInputChange=function(t){var a=t.target,n=(a.name,a.value);console.log(t.target);var r=Object(c.a)(e.state.Original);r=r.filter((function(e){return e.name.first.toLowerCase().indexOf(n.toLowerCase())>=0})),e.setState({Name:n,Employee:r})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://randomuser.me/api/?results=100&nat=us").then((function(t){e.setState({Employee:t.data.results,Original:t.data.results})}))}},{key:"render",value:function(){var e=this;return console.log(this.state.Employee),r.a.createElement("div",null,r.a.createElement("p",null,"Find Employee By Name"),r.a.createElement("form",{className:"form"},r.a.createElement("input",{value:this.state.Name,name:"Name",onChange:this.handleInputChange,type:"text",placeholder:"Name"})),r.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null," ",r.a.createElement("a",{href:"#",onClick:function(t){return e.handleFirstNameSort(t)}},"First Name")),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Email"))),r.a.createElement("tbody",null,this.state.Employee.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.email))})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.edf42952.chunk.js.map