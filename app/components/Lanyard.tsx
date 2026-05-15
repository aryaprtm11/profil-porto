"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, useGLTF, useTexture } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  type RapierRigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

extend({ MeshLineGeometry, MeshLineMaterial });

type LanyardProps = {
  className?: string;
  anchorPosition?: [number, number, number];
  cardScale?: number;
  ropeLength?: number;
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
};

type CardGLTF = {
  nodes: {
    card: THREE.Mesh;
    clip: THREE.Mesh;
    clamp: THREE.Mesh;
  };
  materials: {
    base: THREE.MeshStandardMaterial & { map: THREE.Texture };
    metal: THREE.MeshStandardMaterial;
  };
};

type DragOffset = false | THREE.Vector3;
type LerpedBody = RapierRigidBody & { lerped?: THREE.Vector3 };

export default function Lanyard({
  className = "",
  anchorPosition = [0, 4, 0],
  cardScale = 2.25,
  ropeLength = 1,
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`lanyard-wrapper ${className}`}>
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.35 : 2]}
        gl={{ alpha: transparent, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
        }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            anchorPosition={anchorPosition}
            cardScale={cardScale}
            isMobile={isMobile}
            ropeLength={ropeLength}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({
  anchorPosition,
  cardScale,
  ropeLength,
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
}: {
  anchorPosition: [number, number, number];
  cardScale: number;
  ropeLength: number;
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
}) {
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<LerpedBody>(null!);
  const j2 = useRef<LerpedBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);

  const vec = useRef(new THREE.Vector3()).current;
  const ang = useRef(new THREE.Vector3()).current;
  const rot = useRef(new THREE.Vector3()).current;
  const dir = useRef(new THREE.Vector3()).current;

  const segmentProps = {
    type: "dynamic" as const,
    canSleep: true,
    colliders: false as const,
    angularDamping: 4,
    linearDamping: 4,
  };

  const { nodes, materials } = useGLTF("/lanyard/card.glb") as unknown as CardGLTF;
  const texture = useTexture("/lanyard/lanyard.png");
  const lanyardTexture = useMemo(() => {
    const nextTexture = texture.clone();

    nextTexture.wrapS = THREE.RepeatWrapping;
    nextTexture.wrapT = THREE.RepeatWrapping;
    nextTexture.needsUpdate = true;

    return nextTexture;
  }, [texture]);
  const curve = useMemo(() => {
    const nextCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
    ]);

    nextCurve.curveType = "chordal";

    return nextCurve;
  }, []);
  const [dragged, drag] = useState<DragOffset>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [
    [0, 0, 0],
    [0, 0, 0],
    ropeLength,
  ]);
  useRopeJoint(j1, j2, [
    [0, 0, 0],
    [0, 0, 0],
    ropeLength,
  ]);
  useRopeJoint(j2, j3, [
    [0, 0, 0],
    [0, 0, 0],
    ropeLength,
  ]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0],
  ]);

  useEffect(() => {
    if (!hovered) {
      return;
    }

    document.body.style.cursor = dragged ? "grabbing" : "grab";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (
      !fixed.current ||
      !j1.current ||
      !j2.current ||
      !j3.current ||
      !card.current ||
      !band.current
    ) {
      return;
    }

    [j1, j2].forEach((ref) => {
      if (!ref.current) {
        return;
      }

      if (!ref.current.lerped) {
        ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
      }

      const clampedDistance = Math.max(
        0.1,
        Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
      );

      ref.current.lerped.lerp(
        ref.current.translation(),
        delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
      );
    });

    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy(j2.current.lerped ?? j2.current.translation());
    curve.points[2].copy(j1.current.lerped ?? j1.current.translation());
    curve.points[3].copy(fixed.current.translation());
    (band.current.geometry as MeshLineGeometry).setPoints(
      curve.getPoints(isMobile ? 16 : 32)
    );

    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({
      x: ang.x,
      y: ang.y - rot.y * 0.25,
      z: ang.z,
    }, true);
  });

  const lineMaterialParameters = useMemo(
    () => ({
      color: "white",
      lineWidth: 1,
      map: lanyardTexture,
      repeat: new THREE.Vector2(-4, 1),
      resolution: new THREE.Vector2(1000, isMobile ? 2000 : 1000),
      useMap: 1,
    }),
    [isMobile, lanyardTexture]
  );

  return (
    <>
      <group position={anchorPosition}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[ropeLength * 0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[ropeLength, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[ropeLength * 1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[ropeLength * 2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={cardScale}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(event) => {
              const target = event.target as Element | null;

              target?.releasePointerCapture(event.pointerId);
              drag(false);
            }}
            onPointerDown={(event) => {
              if (!card.current) {
                return;
              }

              const target = event.target as Element | null;

              target?.setPointerCapture(event.pointerId);
              drag(
                new THREE.Vector3()
                  .copy(event.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          args={[lineMaterialParameters]}
          depthTest={false}
        />
      </mesh>
    </>
  );
}

useGLTF.preload("/lanyard/card.glb");
useTexture.preload("/lanyard/lanyard.png");
