import"./modulepreload-polyfill.c7c6310f.js";import{W as M,C as _,D as R,A as e,$ as S,P as Q,a as j,M as P}from"./module.c2be8446.js";import{O as v}from"./index.c925d5da.js";import{G as E}from"./dat.gui.module.fa9eec39.js";import{S as U}from"./Stats.793b1bb8.js";M.create({canvas:"canvas"}).then(A=>{A.canvas.resizeByClientSize();const r=A.sceneManager.activeScene,n=r.createRootEntity("Camera");n.transform.setPosition(0,0,10),n.addComponent(_),n.addComponent(U),n.addComponent(v);const s=r.createRootEntity("Light");s.transform.setPosition(0,3,0),s.transform.setRotation(-45,-45,0),s.addComponent(R),A.resourceManager.load([{url:"https://mdn.alipayobjects.com/oasis_be/afts/file/A*TpmGQqVQ-OYAAAAAAAAAAAAADkp5AQ/pop_cat.glb",type:e.GLTF},{url:"https://mdn.alipayobjects.com/afts/img/A*ID6_Sp9aTN8AAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor.png",type:e.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*CWKPR5ghtnEAAAAAAAAAAAAADrd2AQ/original_DisplacementMap.png",type:e.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*5xp6QqUnEjkAAAAAAAAAAAAADrd2AQ/original_AmbientOcclusionMap.png",type:e.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*LCXiSYOU7egAAAAAAAAAAAAADrd2AQ/original_NormalMap.png",type:e.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*qGcYRLhBdiUAAAAAAAAAAAAADrd2AQ/original_SpecularMap.png",type:e.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*SizdTpDjx4UAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_emissive.png",type:e.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*xuseSpOuYNsAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_specular.png",type:e.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*RbyoSpVuHlMAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_normal.png",type:e.Texture2D}]).then(a=>{const g=a[0],i=a[1],d=a[2],T=a[3],x=a[4],y=a[5],C=a[6],h=a[7],b=a[8],l=new S(A);l.baseTexture=i;const t=new Q(A);t.baseTexture=i,t.ior=1.5,t.metallic=1,t.roughness=.7,t.roughnessMetallicTexture=y,t.anisotropy=.2,t.anisotropyRotation=50,t.anisotropyTexture=d,t.normalTexture=x,t.normalTextureIntensity=.5,t.emissiveTexture=C,t.occlusionTexture=T,t.occlusionTextureIntensity=1.6,t.clearCoat=.5,t.clearCoatTexture=i,t.clearCoatRoughness=.5,t.clearCoatRoughnessTexture=h,t.clearCoatNormalTexture=b;function p(c){u.forEach(D=>{D.setMaterial(c)})}const m=["Unlit","PBR"],f={PopCat:m[0]};new E().add(f,"PopCat",m).onChange(c=>{p(c==="Unlit"?l:t)});const o=g.instantiateSceneRoot();o.transform.setPosition(-1.5,-1.5,0),o.transform.setScale(.3,.3,.3),r.addRootEntity(o),o.getComponent(j).play("Animation");const u=[];o.getComponentsIncludeChildren(P,u),p(l)}),A.run()});
