var t=require("md5"),n=require("jsonwebtoken");function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=e(t),o=e(n);function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}function c(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,s(t,n)}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var u=function(){function t(){this.state=new Map}var n=t.prototype;return n.set=function(t,n){this.state.set(t,n)},n.get=function(t){return this.state.get(t)||null},n.delete=function(t){this.state.delete(t)},t}(),a=function(t){return new Promise(function(n){t.text().then(function(e){n({status:t.status,ok:t.ok,json:""!==e?JSON.parse(e):"{}"})})})},h=function(){function t(t){this.config=t,this.storage=new u}var n=t.prototype;return n.authenticate=function(t,n,e,o){var r=this,c=this.config,s=o||i.default(t+":"+n),u=function(t,n,e){if(!t.host)throw new Error("You have not specifiend an API host");return new Promise(function(i,o){fetch(t.host+"/"+t.authEndpoint,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{credentials:n,account_name:e}})}).then(a).then(function(t){t.ok&&i(t.json),o(t.json)}).catch(function(t){return o(t)})})}(c,s,e);return u.then(function(t){r.storage.set("credentials",{authToken:t.auth_token,credentials:s,accountId:t.data.account_id,currentAccountId:t.data.account_id,accountName:e})}).catch(function(){}),u},n.sendRequest=function(t,n,e){var i=this;void 0===e&&(e=null);var c=this.config;return new Promise(function(s,u){var h=i.storage.get("credentials")||{},f=function(i){var o=i.authToken,h=i.currentAccountId;o&&h||u("User has not been authorized"),fetch(c.host+"/accounts/"+h+"/"+t,r({method:n,headers:{"X-Auth-Token":o,"Content-Type":"application/json"}},e&&{body:JSON.stringify({data:e})})).then(a).then(function(t){t.ok&&s(t.json),u(t.json)}).catch(function(t){return u(t)})};return function(t){try{var n=o.default.decode(t).exp,e=void 0===n?null:n;return Math.ceil((new Date).getTime()/1e3)>=e-10}catch(t){return!0}}(h.authToken)?i.authenticate("","",h.accountName,h.credentials).then(function(){return f(i.storage.get("credentials"))}).catch(function(t){return u(t)}):f(h)})},n.masquerade=function(t){var n=this.storage.get("credentials");this.storage.set("credentials",r({},n,{currentAccountId:t}))},n.stopMasquerading=function(){var t=this.storage.get("credentials");this.storage.set("credentials",r({},t,{currentAccountId:t.accountId}))},t}(),f=function(t){var n=t.authEndpoint;this.host=t.host,this.authEndpoint=null!=n?n:"desktop_auth"},d=function(){function t(t){this.api=t}var n=t.prototype;return n.get=function(){return this.call=this.api.sendRequest(this.endpoint,"GET"),this.call},n.getById=function(t){return this.call=this.api.sendRequest(this.endpoint+"/"+t,"GET"),this.call},n.update=function(t,n){this.call=this.api.sendRequest(this.endpoint+"/"+t,"PATCH",n)},t}(),p=function(t){function n(n){var e;return(e=t.call(this,n)||this).endpoint="conferences",e}return c(n,t),n.prototype.get=function(){return this.call=this.api.sendRequest(this.endpoint,"GET"),this.call},n}(d),l=function(t){function n(n){var e;return(e=t.call(this,n)||this).endpoint="devices",e}return c(n,t),n}(d),g=function(t){function n(n){var e;return(e=t.call(this,n)||this).endpoint="users",e}return c(n,t),n.prototype.get=function(){return this.call=this.api.sendRequest(this.endpoint,"GET"),this.call},n}(d),v=function(){function t(t){this.config=t,this.api=new h(t),this.Conferences=new p(this.api),this.Devices=new l(this.api),this.Users=new g(this.api)}return t.prototype.authenticate=function(t,n,e,i){return this.api.authenticate(t,n,e,i)},t}();exports.sdk=function(t){return new v(new f(t))};
//# sourceMappingURL=index.js.map
