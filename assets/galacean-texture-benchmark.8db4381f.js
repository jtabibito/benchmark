import"./modulepreload-polyfill.c7c6310f.js";import{W as d,V as g,C as u,A,M as c,a0 as y,d as j,$ as D}from"./module.184d89df.js";import{O as _}from"./index.b98a644a.js";function f(t,a){const o=new y(t,"CubeContainer"),e=new g(1.5,1.5,1.5),i=[];function r(n){if(!(i.length>a)){for(let s=1;s<=n;++s)for(let p=0;p<s;++p){const l=o.createChild(`Cube ${s}`),m=l.addComponent(c);m.mesh=j.createCuboid(t,1,1,1),m.setMaterial(new D(t)),l.transform.setPosition(s*e.x,(1-n)*e.y+3,(n-p)*e.z),i.push(l)}r(n+1)}}return r(0),o}function h(t,a){const o=a.length;for(let e=0,i=t.length;e<i;e++){const r=t[e].getMaterial();r.baseTexture=a[e%o]}}d.create({canvas:"canvas"}).then(t=>{t.canvas.resizeByClientSize();const a=t.sceneManager.activeScene,o=a.createRootEntity("Camera");o.transform.setPosition(10.2,1.7,16),o.transform.lookAt(new g(0,0,0));const e=o.addComponent(u);o.addComponent(_),e.enableFrustumCulling=!1,t.resourceManager.load([{url:"https://mdn.alipayobjects.com/afts/img/A*yhp-SZbWhgoAAAAAAAAAAAAADrd2AQ/original_dog1_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*KpSzT60tEQMAAAAAAAAAAAAADrd2AQ/original_dog2_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*aT1pS7fQpEIAAAAAAAAAAAAADrd2AQ/original_dog3_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*jaFyQ6nsFBgAAAAAAAAAAAAADrd2AQ/original_dog4_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*loYHQLtGAHcAAAAAAAAAAAAADrd2AQ/original_dog5_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*MIMrR7dW8DUAAAAAAAAAAAAADrd2AQ/original_dog6_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*7LUXSbhywNkAAAAAAAAAAAAADrd2AQ/original_dog7_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*lO2xRph4xAMAAAAAAAAAAAAADrd2AQ/original_dog8_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*DtM3R6j2LcYAAAAAAAAAAAAADrd2AQ/original_dog9_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*mJ5jSrWN3ocAAAAAAAAAAAAADrd2AQ/original_dog10_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*zY2GTL-qh-UAAAAAAAAAAAAADrd2AQ/original_dog11_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*b9XGRpYW-7MAAAAAAAAAAAAADrd2AQ/original_dog12_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*TIigRrRSJL8AAAAAAAAAAAAADrd2AQ/original_dog13_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*iUKmSZLmx_0AAAAAAAAAAAAADrd2AQ/original_dog14_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*577cTJf-YxMAAAAAAAAAAAAADrd2AQ/original_dog15_2048.jpeg",type:A.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*OlwcR7U_5TQAAAAAAAAAAAAADrd2AQ/original_dog16_2048.jpeg",type:A.Texture2D}]).then(i=>{const r=f(t,16);a.addRootEntity(r),h(r.getComponentsIncludeChildren(c,[]),i)}),t.run()});