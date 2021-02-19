import t from"md5";import e from"jsonwebtoken";function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}class n{constructor(){this.state=new Map}set(t,e){this.state.set(t,e)}get(t){return this.state.get(t)||null}delete(t){this.state.delete(t)}}const o=t=>new Promise(e=>{t.text().then(s=>{e({status:t.status,ok:t.ok,json:""!==s?JSON.parse(s):"{}"})})});class a{constructor(t){this.config=t,this.storage=new n}authenticate(e,s,n,a){const{config:c}=this,i=a||t(`${e}:${s}`),r=((t,e,s)=>{if(!t.host)throw new Error("You have not specifiend an API host");return new Promise((n,a)=>{fetch(`${t.host}/${t.authEndpoint}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{credentials:e,account_name:s}})}).then(o).then(t=>{t.ok&&n(t.json),a(t.json)}).catch(t=>a(t))})})(c,i,n);return r.then(t=>{this.storage.set("credentials",{authToken:t.auth_token,credentials:i,accountId:t.data.account_id,currentAccountId:t.data.account_id,accountName:n})}).catch(()=>{}),r}sendRequest(t,s){const{config:n}=this;return new Promise((a,c)=>{const i=this.storage.get("credentials")||{};return(t=>{try{const{exp:s=null}=e.decode(t);Math.ceil((new Date).getTime()/1e3)}catch(t){return!0}})(i.authToken),(e=>{const{authToken:i,currentAccountId:r}=e;i&&r||c("User has not been authorized"),fetch(`${n.host}/accounts/${r}/${t}`,{method:s,headers:{"X-Auth-Token":i,"Content-Type":"application/json"}}).then(o).then(t=>{t.ok&&a(t.json),c(t.json)}).catch(t=>c(t))})(i)})}masquerade(t){const e=this.storage.get("credentials");this.storage.set("credentials",s({},e,{currentAccountId:t}))}stopMasquerading(){const t=this.storage.get("credentials");this.storage.set("credentials",s({},t,{currentAccountId:t.accountId}))}}class c{constructor(t){const{host:e,authEndpoint:s}=t;this.host=e,this.authEndpoint=null!=s?s:"desktop_auth"}}class i{constructor(t){this.endpoint="conferences",this.api=t}get(){return this.call=this.api.sendRequest(this.endpoint,"GET"),this.call}}class r{constructor(t){this.endpoint="users",this.api=t}get(){return this.call=this.api.sendRequest(this.endpoint,"GET"),this.call}}class h{constructor(t){this.config=t,this.api=new a(t),this.Conferences=new i(this.api),this.Users=new r(this.api)}authenticate(t,e,s,n){return this.api.authenticate(t,e,s,n)}}const u=t=>new h(new c(t));export{u as sdk};
//# sourceMappingURL=index.modern.js.map