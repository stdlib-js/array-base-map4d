// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,s,e){var o,f,t,u,a,i,l,p,d,h,c,m,v,g,j;for(o=n[3],f=n[2],t=n[1],u=n[0],j=[],p=0;p<u;p++){for(v=r[p],g=[],l=0;l<t;l++){for(c=v[l],m=[],i=0;i<f;i++){for(d=c[i],h=[],a=0;a<o;a++)h.push(s.call(e,d[a],[p,l,i,a],r));m.push(h)}g.push(m)}j.push(g)}return j}function s(r,n,s,e,o){var f,t,u,a,i,l,p,d,h,c,m,v,g,j;if(f=s[3],t=s[2],u=s[1],a=s[0],f<=0||t<=0||u<=0||a<=0)return n;for(d=0;d<a;d++)for(g=r[d],j=n[d],p=0;p<u;p++)for(m=g[p],v=j[p],l=0;l<t;l++)for(h=m[l],c=v[l],i=0;i<f;i++)c[i]=e.call(o,h[i],[d,p,l,i],r);return n}r(n,"assign",s);export{s as assign,n as default};
//# sourceMappingURL=index.mjs.map
