import React from "react";
import * as THREE from "three";
import EarthDayMap from "./textures/8k_earth_daymap.jpeg";
import EarthCloudMap from "./textures/8k_earth_clouds.jpeg";
import EarthNightMap from "./textures/8k_earth_nightmap.jpeg";
import EarthNormalMap from "./textures/8k_earth_normal_map.jpeg";
import EarthSpecularMap from "./textures/8k_earth_specular_map.jpeg";
import { useLoader } from "@react-three/fiber";

const Earth = ({earthRef, cloudRef, handleClick}) => {
  const [colorMap, normalMap, specularMap, cloudMap] = useLoader(THREE.TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudMap,
  ]);
  // useLoader
  return (
    <group ref={earthRef}>
      <mesh onClick={handleClick}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} roughness={0.7} metalness={0.4}/>
      </mesh>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.002, 128, 128]} />
        <meshPhongMaterial map={cloudMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
        {/* <meshPhoneMaterial map={colorMap} normalMap={normalMap} /> */}
      </mesh>
    </group>
  );
};

export default Earth;
