import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import CanvasLoader from './CanvasLoader';
import GunFollowCursor from './GunFollowCursor';

const Scene = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [canAim, setCanAim] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!canAim) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    const handleScroll = () => {
      setCanAim(false);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => setCanAim(true), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [canAim]);

  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }} shadows>
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} castShadow />
        <OrbitControls enableZoom={false} />
        <GunFollowCursor mouse={mouse} canAim={canAim} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
