import"./modulepreload-polyfill.c7c6310f.js";import{s as p,W as A,C,M as l,P as f,d,y as M,a0 as y}from"./module.16b7d24c.js";import{O as P}from"./index.d67f8372.js";p.enable();function a(t,e){return Math.random()*(e-t)+t}A.create({canvas:"canvas",graphicDeviceOptions:{powerPreference:"high-performance"}}).then(t=>{t.canvas.resizeByClientSize();const e=t.sceneManager.activeScene.createRootEntity(),s=e.createChild("camera");s.addComponent(C),s.transform.setPosition(0,6,40),s.addComponent(P);const i=e.createChild().addComponent(l),m=new f(t);i.mesh=d.createPlane(t,1e3,1e3),i.setMaterial(m);const h=10;for(let n=0;n<h;n++){const o=e.createChild("light"+n);o.transform.setPosition(a(-5,5),a(1,4),a(-5,5));const r=o.addComponent(M);r.distance=5,r.color.set(a(0,1),a(0,1),a(0,1),1);const c=o.addComponent(l);c.mesh=d.createSphere(t,.3,32),c.setMaterial(new y(t))}t.resourceManager.load("https://mdn.alipayobjects.com/oasis_be/afts/file/A*nceKQadLab8AAAAAAAAAAAAADkp5AQ/DamagedHelmet.glb").then(n=>{const o=e.createChild(""),r=n.instantiateSceneRoot();r.transform.setPosition(0,1,0),o.addChild(r)}),t.run()});
