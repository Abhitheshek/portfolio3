import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function AvatarScene() {
  const { scene, animations } = useGLTF('/avatar.glb');
  const [mixer] = useState(() => new THREE.AnimationMixer(scene));
  const [isClickAnimating, setIsClickAnimating] = useState(false);
  const modelRef = useRef();
  const runActionRef = useRef();
  const clickActionRef = useRef();
  const audioRef = useRef(new Audio('/characterbeat.mp3')); // Load your audio file

  // Set up animations on load
  useEffect(() => {
    if (animations.length >= 2) {
      // Running animation (default)
      const runAnimation = animations[2]; // Adjust index based on your animations
      runActionRef.current = mixer.clipAction(runAnimation);
      runActionRef.current.play();
      runActionRef.current.loop = THREE.LoopRepeat; // Make it loop continuously

      // Click animation
      const clickAnimation = animations[0]; // Adjust index based on your animations
      clickActionRef.current = mixer.clipAction(clickAnimation);
      clickActionRef.current.loop = THREE.LoopOnce; // Play only once
      clickActionRef.current.clampWhenFinished = true;
    }

    return () => {
      mixer.stopAllAction();
    };
  }, [animations, mixer]);

  // Handle animation updates
  useFrame((state, delta) => {
    mixer.update(delta);
  });

  // Handle click animation
  const handleClick = () => {
    if (isClickAnimating || !clickActionRef.current || !runActionRef.current) return;

    setIsClickAnimating(true);

    // Fade out running animation
    runActionRef.current.fadeOut(0.5);

    // Reset and play click animation
    clickActionRef.current.reset();
    clickActionRef.current.fadeIn(0.5);
    clickActionRef.current.play();

    // Play audio during click animation
    audioRef.current.currentTime = 0; // Reset audio to start
    audioRef.current.play();

    // Return to running animation after click animation finishes
    mixer.addEventListener('finished', () => {
      audioRef.current.pause(); // Stop audio
      clickActionRef.current.fadeOut(0.5);
      runActionRef.current.reset();
      runActionRef.current.fadeIn(0.5);
      runActionRef.current.play();
      setIsClickAnimating(false);
    });
  };

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (modelRef.current) {
        const scrollY = window.scrollY;
        modelRef.current.position.y = -scrollY * 0.003;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <group ref={modelRef} onClick={handleClick}>
      <primitive 
        object={scene} 
        position={[0, -3.1, 0]} // Adjust position as needed
        scale={[3.5, 3.5, 3.5]} // Adjust scale as needed
      />
    </group>
  );
}

export default function Avatar() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      try {
        await useGLTF.preload('/avatar.glb');
        setLoading(false);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-3xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="md:w-[60vw] w-[95vw] h-[90vh] flex items-center justify-center">
      <Canvas
        className="h-[80vh] w-[60vw] "
        camera={{ 
          position: [0, 0, 8],
          fov: 50 
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <AvatarScene />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/avatar.glb');
