import React, { useRef,useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Box, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import Earth from "./Earth";
import * as THREE from "three";

import EarthDayMap from "./textures/8k_earth_daymap.jpeg";
import EarthCloudMap from "./textures/8k_earth_clouds.jpeg";
import EarthNightMap from "./textures/8k_earth_nightmap.jpeg";
import EarthNormalMap from "./textures/8k_earth_normal_map.jpeg";
import EarthSpecularMap from "./textures/8k_earth_specular_map.jpeg";

const Scene = () => {
  const earthRef = useRef();
  const cloudRef = useRef();
  const cameraRef = useRef();

const [cameraPos, setCameraPos] = useState([2,0, 2])
const vec = new THREE.Vector3();

useFrame((state, delta) => {
  earthRef.current.rotation.y += 0.0005;
  cloudRef.current.rotation.y += 0.0001;
  // console.log({...vec})
  console.log('cp',cameraPos)
  vec.set(cameraPos.x||cameraPos[0], cameraPos.y||cameraPos[1], cameraPos.z||cameraPos[2])
  console.log('vec',vec)
  // cameraRef.current.position.lerp(vec, 0.005);
  // cameraRef.current.updateProjectionMatrix();
  });

  // useLoader


  const handleEarthClick = e => {
    console.log("c", e.point);
    setCameraPos(e.point)

  };

  return (
    <>
      <axesHelper args={[20, 20, 20]} />
      <PerspectiveCamera ref={cameraRef} makeDefault args={[75, 1.2, 0.1, 1000]} position={cameraPos} />
      <Stars radius={300} depth={50} count={20000} factor={7} saturation={0} fade speed={1} />
      <pointLight color={"#f6f3ea"} position={[2, 0, 0]} intensity={5.2} />
      <Earth earthRef={earthRef} cloudRef={cloudRef} handleClick={handleEarthClick} />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <OrbitControls zoomSpeed={0.6} maxZoom={400} />
      <Scene />
    </Canvas>
  );
};

export default App;
