import"./modulepreload-polyfill.c7c6310f.js";import{W as _,C as b,D as h,A as a,P as C,M as D}from"./module.c2be8446.js";import{O as M}from"./index.c925d5da.js";_.create({canvas:"canvas"}).then(A=>{A.canvas.resizeByClientSize();const r=A.sceneManager.activeScene,n=r.createRootEntity("Camera");n.transform.setPosition(0,0,10),n.addComponent(b),n.addComponent(M);const i=r.createRootEntity("Light");i.transform.setPosition(0,3,0),i.transform.setRotation(-45,-45,0),i.addComponent(h),A.resourceManager.load([{url:"https://mdn.alipayobjects.com/oasis_be/afts/file/A*5yMJTIxb1l4AAAAAAAAAAAAADkp5AQ/popcat_base.glb",type:a.GLTF},{url:"https://mdn.alipayobjects.com/afts/img/A*HSY5QbxEMcQAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor.png",type:a.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*GDsZTKyeOIsAAAAAAAAAAAAADrd2AQ/original_original_DisplacementMap.png",type:a.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*-Kx-Qa49q_gAAAAAAAAAAAAADrd2AQ/original_original_AmbientOcclusionMap.png",type:a.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*nqaYT41yCQMAAAAAAAAAAAAADrd2AQ/original_original_NormalMap.png",type:a.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*DnByQ4n5nu4AAAAAAAAAAAAADrd2AQ/original_original_SpecularMap.png",type:a.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*0MmDTJ1br3cAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_emissive.png",type:a.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*W8_RSI4aq_kAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_specular.png",type:a.Texture2D},{url:"https://mdn.alipayobjects.com/afts/img/A*dGshSKjHoKgAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_normal.png",type:a.Texture2D}]).then(e=>{const c=e[0],s=e[1],p=e[2],m=e[3],g=e[4],u=e[5],y=e[6],T=e[7],d=e[8],t=new C(A);t.baseTexture=s,t.ior=1.5,t.metallic=1,t.roughness=.7,t.roughnessMetallicTexture=u,t.anisotropy=.2,t.anisotropyRotation=50,t.anisotropyTexture=p,t.normalTexture=g,t.normalTextureIntensity=.5,t.emissiveTexture=y,t.occlusionTexture=m,t.occlusionTextureIntensity=1.6,t.clearCoat=.5,t.clearCoatTexture=s,t.clearCoatRoughness=.5,t.clearCoatRoughnessTexture=T,t.clearCoatNormalTexture=d;const o=c.instantiateSceneRoot();o.transform.setPosition(-1.5,-1.5,0),o.transform.setScale(.3,.3,.3),r.addRootEntity(o);const l=[];o.getComponentsIncludeChildren(D,l),l.forEach(x=>{x.setMaterial(t)})}),A.run()});
