import"./modulepreload-polyfill.c7c6310f.js";import{W as R,C as E,D as v,A as f,$ as D,M as Q}from"./module.227bd3bc.js";import{G as T}from"./dat.gui.module.fa9eec39.js";R.create({canvas:"canvas"}).then(e=>{e.canvas.resizeByClientSize();const n=e.sceneManager.activeScene,s=n.createRootEntity("root"),c=n.createRootEntity("Camera");c.transform.setPosition(0,0,10);const g=c.addComponent(E);g.enableFrustumCulling=!1;const r=n.createRootEntity("Light");r.transform.setPosition(0,3,0),r.transform.setRotation(-45,-45,0),r.addComponent(v),e.resourceManager.load([{url:"https://mdn.alipayobjects.com/oasis_be/afts/file/A*WmviTKgN7_QAAAAAAAAAAAAADkp5AQ/popcat_combine.glb",type:f.GLTF},{url:"https://mdn.alipayobjects.com/afts/img/A*HSY5QbxEMcQAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor.png",type:f.Texture2D}]).then(l=>{const M=l[0],m=new D(e);m.baseTexture=l[1];const i=M.instantiateSceneRoot(),A=i.transform;A.setPosition(0,0,0),A.scale.scale(.01);const d=[];i.getComponentsIncludeChildren(Q,d),d.forEach(a=>{a.setMaterial(m)});const o=7.5;function y(a){let t=s.children.length;if(t<a)for(;t<a;++t){const h=i.clone();s.addChild(h);const u=Math.random()*o-o/2,C=Math.random()*o-o/2,p=h.transform;p.setPosition(u,0,-C),p.setRotation(-90,Math.random()*360,0)}else for(;t>a;t--)s.children[t-1].destroy()}const b={instantiated:0};new T().add(b,"instantiated",0,500).onChange(y)}),e.run()});
