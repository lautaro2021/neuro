import React, {useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {Center, Clone, useGLTF, Float} from '@react-three/drei'

function HeroModel() {
    const light1 = useRef();
    const shape = useRef();
    const {scene, nodes} = useGLTF('/3DModels/paradox.glb');

    useFrame((state, delta) => {
        const angle = state.clock.elapsedTime;

        light1.current.position.x = Math.sin(angle) * 10;
        light1.current.position.z = Math.cos(angle) * 10;
        light1.current.position.y = Math.cos(angle) * 10;

        shape.current.rotation.y += delta;
        shape.current.position.x = Math.sin(angle);
    })

  return (
    <group>
        <directionalLight color={'#ff0000'} angle={1} position={[2, 3, 0]} ref={light1}/>
        <directionalLight color={'#00ff00'} angle={1} position={[-2, 3, 0]} />
        <directionalLight color={'#0000ff'} angle={1} position={[-2, -3, 0]} />
        <Float speed={2} floatIntensity={0.2} rotationIntensity={5}>
            <Clone
                object={scene}
                castShadow
                receiveShadow
                scale={1.8}
                ref={shape}
            />
        </Float>
    </group>
  )
}

export default HeroModel