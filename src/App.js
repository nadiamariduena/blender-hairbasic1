import React, { Component } from "react";
import * as THREE from "three";
import Perlin from "phaser3-rex-plugins/plugins/perlin.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//
//
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

//phaser3-rex-notes/master/dist/rexperlinplugin.min.js', true);
const style = {
  height: 550, // we can control scene size by setting container dimensions
};
//

class App extends Component {
  //
  //
  componentDidMount() {
    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();

    //
    //

    //
    // 7  ******
    //
    window.addEventListener("resize", this.handleWindowResize);
  }
  /*

                9


 */
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }
  /*

                2


 */
  // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
  // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
  sceneSetup = () => {
    // get container dimensions and use them for scene sizing
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;
    //
    //
    //
    //
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    //
    //
    // 6  ******
    //
    this.camera.position.y = 2;
    this.camera.position.z = 20; // is used here to set some distance from a cube that is located at z = 0
    // OrbitControls allow a camera to orbit around the object
    // https://threejs.org/docs/#examples/controls/OrbitControls
    this.controls = new OrbitControls(this.camera, this.el);
    //
    //
    //
    this.renderer = new THREE.WebGLRenderer({
      // set the transparency of the scene, otherwise its black
      alpha: true,
      // will make the edges smooth
      antialias: true,
    });
    this.renderer.setSize(width, height);
    // here you append it to the jsx
    this.el.appendChild(this.renderer.domElement); // mount using React ref
  };
  /*

                3


 */

  addCustomSceneObjects = () => {
    // https://rexrainbow.github.io/phaser3-rex-notes/docs/site/perlin/
    this.noise = new Perlin();
    //
    //

    //
    //

    //
    //

    //
    //
    //
    //
    //
    // this.testo = new THREE.MeshPhongMaterial({
    //   color: 0xff0000,
    //   shininess: 0,
    //   roughness: 1,
    // });

    //
    //
    // const loaderImg = new THREE.TextureLoader();

    // // another way
    // this.meshFloor = new THREE.Mesh(
    //   new THREE.PlaneGeometry(18, 18, 50, 50), //, 360, 180)
    //   new THREE.MeshPhongMaterial({
    //     shininess: 0.8,
    //     roughness: 5,
    //     color: 0xfb225d,
    //     map: loaderImg.load("./img/brown_fur.jpg"),
    //   })
    // );
    // //
    // //
    // this.meshFloor.rotation.x -= Math.PI / 2;
    // this.meshFloor.position.y = 1;
    // this.meshFloor.receiveShadow = true;
    // this.scene.add(this.meshFloor);
    // //

    //
    //

    //
    //----------------------------------
    //         BLENDER  MODELS
    //----------------------------------
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("myDecoder/");
    loader.setDRACOLoader(dracoLoader);
    //
    // terrain_grosso_moon.-Normalize-4_.glb
    // 49,4Kb
    // loader.load("./models/lemon-tree_normalize-4.glb", (gltf) => {
    //   this.mesh = gltf.scene;

    //   gltf.scene.traverse((model) => {
    //     if (model.material) model.material.shininess = 0.08;

    //     model.receiveShadow = true;
    //     model.scale.set(1.2, 1.2, 1.2);
    //     // model.rotation.y = 1;
    //     // model.rotation.x += -0;
    //     // model.rotation.y += 0;
    //     //
    //     model.position.x = 0;
    //     model.position.y = 0;
    //     model.position.z = -2;
    //   });

    //   this.scene.add(gltf.scene);
    // });

    //velvi2t.glb
    //
    loader.load("./models/velvi2t.glb", (gltf) => {
      this.mesh = gltf.scene;

      gltf.scene.traverse((model) => {
        if (model.material) model.material.shininess = 0.08;

        model.receiveShadow = true;
        model.scale.set(20, 20, 20);

        //
        model.rotation.x -= Math.PI / 2;

        model.position.y = 0;
        model.position.z = -2;
      });

      this.scene.add(gltf.scene);
    });
    //
    //
    //
    // Ballllllllllllllllll
    // THREE.PlaneGeometry(5, 3); the 5 stands for width and 3 for height
    //const geometry = new THREE.PlaneGeometry(5, 2.5, 20, 15);
    //
    // this.geometry = new THREE.PlaneGeometry(50, 50, 100);
    //
    // it will increase the segments in the geometry
    // its related to this   const waveX1 = 0.1 * Math.sin(dots_vertices.x * 2 + t_timeClock);
    //
    //
    // this.materialBlob = new THREE.MeshPhongMaterial({
    //   shininess: 0.8,
    //   roughness: 0,
    //   color: 0x2273fb,
    //   wireframe: true,
    // });

    //
    // this.cube = new THREE.Mesh(this.geometry, this.materialBlob);
    // this.scene.add(this.cube);
    //
    //
    // new rotation
    // this.cube.rotation.set(-0.1, 0, 0);
    // x direction y direction and z
    //

    //
    //

    //---------------------
    //   Directional Light
    //---------------------
    //
    //
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.autoUpdate = true;
    this.renderer.gammaFactor = 2.2;

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(5, -1, 100);

    // position as follow , the light comes from x:-1000, comes from: y and the last comes from : z
    directionalLight.position.set(1000, 1000, 1000);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera = new THREE.OrthographicCamera(
      -100,
      200,
      -200,
      200,
      0.5,
      5000
    );
    // //
    this.scene.add(directionalLight);
    // // The light points to the flat ground
    // this.directionalLight.target = this.plane;
    //
    //
    //THIS LIGHT IS ON THE BOTTOM
    //---------------------
    //     spotLight FF5733
    //---------------------
    //
    //
    // With the light you can see the colors you added to each geometry in the materials
    this.spotLight = new THREE.SpotLight(0xffffff, 0.5); //intensity:   0.5);
    // spotLight.position.set( 0 , 10 , 0 );
    this.spotLight.position.set(5, -50, 0); //x, y , z   original (5, -50, 0);
    // (2, 32, 32); with this settings the light will be on the front
    this.spotLight.castShadow = true;
    //
    // this will remove the shadows
    this.spotLight.visible = true;
    //
    this.scene.add(this.spotLight);
    //
    //
    this.clock = new THREE.Clock();

    //
  };
  /*

                4


 */

  startAnimationLoop = () => {
    //
    //--------------------------------
    //      The waves GROUND
    // -------------------------------
    //
    /*
    
        const t_timeClock = this.clock.getElapsedTime();
    //
    // With the vertices we are going to grab all the points /vertices withing the cube/flag
    //
    //
    this.meshFloor.geometry.vertices.map((dots_vertices) => {
      const waveX1 = 0.1 * Math.sin(dots_vertices.x * 1 + t_timeClock);
      // second wave
      const waveX2 = 0.1 * Math.sin(dots_vertices.x * 1 + t_timeClock * 2);
      // 3 wave but in the Y direction
      const waveY1 = 0.01 * Math.sin(dots_vertices.y * 1 + t_timeClock * 0.5); //to slowdown the time t_timeClock * 0.5);
      //
      //
      dots_vertices.z = waveX1 + waveX2 + waveY1;
    });

    //
    // // its going to wave the flag smoothly
    this.meshFloor.geometry.verticesNeedUpdate = true;
    //
    //
    //
    //
    //
    // 01 is very slow, 03 faster, 05 extremely faster
    this.animationSpeed = performance.now() * 0.001;
    
    
    
    */

    //
    //--------------------------------
    //      The waves sphere
    // -------------------------------
    //
    /*
    
       var spikes = 5;
    for (
      var eachVertice = 0;
      eachVertice < this.cube.geometry.vertices.length;
      eachVertice++
    ) {
      var p = this.cube.geometry.vertices[eachVertice];
      p.normalize().multiplyScalar(
        20 +
          2 *
            this.noise.perlin3(
              p.x * spikes + this.animationSpeed,
              p.y * spikes,
              p.z * spikes
            )
      );
    }
    // noise related you can also use Math.sin instead of the noise but its different
    // https://rexrainbow.github.io/phaser3-rex-notes/docs/site/perlin/
    this.cube.geometry.computeVertexNormals();
    this.cube.geometry.normalsNeedUpdate = true;
    this.cube.geometry.verticesNeedUpdate = true;
    //
    //
    
    
    
    */

    this.renderer.render(this.scene, this.camera);

    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };
  /*

                8


 */
  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    // Note that after making changes to most of camera properties you have to call
    // .updateProjectionMatrix for the changes to take effect.
    this.camera.updateProjectionMatrix();
  };
  //
  //------------------
  //
  render() {
    return (
      <React.Fragment>
        <div className="wrapper-flagZoomBox">
          <div
            className="flagZoomBox"
            style={style}
            ref={(ref) => (this.el = ref)}
          />
        </div>
      </React.Fragment>
    );
  }
}

//
export default App;
