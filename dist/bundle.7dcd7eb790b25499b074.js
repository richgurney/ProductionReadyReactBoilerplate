webpackJsonp([3,4],{1461:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(2),o=r(u),a=n(70),l=r(a),c=n(25),f=n(19),i=n(71),d=r(i),s=n(198),p=r(s),_=n(199),b=r(_);n(200),n(201),n(202);var m=function(){var e=(0,c.createStore)(p.default,{},(0,c.applyMiddleware)(d.default));return o.default.createElement(f.Provider,{store:e},o.default.createElement(b.default,null))};l.default.render(o.default.createElement(m,null),document.getElementById("root"))},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(25),o=n(118),a=n(209),l=r(a);t.default=(0,u.combineReducers)({form:o.reducer,boilerplate:l.default})},199:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),o=r(u),a=n(69),l=n(207),c=r(l),f=n(208),i=r(f),d={component:c.default,path:"/",indexRoute:{component:i.default},childRoutes:[{path:"pages/page1",getComponent:function(e,t){n.e(1).then(n.bind(null,1463)).then(function(e){return t(null,e.default)})}},{path:"pages/page2",getComponent:function(e,t){n.e(0).then(n.bind(null,1464)).then(function(e){return t(null,e.default)})}}]},s=function(){return o.default.createElement(a.Router,{history:a.hashHistory,routes:d})};t.default=s},200:function(e,t){},201:function(e,t){},202:function(e,t){},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CREATE_TYPE_HERE="create_type_here"},206:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c),i=n(69),d=function(e){function t(e){u(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return a(t,e),l(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"row"},f.default.createElement("nav",null,f.default.createElement("div",{className:"nav-wrapper"},f.default.createElement("div",{className:"col s12"},f.default.createElement("a",{href:"#",className:"brand-logo"},"Boilerplate - React, Redux, React Router, Webpack"),f.default.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},f.default.createElement("li",null,f.default.createElement(i.Link,{to:"/pages/page1"},"Page 1")),f.default.createElement("li",null,f.default.createElement(i.Link,{to:"/pages/page2"},"Page 2")))))))}}]),t}(c.Component);t.default=d},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),o=r(u),a=n(206),l=r(a),c=function(e){var t=e.children;return o.default.createElement("div",{className:"container"},o.default.createElement(l.default,null),t)};t.default=c},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c),i=function(e){function t(){return u(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"row"},f.default.createElement("div",{className:"col s12"},"Hello World"))}}]),t}(c.Component);t.default=i},209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(117),o=r(u),a=n(205),l={count:0};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case a.CREATE_TYPE_HERE:return o.default.extend({},e,{count:t.payload.length});default:return e}}}},[1461]);