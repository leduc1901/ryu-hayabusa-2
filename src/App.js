import logo from "./logo.svg";
import "./App.css";
import React, {useEffect} from "react";
import { throttle } from "lodash";
import * as THREE from "three";
import { GLTFLoader } from "./libs/GLTFLoader.js";
import { DRACOLoader } from './libs/DRACOLoader.js';

function App() {

  let container, stats;
  let camera, scene, renderer;
  let mesh, mixer;

  const radius = 600;
  let theta = 0;
  let prevTime = Date.now();

  function animate() {
    requestAnimationFrame(animate);

    render();
  }

  function render() {
    theta += 0.1;

    camera.position.x = radius - 1200
    camera.position.z = radius - 400
    // camera.position.y = 00
    camera.lookAt(0, 60, 20);

    if (mixer) {
      const time = Date.now();

      mixer.update((time - prevTime) * 0.001);

      prevTime = time;
    }

    renderer.render(scene, camera);
  }

  useEffect(() => {
    container = document.getElementById("car")
    camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.y = 300;

    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xf0f0f0);
    const light1 = new THREE.DirectionalLight(0xefefff, 1.5);
    light1.position.set(1, 1, 1).normalize();
    light1.castShadow = true;
    light1.receiveShadow = true
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffefef, 3);
    light2.position.set(-1, -1, -1).normalize();
    light2.castShadow = true;
    light2.receiveShadow = true
    scene.add(light2);
    // const dracoLoader = new DRACOLoader();
    const loader = new GLTFLoader();

    // dracoLoader.setDecoderPath( 'draco/gltf/' );
    // loader.setDRACOLoader( dracoLoader );
    loader.load("Horse.glb", function (gltf) {
      mesh = gltf.scene.children[0];
      mesh.scale.set(0.8, 0.8, 0.8);
      mesh.castShadow = true;
      scene.add(mesh);

      mixer = new THREE.AnimationMixer(mesh);

      mixer.clipAction(gltf.animations[0]).setDuration(1).play();
    });
    
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild( renderer.domElement );
    animate();
  }, []);

  const test =  throttle( function(event) {

    checkScrollDirection(event)
 
 }, 1500, {trailing:false});
 

  let timer = Date.now();

  function checkScrollDirection(event) {
    var transform = document.getElementById("scroll").style.transform;
    console.log(document.getElementById("scroll").style.transform);
    if (checkScrollDirectionIsUp(event)) {
      if (transform === "translateY(-100vh)") {
        document.getElementById("car").classList.remove("carTransform");
        document.getElementById("camp").classList.remove("campTransform");
        document.getElementById("float-text").classList.add("float-text0");
        document
          .getElementById("menu-bar")
          .classList.remove("opacity-for-this");
        document.getElementById("float-text").classList.remove("float-text1");
        document.getElementById("scroll").style.transform = "translateY(-0vh)";
        document
          .getElementById("scrollbar")
          .classList.remove("opacity-for-this-1");
      } else if (transform === "translateY(-200vh)") {
        document.getElementById("scroll-item").classList.remove("scroll-2");
        document.getElementById("camp").classList.remove("campTransform2");
        document.getElementById("car").classList.remove("carTransform2");
        document.getElementById("float-text").classList.remove("float-text2");
        document.getElementById("drawing-wrapper").classList.remove("image-draw");
        document.getElementById("scroll").style.transform =
          "translateY(-100vh)";
      }
    } else {
      if (transform === "translateY(0vh)") {
        document.getElementById("car").classList.add("carTransform");
        document.getElementById("float-text").classList.remove("float-text0");
        document.getElementById("float-text").classList.add("float-text1");
        document.getElementById("menu-bar").classList.add("opacity-for-this");
        document.getElementById("camp").classList.add("campTransform");
        document
          .getElementById("scrollbar")
          .classList.add("opacity-for-this-1");
        document.getElementById("scroll").style.transform =
          "translateY(-100vh)";
      } else if (transform === "translateY(-100vh)") {
        document.getElementById("scroll-item").classList.add("scroll-2");
        document.getElementById("car").classList.add("carTransform2");
        document.getElementById("float-text").classList.add("float-text2");
        document.getElementById("camp").classList.add("campTransform2");
        document.getElementById("drawing-wrapper").classList.add("image-draw");
        document.getElementById("scroll").style.transform =
          "translateY(-200vh)";
      }
    }
  }

  function checkScrollDirectionIsUp(event) {
    if (event.wheel > 0) {
      return event.wheel > 0;
    }
    return event.deltaY < 0;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(20deg,rgba(222,184,33,.7),#76adb0 98%)",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(20deg,#e7ab17 3%,#d3b72c 40%,#81af76 77%)",
          position: "relative",
          overflow: "hidden",
          width: "1311px",
          display: "flex",
          height: "818px",
        }}
        onWheel={test}
      >
        <div className="menu-bar">
          <div
            className="menu-item menu-item-1"
            style={{ animationDelay: "0ms" }}
          >
            STORIES
          </div>
          <div
            className="menu-item menu-item-2"
            style={{ animationDelay: "200ms", marginTop: "43px" }}
          >
            SERVICE
          </div>
          <div
            className="menu-item menu-item-3"
            style={{ animationDelay: "400ms", marginTop: "50px" }}
          >
            SUPPORT
          </div>
        </div>
        <div className="toolbar">
          <div className="toolbar-line"></div>
          <div className="toolbar-line"></div>
        </div>
        <div className="scroll" id="scrollbar">
          <div className="scroll-item" id="scroll-item"></div>
        </div>
        <div id="float-text" className="float-text float-text0">
          <p>
            As the son of renowned ninja Joe Hayabusa,[note 1] Ryu Hayabusa
            (whose first and last names, respectively, translate literally to
            dragon and peregrine falcon) is the wielder of the legendary Dragon
            Sword.[5] Although he appears as a normal human, he is actually a
            demon-human hybrid whose ancestors drew their blood from the same
            evil deities such as the Holy Vigoor Emperor, the first games main
            antagonist. In the Dead or Alive series, Ryu has befriended fellow
            ninja Hayate, and joins forces with him along with Kasumi and Ayane,
            with whom he works to take down the corrupt tournament organizer
            Victor Donovan.
          </p>
        </div>
        <div className="car-image" id="car">
          {/* <img
            alt=""
            src="https://i.ibb.co/L6n8NyF/23a106bcde9f07bac8d868e8e4eba5c6.png"
          /> */}
        </div>
        <div className="camp-image" id="camp">
          <img alt="" src="https://i.ibb.co/tckLGz1/house-PNG50.png" />
        </div>
        <div className="drawing-wrapper" id="drawing-wrapper">
              <div className="drawing2 drawing-draw">
                <img
                  alt=""
                  style={{ objectFit: "cover" }}
                  src="https://cdn.carbuzz.com/gallery-images/2021-mercedes-amg-g63-dashboard-carbuzz-410020.jpg"
                />
              </div>
              <div className="drawing3 drawing-draw">
                <img
                  alt=""
                  style={{ objectFit: "cover" }}
                  src="https://cdn.carbuzz.com/gallery-images/2021-mercedes-amg-g63-dashboard-carbuzz-410020.jpg"
                />
              </div>
            </div>
        <div
          id="scroll"
          style={{
            transform: `translateY(-0vh)`,
            transition: "1.5s",
          }}

        >
          <div
            className="section-one"
            id="menu-bar"
            style={{ height: "818px" }}
          >
            <div className="title-section">
              <div className="title1">
                <p>Electric</p>
              </div>
              <div className="title2">
                <p>Adventure</p>
              </div>
            </div>
            <div className="action">
              <div className="explore">
                <p className="explore-text">
                  KEEP THE WORLD ADVENTUROUS FOREVER
                </p>
                <div className=" button">EXPLORE</div>
              </div>
              <div className="action-btn">
                <div className=" btn">
                  <i className="fa fa-home" style={{ fontSize: "20px" }}></i>
                </div>
                <div className=" btn">
                  <i
                    className="fa fa-power-off"
                    style={{ fontSize: "20px" }}
                  ></i>
                </div>
                <div className=" btn">
                  <i
                    className="fa fa-codiepie"
                    style={{ fontSize: "20px" }}
                  ></i>
                </div>
              </div>
              <div className="drawing">
                <img
                  alt=""
                  style={{ objectFit: "cover" }}
                  src="https://cdn.carbuzz.com/gallery-images/2021-mercedes-amg-g63-dashboard-carbuzz-410020.jpg"
                />
              </div>
            </div>
          </div>
          <div class="section-two">
            <div class="title-section title-section-2">
              <div class="title1">
                <p>Explore the</p>
              </div>
              <div class="title2">
                <p>places you love</p>
              </div>
            </div>
          </div>
          <div class="section-three">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
