import logo from "./logo.svg";
import "./App.css";
import React, {useEffect,Suspense, useLayoutEffect, useRef} from "react";
import { throttle } from "lodash";
import * as THREE from "three";
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Stage, OrbitControls, useProgress, Html, Plane } from '@react-three/drei'
import Lambo from "./Lambo.js"
import House from "./LittlestTokyo"

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function App() {
  const  [carPosition, setCarPosition] = React.useState('1')
  const  [carStop, setCarStop] = React.useState(false)
  const lineRef = useRef()
  const planeRef = useRef()
  const [allowToWheel, setAllowToWheel] = React.useState(true)

  useLayoutEffect(() => {
    console.log(planeRef)
    // console.log(planeRef.current.getSize())
  }, [planeRef])

  



  function checkScrollDirection(event) {
    var transform = document.getElementById("scroll").style.transform;
    console.log(document.getElementById("scroll").style.transform);
    if (allowToWheel) {
        console.log("x")
        setAllowToWheel(false)
        setTimeout(() => {
          setAllowToWheel(true)
        }, 1500)
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
            // document.getElementById("road").classList.remove("hidden");
            document
              .getElementById("scrollbar")
              .classList.remove("opacity-for-this-1");
            setCarStop(false)
          } else if (transform === "translateY(-200vh)") {
            document.getElementById("scroll-item").classList.remove("scroll-2");
            document.getElementById("camp").classList.remove("campTransform2");
            document.getElementById("car").classList.remove("carTransform2");
            document.getElementById("float-text").classList.remove("float-text2");
            document.getElementById("drawing-wrapper").classList.remove("image-draw");
            document.getElementById("scroll").style.transform =
              "translateY(-100vh)";
            // if(radiusZ === 300){
              setCarPosition('1')
            // }
          }
        } else {
          if (transform === "translateY(0vh)") {
            document.getElementById("car").classList.add("carTransform");
            document.getElementById("float-text").classList.remove("float-text0");
            document.getElementById("float-text").classList.add("float-text1");
            document.getElementById("menu-bar").classList.add("opacity-for-this");
            document.getElementById("camp").classList.add("campTransform");
            // document.getElementById("road").classList.add("hidden");
    
            document
              .getElementById("scrollbar")
              .classList.add("opacity-for-this-1");
            document.getElementById("scroll").style.transform =
              "translateY(-100vh)";
              setCarStop(true)
          } else if (transform === "translateY(-100vh)") {
            document.getElementById("scroll-item").classList.add("scroll-2");
            document.getElementById("car").classList.add("carTransform2");
            document.getElementById("float-text").classList.add("float-text2");
            document.getElementById("camp").classList.add("campTransform2");
            document.getElementById("drawing-wrapper").classList.add("image-draw");
            document.getElementById("scroll").style.transform =
              "translateY(-200vh)";
              // if(radiusZ === 0){
              //   changeValue(300, "up")
              // }
              setCarPosition('3')
          }
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
        onWheel={checkScrollDirection}
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
        <Canvas style={{width: '960px', height: '960px'}}  dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <Suspense fallback={<Loader />}>
            <Environment path="/cube" />
              <Lambo carPosition={carPosition} carStop={carStop}/>
            </Suspense>
          
          
          <OrbitControls enableZoom={false} enabled={true} minDistance={200} enablePan={true} />
        </Canvas>
        {/* <div className="road" id="road">
                <div className="line"></div>
              </div> */}
        </div>
        <div className="camp-image" id="camp">
        <Canvas style={{width: '600px', height: '600px'}} attach="background" args={["red"]} dpr={[1, 2]} shadowMap camera={{ fov: 70}}>
          <Suspense fallback={null}>
              <House />
          </Suspense>
          <mesh rotation-x={-Math.PI / 2} scale={20}>
            <meshStandardMaterial  transparent depthWrite={false} />
          </mesh>
          <OrbitControls enableZoom={false} autoRotate minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
        </Canvas>
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
