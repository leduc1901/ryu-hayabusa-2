/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ferrari.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.68, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh
          geometry={nodes.trim.geometry}
          material={nodes.trim.material}
          position={[-0.38, 0, -0.02]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.lights_red.geometry}
          material={nodes.lights_red.material}
          position={[0.91, 0, -0.01]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.plastic_gray.geometry}
          material={materials.plastic_gray}
          position={[0.11, 0, -0.03]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.metal.geometry}
          material={nodes.metal.material}
          position={[0.22, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.lights.geometry}
          material={materials.Projector_Glass}
          position={[-1.85, 0, -0.07]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.leds.geometry}
          material={materials.Turn_Signal_LED}
          position={[-1.27, 0, 0.02]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.leather.geometry}
          material={nodes.leather.material}
          position={[-0.35, 0, -0.03]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.interior_light.geometry}
          material={nodes.interior_light.material}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.grills.geometry}
          material={nodes.grills.material}
          position={[0.05, -0.01, -0.03]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.glass.geometry}
          material={materials.Glass_Gray}
          position={[0, 0, 0.19]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.chrome.geometry}
          material={materials.metal_chrome}
          position={[0.03, 0, 0.01]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.carpet.geometry}
          material={materials.Carpet}
          position={[-0.28, 0, -0.23]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.carbon_fibre_trim.geometry}
          material={nodes.carbon_fibre_trim.material}
          position={[-0.18, 0, -0.04]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.carbon_fibre.geometry}
          material={nodes.carbon_fibre.material}
          position={[-0.44, -0.35, 0.12]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.brakes.geometry}
          material={nodes.brakes.material}
          position={[1.99, 0, 0.2]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.interior_dark.geometry}
          material={materials.Interior_light}
          position={[0, 0, 0.01]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.body.geometry}
          material={materials.Body_Color}
          position={[-0.01, 0, 0.02]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.blue.geometry}
          material={materials._0098_DodgerBlue}
          position={[-0.35, -0.44, 0.07]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.wipers.geometry}
          material={nodes.wipers.material}
          position={[-1.09, 0.01, 0.11]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.yellow_trim.geometry}
          material={nodes.yellow_trim.material}
          position={[-1.4, 0, 0.05]}
          rotation={[0, 0, 0]}
        />
      </group>
      <group position={[0.82, 0.36, 1.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.wheel.geometry} material={nodes.wheel.material} position={[0, 0, 0]} />
        <mesh geometry={nodes.tire.geometry} material={nodes.tire.material} position={[-0.01, 0, 0]} />
        <mesh geometry={nodes.rim_rr.geometry} material={nodes.rim_rr.material} position={[0.13, 0, 0]} />
        <mesh geometry={nodes.centre.geometry} material={nodes.centre.material} position={[0.11, 0, 0]} />
        <mesh
          geometry={nodes.brake.geometry}
          material={nodes.brake.material}
          position={[0.01, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <mesh geometry={nodes.nuts.geometry} material={nodes.nuts.material} position={[0.1, 0, 0.01]} />
      </group>
      <group position={[-0.82, 0.36, 1.49]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.tire_1.geometry} material={nodes.tire_1.material} position={[0.01, 0, 0]} />
        <mesh geometry={nodes.brake_1.geometry} material={nodes.brake_1.material} position={[-0.02, 0, 0]} />
        <mesh geometry={nodes.centre_1.geometry} material={nodes.centre_1.material} position={[-0.11, 0, 0]} />
        <mesh geometry={nodes.wheel_1.geometry} material={nodes.wheel_1.material} position={[0, 0, 0]} />
        <mesh geometry={nodes.rim_rl.geometry} material={nodes.rim_rl.material} position={[-0.13, 0, 0]} />
        <mesh geometry={nodes.nuts_1.geometry} material={nodes.nuts_1.material} position={[-0.1, 0, 0.01]} />
      </group>
      <group position={[-0.84, 0.36, -1.16]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.rim_fl.geometry} material={nodes.rim_fl.material} position={[-0.11, 0, 0]} />
        <mesh
          geometry={nodes.brake_2.geometry}
          material={nodes.brake_2.material}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <mesh geometry={nodes.centre_2.geometry} material={nodes.centre_2.material} position={[-0.1, 0, 0]} />
        <mesh geometry={nodes.nuts_2.geometry} material={nodes.nuts_2.material} position={[-0.09, 0, 0.01]} />
        <mesh geometry={nodes.wheel_2.geometry} material={nodes.wheel_2.material} position={[0, 0, 0]} />
        <mesh geometry={nodes.tire_2.geometry} material={nodes.tire_2.material} position={[0.01, 0, 0]} />
      </group>
      <group position={[0.83, 0.36, -1.15]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.brake_3.geometry}
          material={nodes.brake_3.material}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <mesh geometry={nodes.centre_3.geometry} material={nodes.centre_3.material} position={[0.1, 0, 0]} />
        <mesh geometry={nodes.wheel_3.geometry} material={nodes.wheel_3.material} position={[0, 0, 0]} />
        <mesh geometry={nodes.rim_fr.geometry} material={nodes.rim_fr.material} position={[0.11, 0, 0]} />
        <mesh geometry={nodes.tire_3.geometry} material={nodes.tire_3.material} position={[-0.01, 0, 0]} />
        <mesh geometry={nodes.nuts_3.geometry} material={nodes.nuts_3.material} position={[0.09, 0, 0.01]} />
      </group>
      <group position={[-0.35, 0.8, -0.35]} rotation={[-1.92, 0, 0]}>
        <mesh
          geometry={nodes.steering_carbon.geometry}
          material={nodes.steering_carbon.material}
          position={[0, 0.02, 0.01]}
          rotation={[Math.PI / 9, 0, 0]}
        />
        <mesh
          geometry={nodes.steering_centre.geometry}
          material={nodes.steering_centre.material}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.steering_column.geometry}
          material={nodes.steering_column.material}
          position={[0, 0.07, -0.01]}
          rotation={[Math.PI / 9, 0, 0]}
        />
        <mesh
          geometry={nodes.steering_leather.geometry}
          material={nodes.steering_leather.material}
          position={[0, 0.02, 0.01]}
          rotation={[Math.PI / 9, 0, 0]}
        />
        <mesh
          geometry={nodes.steering_metal.geometry}
          material={nodes.steering_metal.material}
          position={[0.09, 0.02, -0.07]}
          rotation={[Math.PI / 9, 0, 0]}
        />
        <mesh
          geometry={nodes.steering_red_lights.geometry}
          material={nodes.steering_red_lights.material}
          position={[0.01, 0.02, -0.07]}
          rotation={[Math.PI / 9, 0, 0]}
        />
        <mesh
          geometry={nodes.steering_trim.geometry}
          material={nodes.steering_trim.material}
          position={[0, 0.02, -0.08]}
          rotation={[Math.PI / 9, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/ferrari.glb')
