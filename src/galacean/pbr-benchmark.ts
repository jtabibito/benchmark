/**
 * @title PBRMaterial
 * @category Benchmark
 */

import {
  AssetType,
  Camera,
  DirectLight,
  GLTFResource,
  MeshRenderer,
  PBRMaterial,
  Texture2D,
  WebGLEngine,
  Vector3
} from "@galacean/engine";
import * as dat from "dat.gui";

WebGLEngine.create({ canvas: "canvas" }).then(engine => {
  engine.canvas.resizeByClientSize();

  // Get default active scene.
  const scene = engine.sceneManager.activeScene;
  const root = scene.createRootEntity("root");

  // Add camera.
  const cameraEntity = scene.createRootEntity("Camera");
  cameraEntity.transform.setPosition(8 * 1.7, 6 * 1.7, 10 * 1.7);
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
  const camera = cameraEntity.addComponent(Camera);
  camera.enableFrustumCulling = false;

  const light = scene.createRootEntity("Light");
  light.transform.setPosition(0, 3, 0);
  light.transform.setRotation(-45, -45, 0);
  light.addComponent(DirectLight);

  engine.resourceManager
    .load([
      {
        url: "https://mdn.alipayobjects.com/oasis_be/afts/file/A*WmviTKgN7_QAAAAAAAAAAAAADkp5AQ/popcat_combine.glb",
        type: AssetType.GLTF
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*HSY5QbxEMcQAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*GDsZTKyeOIsAAAAAAAAAAAAADrd2AQ/original_original_DisplacementMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*-Kx-Qa49q_gAAAAAAAAAAAAADrd2AQ/original_original_AmbientOcclusionMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*nqaYT41yCQMAAAAAAAAAAAAADrd2AQ/original_original_NormalMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*DnByQ4n5nu4AAAAAAAAAAAAADrd2AQ/original_original_SpecularMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*0MmDTJ1br3cAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_emissive.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*W8_RSI4aq_kAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_specular.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*dGshSKjHoKgAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_normal.png",
        type: AssetType.Texture2D
      }
    ])
    .then((resources) => {
      const gltf = <GLTFResource>resources[0];
      const baseTexture = <Texture2D>resources[1];
      const displacementTexture = <Texture2D>resources[2];
      const aoTexture = <Texture2D>resources[3];
      const normalTexture = <Texture2D>resources[4];
      const specularTexture = <Texture2D>resources[5];
      const emissiveTexture = <Texture2D>resources[6];
      const clearCoatRoughnessTexture =  <Texture2D>resources[7];
      const clearCoatNormalTexture = <Texture2D>resources[8];

      const pbrMat = new PBRMaterial(engine);
      pbrMat.baseTexture = baseTexture;
      pbrMat.ior = 1.5;
      pbrMat.metallic = 1;
      pbrMat.roughness = 0.7;
      pbrMat.roughnessMetallicTexture = specularTexture;
      pbrMat.anisotropy = 0.2;
      pbrMat.anisotropyRotation = 50;
      pbrMat.anisotropyTexture = displacementTexture;
      pbrMat.normalTexture = normalTexture;
      pbrMat.normalTextureIntensity = 0.5;
      pbrMat.emissiveTexture = emissiveTexture;
      pbrMat.occlusionTexture = aoTexture;
      pbrMat.occlusionTextureIntensity = 1.6;
      pbrMat.clearCoat = 0.5;
      pbrMat.clearCoatTexture = baseTexture;
      pbrMat.clearCoatRoughness = 0.5;
      pbrMat.clearCoatRoughnessTexture = clearCoatRoughnessTexture;
      pbrMat.clearCoatNormalTexture = clearCoatNormalTexture;

      const popCat = gltf.instantiateSceneRoot();
      const transform = popCat.transform;
      transform.setPosition(0, 0, 0);
      transform.scale.scale(0.025);

      // Replace material to PBRMaterial.
      const meshRenderers = [];
      popCat.getComponentsIncludeChildren(MeshRenderer, meshRenderers);
      meshRenderers.forEach((mr) => {
        mr.setMaterial(pbrMat);
      });

      const border = 7.5;
      function instantiateModel(instantiateCount) {
        let childs = root.children.length;
        if (childs < instantiateCount) {
          for (; childs < instantiateCount; ++childs) {
            const entity = popCat.clone();
            root.addChild(entity);
            const x = Math.random() * border - border / 2;
            const z = Math.random() * border - border / 2;
            const transform = entity.transform;
            transform.setPosition(x, 0, -z);
            transform.setRotation(-90, Math.random() * 360, 0);
          }
        } else {
          for (; childs > instantiateCount; childs--) {
            root.children[childs-1].destroy();
          }
        }
      }

      const params = {
        instantiated: 0
      };
      const gui = new dat.GUI();
      gui.add(params, "instantiated", 0, 500).onChange(instantiateModel);
    });

  engine.run();
});
