import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { useGLTF, useAnimations, Environment } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap';

export default function CubeCascade(props) {
  const group = useRef();
  const camera = useThree(state => state.camera);
  const { viewport } = useThree();
  const { nodes, materials, animations } = useGLTF('/3DModels/cube_cascade/scene-transformed.glb');
  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() => {
    actions.Animation.play();
    const lateralScroll = document.querySelector('#lateralScroll');

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#canvas',
          start: 'top top',
          scrub: 2,
        }
      })
      .fromTo(group.current.position, {y: 8}, {y: 0})
      .fromTo(group.current.position, {x: 3}, {x:0}, "key1")
      .fromTo(group.current.rotation, {x: 0}, {x: Math.PI}, "key1")
    })

    const ctx2 = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: lateralScroll,
          start: 'top top',
          onUpdate(self){
            if(self.direction === 1){
              group.current.position.x = -3;
            }
            else{
              group.current.position.x = 0
            }
          }
        }
      })
    }, lateralScroll)

    return () => {
      ctx.revert();
      ctx2.revert();
    }

  }, [])

  return (
    <>
    <pointLight color = {'#1966AF'} intensity={5}/>
    <directionalLight color={'#38BCDC'} angle={1} position={[2, 3, 0]}/>
    <directionalLight color={'#38BCDC'} angle={1} position={[-2, 3, 0]} />
    <directionalLight color={'#38BCDC'} angle={1} position={[0, 0, 3]} />
    <group ref={group} {...props} dispose={null} scale={(viewport.width / 11)} position={[3, 0 , 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_0">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Cube001_1" scale={0.79}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.material_1} map = {props}/>
              </group>
              <group name="Cube002_2" scale={0.63}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Cube003_3" scale={0.49}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.material_3} map = {props}/>
              </group>
              <group name="Cube004_4" scale={0.37}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Cube005_5" scale={0.28}>
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.material_3} map = {props}/>
              </group>
              <group name="Cube006_6" scale={0.2}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Cube007_7" scale={0.14}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.material_3} map = {props}/>
              </group>
              <group name="Cube008_8" scale={0.09}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Cube009_9" scale={0.05}>
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.material_3} map = {props}/>
              </group>
              <group name="Cube010_10" scale={0.03}>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Circle_11" scale={1.85} />
            </group>
          </group>
        </group>
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/3DModels/cube_cascade/scene-transformed.glb')
