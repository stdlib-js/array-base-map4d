"use strict";var q=function(s,r){return function(){try{return r||s((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var O=q(function(C,g){
function k(s,r,o,p){var m,e,f,n,t,a,v,i,u,S,l,c,d,x,y;for(m=r[3],e=r[2],f=r[1],n=r[0],y=[],i=0;i<n;i++){for(d=s[i],x=[],v=0;v<f;v++){for(l=d[v],c=[],a=0;a<e;a++){for(u=l[a],S=[],t=0;t<m;t++)S.push(o.call(p,u[t],[i,v,a,t],s));c.push(S)}x.push(c)}y.push(x)}return y}g.exports=k
});var b=q(function(D,R){
function w(s,r,o,p,m){var e,f,n,t,a,v,i,u,S,l,c,d,x,y;if(e=o[3],f=o[2],n=o[1],t=o[0],e<=0||f<=0||n<=0||t<=0)return r;for(u=0;u<t;u++)for(x=s[u],y=r[u],i=0;i<n;i++)for(c=x[i],d=y[i],v=0;v<f;v++)for(S=c[v],l=d[v],a=0;a<e;a++)l[a]=p.call(m,S[a],[u,i,v,a],s);return r}R.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=O(),A=b();z(j,"assign",A);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
