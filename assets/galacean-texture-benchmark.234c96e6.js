import"./modulepreload-polyfill.c7c6310f.js";import{A as r,W as f,C as x,$ as T,T as _,M as C}from"./module.976fcab8.js";import{G as D}from"./dat.gui.module.fa9eec39.js";const u={None:void 0,128:{url:"https://mdn.alipayobjects.com/afts/img/A*0fb1RaBW3DUAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_128.png",type:r.Texture2D},256:{url:"https://mdn.alipayobjects.com/afts/img/A*HSY5QbxEMcQAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor.png",type:r.Texture2D},512:{url:"https://mdn.alipayobjects.com/afts/img/A*hUyIQIsnfSUAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_512.png",type:r.Texture2D},1024:{url:"https://mdn.alipayobjects.com/afts/img/A*cF_ZTIGvjjkAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_1024.png",type:r.Texture2D},2048:{url:"https://mdn.alipayobjects.com/afts/img/A*PX7WTqi3MLAAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_2048.png",type:r.Texture2D}};f.create({canvas:"canvas"}).then(a=>{a.canvas.resizeByClientSize();const p=a.sceneManager.activeScene,d=p.createRootEntity("Camera");d.transform.setPosition(0,0,10);const M=d.addComponent(x);M.enableFrustumCulling=!1,a.resourceManager.load({url:"https://mdn.alipayobjects.com/oasis_be/afts/file/A*WmviTKgN7_QAAAAAAAAAAAAADkp5AQ/popcat_combine.glb",type:r.GLTF}).then(h=>{const y=h,o=new T(a),n={texture:"None",enableMipMap:!0,anisoLevel:1},i=new D;i.add(n,"texture",Object.keys(u)).onChange(t=>{if(t==="None"){o.baseTexture=null;return}a.resourceManager.load(u[t]).then(e=>{const A=e;o.baseTexture=A,o.baseTexture.anisoLevel=1,n.enableMipMap=!0,n.anisoLevel=1,i.updateDisplay()})}),i.add(n,"enableMipMap").onChange(t=>{if(n.texture==="None")return;const e=new Image;e.src=URL.createObjectURL(new Blob([u[n.texture].url],{type:"image/png"})),e.onload=()=>{const{width:A,height:m}=e,s=new _(a,A,m,o.baseTexture.format,t);s.setImageSource(e),s.generateMipmaps(),o.baseTexture=s}}),i.add(n,"anisoLevel",[1,2,4,8,16]).onChange(t=>{const{baseTexture:e}=o;e&&(e.anisoLevel=t)});const c=y.instantiateSceneRoot(),{transform:b}=c;b.setPosition(0,0,0),b.scale.scale(.025),p.addRootEntity(c);const g=[];c.getComponentsIncludeChildren(C,g),g.forEach(t=>{t.setMaterial(o)});const l=15.5;for(let t=0;t<499;++t){const e=c.clone();p.addRootEntity(e);const A=Math.random()*l-l/2,m=Math.random()*l-l/2,s=e.transform;s.setPosition(A,0,-m),s.setRotation(-90,Math.random()*360,0)}}),a.run()});
