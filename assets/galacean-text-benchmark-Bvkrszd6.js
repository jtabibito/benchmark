import"./modulepreload-polyfill-B5Qt9EMX.js";import{W as C,C as y,a8 as u,u as v}from"./module-zxCEsSWn.js";class g extends v{constructor(){super(...arguments),this.speed=30}onUpdate(e){this.entity.transform.rotation.z+=this.speed*e}}C.create({canvas:"canvas",graphicDeviceOptions:{powerPreference:"high-performance"}}).then(t=>{t.canvas.resizeByClientSize();const e=t.sceneManager.activeScene.createRootEntity(),a=e.createChild("Camera");a.transform.setPosition(0,0,50);const c=a.addComponent(y);c.isOrthographic=!0,c.orthographicSize=t.canvas.height*.5/100;const i=22,m=90,p=.38,h=.2,d=i*.5,f=m*.5;let l=0;for(let o=0;o<m;++o)for(let r=0;r<i;++r){const n=e.createChild(`text-${o}`),s=n.addComponent(u);n.addComponent(g),s&&(s.priority=l++),s.text="hello",n.transform.setPosition((r-d)*p+.2,(o-f)*h,0)}t.run()});
