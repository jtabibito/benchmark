import"./modulepreload-polyfill.c7c6310f.js";import{W as k,V as q,C as w,D as z,A as l,M as F,P as H}from"./module.976fcab8.js";import{G as V}from"./dat.gui.module.fa9eec39.js";function Y(s,A,i,m,g,T,o,h,c,x){const t=new H(s);return t.baseTexture=A,t.ior=1.5,t.metallic=1,t.roughness=.7,t.roughnessMetallicTexture=i,t.anisotropy=.2,t.anisotropyRotation=50,t.anisotropyTexture=m,t.normalTexture=g,t.normalTextureIntensity=.5,t.emissiveTexture=T,t.occlusionTexture=o,t.occlusionTextureIntensity=1.6,t.clearCoat=.5,t.clearCoatTexture=h,t.clearCoatRoughness=.5,t.clearCoatRoughnessTexture=c,t.clearCoatNormalTexture=x,t}k.create({canvas:"canvas"}).then(s=>{s.canvas.resizeByClientSize();const A=s.sceneManager.activeScene,i=A.createRootEntity("root"),m=A.createRootEntity("Camera");m.transform.setPosition(0,5,10),m.transform.lookAt(new q(0,0,0));const g=m.addComponent(w);g.enableFrustumCulling=!1;const T=A.createRootEntity("Light");T.transform.setPosition(0,3,0),T.transform.setRotation(-45,-45,0),T.addComponent(z),s.resourceManager.load([{url:"https://mdn.alipayobjects.com/oasis_be/afts/file/A*WmviTKgN7_QAAAAAAAAAAAAADkp5AQ/popcat_combine.glb",type:l.GLTF},{url:"https://mdn.alipayobjects.com/afts/img/A*HSY5QbxEMcQAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor.png",type:l.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*GDsZTKyeOIsAAAAAAAAAAAAADrd2AQ/original_original_DisplacementMap.png",type:l.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*-Kx-Qa49q_gAAAAAAAAAAAAADrd2AQ/original_original_AmbientOcclusionMap.png",type:l.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*nqaYT41yCQMAAAAAAAAAAAAADrd2AQ/original_original_NormalMap.png",type:l.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*DnByQ4n5nu4AAAAAAAAAAAAADrd2AQ/original_original_SpecularMap.png",type:l.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*0MmDTJ1br3cAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_emissive.png",type:l.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*W8_RSI4aq_kAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_specular.png",type:l.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*dGshSKjHoKgAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_normal.png",type:l.Texture2D}]).then(o=>{const h=o[0],c=o[1],x=o[2],t=o[3],f=o[4],y=o[5],b=o[6],_=o[7],M=o[8],D=h.instantiateSceneRoot(),R=D.transform;R.setPosition(0,0,0),R.scale.scale(.025);const p=[],r=[];function N(a){let u=i.children.length;if(u<a){const d=e.baseTexture?c:null,v=e.specularTexture?y:null,O=e.displacementTexture?x:null,j=e.normalTexture?f:null,P=e.emissiveTexture?b:null,S=e.aoTexture?t:null,G=e.clearCoatTexture?c:null,I=e.clearCoatTexture?_:null,K=e.clearCoatNormalTexture?M:null;for(;u<a;++u){const C=D.clone();i.addChild(C);const B=(Math.random()*7.5-7.5/2)*2.5,L=(Math.random()*7.5-7.5/2)*2.5,E=C.transform;E.setPosition(B,0,-L),E.setRotation(-90,Math.random()*360,0),C.getComponentsIncludeChildren(F,p);const Q=Y(s,d,v,O,j,P,S,G,I,K);p.forEach(W=>{W.setMaterial(Q)}),r.push(Q)}p.splice(0,p.length)}else{const d=u-a;for(;u>a;u--)i.children[u-1].destroy();r.splice(r.length-d,d)}}const e={instantiated:100,baseTexture:!0,specularTexture:!1,displacementTexture:!1,normalTexture:!1,emissiveTexture:!1,aoTexture:!1,clearCoatTexture:!1,clearCoatRoughnessTexture:!1,clearCoatNormalTexture:!1},n=new V;n.add(e,"instantiated",0,500,1).onChange(N),n.add(e,"baseTexture").onChange(()=>{r.forEach(a=>{a.baseTexture=e.baseTexture?c:null})}),n.add(e,"specularTexture").onChange(()=>{r.forEach(a=>{a.roughnessMetallicTexture=e.specularTexture?y:null})}),n.add(e,"displacementTexture").onChange(()=>{r.forEach(a=>{a.anisotropyTexture=e.displacementTexture?x:null})}),n.add(e,"normalTexture").onChange(()=>{r.forEach(a=>{a.normalTexture=e.normalTexture?f:null})}),n.add(e,"aoTexture").onChange(()=>{r.forEach(a=>{a.occlusionTexture=e.aoTexture?t:null})}),n.add(e,"emissiveTexture").onChange(()=>{r.forEach(a=>{a.emissiveTexture=e.emissiveTexture?b:null})}),n.add(e,"clearCoatTexture").onChange(()=>{r.forEach(a=>{a.clearCoatTexture=e.clearCoatTexture?c:null})}),n.add(e,"clearCoatRoughnessTexture").onChange(()=>{r.forEach(a=>{a.clearCoatRoughnessTexture=e.clearCoatRoughnessTexture?_:null})}),n.add(e,"clearCoatNormalTexture").onChange(()=>{r.forEach(a=>{a.clearCoatNormalTexture=e.clearCoatNormalTexture?M:null})}),N(e.instantiated)}),s.run()});
